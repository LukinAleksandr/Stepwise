import { type ExerciseItem, levels, verbs } from '../src/content'
import { isGap, normalizeAnswer, parseGaps, splitSentence, toArray } from '../src/shared/lib/answers'

const errors: string[] = []

const duplicates = (values: string[]) => values.filter((value, index) => values.indexOf(value) !== index)
const lower = (words: string[]) => words.map((word) => word.toLowerCase())

function validateItem(item: ExerciseItem, where: string) {
  switch (item.kind) {
    case 'gap': {
      const gaps = parseGaps(item.text).filter(isGap)
      if (!gaps.length) errors.push(`${where}: no gaps`)
      if (gaps.some(({ answers }) => answers.some((answer) => !answer))) errors.push(`${where}: empty gap answer`)
      return
    }
    case 'order': {
      const answers = toArray(item.answer)
      const answerWords = lower(splitSentence(answers[0]).words)
      const pool = [...answerWords, ...lower(item.distractors ?? [])]
      for (const answer of answers) {
        const remaining = [...pool]
        for (const word of lower(splitSentence(answer).words)) {
          const index = remaining.indexOf(word)
          if (index < 0) errors.push(`${where}: "${answer}" cannot be built, missing "${word}"`)
          else remaining.splice(index, 1)
        }
      }
      for (const distractor of lower(item.distractors ?? [])) {
        if (answerWords.includes(distractor)) errors.push(`${where}: distractor "${distractor}" is part of the answer`)
      }
      if (!item.translation.trim()) errors.push(`${where}: empty translation`)
      return
    }
    case 'choice': {
      if (item.answer < 0 || item.answer >= item.options.length) errors.push(`${where}: answer index out of range`)
      if (duplicates(item.options.map(normalizeAnswer)).length) errors.push(`${where}: duplicate options`)
    }
  }
}

for (const { id: levelId, topics } of levels) {
  for (const duplicate of duplicates(topics.map(({ id }) => id)))
    errors.push(`${levelId}: duplicate topic "${duplicate}"`)
  for (const { id: topicId, cards = [], exercises = [] } of topics) {
    const where = `${levelId}/${topicId}`
    for (const duplicate of duplicates(cards.map(({ id }) => id)))
      errors.push(`${where}: duplicate card "${duplicate}"`)
    for (const duplicate of duplicates(exercises.map(({ id }) => id)))
      errors.push(`${where}: duplicate set "${duplicate}"`)
    for (const { id: setId, items } of exercises) {
      for (const [index, item] of items.entries()) validateItem(item, `${where}/${setId}#${index + 1}`)
    }
  }
}

for (const duplicate of duplicates(verbs.map(({ base }) => base))) errors.push(`verbs: duplicate "${duplicate}"`)

if (errors.length) {
  console.error(`Content errors:\n${errors.join('\n')}`)
  process.exit(1)
}
console.log('Content OK')

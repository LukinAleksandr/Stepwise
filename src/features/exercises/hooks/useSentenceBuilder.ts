import { useState } from 'react'
import type { OrderItem } from '../../../content'
import { isCorrect, splitSentence, toArray } from '../../../shared/lib/answers'
import { shuffleChanged } from '../../../shared/lib/random'

export interface WordToken {
  id: number
  text: string
}

function createTokens(sentence: string, distractors: string[]) {
  const { words, ending } = splitSentence(sentence)
  const tokens = [...words, ...distractors].map((text, id) => ({ id, text }))
  return { tokens: shuffleChanged(tokens), ending }
}

export function useSentenceBuilder({ answer, distractors = [] }: OrderItem, onDone: (correct: boolean) => void) {
  const answers = toArray(answer)
  const [{ tokens, ending }] = useState(() => createTokens(answers[0], distractors))
  const [placed, setPlaced] = useState<WordToken[]>([])
  const [result, setResult] = useState<boolean | null>(null)

  const place = (token: WordToken) => setPlaced((current) => [...current, token])
  const remove = (token: WordToken) => setPlaced((current) => current.filter((item) => item !== token))
  const reset = () => setPlaced([])

  const check = () => {
    const sentence = placed.map(({ text }) => text).join(' ') + ending
    const correct = isCorrect(sentence, answers)
    setResult(correct)
    onDone(correct)
  }

  return {
    pool: tokens.filter((token) => !placed.includes(token)),
    placed,
    ending,
    result,
    isChecked: result !== null,
    correctAnswer: answers[0],
    place,
    remove,
    reset,
    check,
  }
}

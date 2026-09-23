import { useMemo, useState } from 'react'
import { type Verb, verbKey } from '../../../content'
import { isCorrect } from '../../../shared/lib/answers'
import { useSrsSession } from '../../../shared/srs'

export type VerbField = 'past' | 'participle'
type VerbAnswers = Record<VerbField, string>
type VerbCheck = Record<VerbField, boolean>

const EMPTY_ANSWERS: VerbAnswers = { past: '', participle: '' }

const forms = (value: string) => value.split('/')

const checkVerb = ({ past, participle }: Verb, answers: VerbAnswers): VerbCheck => ({
  past: isCorrect(answers.past, forms(past)),
  participle: isCorrect(answers.participle, forms(participle)),
})

export function useVerbTrainer(verbs: readonly Verb[], newLimit = 10) {
  const items = useMemo(() => verbs.map((verb) => ({ ...verb, key: verbKey(verb) })), [verbs])
  const { current, position, total, isEmpty, grade, next, restart } = useSrsSession(items, { newLimit })
  const [answers, setAnswers] = useState(EMPTY_ANSWERS)
  const [result, setResult] = useState<VerbCheck | null>(null)
  const [score, setScore] = useState(0)

  const clearAnswer = () => {
    setAnswers(EMPTY_ANSWERS)
    setResult(null)
  }

  const setAnswer = (field: VerbField, value: string) => setAnswers((current) => ({ ...current, [field]: value }))

  const submit = () => {
    if (!current) return
    if (result) {
      clearAnswer()
      next()
      return
    }
    const checked = checkVerb(current, answers)
    const correct = checked.past && checked.participle
    setResult(checked)
    grade(correct ? 'good' : 'again')
    if (correct) setScore((value) => value + 1)
  }

  const restartSession = () => {
    restart()
    clearAnswer()
    setScore(0)
  }

  return {
    verb: current,
    position,
    total,
    isEmpty,
    answers,
    result,
    score,
    isChecked: result !== null,
    isCorrect: Boolean(result?.past && result.participle),
    canSubmit: result !== null || Object.values(answers).every((value) => value.trim() !== ''),
    setAnswer,
    submit,
    restart: restartSession,
  }
}

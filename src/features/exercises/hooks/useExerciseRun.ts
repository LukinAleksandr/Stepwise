import { useState } from 'react'
import type { ExerciseSet } from '../../../content'
import { getExerciseAttempt, useExerciseActions } from '../store'

const countCorrect = (answers: boolean[]) => answers.filter(Boolean).length

export function useExerciseRun({ items }: ExerciseSet, resultKey: string) {
  const { saveResult, saveAttempt, clearAttempt } = useExerciseActions()
  const total = items.length

  const [round, setRound] = useState(0)
  const [answers, setAnswers] = useState(() => getExerciseAttempt(resultKey).slice(0, total))
  const [index, setIndex] = useState(() => answers.length)

  const answer = (correct: boolean) => {
    const next = [...answers, correct]
    setAnswers(next)
    if (next.length < total) {
      saveAttempt(resultKey, next)
      return
    }
    saveResult(resultKey, countCorrect(next), total)
    clearAttempt(resultKey)
  }

  const restart = () => {
    clearAttempt(resultKey)
    setRound((value) => value + 1)
    setIndex(0)
    setAnswers([])
  }

  return {
    item: items[index],
    itemKey: `${round}-${index}`,
    index,
    total,
    answeredCount: answers.length,
    correctCount: countCorrect(answers),
    isAnswered: answers.length > index,
    isFinished: index >= total,
    isLast: index + 1 >= total,
    answer,
    next: () => setIndex((value) => value + 1),
    restart,
  }
}

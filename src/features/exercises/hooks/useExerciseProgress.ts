import { useExerciseAttempts, useExerciseResults } from '../store'

export function useExerciseProgress() {
  const results = useExerciseResults()
  const attempts = useExerciseAttempts()

  return {
    resultOf: (key: string) => results[key],
    attemptOf: (key: string) => attempts[key],
    countCompleted: (keys: readonly string[]) => keys.filter((key) => results[key]).length,
  }
}

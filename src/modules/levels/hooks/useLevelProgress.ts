import { useMemo } from 'react'
import { type Level, levelExerciseKeys } from '../../../content'
import { useExerciseProgress } from '../../../features/exercises'

export function useLevelProgress(level: Level) {
  const { countCompleted } = useExerciseProgress()
  const keys = useMemo(() => levelExerciseKeys(level), [level])
  const total = keys.length
  const done = countCompleted(keys)
  return { done, total, percent: total ? (done / total) * 100 : 0 }
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { EXERCISES_STORAGE_KEY } from './storageKey'

export interface ExerciseResult {
  best: number
  last: number
  total: number
  updatedAt: number
}

interface ExerciseStore {
  results: Record<string, ExerciseResult>
  attempts: Record<string, boolean[]>
  actions: {
    saveResult: (key: string, correct: number, total: number) => void
    saveAttempt: (key: string, answers: boolean[]) => void
    clearAttempt: (key: string) => void
    reset: () => void
  }
}

export const useExerciseStore = create<ExerciseStore>()(
  persist(
    (set) => ({
      results: {},
      attempts: {},
      actions: {
        saveResult: (key, correct, total) =>
          set(({ results }) => ({
            results: {
              ...results,
              [key]: { best: Math.max(correct, results[key]?.best ?? 0), last: correct, total, updatedAt: Date.now() },
            },
          })),
        saveAttempt: (key, answers) => set(({ attempts }) => ({ attempts: { ...attempts, [key]: answers } })),
        clearAttempt: (key) => set(({ attempts: { [key]: _cleared, ...attempts } }) => ({ attempts })),
        reset: () => set({ results: {}, attempts: {} }),
      },
    }),
    { name: EXERCISES_STORAGE_KEY, partialize: ({ results, attempts }) => ({ results, attempts }) },
  ),
)

export const useExerciseResults = () => useExerciseStore(({ results }) => results)
export const useExerciseAttempts = () => useExerciseStore(({ attempts }) => attempts)
export const useExerciseActions = () => useExerciseStore(({ actions }) => actions)
export const getExerciseAttempt = (key: string) => useExerciseStore.getState().attempts[key] ?? []

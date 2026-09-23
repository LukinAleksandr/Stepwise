import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Grade, type SrsState, schedule } from '../shared/lib/srs'

export interface ExerciseResult {
  best: number
  last: number
  total: number
  updatedAt: number
}

interface ProgressState {
  /** Состояние интервального повторения: карточки и глаголы */
  srs: Record<string, SrsState>
  exercises: Record<string, ExerciseResult>
  /** Незаконченные наборы: ответы по порядку, чтобы продолжить с того же места */
  attempts: Record<string, boolean[]>
  review: (key: string, grade: Grade) => void
  saveExercise: (key: string, correct: number, total: number) => void
  saveAttempt: (key: string, results: boolean[]) => void
  clearAttempt: (key: string) => void
  resetAll: () => void
}

const STORAGE_KEY = 'stepwise/progress'
const LEGACY_STORAGE_KEY = 'english-trainer/progress'

// Перенос прогресса со старого названия приложения. Удалить, когда старых данных точно не останется.
try {
  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY)
  if (legacy && !localStorage.getItem(STORAGE_KEY)) localStorage.setItem(STORAGE_KEY, legacy)
  localStorage.removeItem(LEGACY_STORAGE_KEY)
} catch {
  // localStorage недоступен (приватный режим и т.п.) — zustand сам работает без него
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      srs: {},
      exercises: {},
      attempts: {},
      review: (key, grade) => set((s) => ({ srs: { ...s.srs, [key]: schedule(s.srs[key], grade) } })),
      saveExercise: (key, correct, total) =>
        set((s) => ({
          exercises: {
            ...s.exercises,
            [key]: {
              best: Math.max(correct, s.exercises[key]?.best ?? 0),
              last: correct,
              total,
              updatedAt: Date.now(),
            },
          },
        })),
      saveAttempt: (key, results) => set((s) => ({ attempts: { ...s.attempts, [key]: results } })),
      clearAttempt: (key) =>
        set((s) => {
          const { [key]: _removed, ...attempts } = s.attempts
          return { attempts }
        }),
      resetAll: () => set({ srs: {}, exercises: {}, attempts: {} }),
    }),
    // При изменении формы данных — поднять version и добавить migrate.
    { name: STORAGE_KEY, version: 1 },
  ),
)

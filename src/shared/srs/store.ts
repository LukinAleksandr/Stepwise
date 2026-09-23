import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Grade, type SrsState, schedule } from './srs'
import { SRS_STORAGE_KEY } from './storageKey'

interface SrsStore {
  states: Record<string, SrsState>
  actions: {
    review: (key: string, grade: Grade) => void
    reset: () => void
  }
}

export const useSrsStore = create<SrsStore>()(
  persist(
    (set) => ({
      states: {},
      actions: {
        review: (key, grade) => set(({ states }) => ({ states: { ...states, [key]: schedule(states[key], grade) } })),
        reset: () => set({ states: {} }),
      },
    }),
    { name: SRS_STORAGE_KEY, partialize: ({ states }) => ({ states }) },
  ),
)

export const useSrsStates = () => useSrsStore(({ states }) => states)
export const useSrsActions = () => useSrsStore(({ actions }) => actions)
export const getSrsStates = () => useSrsStore.getState().states

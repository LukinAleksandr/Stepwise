export type Grade = 'again' | 'good' | 'easy'

export interface SrsState {
  box: number
  due: number
  reviews: number
  lapses: number
}

export type CardStatus = 'new' | 'learning' | 'learned'

export const INTERVAL_DAYS = [0, 1, 3, 7, 14, 30] as const

const MAX_BOX = INTERVAL_DAYS.length - 1
const LEARNED_BOX = 3
const DAY_MS = 24 * 60 * 60 * 1000
const BOX_STEP: Record<Grade, number> = { again: 0, good: 1, easy: 2 }

export function schedule(previous: SrsState | undefined, grade: Grade, now = Date.now()): SrsState {
  const { box = 0, reviews = 0, lapses = 0 } = previous ?? {}
  const nextBox = grade === 'again' ? 0 : Math.min(MAX_BOX, box + BOX_STEP[grade])
  return {
    box: nextBox,
    due: now + INTERVAL_DAYS[nextBox] * DAY_MS,
    reviews: reviews + 1,
    lapses: lapses + (grade === 'again' ? 1 : 0),
  }
}

export function cardStatus(state: SrsState | undefined): CardStatus {
  if (!state) return 'new'
  return state.box >= LEARNED_BOX ? 'learned' : 'learning'
}

const isDue = (state: SrsState | undefined, now: number) => state !== undefined && state.due <= now

export function buildQueue<T extends { key: string }>(
  items: readonly T[],
  states: Record<string, SrsState>,
  { newLimit = 10, now = Date.now() }: { newLimit?: number; now?: number } = {},
): T[] {
  const due = items.filter(({ key }) => isDue(states[key], now)).sort((a, b) => states[a.key].due - states[b.key].due)
  const fresh = items.filter(({ key }) => !states[key]).slice(0, newLimit)
  return [...due, ...fresh]
}

export function countDue(keys: readonly string[], states: Record<string, SrsState>, now = Date.now()): number {
  return keys.filter((key) => isDue(states[key], now)).length
}

/**
 * Интервальное повторение по системе Лейтнера.
 * Карточка движется по «коробкам»: чем выше коробка, тем реже повтор.
 */

export type Grade = 'again' | 'good' | 'easy'

export interface SrsState {
  box: number
  /** Timestamp, когда карточку пора повторить */
  due: number
  reviews: number
  lapses: number
}

export const INTERVAL_DAYS = [0, 1, 3, 7, 14, 30] as const
export const MAX_BOX = INTERVAL_DAYS.length - 1
/** С этой коробки слово считается выученным */
export const LEARNED_BOX = 3
const DAY = 24 * 60 * 60 * 1000

export function schedule(prev: SrsState | undefined, grade: Grade, now = Date.now()): SrsState {
  const box = prev?.box ?? 0
  const nextBox = grade === 'again' ? 0 : Math.min(MAX_BOX, box + (grade === 'easy' ? 2 : 1))
  return {
    box: nextBox,
    due: now + INTERVAL_DAYS[nextBox] * DAY,
    reviews: (prev?.reviews ?? 0) + 1,
    lapses: (prev?.lapses ?? 0) + (grade === 'again' ? 1 : 0),
  }
}

export type CardStatus = 'new' | 'learning' | 'learned'

export function cardStatus(state: SrsState | undefined): CardStatus {
  if (!state) return 'new'
  return state.box >= LEARNED_BOX ? 'learned' : 'learning'
}

/** Очередь сессии: сначала просроченные (самые старые первыми), затем новые — не больше newLimit. */
export function buildQueue<T extends { key: string }>(
  items: readonly T[],
  states: Record<string, SrsState>,
  { newLimit = 10, now = Date.now() }: { newLimit?: number; now?: number } = {},
): T[] {
  const due = items
    .filter((i) => states[i.key] && states[i.key].due <= now)
    .sort((a, b) => states[a.key].due - states[b.key].due)
  const fresh = items.filter((i) => !states[i.key]).slice(0, newLimit)
  return [...due, ...fresh]
}

export function countDue(keys: readonly string[], states: Record<string, SrsState>, now = Date.now()): number {
  return keys.filter((k) => states[k] && states[k].due <= now).length
}

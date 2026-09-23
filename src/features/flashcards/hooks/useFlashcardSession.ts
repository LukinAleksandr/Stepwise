import { useState } from 'react'
import type { CardRef } from '../../../content'
import { type Grade, useSrsSession } from '../../../shared/srs'

export type Direction = 'en-ru' | 'ru-en'

const EMPTY_STATS: Record<Grade, number> = { again: 0, good: 0, easy: 0 }

export function useFlashcardSession(cards: readonly CardRef[], newLimit?: number) {
  const { current, position, total, isEmpty, grade, next, restart } = useSrsSession(cards, { newLimit })
  const [flipped, setFlipped] = useState(false)
  const [direction, setDirection] = useState<Direction>('en-ru')
  const [stats, setStats] = useState(EMPTY_STATS)

  const rate = (value: Grade) => {
    grade(value)
    setStats((current) => ({ ...current, [value]: current[value] + 1 }))
    setFlipped(false)
    next()
  }

  const changeDirection = (value: Direction) => {
    setDirection(value)
    setFlipped(false)
  }

  const restartSession = () => {
    restart()
    setFlipped(false)
    setStats(EMPTY_STATS)
  }

  return {
    card: current,
    position,
    total,
    isEmpty,
    flipped,
    direction,
    remembered: stats.good + stats.easy,
    forgotten: stats.again,
    flip: () => setFlipped((value) => !value),
    reveal: () => setFlipped(true),
    rate,
    changeDirection,
    restart: restartSession,
  }
}

import { useState } from 'react'
import { buildQueue, type Grade } from './srs'
import { getSrsStates, useSrsActions } from './store'

interface SessionOptions {
  newLimit?: number
}

export function useSrsSession<T extends { key: string }>(items: readonly T[], { newLimit = 10 }: SessionOptions = {}) {
  const { review } = useSrsActions()
  const createQueue = () => buildQueue(items, getSrsStates(), { newLimit })

  const [queue, setQueue] = useState(createQueue)
  const [position, setPosition] = useState(0)

  const current = queue[position] as T | undefined

  const grade = (value: Grade) => {
    if (!current) return
    review(current.key, value)
    if (value === 'again') setQueue((queued) => [...queued, current])
  }

  const next = () => setPosition((value) => value + 1)

  const restart = () => {
    setQueue(createQueue())
    setPosition(0)
  }

  return { current, position, total: queue.length, isEmpty: queue.length === 0, grade, next, restart }
}

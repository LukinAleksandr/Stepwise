import { useMemo } from 'react'
import { countDue } from './srs'
import { useSrsStates } from './store'

export function useDueCount(keys: readonly string[]): number {
  const states = useSrsStates()
  return useMemo(() => countDue(keys, states), [keys, states])
}

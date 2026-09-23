import { useMemo, useState } from 'react'
import { allCards, levelCards, levels } from '../../content'

const ALL = 'all'

export function useReviewScope() {
  const [scope, setScope] = useState(ALL)

  const options = useMemo(
    () => [
      { value: ALL, label: 'Все' },
      ...levels.filter(({ topics }) => topics.length).map(({ id, code }) => ({ value: id, label: code })),
    ],
    [],
  )

  const cards = useMemo(() => {
    const level = levels.find(({ id }) => id === scope)
    return level ? levelCards(level) : allCards()
  }, [scope])

  return { scope, setScope, options, cards }
}

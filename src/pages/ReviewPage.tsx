import { SegmentedControl, Stack } from '@mantine/core'
import { useMemo, useState } from 'react'
import { allCards, levelCards, levels } from '../content'
import { FlashcardSession } from '../features/flashcards/FlashcardSession'
import { PageHeader } from '../shared/ui'

/** Повторение карточек из всех тем — или одного уровня. */
export function ReviewPage() {
  const [scope, setScope] = useState('all')
  const cards = useMemo(() => {
    const level = levels.find((l) => l.id === scope)
    return level ? levelCards(level) : allCards()
  }, [scope])

  return (
    <>
      <PageHeader title="Повторение" subtitle="Карточки, которые пора повторить, и новые слова" />
      <Stack>
        <SegmentedControl
          value={scope}
          onChange={setScope}
          data={[
            { value: 'all', label: 'Все' },
            ...levels.filter((l) => l.topics.length).map((l) => ({ value: l.id, label: l.code })),
          ]}
          w="fit-content"
        />
        <FlashcardSession key={scope} cards={cards} />
      </Stack>
    </>
  )
}

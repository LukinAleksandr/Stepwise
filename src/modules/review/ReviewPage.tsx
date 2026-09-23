import { SegmentedControl, Stack } from '@mantine/core'
import { FlashcardSession } from '../../features/flashcards'
import { PageHeader } from '../../shared/ui'
import { useReviewScope } from './useReviewScope'

export function ReviewPage() {
  const { scope, setScope, options, cards } = useReviewScope()

  return (
    <>
      <PageHeader title="Повторение" subtitle="Карточки, которые пора повторить, и новые слова" />
      <Stack>
        <SegmentedControl value={scope} onChange={setScope} data={options} w="fit-content" />
        <FlashcardSession key={scope} cards={cards} />
      </Stack>
    </>
  )
}

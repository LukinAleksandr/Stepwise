import { Button, Group, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useMemo } from 'react'
import { topicCards } from '../../../content'
import { FlashcardSession, WordList } from '../../../features/flashcards'
import { useTopicContext } from '../hooks/useTopicContext'

export function TopicCardsTab() {
  const { level, topic } = useTopicContext()
  const [training, { open, close }] = useDisclosure()
  const cards = useMemo(() => topicCards(level, topic), [level, topic])

  if (training) {
    return (
      <Stack>
        <Group>
          <Button variant="subtle" onClick={close}>
            ← К списку слов
          </Button>
        </Group>
        <FlashcardSession cards={cards} newLimit={cards.length} />
      </Stack>
    )
  }

  return (
    <Stack>
      <Group justify="flex-end">
        <Button onClick={open}>Тренировать карточки</Button>
      </Group>
      <WordList cards={cards} />
    </Stack>
  )
}

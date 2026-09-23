import { Button, EmptyState, Group, Kbd, Progress, SegmentedControl, SimpleGrid, Stack, Text } from '@mantine/core'
import { IconCards, IconConfetti } from '@tabler/icons-react'
import type { CardRef } from '../../content'
import { SpeakButton } from '../../shared/ui'
import { CardExample, EnglishFace, TranslationFace } from './CardFace'
import { Flashcard } from './Flashcard'
import { GRADE_OPTIONS } from './grades'
import { useFlashcardHotkeys } from './hooks/useFlashcardHotkeys'
import { type Direction, useFlashcardSession } from './hooks/useFlashcardSession'

const DIRECTION_OPTIONS = [
  { value: 'en-ru', label: 'EN → RU' },
  { value: 'ru-en', label: 'RU → EN' },
]

interface FlashcardSessionProps {
  cards: readonly CardRef[]
  newLimit?: number
}

export function FlashcardSession({ cards, newLimit }: FlashcardSessionProps) {
  const {
    card,
    position,
    total,
    isEmpty,
    flipped,
    direction,
    remembered,
    forgotten,
    flip,
    reveal,
    rate,
    changeDirection,
    restart,
  } = useFlashcardSession(cards, newLimit)

  useFlashcardHotkeys({ enabled: card !== undefined, flipped, onFlip: flip, onRate: rate })

  if (isEmpty) {
    return (
      <EmptyState
        icon={<IconCards />}
        title="Сейчас нечего повторять"
        description="Все карточки повторены — возвращайтесь позже."
      />
    )
  }

  if (!card) {
    return (
      <EmptyState
        icon={<IconConfetti />}
        title="Сессия завершена"
        description={`Помню: ${remembered} · Не помню: ${forgotten}`}
      >
        <EmptyState.Actions>
          <Button onClick={restart}>Продолжить</Button>
        </EmptyState.Actions>
      </EmptyState>
    )
  }

  const isEnglishFirst = direction === 'en-ru'

  return (
    <Stack maw={560} w="100%" mx="auto">
      <Group justify="space-between">
        <SegmentedControl
          size="xs"
          value={direction}
          onChange={(value) => changeDirection(value as Direction)}
          data={DIRECTION_OPTIONS}
        />
        <Text size="sm" c="dimmed">
          {position + 1} / {total}
        </Text>
      </Group>
      <Progress value={(position / total) * 100} size="sm" />

      <Flashcard
        flipped={flipped}
        onFlip={flip}
        front={isEnglishFirst ? <EnglishFace card={card} /> : <TranslationFace card={card} />}
        back={
          <>
            {isEnglishFirst ? <TranslationFace card={card} /> : <EnglishFace card={card} />}
            <CardExample card={card} />
          </>
        }
      />

      <Group justify="center">
        <SpeakButton text={card.en} size="lg" />
      </Group>

      {flipped ? (
        <SimpleGrid cols={3} spacing="xs">
          {GRADE_OPTIONS.map(({ grade, label, color }) => (
            <Button key={grade} variant="light" color={color} onClick={() => rate(grade)}>
              {label}
            </Button>
          ))}
        </SimpleGrid>
      ) : (
        <Button onClick={reveal}>Показать ответ</Button>
      )}

      <Text size="xs" c="dimmed" ta="center" visibleFrom="sm">
        <Kbd>Пробел</Kbd> — перевернуть, <Kbd>1</Kbd> <Kbd>2</Kbd> <Kbd>3</Kbd> — оценка
      </Text>
    </Stack>
  )
}

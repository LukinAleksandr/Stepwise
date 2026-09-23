import {
  Button,
  EmptyState,
  Group,
  Kbd,
  Progress,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconCards, IconConfetti } from '@tabler/icons-react'
import { useCallback, useEffect, useState } from 'react'
import type { CardRef } from '../../content'
import { buildQueue, type Grade } from '../../shared/lib/srs'
import { SpeakButton } from '../../shared/ui'
import { useProgress } from '../../store/progress'
import { Flashcard } from './Flashcard'

type Direction = 'en-ru' | 'ru-en'

interface Props {
  cards: CardRef[]
  /** Сколько новых карточек добавить в сессию */
  newLimit?: number
}

const GRADES: { grade: Grade; label: string; color: string; key: string }[] = [
  { grade: 'again', label: 'Не помню', color: 'red', key: '1' },
  { grade: 'good', label: 'Помню', color: 'indigo', key: '2' },
  { grade: 'easy', label: 'Легко', color: 'teal', key: '3' },
]

/** Сессия повторения карточек по интервальной системе. Работает с любым набором карточек. */
export function FlashcardSession({ cards, newLimit = 10 }: Props) {
  const review = useProgress((s) => s.review)
  const makeQueue = useCallback(() => buildQueue(cards, useProgress.getState().srs, { newLimit }), [cards, newLimit])

  const [queue, setQueue] = useState(makeQueue)
  const [position, setPosition] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [direction, setDirection] = useState<Direction>('en-ru')
  const [stats, setStats] = useState({ again: 0, good: 0, easy: 0 })

  const card = queue[position] as CardRef | undefined

  const grade = useCallback(
    (g: Grade) => {
      if (!card) return
      review(card.key, g)
      setStats((s) => ({ ...s, [g]: s[g] + 1 }))
      // Забытую карточку показываем ещё раз в конце сессии
      if (g === 'again') setQueue((q) => [...q, card])
      setPosition((p) => p + 1)
      setFlipped(false)
    },
    [card, review],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!card || e.target instanceof HTMLInputElement) return
      if (e.code === 'Space') {
        e.preventDefault()
        setFlipped((f) => !f)
      } else if (flipped) {
        const match = GRADES.find((g) => g.key === e.key)
        if (match) grade(match.grade)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [card, flipped, grade])

  const restart = () => {
    setQueue(makeQueue())
    setPosition(0)
    setFlipped(false)
    setStats({ again: 0, good: 0, easy: 0 })
  }

  if (queue.length === 0) {
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
        description={`Помню: ${stats.good + stats.easy} · Не помню: ${stats.again}`}
      >
        <EmptyState.Actions>
          <Button onClick={restart}>Продолжить</Button>
        </EmptyState.Actions>
      </EmptyState>
    )
  }

  const english = (
    <>
      <Title order={2}>{card.en}</Title>
      {card.transcription && <Text c="dimmed">{card.transcription}</Text>}
    </>
  )
  const russian = <Title order={2}>{card.ru}</Title>
  const example = card.example && (
    <Text size="sm" c="dimmed" fs="italic">
      {card.example}
      {card.exampleRu && (
        <>
          <br />
          {card.exampleRu}
        </>
      )}
    </Text>
  )

  return (
    <Stack maw={560} w="100%" mx="auto">
      <Group justify="space-between">
        <SegmentedControl
          size="xs"
          value={direction}
          onChange={(v) => {
            setDirection(v as Direction)
            setFlipped(false)
          }}
          data={[
            { value: 'en-ru', label: 'EN → RU' },
            { value: 'ru-en', label: 'RU → EN' },
          ]}
        />
        <Text size="sm" c="dimmed">
          {position + 1} / {queue.length}
        </Text>
      </Group>
      <Progress value={(position / queue.length) * 100} size="sm" />

      <Flashcard
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
        front={direction === 'en-ru' ? english : russian}
        back={
          <>
            {direction === 'en-ru' ? russian : english}
            {example}
          </>
        }
      />

      <Group justify="center">
        <SpeakButton text={card.en} size="lg" />
      </Group>

      {flipped ? (
        <SimpleGrid cols={3} spacing="xs">
          {GRADES.map((g) => (
            <Button key={g.grade} variant="light" color={g.color} onClick={() => grade(g.grade)}>
              {g.label}
            </Button>
          ))}
        </SimpleGrid>
      ) : (
        <Button onClick={() => setFlipped(true)}>Показать ответ</Button>
      )}

      <Text size="xs" c="dimmed" ta="center" visibleFrom="sm">
        <Kbd>Пробел</Kbd> — перевернуть, <Kbd>1</Kbd> <Kbd>2</Kbd> <Kbd>3</Kbd> — оценка
      </Text>
    </Stack>
  )
}

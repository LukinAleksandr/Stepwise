import { Badge, Button, Card, Group, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router'
import { paths } from '../app/paths'
import { exerciseKey, getLevel, topicCards } from '../content'
import { FlashcardSession } from '../features/flashcards/FlashcardSession'
import { WordList } from '../features/flashcards/WordList'
import { TheoryView } from '../features/theory/TheoryView'
import { PageHeader, type RouteTab, RouteTabs } from '../shared/ui'
import { useProgress } from '../store/progress'
import { NotFoundPage } from './NotFoundPage'
import { type TopicContext, useTopicContext } from './topicContext'

/** Общая оболочка темы: заголовок + вкладки Теория / Слова / Практика. */
export function TopicLayout() {
  const { levelId = '', topicId = '' } = useParams()
  const level = getLevel(levelId)
  const topic = level?.topics.find((t) => t.id === topicId)
  if (!level || !topic) return <NotFoundPage />

  const tabs: RouteTab[] = [{ to: paths.topic(level.id, topic.id), label: 'Теория', end: true }]
  if (topic.cards?.length)
    tabs.push({ to: paths.topicCards(level.id, topic.id), label: `Слова · ${topic.cards.length}` })
  if (topic.exercises?.length) tabs.push({ to: paths.topicPractice(level.id, topic.id), label: 'Практика' })

  return (
    <>
      <PageHeader
        back={{ to: paths.level(level.id), label: `${level.code} · ${level.title}` }}
        title={topic.title}
        subtitle={topic.summary}
      />
      <RouteTabs items={tabs} />
      <Outlet context={{ level, topic } satisfies TopicContext} />
    </>
  )
}

export function TopicTheoryTab() {
  const { topic } = useTopicContext()
  return <TheoryView blocks={topic.theory} />
}

export function TopicCardsTab() {
  const { level, topic } = useTopicContext()
  const [training, setTraining] = useState(false)
  const cards = topicCards(level, topic)

  if (training) {
    return (
      <Stack>
        <Group>
          <Button variant="subtle" onClick={() => setTraining(false)}>
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
        <Button onClick={() => setTraining(true)}>Тренировать карточки</Button>
      </Group>
      <WordList cards={cards} />
    </Stack>
  )
}

export function TopicPracticeTab() {
  const { level, topic } = useTopicContext()
  const results = useProgress((s) => s.exercises)
  const attempts = useProgress((s) => s.attempts)
  return (
    <Stack gap="sm">
      {(topic.exercises ?? []).map((set) => {
        const key = exerciseKey(level.id, topic.id, set.id)
        const result = results[key]
        const inProgress = attempts[key]
        return (
          <Card key={set.id} component={Link} to={paths.exercise(level.id, topic.id, set.id)} padding="md">
            <Group justify="space-between">
              <div>
                <Text fw={600}>{set.title}</Text>
                <Text size="sm" c="dimmed">
                  Заданий: {set.items.length}
                </Text>
              </div>
              <Group gap="xs">
                {inProgress && (
                  <Badge variant="light" color="indigo">
                    Продолжить · {inProgress.length}/{set.items.length}
                  </Badge>
                )}
                {result && (
                  <Badge variant="light" color={result.best === result.total ? 'teal' : 'orange'}>
                    Лучший: {result.best}/{result.total}
                  </Badge>
                )}
              </Group>
            </Group>
          </Card>
        )
      })}
    </Stack>
  )
}

import { Badge, Card, Group, Stack, Text, Title } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { Link, useParams } from 'react-router'
import { paths } from '../app/paths'
import { exerciseKey, getLevel } from '../content'
import { PageHeader } from '../shared/ui'
import { useProgress } from '../store/progress'
import { NotFoundPage } from './NotFoundPage'

export function LevelPage() {
  const { levelId = '' } = useParams()
  const level = getLevel(levelId)
  const exercises = useProgress((s) => s.exercises)
  if (!level) return <NotFoundPage />

  return (
    <>
      <PageHeader
        back={{ to: paths.home, label: 'Все уровни' }}
        title={`${level.code} · ${level.title}`}
        subtitle={level.description}
      />
      <Stack gap="sm">
        {level.topics.map((topic, i) => {
          const sets = topic.exercises ?? []
          const done = sets.filter((s) => exercises[exerciseKey(level.id, topic.id, s.id)]).length
          return (
            <Card key={topic.id} component={Link} to={paths.topic(level.id, topic.id)} padding="md">
              <Group justify="space-between" wrap="nowrap">
                <Group wrap="nowrap">
                  <Text c="dimmed" fw={700} w={24}>
                    {i + 1}
                  </Text>
                  <div>
                    <Title order={4}>{topic.title}</Title>
                    {topic.summary && (
                      <Text size="sm" c="dimmed">
                        {topic.summary}
                      </Text>
                    )}
                  </div>
                </Group>
                <Group gap="xs" wrap="nowrap">
                  {sets.length > 0 && (
                    <Badge variant="light" color={done === sets.length ? 'teal' : 'gray'}>
                      {done}/{sets.length}
                    </Badge>
                  )}
                  <IconChevronRight size={18} />
                </Group>
              </Group>
            </Card>
          )
        })}
      </Stack>
    </>
  )
}

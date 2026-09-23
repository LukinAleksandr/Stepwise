import { Badge, Card, Group, Text, Title } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { Link } from 'react-router'
import { exerciseKey, type Level, type Topic } from '../../../content'
import { useExerciseProgress } from '../../../features/exercises'
import { levelsPaths } from '../paths'

interface TopicCardProps {
  level: Level
  topic: Topic
  number: number
}

export function TopicCard({ level: { id: levelId }, topic, number }: TopicCardProps) {
  const { id: topicId, title, summary, exercises = [] } = topic
  const { countCompleted } = useExerciseProgress()
  const done = countCompleted(exercises.map(({ id }) => exerciseKey(levelId, topicId, id)))
  const total = exercises.length

  return (
    <Card component={Link} to={levelsPaths.topic(levelId, topicId)} padding="md">
      <Group justify="space-between" wrap="nowrap">
        <Group wrap="nowrap">
          <Text c="dimmed" fw={700} w={24}>
            {number}
          </Text>
          <div>
            <Title order={4}>{title}</Title>
            {summary && (
              <Text size="sm" c="dimmed">
                {summary}
              </Text>
            )}
          </div>
        </Group>
        <Group gap="xs" wrap="nowrap">
          {total > 0 && (
            <Badge variant="light" color={done === total ? 'teal' : 'gray'}>
              {done}/{total}
            </Badge>
          )}
          <IconChevronRight size={18} />
        </Group>
      </Group>
    </Card>
  )
}

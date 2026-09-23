import { Badge, Card, Group, Text } from '@mantine/core'
import { Link } from 'react-router'
import { type ExerciseSet, exerciseKey } from '../../../content'
import { useExerciseProgress } from '../../../features/exercises'
import { levelsPaths } from '../paths'

interface ExerciseSetCardProps {
  levelId: string
  topicId: string
  set: ExerciseSet
}

export function ExerciseSetCard({ levelId, topicId, set: { id, title, items } }: ExerciseSetCardProps) {
  const { resultOf, attemptOf } = useExerciseProgress()
  const key = exerciseKey(levelId, topicId, id)
  const result = resultOf(key)
  const attempt = attemptOf(key)

  return (
    <Card component={Link} to={levelsPaths.exercise(levelId, topicId, id)} padding="md">
      <Group justify="space-between">
        <div>
          <Text fw={600}>{title}</Text>
          <Text size="sm" c="dimmed">
            Заданий: {items.length}
          </Text>
        </div>
        <Group gap="xs">
          {attempt && (
            <Badge variant="light" color="indigo">
              Продолжить · {attempt.length}/{items.length}
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
}

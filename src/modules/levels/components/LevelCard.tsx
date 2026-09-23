import { Badge, Button, Card, Group, Progress, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router'
import type { Level } from '../../../content'
import { useLevelProgress } from '../hooks/useLevelProgress'
import { levelsPaths } from '../paths'

function LevelProgress({ level }: { level: Level }) {
  const { topics } = level
  const { done, total, percent } = useLevelProgress(level)

  return (
    <Stack gap={4} mt="md">
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          Тем: {topics.length}
        </Text>
        <Text size="xs" c="dimmed">
          Заданий выполнено: {done} / {total}
        </Text>
      </Group>
      <Progress value={percent} size="sm" />
    </Stack>
  )
}

export function LevelCard({ level }: { level: Level }) {
  const { id, code, title, description, topics } = level
  const isEmpty = topics.length === 0

  return (
    <Card opacity={isEmpty ? 0.6 : 1}>
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <div>
          <Group gap="xs" mb={4}>
            <Badge size="lg" variant="filled">
              {code}
            </Badge>
            <Title order={3}>{title}</Title>
          </Group>
          <Text c="dimmed" size="sm">
            {description}
          </Text>
        </div>
        <Button component={Link} to={levelsPaths.level(id)} variant="light" disabled={isEmpty}>
          {isEmpty ? 'Скоро' : 'Открыть'}
        </Button>
      </Group>
      {!isEmpty && <LevelProgress level={level} />}
    </Card>
  )
}

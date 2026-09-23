import { Badge, Card, Group, Text } from '@mantine/core'
import { IconCards } from '@tabler/icons-react'
import { useMemo } from 'react'
import { Link } from 'react-router'
import { allCards } from '../../content'
import { useDueCount } from '../../shared/srs'
import { BASE_PATH } from './paths'

export function ReviewWidget() {
  const keys = useMemo(() => allCards().map(({ key }) => key), [])
  const due = useDueCount(keys)

  return (
    <Card component={Link} to={BASE_PATH}>
      <Group justify="space-between">
        <Group gap="sm">
          <IconCards />
          <Text fw={600}>Повторение карточек</Text>
        </Group>
        {due > 0 && <Badge color="orange">{due}</Badge>}
      </Group>
    </Card>
  )
}

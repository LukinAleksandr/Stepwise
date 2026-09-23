import { Badge, Card, Group, Text } from '@mantine/core'
import { IconTextGrammar } from '@tabler/icons-react'
import { useMemo } from 'react'
import { Link } from 'react-router'
import { verbKey, verbs } from '../../../content'
import { useDueCount } from '../../../shared/srs'
import { verbsPaths } from '../paths'

export function VerbsWidget() {
  const keys = useMemo(() => verbs.map(verbKey), [])
  const due = useDueCount(keys)

  return (
    <Card component={Link} to={verbsPaths.train}>
      <Group justify="space-between">
        <Group gap="sm">
          <IconTextGrammar />
          <Text fw={600}>Неправильные глаголы</Text>
        </Group>
        {due > 0 && <Badge color="orange">{due}</Badge>}
      </Group>
    </Card>
  )
}

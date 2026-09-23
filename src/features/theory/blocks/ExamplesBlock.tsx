import { Group, Paper, Stack, Text } from '@mantine/core'
import type { Example } from '../../../content'
import { SpeakButton } from '../../../shared/ui'

function ExampleRow({ example: { en, ru } }: { example: Example }) {
  return (
    <Group gap="xs" wrap="nowrap" align="flex-start">
      <SpeakButton text={en} size="sm" />
      <div>
        <Text fw={500}>{en}</Text>
        {ru && (
          <Text size="sm" c="dimmed">
            {ru}
          </Text>
        )}
      </div>
    </Group>
  )
}

export function ExamplesBlock({ items }: { items: Example[] }) {
  return (
    <Paper p="sm">
      <Stack gap={6}>
        {items.map((example, index) => (
          <ExampleRow key={index} example={example} />
        ))}
      </Stack>
    </Paper>
  )
}

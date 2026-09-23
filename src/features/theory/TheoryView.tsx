import { Alert, Group, List, Paper, Stack, Table, Text, Title } from '@mantine/core'
import { IconAlertTriangle, IconBulb } from '@tabler/icons-react'
import type { TheoryBlock } from '../../content'
import { RichText, SpeakButton } from '../../shared/ui'

/** Рендерит теорию темы из массива блоков. Новый тип блока = новый case здесь + тип в content/types.ts. */
export function TheoryView({ blocks }: { blocks: TheoryBlock[] }) {
  return (
    <Stack gap="lg">
      {blocks.map((block, i) => (
        <TheoryBlockView key={i} block={block} />
      ))}
    </Stack>
  )
}

function TheoryBlockView({ block }: { block: TheoryBlock }) {
  switch (block.type) {
    case 'heading':
      return <Title order={3}>{block.text}</Title>

    case 'paragraph':
      return (
        <Text>
          <RichText text={block.text} />
        </Text>
      )

    case 'rule':
      return (
        <Paper
          p="md"
          bg="var(--mantine-primary-color-light)"
          style={{ borderLeft: '4px solid var(--mantine-primary-color-filled)' }}
        >
          {block.title && (
            <Text fw={700} mb={4}>
              {block.title}
            </Text>
          )}
          <Text>
            <RichText text={block.text} />
          </Text>
        </Paper>
      )

    case 'note': {
      const warning = block.tone === 'warning'
      return (
        <Alert
          variant="light"
          color={warning ? 'orange' : 'teal'}
          icon={warning ? <IconAlertTriangle /> : <IconBulb />}
        >
          <RichText text={block.text} />
        </Alert>
      )
    }

    case 'list':
      return (
        <List spacing={4}>
          {block.items.map((item, i) => (
            <List.Item key={i}>
              <RichText text={item} />
            </List.Item>
          ))}
        </List>
      )

    case 'examples':
      return (
        <Paper p="sm">
          <Stack gap={6}>
            {block.items.map((ex, i) => (
              <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
                <SpeakButton text={ex.en} size="sm" />
                <div>
                  <Text fw={500}>{ex.en}</Text>
                  {ex.ru && (
                    <Text size="sm" c="dimmed">
                      {ex.ru}
                    </Text>
                  )}
                </div>
              </Group>
            ))}
          </Stack>
        </Paper>
      )

    case 'table':
      return (
        <Table.ScrollContainer minWidth={400}>
          <Table striped withTableBorder withColumnBorders captionSide="top">
            {block.caption && <Table.Caption>{block.caption}</Table.Caption>}
            <Table.Thead>
              <Table.Tr>
                {block.headers.map((h, i) => (
                  <Table.Th key={i}>{h}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {block.rows.map((row, r) => (
                <Table.Tr key={r}>
                  {row.map((cell, c) => (
                    <Table.Td key={c}>
                      <RichText text={cell} />
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      )
  }
}

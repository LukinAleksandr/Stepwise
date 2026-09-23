import { Alert, List, Paper, Text, Title } from '@mantine/core'
import { IconAlertTriangle, IconBulb } from '@tabler/icons-react'
import { RichText } from '../../../shared/ui'

const RULE_STYLE = { borderLeft: '4px solid var(--mantine-primary-color-filled)' }

export function HeadingBlock({ text }: { text: string }) {
  return <Title order={3}>{text}</Title>
}

export function ParagraphBlock({ text }: { text: string }) {
  return (
    <Text>
      <RichText text={text} />
    </Text>
  )
}

export function RuleBlock({ title, text }: { title?: string; text: string }) {
  return (
    <Paper p="md" bg="var(--mantine-primary-color-light)" style={RULE_STYLE}>
      {title && (
        <Text fw={700} mb={4}>
          {title}
        </Text>
      )}
      <Text>
        <RichText text={text} />
      </Text>
    </Paper>
  )
}

export function NoteBlock({ tone = 'tip', text }: { tone?: 'tip' | 'warning'; text: string }) {
  const isWarning = tone === 'warning'
  return (
    <Alert
      variant="light"
      color={isWarning ? 'orange' : 'teal'}
      icon={isWarning ? <IconAlertTriangle /> : <IconBulb />}
    >
      <RichText text={text} />
    </Alert>
  )
}

export function ListBlock({ items }: { items: string[] }) {
  return (
    <List spacing={4}>
      {items.map((item, index) => (
        <List.Item key={index}>
          <RichText text={item} />
        </List.Item>
      ))}
    </List>
  )
}

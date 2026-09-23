import { Badge, Table, Text } from '@mantine/core'
import type { CardRef } from '../../content'
import { type CardStatus, cardStatus, useSrsStates } from '../../shared/srs'
import { SpeakButton } from '../../shared/ui'

const STATUS_BADGE: Record<CardStatus, { label: string; color: string }> = {
  new: { label: 'Новое', color: 'gray' },
  learning: { label: 'Изучаю', color: 'orange' },
  learned: { label: 'Выучено', color: 'teal' },
}

function WordRow({ card, status }: { card: CardRef; status: CardStatus }) {
  const { en, ru, transcription, example } = card
  const { label, color } = STATUS_BADGE[status]

  return (
    <Table.Tr>
      <Table.Td w={40}>
        <SpeakButton text={en} size="sm" />
      </Table.Td>
      <Table.Td>
        <Text fw={600}>{en}</Text>
        {transcription && (
          <Text size="xs" c="dimmed">
            {transcription}
          </Text>
        )}
      </Table.Td>
      <Table.Td>
        <Text>{ru}</Text>
        {example && (
          <Text size="xs" c="dimmed" fs="italic">
            {example}
          </Text>
        )}
      </Table.Td>
      <Table.Td ta="right">
        <Badge variant="light" color={color} miw="max-content">
          {label}
        </Badge>
      </Table.Td>
    </Table.Tr>
  )
}

export function WordList({ cards }: { cards: readonly CardRef[] }) {
  const states = useSrsStates()

  return (
    <Table verticalSpacing="sm" highlightOnHover>
      <Table.Tbody>
        {cards.map((card) => (
          <WordRow key={card.key} card={card} status={cardStatus(states[card.key])} />
        ))}
      </Table.Tbody>
    </Table>
  )
}

import { Badge, Table, Text } from '@mantine/core'
import type { CardRef } from '../../content'
import { type CardStatus, cardStatus } from '../../shared/lib/srs'
import { SpeakButton } from '../../shared/ui'
import { useProgress } from '../../store/progress'

const STATUS: Record<CardStatus, { label: string; color: string }> = {
  new: { label: 'Новое', color: 'gray' },
  learning: { label: 'Изучаю', color: 'orange' },
  learned: { label: 'Выучено', color: 'teal' },
}

/** Таблица слов темы со статусом изучения. */
export function WordList({ cards }: { cards: CardRef[] }) {
  const srs = useProgress((s) => s.srs)
  return (
    <Table verticalSpacing="sm" highlightOnHover>
      <Table.Tbody>
        {cards.map((card) => {
          const status = STATUS[cardStatus(srs[card.key])]
          return (
            <Table.Tr key={card.key}>
              <Table.Td w={40}>
                <SpeakButton text={card.en} size="sm" />
              </Table.Td>
              <Table.Td>
                <Text fw={600}>{card.en}</Text>
                {card.transcription && (
                  <Text size="xs" c="dimmed">
                    {card.transcription}
                  </Text>
                )}
              </Table.Td>
              <Table.Td>
                <Text>{card.ru}</Text>
                {card.example && (
                  <Text size="xs" c="dimmed" fs="italic">
                    {card.example}
                  </Text>
                )}
              </Table.Td>
              <Table.Td ta="right">
                <Badge variant="light" color={status.color} miw="max-content">
                  {status.label}
                </Badge>
              </Table.Td>
            </Table.Tr>
          )
        })}
      </Table.Tbody>
    </Table>
  )
}

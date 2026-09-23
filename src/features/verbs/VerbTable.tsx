import { Badge, Stack, Table, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import type { Verb } from '../../content'
import { SpeakButton } from '../../shared/ui'

/** Справочная таблица форм глаголов с поиском по английскому и русскому. */
export function VerbTable({ verbs }: { verbs: Verb[] }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const filtered = q
    ? verbs.filter((v) => [v.base, v.past, v.participle, v.ru].some((f) => f.toLowerCase().includes(q)))
    : verbs

  return (
    <Stack>
      <TextInput
        placeholder="Поиск: go, went, идти…"
        leftSection={<IconSearch size={16} />}
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <Table.ScrollContainer minWidth={560}>
        <Table striped highlightOnHover verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={40} />
              <Table.Th>Infinitive</Table.Th>
              <Table.Th>Past Simple</Table.Th>
              <Table.Th>Past Participle</Table.Th>
              <Table.Th>Перевод</Table.Th>
              <Table.Th>Уровень</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filtered.map((v) => (
              <Table.Tr key={v.base}>
                <Table.Td>
                  <SpeakButton
                    text={`${v.base}, ${v.past.replace('/', ', ')}, ${v.participle.replace('/', ', ')}`}
                    size="sm"
                  />
                </Table.Td>
                <Table.Td fw={600}>{v.base}</Table.Td>
                <Table.Td>{v.past}</Table.Td>
                <Table.Td>{v.participle}</Table.Td>
                <Table.Td c="dimmed">{v.ru}</Table.Td>
                <Table.Td>
                  <Badge variant="light">{v.level}</Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      {filtered.length === 0 && (
        <Text c="dimmed" ta="center">
          Ничего не найдено
        </Text>
      )}
    </Stack>
  )
}

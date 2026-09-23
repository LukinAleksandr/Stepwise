import { Badge, Stack, Table, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import type { Verb } from '../../../content'
import { SpeakButton } from '../../../shared/ui'
import { useVerbSearch } from '../hooks/useVerbSearch'

const spokenForms = ({ base, past, participle }: Verb) =>
  [base, past, participle].map((form) => form.replace('/', ', ')).join(', ')

function VerbRow({ verb }: { verb: Verb }) {
  const { base, past, participle, ru, level } = verb
  return (
    <Table.Tr>
      <Table.Td>
        <SpeakButton text={spokenForms(verb)} size="sm" />
      </Table.Td>
      <Table.Td fw={600}>{base}</Table.Td>
      <Table.Td>{past}</Table.Td>
      <Table.Td>{participle}</Table.Td>
      <Table.Td c="dimmed">{ru}</Table.Td>
      <Table.Td>
        <Badge variant="light">{level}</Badge>
      </Table.Td>
    </Table.Tr>
  )
}

export function VerbTable({ verbs }: { verbs: readonly Verb[] }) {
  const { query, setQuery, filtered } = useVerbSearch(verbs)

  return (
    <Stack>
      <TextInput
        placeholder="Поиск: go, went, идти…"
        leftSection={<IconSearch size={16} />}
        value={query}
        onChange={({ currentTarget }) => setQuery(currentTarget.value)}
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
            {filtered.map((verb) => (
              <VerbRow key={verb.base} verb={verb} />
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

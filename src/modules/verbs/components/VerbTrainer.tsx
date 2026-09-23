import { Button, Card, EmptyState, Group, Progress, SimpleGrid, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconConfetti } from '@tabler/icons-react'
import type { FormEvent } from 'react'
import type { Verb } from '../../../content'
import { Feedback, SpeakButton } from '../../../shared/ui'
import { useVerbTrainer, type VerbField } from '../hooks/useVerbTrainer'

const FIELDS: { field: VerbField; label: string }[] = [
  { field: 'past', label: 'Past Simple' },
  { field: 'participle', label: 'Past Participle' },
]

const CORRECT_INPUT_STYLES = { input: { borderColor: 'var(--mantine-color-teal-6)' } }

export function VerbTrainer({ verbs }: { verbs: readonly Verb[] }) {
  const {
    verb,
    position,
    total,
    isEmpty,
    answers,
    result,
    score,
    isChecked,
    isCorrect,
    canSubmit,
    setAnswer,
    submit,
    restart,
  } = useVerbTrainer(verbs)

  if (!verb) {
    return (
      <EmptyState
        icon={<IconConfetti />}
        title={isEmpty ? 'Сейчас нечего повторять' : 'Тренировка завершена'}
        description={isEmpty ? 'Все глаголы повторены — возвращайтесь позже.' : `С первого раза: ${score}`}
      >
        <EmptyState.Actions>
          <Button onClick={restart}>Ещё раз</Button>
        </EmptyState.Actions>
      </EmptyState>
    )
  }

  const { base, past, participle, ru } = verb

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  return (
    <Stack maw={560} w="100%" mx="auto">
      <Group justify="space-between">
        <Text size="sm" c="dimmed">
          {position + 1} / {total}
        </Text>
        <Text size="sm" c="dimmed">
          Верно: {score}
        </Text>
      </Group>
      <Progress value={(position / total) * 100} size="sm" />

      <Card>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Group justify="center" gap="xs">
              <Title order={2}>{base}</Title>
              <SpeakButton text={base} />
            </Group>
            <Text ta="center" c="dimmed" mt={-12}>
              {ru}
            </Text>
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
              {FIELDS.map(({ field, label }, index) => (
                <TextInput
                  key={`${field}-${position}`}
                  label={label}
                  autoFocus={index === 0}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  readOnly={isChecked}
                  error={result?.[field] === false}
                  styles={result?.[field] ? CORRECT_INPUT_STYLES : undefined}
                  value={answers[field]}
                  onChange={({ currentTarget }) => setAnswer(field, currentTarget.value)}
                />
              ))}
            </SimpleGrid>
            {isChecked && (
              <Feedback correct={isCorrect}>
                <b>
                  {base} — {past} — {participle}
                </b>
              </Feedback>
            )}
            <Button type="submit" disabled={!canSubmit}>
              {isChecked ? 'Далее' : 'Проверить'}
            </Button>
          </Stack>
        </form>
      </Card>
    </Stack>
  )
}

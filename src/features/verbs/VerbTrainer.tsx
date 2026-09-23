import { Button, Card, EmptyState, Group, Progress, SimpleGrid, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconConfetti } from '@tabler/icons-react'
import { type FormEvent, useState } from 'react'
import { type Verb, verbKey } from '../../content'
import { isCorrect } from '../../shared/lib/answers'
import { buildQueue } from '../../shared/lib/srs'
import { Feedback, SpeakButton } from '../../shared/ui'
import { useProgress } from '../../store/progress'

type VerbRef = Verb & { key: string }

const forms = (value: string) => value.split('/')

/** Тренажёр: по инфинитиву ввести Past Simple и Past Participle. Прогресс — через SRS. */
export function VerbTrainer({ verbs, newLimit = 10 }: { verbs: Verb[]; newLimit?: number }) {
  const review = useProgress((s) => s.review)
  const makeQueue = () =>
    buildQueue(
      verbs.map((v): VerbRef => ({ ...v, key: verbKey(v) })),
      useProgress.getState().srs,
      { newLimit },
    )

  const [queue, setQueue] = useState(makeQueue)
  const [position, setPosition] = useState(0)
  const [past, setPast] = useState('')
  const [participle, setParticiple] = useState('')
  const [result, setResult] = useState<{ past: boolean; participle: boolean } | null>(null)
  const [score, setScore] = useState(0)

  const verb = queue[position] as VerbRef | undefined

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!verb) return
    if (result) return next()
    const checked = {
      past: isCorrect(past, forms(verb.past)),
      participle: isCorrect(participle, forms(verb.participle)),
    }
    const correct = checked.past && checked.participle
    setResult(checked)
    review(verb.key, correct ? 'good' : 'again')
    if (correct) setScore((s) => s + 1)
    else setQueue((q) => [...q, verb])
  }

  const next = () => {
    setPosition((p) => p + 1)
    setPast('')
    setParticiple('')
    setResult(null)
  }

  const restart = () => {
    setQueue(makeQueue())
    setPosition(0)
    setScore(0)
  }

  if (!verb) {
    return (
      <EmptyState
        icon={<IconConfetti />}
        title={queue.length ? 'Тренировка завершена' : 'Сейчас нечего повторять'}
        description={queue.length ? `С первого раза: ${score}` : 'Все глаголы повторены — возвращайтесь позже.'}
      >
        <EmptyState.Actions>
          <Button onClick={restart}>Ещё раз</Button>
        </EmptyState.Actions>
      </EmptyState>
    )
  }

  const inputProps = (ok: boolean | undefined) => ({
    autoComplete: 'off',
    autoCapitalize: 'off',
    spellCheck: false,
    readOnly: result !== null,
    error: ok === false,
    styles: ok ? { input: { borderColor: 'var(--mantine-color-teal-6)' } } : undefined,
  })

  return (
    <Stack maw={560} w="100%" mx="auto">
      <Group justify="space-between">
        <Text size="sm" c="dimmed">
          {position + 1} / {queue.length}
        </Text>
        <Text size="sm" c="dimmed">
          Верно: {score}
        </Text>
      </Group>
      <Progress value={(position / queue.length) * 100} size="sm" />

      <Card>
        <form onSubmit={submit}>
          <Stack>
            <Group justify="center" gap="xs">
              <Title order={2}>{verb.base}</Title>
              <SpeakButton text={verb.base} />
            </Group>
            <Text ta="center" c="dimmed" mt={-12}>
              {verb.ru}
            </Text>
            <SimpleGrid cols={{ base: 1, xs: 2 }}>
              <TextInput
                label="Past Simple"
                autoFocus
                key={`past-${position}`}
                value={past}
                onChange={(e) => setPast(e.currentTarget.value)}
                {...inputProps(result?.past)}
              />
              <TextInput
                label="Past Participle"
                value={participle}
                onChange={(e) => setParticiple(e.currentTarget.value)}
                {...inputProps(result?.participle)}
              />
            </SimpleGrid>
            {result && (
              <Feedback correct={result.past && result.participle}>
                <b>
                  {verb.base} — {verb.past} — {verb.participle}
                </b>
              </Feedback>
            )}
            <Button type="submit" disabled={!result && (!past.trim() || !participle.trim())}>
              {result ? 'Далее' : 'Проверить'}
            </Button>
          </Stack>
        </form>
      </Card>
    </Stack>
  )
}

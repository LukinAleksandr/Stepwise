import { Button, Group, Paper, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import type { OrderItem } from '../../content'
import { isCorrect, splitSentence } from '../../shared/lib/answers'
import { shuffleChanged } from '../../shared/lib/random'
import { Feedback } from '../../shared/ui'
import type { ItemProps } from './types'

interface Token {
  id: number
  text: string
}

export function SentenceBuilderItem({ item, onDone }: ItemProps<OrderItem>) {
  const answers = Array.isArray(item.answer) ? item.answer : [item.answer]
  const [{ tokens, ending }] = useState(() => {
    const { words, ending } = splitSentence(answers[0])
    const all = [...words, ...(item.distractors ?? [])].map((text, id) => ({ id, text }))
    return { tokens: shuffleChanged(all), ending }
  })
  const [placed, setPlaced] = useState<Token[]>([])
  const [result, setResult] = useState<boolean | null>(null)

  const done = result !== null
  const pool = tokens.filter((t) => !placed.includes(t))
  const built = placed.map((t) => t.text).join(' ') + ending

  const check = () => {
    const correct = isCorrect(built, answers)
    setResult(correct)
    onDone(correct)
  }

  return (
    <Stack>
      <div>
        <Text size="sm" c="dimmed">
          Соберите предложение:
        </Text>
        <Text size="lg" fw={600}>
          {item.translation}
        </Text>
      </div>

      <Paper p="sm" mih={58} bg={done ? undefined : 'var(--mantine-color-default-hover)'} aria-label="Ваше предложение">
        <Group gap="xs">
          {placed.length === 0 && (
            <Text c="dimmed" size="sm">
              Нажимайте на слова ниже, чтобы собрать предложение
            </Text>
          )}
          {placed.map((t) => (
            <Button
              key={t.id}
              variant={done ? 'light' : 'default'}
              color={done ? (result ? 'teal' : 'red') : undefined}
              size="sm"
              onClick={() => !done && setPlaced(placed.filter((p) => p !== t))}
            >
              {t.text}
            </Button>
          ))}
          {placed.length > 0 && ending && <Text fw={600}>{ending}</Text>}
        </Group>
      </Paper>

      {!done && (
        <Group gap="xs" aria-label="Доступные слова">
          {pool.map((t) => (
            <Button key={t.id} variant="default" size="sm" onClick={() => setPlaced([...placed, t])}>
              {t.text}
            </Button>
          ))}
        </Group>
      )}

      {done ? (
        <Feedback correct={result}>
          {!result && (
            <>
              Правильно: <b>{answers[0]}</b>
            </>
          )}
        </Feedback>
      ) : (
        <Group>
          <Button onClick={check} disabled={placed.length === 0}>
            Проверить
          </Button>
          <Button variant="subtle" color="gray" onClick={() => setPlaced([])} disabled={placed.length === 0}>
            Сбросить
          </Button>
        </Group>
      )}
    </Stack>
  )
}

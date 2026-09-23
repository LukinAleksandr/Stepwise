import { Button, Group, Paper, Stack, Text } from '@mantine/core'
import type { OrderItem } from '../../../content'
import { Feedback } from '../../../shared/ui'
import { useSentenceBuilder } from '../hooks/useSentenceBuilder'
import type { ItemProps } from './types'

export function SentenceBuilderItem({ item, onDone }: ItemProps<OrderItem>) {
  const { translation } = item
  const { pool, placed, ending, result, isChecked, correctAnswer, place, remove, reset, check } = useSentenceBuilder(
    item,
    onDone,
  )
  const placedColor = isChecked ? (result ? 'teal' : 'red') : undefined

  return (
    <Stack>
      <div>
        <Text size="sm" c="dimmed">
          Соберите предложение:
        </Text>
        <Text size="lg" fw={600}>
          {translation}
        </Text>
      </div>

      <Paper
        p="sm"
        mih={58}
        bg={isChecked ? undefined : 'var(--mantine-color-default-hover)'}
        aria-label="Ваше предложение"
      >
        <Group gap="xs">
          {placed.length === 0 && (
            <Text c="dimmed" size="sm">
              Нажимайте на слова ниже, чтобы собрать предложение
            </Text>
          )}
          {placed.map((token) => (
            <Button
              key={token.id}
              variant={isChecked ? 'light' : 'default'}
              color={placedColor}
              size="sm"
              onClick={() => !isChecked && remove(token)}
            >
              {token.text}
            </Button>
          ))}
          {placed.length > 0 && ending && <Text fw={600}>{ending}</Text>}
        </Group>
      </Paper>

      {!isChecked && (
        <Group gap="xs" aria-label="Доступные слова">
          {pool.map((token) => (
            <Button key={token.id} variant="default" size="sm" onClick={() => place(token)}>
              {token.text}
            </Button>
          ))}
        </Group>
      )}

      {isChecked ? (
        <Feedback correct={result === true}>
          {!result && (
            <>
              Правильно: <b>{correctAnswer}</b>
            </>
          )}
        </Feedback>
      ) : (
        <Group>
          <Button onClick={check} disabled={placed.length === 0}>
            Проверить
          </Button>
          <Button variant="subtle" color="gray" onClick={reset} disabled={placed.length === 0}>
            Сбросить
          </Button>
        </Group>
      )}
    </Stack>
  )
}

import { Button, Group, Input, Stack, Text } from '@mantine/core'
import { type FormEvent, useMemo, useState } from 'react'
import type { GapItem } from '../../content'
import { fillGaps, isCorrect, parseGaps } from '../../shared/lib/answers'
import { Feedback } from '../../shared/ui'
import type { ItemProps } from './types'

export function GapFillItem({ item, onDone }: ItemProps<GapItem>) {
  const segments = useMemo(() => parseGaps(item.text), [item.text])
  const gapCount = segments.filter((s) => s.type === 'gap').length
  const [values, setValues] = useState<string[]>(() => Array(gapCount).fill(''))
  const [results, setResults] = useState<boolean[] | null>(null)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (results) return
    const checked = segments.flatMap((s) => (s.type === 'gap' ? [isCorrect(values[s.index], s.answers)] : []))
    setResults(checked)
    onDone(checked.every(Boolean))
  }

  return (
    <form onSubmit={submit}>
      <Stack>
        <Text size="lg" lh={2.4}>
          {segments.map((s, i) => {
            if (s.type === 'text') return <span key={i}>{s.value}</span>
            const width = Math.max(...s.answers.map((a) => a.length), 3) + 3
            const result = results?.[s.index]
            return (
              <Input
                key={i}
                component="input"
                display="inline-block"
                w={`${width}ch`}
                mx={4}
                autoFocus={s.index === 0}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label={`Пропуск ${s.index + 1}`}
                value={values[s.index]}
                readOnly={results !== null}
                error={result === false}
                styles={result ? { input: { borderColor: 'var(--mantine-color-teal-6)' } } : undefined}
                onChange={(e) => {
                  const next = [...values]
                  next[s.index] = e.currentTarget.value
                  setValues(next)
                }}
              />
            )
          })}
          {item.hint && (
            <Text span c="dimmed">
              {' '}
              ({item.hint})
            </Text>
          )}
        </Text>
        {item.translation && (
          <Text size="sm" c="dimmed">
            {item.translation}
          </Text>
        )}

        {results ? (
          <Feedback correct={results.every(Boolean)}>
            {!results.every(Boolean) && (
              <>
                Правильно: <b>{fillGaps(segments)}</b>
              </>
            )}
          </Feedback>
        ) : (
          <Group>
            <Button type="submit" disabled={values.some((v) => !v.trim())}>
              Проверить
            </Button>
          </Group>
        )}
      </Stack>
    </form>
  )
}

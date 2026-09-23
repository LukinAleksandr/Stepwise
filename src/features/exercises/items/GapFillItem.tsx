import { Button, Group, Input, Stack, Text } from '@mantine/core'
import type { FormEvent } from 'react'
import type { GapItem } from '../../../content'
import type { GapToken } from '../../../shared/lib/answers'
import { Feedback } from '../../../shared/ui'
import { useGapFill } from '../hooks/useGapFill'
import type { ItemProps } from './types'

const CORRECT_INPUT_STYLES = { input: { borderColor: 'var(--mantine-color-teal-6)' } }

interface GapInputProps {
  gap: GapToken
  value: string
  result?: boolean
  readOnly: boolean
  onChange: (value: string) => void
}

function GapInput({ gap: { answers, index }, value, result, readOnly, onChange }: GapInputProps) {
  const width = Math.max(...answers.map(({ length }) => length), 3) + 3
  return (
    <Input
      component="input"
      display="inline-block"
      w={`${width}ch`}
      mx={4}
      autoFocus={index === 0}
      autoComplete="off"
      autoCapitalize="off"
      spellCheck={false}
      aria-label={`Пропуск ${index + 1}`}
      value={value}
      readOnly={readOnly}
      error={result === false}
      styles={result ? CORRECT_INPUT_STYLES : undefined}
      onChange={({ currentTarget }) => onChange(currentTarget.value)}
    />
  )
}

export function GapFillItem({ item, onDone }: ItemProps<GapItem>) {
  const { hint, translation } = item
  const { segments, values, results, isChecked, isCorrect, canCheck, correctSentence, setValue, check } = useGapFill(
    item,
    onDone,
  )

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    check()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Text component="div" size="lg" lh={2.4}>
          {segments.map((segment, position) =>
            segment.type === 'text' ? (
              <span key={position}>{segment.value}</span>
            ) : (
              <GapInput
                key={position}
                gap={segment}
                value={values[segment.index]}
                result={results?.[segment.index]}
                readOnly={isChecked}
                onChange={(value) => setValue(segment.index, value)}
              />
            ),
          )}
          {hint && (
            <Text span c="dimmed">
              {' '}
              ({hint})
            </Text>
          )}
        </Text>
        {translation && (
          <Text size="sm" c="dimmed">
            {translation}
          </Text>
        )}
        {isChecked ? (
          <Feedback correct={isCorrect}>
            {!isCorrect && (
              <>
                Правильно: <b>{correctSentence}</b>
              </>
            )}
          </Feedback>
        ) : (
          <Group>
            <Button type="submit" disabled={!canCheck}>
              Проверить
            </Button>
          </Group>
        )}
      </Stack>
    </form>
  )
}

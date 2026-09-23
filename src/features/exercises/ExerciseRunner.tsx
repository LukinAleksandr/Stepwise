import { Button, Card, Group, Progress, RingProgress, Stack, Text, Title } from '@mantine/core'
import { useState } from 'react'
import type { ExerciseSet } from '../../content'
import { useProgress } from '../../store/progress'
import { ExerciseItemView } from './ExerciseItemView'

interface Props {
  set: ExerciseSet
  /** Ключ для сохранения результата в прогрессе */
  resultKey: string
  onExit?: () => void
}

/**
 * Проводит пользователя по заданиям набора по одному.
 * Каждый ответ сразу сохраняется — незаконченный набор продолжается с того же места.
 */
export function ExerciseRunner({ set, resultKey, onExit }: Props) {
  const { saveExercise, saveAttempt, clearAttempt } = useProgress()
  const total = set.items.length

  const [attempt, setAttempt] = useState(0)
  // Начинаем с первого неотвеченного задания сохранённой попытки
  const [results, setResults] = useState<boolean[]>(() =>
    (useProgress.getState().attempts[resultKey] ?? []).slice(0, total),
  )
  const [index, setIndex] = useState(() => results.length)

  const answered = results.length > index
  const correctCount = results.filter(Boolean).length

  const handleAnswer = (correct: boolean) => {
    const next = [...results, correct]
    setResults(next)
    if (next.length < total) {
      saveAttempt(resultKey, next)
    } else {
      // Последний ответ: фиксируем итог сразу, не дожидаясь кнопки «Завершить»
      saveExercise(resultKey, next.filter(Boolean).length, total)
      clearAttempt(resultKey)
    }
  }

  const restart = () => {
    clearAttempt(resultKey)
    setAttempt((a) => a + 1)
    setIndex(0)
    setResults([])
  }

  if (index >= total) {
    const percent = Math.round((correctCount / total) * 100)
    return (
      <Card>
        <Stack align="center" gap="md">
          <RingProgress
            size={140}
            thickness={12}
            roundCaps
            sections={[{ value: percent, color: percent >= 80 ? 'teal' : 'orange' }]}
            label={
              <Text ta="center" fw={700} fz="xl">
                {percent}%
              </Text>
            }
          />
          <Title order={3}>
            {correctCount} из {total} верно
          </Title>
          <Group>
            <Button onClick={restart}>Пройти ещё раз</Button>
            {onExit && (
              <Button variant="default" onClick={onExit}>
                К списку заданий
              </Button>
            )}
          </Group>
        </Stack>
      </Card>
    )
  }

  return (
    <Stack>
      <Group justify="space-between">
        <Text c="dimmed" size="sm">
          Задание {index + 1} из {total}
        </Text>
        <Group gap="xs">
          <Text c="dimmed" size="sm">
            Верно: {correctCount}
          </Text>
          {results.length > 0 && (
            <Button variant="subtle" color="gray" size="compact-sm" onClick={restart}>
              Начать заново
            </Button>
          )}
        </Group>
      </Group>
      <Progress value={(results.length / total) * 100} size="sm" />
      {set.instruction && <Text fw={500}>{set.instruction}</Text>}
      <Card>
        <ExerciseItemView key={`${attempt}-${index}`} item={set.items[index]} onDone={handleAnswer} />
      </Card>
      {answered && (
        <Group justify="flex-end">
          <Button onClick={() => setIndex(index + 1)} autoFocus>
            {index + 1 < total ? 'Далее' : 'Завершить'}
          </Button>
        </Group>
      )}
    </Stack>
  )
}

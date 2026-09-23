import { Button, Card, Group, Progress, Stack, Text } from '@mantine/core'
import type { ExerciseSet } from '../../content'
import { ExerciseSummary } from './ExerciseSummary'
import { useExerciseRun } from './hooks/useExerciseRun'
import { ExerciseItemView } from './items/ExerciseItemView'

interface ExerciseRunnerProps {
  set: ExerciseSet
  resultKey: string
  onExit?: () => void
}

export function ExerciseRunner({ set, resultKey, onExit }: ExerciseRunnerProps) {
  const { instruction } = set
  const {
    item,
    itemKey,
    index,
    total,
    answeredCount,
    correctCount,
    isAnswered,
    isFinished,
    isLast,
    answer,
    next,
    restart,
  } = useExerciseRun(set, resultKey)

  if (isFinished) {
    return <ExerciseSummary correct={correctCount} total={total} onRestart={restart} onExit={onExit} />
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
          {answeredCount > 0 && (
            <Button variant="subtle" color="gray" size="compact-sm" onClick={restart}>
              Начать заново
            </Button>
          )}
        </Group>
      </Group>
      <Progress value={(answeredCount / total) * 100} size="sm" />
      {instruction && <Text fw={500}>{instruction}</Text>}
      <Card>
        <ExerciseItemView key={itemKey} item={item} onDone={answer} />
      </Card>
      {isAnswered && (
        <Group justify="flex-end">
          <Button onClick={next} autoFocus>
            {isLast ? 'Завершить' : 'Далее'}
          </Button>
        </Group>
      )}
    </Stack>
  )
}

import { Button, Card, Group, RingProgress, Stack, Text, Title } from '@mantine/core'

const PASS_PERCENT = 80

interface ExerciseSummaryProps {
  correct: number
  total: number
  onRestart: () => void
  onExit?: () => void
}

export function ExerciseSummary({ correct, total, onRestart, onExit }: ExerciseSummaryProps) {
  const percent = Math.round((correct / total) * 100)

  return (
    <Card>
      <Stack align="center" gap="md">
        <RingProgress
          size={140}
          thickness={12}
          roundCaps
          sections={[{ value: percent, color: percent >= PASS_PERCENT ? 'teal' : 'orange' }]}
          label={
            <Text ta="center" fw={700} fz="xl">
              {percent}%
            </Text>
          }
        />
        <Title order={3}>
          {correct} из {total} верно
        </Title>
        <Group>
          <Button onClick={onRestart}>Пройти ещё раз</Button>
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

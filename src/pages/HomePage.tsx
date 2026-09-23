import { Badge, Button, Card, Group, Progress, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { IconCards, IconTextGrammar } from '@tabler/icons-react'
import { Link } from 'react-router'
import { paths } from '../app/paths'
import { allCards, levelExerciseKeys, levels, verbKey, verbs } from '../content'
import { countDue } from '../shared/lib/srs'
import { PageHeader } from '../shared/ui'
import { useProgress } from '../store/progress'

export function HomePage() {
  const { srs, exercises } = useProgress()
  const dueCards = countDue(
    allCards().map((c) => c.key),
    srs,
  )
  const dueVerbs = countDue(verbs.map(verbKey), srs)

  return (
    <>
      <PageHeader title="Английский шаг за шагом" subtitle="Выберите уровень или повторите слова" />

      <SimpleGrid cols={{ base: 1, xs: 2 }} mb="xl">
        <Card component={Link} to={paths.review}>
          <Group justify="space-between">
            <Group gap="sm">
              <IconCards />
              <Text fw={600}>Повторение карточек</Text>
            </Group>
            {dueCards > 0 && <Badge color="orange">{dueCards}</Badge>}
          </Group>
        </Card>
        <Card component={Link} to={paths.verbsTrain}>
          <Group justify="space-between">
            <Group gap="sm">
              <IconTextGrammar />
              <Text fw={600}>Неправильные глаголы</Text>
            </Group>
            {dueVerbs > 0 && <Badge color="orange">{dueVerbs}</Badge>}
          </Group>
        </Card>
      </SimpleGrid>

      <Stack>
        {levels.map((level) => {
          const keys = levelExerciseKeys(level)
          const done = keys.filter((k) => exercises[k]).length
          const empty = level.topics.length === 0
          return (
            <Card key={level.id} opacity={empty ? 0.6 : 1}>
              <Group justify="space-between" align="flex-start" wrap="nowrap">
                <div>
                  <Group gap="xs" mb={4}>
                    <Badge size="lg" variant="filled">
                      {level.code}
                    </Badge>
                    <Title order={3}>{level.title}</Title>
                  </Group>
                  <Text c="dimmed" size="sm">
                    {level.description}
                  </Text>
                </div>
                <Button component={Link} to={paths.level(level.id)} variant="light" disabled={empty}>
                  {empty ? 'Скоро' : 'Открыть'}
                </Button>
              </Group>
              {!empty && (
                <Stack gap={4} mt="md">
                  <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                      Тем: {level.topics.length}
                    </Text>
                    <Text size="xs" c="dimmed">
                      Заданий выполнено: {done} / {keys.length}
                    </Text>
                  </Group>
                  <Progress value={keys.length ? (done / keys.length) * 100 : 0} size="sm" />
                </Stack>
              )}
            </Card>
          )
        })}
      </Stack>
    </>
  )
}

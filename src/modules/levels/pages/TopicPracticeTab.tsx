import { Stack } from '@mantine/core'
import { ExerciseSetCard } from '../components/ExerciseSetCard'
import { useTopicContext } from '../hooks/useTopicContext'

export function TopicPracticeTab() {
  const {
    level: { id: levelId },
    topic: { id: topicId, exercises = [] },
  } = useTopicContext()

  return (
    <Stack gap="sm">
      {exercises.map((set) => (
        <ExerciseSetCard key={set.id} levelId={levelId} topicId={topicId} set={set} />
      ))}
    </Stack>
  )
}

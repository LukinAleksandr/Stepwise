import { Title } from '@mantine/core'
import { useNavigate, useParams } from 'react-router'
import { paths } from '../app/paths'
import { exerciseKey } from '../content'
import { ExerciseRunner } from '../features/exercises/ExerciseRunner'
import { NotFoundPage } from './NotFoundPage'
import { useTopicContext } from './topicContext'

export function ExercisePage() {
  const { level, topic } = useTopicContext()
  const { setId = '' } = useParams()
  const navigate = useNavigate()
  const set = topic.exercises?.find((s) => s.id === setId)
  if (!set) return <NotFoundPage />

  return (
    <>
      <Title order={3} mb="md">
        {set.title}
      </Title>
      <ExerciseRunner
        key={set.id}
        set={set}
        resultKey={exerciseKey(level.id, topic.id, set.id)}
        onExit={() => navigate(paths.topicPractice(level.id, topic.id))}
      />
    </>
  )
}

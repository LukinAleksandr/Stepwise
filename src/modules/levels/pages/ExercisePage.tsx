import { Title } from '@mantine/core'
import { useNavigate, useParams } from 'react-router'
import { exerciseKey } from '../../../content'
import { ExerciseRunner } from '../../../features/exercises'
import { NotFound } from '../../../shared/ui'
import { useTopicContext } from '../hooks/useTopicContext'
import { levelsPaths } from '../paths'

export function ExercisePage() {
  const {
    level: { id: levelId },
    topic: { id: topicId, exercises = [] },
  } = useTopicContext()
  const { setId = '' } = useParams()
  const navigate = useNavigate()
  const set = exercises.find(({ id }) => id === setId)
  if (!set) return <NotFound />

  return (
    <>
      <Title order={3} mb="md">
        {set.title}
      </Title>
      <ExerciseRunner
        key={set.id}
        set={set}
        resultKey={exerciseKey(levelId, topicId, set.id)}
        onExit={() => navigate(levelsPaths.topicPractice(levelId, topicId))}
      />
    </>
  )
}

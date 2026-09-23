import { useParams } from 'react-router'
import { getLevel } from '../../../content'

export function useTopicRoute() {
  const { levelId = '', topicId = '' } = useParams()
  const level = getLevel(levelId)
  const topic = level?.topics.find(({ id }) => id === topicId)
  return level && topic ? { level, topic } : undefined
}

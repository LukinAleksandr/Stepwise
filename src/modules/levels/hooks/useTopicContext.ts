import { useOutletContext } from 'react-router'
import type { Level, Topic } from '../../../content'

export interface TopicContext {
  level: Level
  topic: Topic
}

export const useTopicContext = () => useOutletContext<TopicContext>()

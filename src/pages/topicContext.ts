import { useOutletContext } from 'react-router'
import type { Level, Topic } from '../content'

export interface TopicContext {
  level: Level
  topic: Topic
}

/** Уровень и тема для вкладок внутри TopicLayout. */
export const useTopicContext = () => useOutletContext<TopicContext>()

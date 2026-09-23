import type { Level, Topic } from '../../content'
import type { RouteTab } from '../../shared/ui'
import { levelsPaths } from './paths'

export function getTopicTabs({ id: levelId }: Level, { id: topicId, cards = [], exercises = [] }: Topic): RouteTab[] {
  return [
    { to: levelsPaths.topic(levelId, topicId), label: 'Теория', end: true },
    ...(cards.length ? [{ to: levelsPaths.topicCards(levelId, topicId), label: `Слова · ${cards.length}` }] : []),
    ...(exercises.length ? [{ to: levelsPaths.topicPractice(levelId, topicId), label: 'Практика' }] : []),
  ]
}

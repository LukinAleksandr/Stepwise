import { a1 } from './levels/a1'
import { a2 } from './levels/a2'
import { b1 } from './levels/b1'
import type { Card, Level, Topic, Verb } from './types'
import { verbs as verbList } from './verbs'

export type * from './types'

/** Реестр уровней. Новый уровень = новый файл в levels/ + строчка здесь. */
export const levels: Level[] = [a1, a2, b1]
export const verbs: Verb[] = verbList

export function getLevel(levelId: string): Level | undefined {
  return levels.find((l) => l.id === levelId)
}

export function getTopic(levelId: string, topicId: string): Topic | undefined {
  return getLevel(levelId)?.topics.find((t) => t.id === topicId)
}

// ---------- Ключи прогресса ----------

export const cardKey = (levelId: string, topicId: string, cardId: string) => `card:${levelId}/${topicId}/${cardId}`

export const exerciseKey = (levelId: string, topicId: string, setId: string) =>
  `exercise:${levelId}/${topicId}/${setId}`

export const verbKey = (verb: Verb) => `verb:${verb.base}`

/** Карточка с глобально уникальным ключом для хранения прогресса. */
export interface CardRef extends Card {
  key: string
}

export function topicCards(level: Level, topic: Topic): CardRef[] {
  return (topic.cards ?? []).map((c) => ({ ...c, key: cardKey(level.id, topic.id, c.id) }))
}

export function levelCards(level: Level): CardRef[] {
  return level.topics.flatMap((t) => topicCards(level, t))
}

export function allCards(): CardRef[] {
  return levels.flatMap(levelCards)
}

export function levelExerciseKeys(level: Level): string[] {
  return level.topics.flatMap((t) => (t.exercises ?? []).map((s) => exerciseKey(level.id, t.id, s.id)))
}

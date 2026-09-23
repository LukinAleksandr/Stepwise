/**
 * Модель контента. Все уровни и темы описываются этими типами —
 * компоненты ничего не знают о конкретном уровне.
 */

export type LevelCode = 'A1' | 'A2' | 'B1' | 'B2' | 'C1'

export interface Level {
  /** Используется в URL: /level/a1 */
  id: string
  code: LevelCode
  title: string
  description: string
  topics: Topic[]
}

export interface Topic {
  /** Уникален в пределах уровня, используется в URL */
  id: string
  title: string
  summary?: string
  theory: TheoryBlock[]
  cards?: Card[]
  exercises?: ExerciseSet[]
}

// ---------- Теория ----------
// В строковых полях поддерживается **жирный** текст.

export type TheoryBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'rule'; title?: string; text: string }
  | { type: 'note'; tone?: 'tip' | 'warning'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'examples'; items: Example[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }

export interface Example {
  en: string
  ru?: string
}

// ---------- Карточки ----------

export interface Card {
  /** Уникален в пределах темы. Прогресс хранится по ключу level/topic/id */
  id: string
  en: string
  ru: string
  transcription?: string
  example?: string
  exampleRu?: string
}

// ---------- Глаголы ----------

export interface Verb {
  base: string
  /** Альтернативы через "/": "was/were" */
  past: string
  participle: string
  ru: string
  level: LevelCode
}

// ---------- Практика ----------

export interface ExerciseSet {
  /** Уникален в пределах темы */
  id: string
  title: string
  instruction?: string
  items: ExerciseItem[]
}

export type ExerciseItem = GapItem | OrderItem | ChoiceItem

/**
 * Вставить пропущенное слово.
 * Пропуски в фигурных скобках, альтернативы через "|":
 *   "She {is|'s} a doctor. They {are not|aren't} here."
 */
export interface GapItem {
  kind: 'gap'
  text: string
  /** Подсказка, например начальная форма глагола: "(be)" */
  hint?: string
  translation?: string
}

/** Собрать предложение из слов. Слова берутся из первого варианта answer. */
export interface OrderItem {
  kind: 'order'
  answer: string | string[]
  /** Лишние слова-ловушки */
  distractors?: string[]
  /** Обязательно: без перевода с лишними словами непонятно, какое предложение собирать */
  translation: string
}

/** Выбрать правильный вариант. */
export interface ChoiceItem {
  kind: 'choice'
  question: string
  options: string[]
  /** Индекс правильного варианта */
  answer: number
  explanation?: string
}

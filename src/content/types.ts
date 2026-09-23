export type LevelCode = 'A1' | 'A2' | 'B1' | 'B2' | 'C1'

export interface Level {
  id: string
  code: LevelCode
  title: string
  description: string
  topics: Topic[]
}

export interface Topic {
  id: string
  title: string
  summary?: string
  theory: TheoryBlock[]
  cards?: Card[]
  exercises?: ExerciseSet[]
}

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

export interface Card {
  id: string
  en: string
  ru: string
  transcription?: string
  example?: string
  exampleRu?: string
}

export interface Verb {
  base: string
  past: string
  participle: string
  ru: string
  level: LevelCode
}

export interface ExerciseSet {
  id: string
  title: string
  instruction?: string
  items: ExerciseItem[]
}

export type ExerciseItem = GapItem | OrderItem | ChoiceItem

export interface GapItem {
  kind: 'gap'
  // Gaps in braces, alternatives separated by "|": "She {is|'s} a doctor."
  text: string
  hint?: string
  translation?: string
}

export interface OrderItem {
  kind: 'order'
  answer: string | string[]
  distractors?: string[]
  translation: string
}

export interface ChoiceItem {
  kind: 'choice'
  question: string
  options: string[]
  answer: number
  explanation?: string
}

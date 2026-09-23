export type GapSegment = { type: 'text'; value: string } | GapToken

export interface GapToken {
  type: 'gap'
  answers: string[]
  index: number
}

const GAP_PATTERN = /\{([^}]+)\}/g

export function normalizeAnswer(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?,;:]+$/, '')
    .trim()
}

export function isCorrect(input: string, accepted: string | string[]): boolean {
  const normalized = normalizeAnswer(input)
  return normalized !== '' && toArray(accepted).some((variant) => normalizeAnswer(variant) === normalized)
}

export const toArray = <T>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value])

export const isGap = (segment: GapSegment): segment is GapToken => segment.type === 'gap'

export function parseGaps(text: string): GapSegment[] {
  const segments: GapSegment[] = []
  let cursor = 0
  let index = 0
  for (const { 0: match, 1: body, index: start } of text.matchAll(GAP_PATTERN)) {
    if (start > cursor) segments.push({ type: 'text', value: text.slice(cursor, start) })
    segments.push({ type: 'gap', answers: body.split('|').map((answer) => answer.trim()), index: index++ })
    cursor = start + match.length
  }
  if (cursor < text.length) segments.push({ type: 'text', value: text.slice(cursor) })
  return segments
}

export function fillGaps(segments: GapSegment[]): string {
  return segments.map((segment) => (isGap(segment) ? segment.answers[0] : segment.value)).join('')
}

export function splitSentence(sentence: string): { words: string[]; ending: string } {
  const trimmed = sentence.trim()
  const ending = trimmed.match(/[.!?]*$/)?.[0] ?? ''
  const words = trimmed
    .slice(0, trimmed.length - ending.length)
    .split(/\s+/)
    .filter(Boolean)
  return { words, ending }
}

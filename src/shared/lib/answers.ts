/** Приводит ответ к сравнимому виду: регистр, пробелы, апострофы, финальная пунктуация. */
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
  const variants = Array.isArray(accepted) ? accepted : [accepted]
  const normalized = normalizeAnswer(input)
  return normalized !== '' && variants.some((v) => normalizeAnswer(v) === normalized)
}

export type GapSegment = { type: 'text'; value: string } | { type: 'gap'; answers: string[]; index: number }

/** "She {is|'s} here" → [text "She ", gap [is, 's], text " here"] */
export function parseGaps(text: string): GapSegment[] {
  const segments: GapSegment[] = []
  const re = /\{([^}]+)\}/g
  let last = 0
  let index = 0
  for (const match of text.matchAll(re)) {
    if (match.index > last) segments.push({ type: 'text', value: text.slice(last, match.index) })
    segments.push({ type: 'gap', answers: match[1].split('|').map((a) => a.trim()), index: index++ })
    last = match.index + match[0].length
  }
  if (last < text.length) segments.push({ type: 'text', value: text.slice(last) })
  return segments
}

/** Предложение с первыми вариантами ответов вместо пропусков. */
export function fillGaps(segments: GapSegment[]): string {
  return segments.map((s) => (s.type === 'text' ? s.value : s.answers[0])).join('')
}

/** "Where are you from?" → { words: [Where, are, you, from], ending: "?" } */
export function splitSentence(sentence: string): { words: string[]; ending: string } {
  const trimmed = sentence.trim()
  const ending = trimmed.match(/[.!?]*$/)?.[0] ?? ''
  const words = trimmed
    .slice(0, trimmed.length - ending.length)
    .split(/\s+/)
    .filter(Boolean)
  return { words, ending }
}

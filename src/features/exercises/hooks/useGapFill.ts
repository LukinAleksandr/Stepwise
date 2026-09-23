import { useMemo, useState } from 'react'
import type { GapItem } from '../../../content'
import { fillGaps, isCorrect, isGap, parseGaps } from '../../../shared/lib/answers'

export function useGapFill({ text }: GapItem, onDone: (correct: boolean) => void) {
  const segments = useMemo(() => parseGaps(text), [text])
  const gaps = useMemo(() => segments.filter(isGap), [segments])
  const [values, setValues] = useState(() => gaps.map(() => ''))
  const [results, setResults] = useState<boolean[] | null>(null)

  const setValue = (gapIndex: number, value: string) =>
    setValues((current) => current.map((item, index) => (index === gapIndex ? value : item)))

  const check = () => {
    if (results) return
    const checked = gaps.map(({ answers }, index) => isCorrect(values[index], answers))
    setResults(checked)
    onDone(checked.every(Boolean))
  }

  return {
    segments,
    values,
    results,
    isChecked: results !== null,
    isCorrect: results?.every(Boolean) ?? false,
    canCheck: values.every((value) => value.trim() !== ''),
    correctSentence: fillGaps(segments),
    setValue,
    check,
  }
}

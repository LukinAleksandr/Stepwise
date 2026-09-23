import { useState } from 'react'
import type { ChoiceItem } from '../../../content'

export type OptionState = 'idle' | 'correct' | 'wrong' | 'muted'

export function useChoice({ answer }: ChoiceItem, onDone: (correct: boolean) => void) {
  const [selected, setSelected] = useState<number | null>(null)
  const isAnswered = selected !== null

  const choose = (index: number) => {
    if (isAnswered) return
    setSelected(index)
    onDone(index === answer)
  }

  const optionState = (index: number): OptionState => {
    if (!isAnswered) return 'idle'
    if (index === answer) return 'correct'
    return index === selected ? 'wrong' : 'muted'
  }

  return { isAnswered, isCorrect: selected === answer, choose, optionState }
}

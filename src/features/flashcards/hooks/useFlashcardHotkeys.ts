import { type HotkeyItem, useHotkeys } from '@mantine/hooks'
import type { Grade } from '../../../shared/srs'
import { GRADE_OPTIONS } from '../grades'

interface HotkeyHandlers {
  enabled: boolean
  flipped: boolean
  onFlip: () => void
  onRate: (grade: Grade) => void
}

export function useFlashcardHotkeys({ enabled, flipped, onFlip, onRate }: HotkeyHandlers) {
  const gradeHotkeys: HotkeyItem[] = GRADE_OPTIONS.map(({ hotkey, grade }) => [
    hotkey,
    () => enabled && flipped && onRate(grade),
  ])
  useHotkeys([['space', () => enabled && onFlip()], ...gradeHotkeys])
}

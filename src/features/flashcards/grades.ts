import type { Grade } from '../../shared/srs'

export interface GradeOption {
  grade: Grade
  label: string
  color: string
  hotkey: string
}

export const GRADE_OPTIONS: GradeOption[] = [
  { grade: 'again', label: 'Не помню', color: 'red', hotkey: '1' },
  { grade: 'good', label: 'Помню', color: 'indigo', hotkey: '2' },
  { grade: 'easy', label: 'Легко', color: 'teal', hotkey: '3' },
]

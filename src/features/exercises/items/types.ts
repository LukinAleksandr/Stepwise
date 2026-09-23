import type { ExerciseItem } from '../../../content'

export interface ItemProps<T extends ExerciseItem> {
  item: T
  onDone: (correct: boolean) => void
}

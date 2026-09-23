import type { ExerciseItem } from '../../content'

/**
 * Общий контракт всех типов заданий: компонент сам управляет вводом и проверкой,
 * а по завершении один раз вызывает onDone. Новый тип задания должен реализовать этот интерфейс
 * и быть добавлен в ExerciseItemView.
 */
export interface ItemProps<T extends ExerciseItem> {
  item: T
  onDone: (correct: boolean) => void
}

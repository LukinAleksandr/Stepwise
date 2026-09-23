import type { ExerciseItem } from '../../content'
import { GapFillItem } from './GapFillItem'
import { MultipleChoiceItem } from './MultipleChoiceItem'
import { SentenceBuilderItem } from './SentenceBuilderItem'

/** Выбирает компонент по типу задания. */
export function ExerciseItemView({ item, onDone }: { item: ExerciseItem; onDone: (correct: boolean) => void }) {
  switch (item.kind) {
    case 'gap':
      return <GapFillItem item={item} onDone={onDone} />
    case 'order':
      return <SentenceBuilderItem item={item} onDone={onDone} />
    case 'choice':
      return <MultipleChoiceItem item={item} onDone={onDone} />
  }
}

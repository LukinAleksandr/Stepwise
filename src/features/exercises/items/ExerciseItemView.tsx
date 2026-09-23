import type { ExerciseItem } from '../../../content'
import { GapFillItem } from './GapFillItem'
import { MultipleChoiceItem } from './MultipleChoiceItem'
import { SentenceBuilderItem } from './SentenceBuilderItem'
import type { ItemProps } from './types'

export function ExerciseItemView({ item, onDone }: ItemProps<ExerciseItem>) {
  switch (item.kind) {
    case 'gap':
      return <GapFillItem item={item} onDone={onDone} />
    case 'order':
      return <SentenceBuilderItem item={item} onDone={onDone} />
    case 'choice':
      return <MultipleChoiceItem item={item} onDone={onDone} />
  }
}

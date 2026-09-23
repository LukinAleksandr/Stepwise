import { TheoryView } from '../../../features/theory'
import { useTopicContext } from '../hooks/useTopicContext'

export function TopicTheoryTab() {
  const {
    topic: { theory },
  } = useTopicContext()
  return <TheoryView blocks={theory} />
}

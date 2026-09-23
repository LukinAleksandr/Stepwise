import { Stack } from '@mantine/core'
import { useParams } from 'react-router'
import { getLevel } from '../../../content'
import { NotFound, PageHeader } from '../../../shared/ui'
import { TopicCard } from '../components/TopicCard'
import { levelsPaths } from '../paths'

export function LevelPage() {
  const { levelId = '' } = useParams()
  const level = getLevel(levelId)
  if (!level) return <NotFound />

  const { code, title, description, topics } = level

  return (
    <>
      <PageHeader
        back={{ to: levelsPaths.root, label: 'Все уровни' }}
        title={`${code} · ${title}`}
        subtitle={description}
      />
      <Stack gap="sm">
        {topics.map((topic, index) => (
          <TopicCard key={topic.id} level={level} topic={topic} number={index + 1} />
        ))}
      </Stack>
    </>
  )
}

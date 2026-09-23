import { Outlet } from 'react-router'
import { NotFound, PageHeader, RouteTabs } from '../../../shared/ui'
import type { TopicContext } from '../hooks/useTopicContext'
import { useTopicRoute } from '../hooks/useTopicRoute'
import { levelsPaths } from '../paths'
import { getTopicTabs } from '../topicTabs'

export function TopicLayout() {
  const route = useTopicRoute()
  if (!route) return <NotFound />

  const { level, topic } = route
  const { id: levelId, code, title: levelTitle } = level
  const { title, summary } = topic

  return (
    <>
      <PageHeader
        back={{ to: levelsPaths.level(levelId), label: `${code} · ${levelTitle}` }}
        title={title}
        subtitle={summary}
      />
      <RouteTabs items={getTopicTabs(level, topic)} />
      <Outlet context={route satisfies TopicContext} />
    </>
  )
}

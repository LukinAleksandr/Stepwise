import { Outlet } from 'react-router'
import { PageHeader, RouteTabs } from '../../../shared/ui'
import { verbsPaths } from '../paths'

const TABS = [
  { to: verbsPaths.table, label: 'Таблица', end: true },
  { to: verbsPaths.train, label: 'Тренажёр' },
]

export function VerbsLayout() {
  return (
    <>
      <PageHeader title="Неправильные глаголы" subtitle="Три формы: инфинитив, Past Simple, Past Participle" />
      <RouteTabs items={TABS} />
      <Outlet />
    </>
  )
}

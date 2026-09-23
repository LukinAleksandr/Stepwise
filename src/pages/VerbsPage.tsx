import { Outlet } from 'react-router'
import { paths } from '../app/paths'
import { verbs } from '../content'
import { VerbTable } from '../features/verbs/VerbTable'
import { VerbTrainer } from '../features/verbs/VerbTrainer'
import { PageHeader, RouteTabs } from '../shared/ui'

export function VerbsLayout() {
  return (
    <>
      <PageHeader title="Неправильные глаголы" subtitle="Три формы: инфинитив, Past Simple, Past Participle" />
      <RouteTabs
        items={[
          { to: paths.verbs, label: 'Таблица', end: true },
          { to: paths.verbsTrain, label: 'Тренажёр' },
        ]}
      />
      <Outlet />
    </>
  )
}

export const VerbsTableTab = () => <VerbTable verbs={verbs} />
export const VerbsTrainTab = () => <VerbTrainer verbs={verbs} />

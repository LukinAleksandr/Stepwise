import { PageHeader } from '../../../shared/ui'
import { LevelList } from '../components/LevelList'

export function LevelsPage() {
  return (
    <>
      <PageHeader title="Уровни" subtitle="От Beginner до Advanced — тема за темой" />
      <LevelList />
    </>
  )
}

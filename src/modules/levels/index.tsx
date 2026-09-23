import { IconBook2 } from '@tabler/icons-react'
import type { AppModule } from '../types'
import { LevelList } from './components/LevelList'
import { ExercisePage } from './pages/ExercisePage'
import { LevelPage } from './pages/LevelPage'
import { LevelsPage } from './pages/LevelsPage'
import { TopicCardsTab } from './pages/TopicCardsTab'
import { TopicLayout } from './pages/TopicLayout'
import { TopicPracticeTab } from './pages/TopicPracticeTab'
import { TopicTheoryTab } from './pages/TopicTheoryTab'
import { BASE_PATH } from './paths'

export const levelsModule: AppModule = {
  id: 'levels',
  basePath: BASE_PATH,
  nav: { label: 'Уровни', icon: IconBook2 },
  homeWidget: { component: LevelList, order: 10, span: 'full' },
  routes: [
    { index: true, element: <LevelsPage /> },
    { path: ':levelId', element: <LevelPage /> },
    {
      path: ':levelId/:topicId',
      element: <TopicLayout />,
      children: [
        { index: true, element: <TopicTheoryTab /> },
        { path: 'cards', element: <TopicCardsTab /> },
        { path: 'practice', element: <TopicPracticeTab /> },
        { path: 'practice/:setId', element: <ExercisePage /> },
      ],
    },
  ],
}

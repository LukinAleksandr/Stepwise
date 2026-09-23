import { createHashRouter } from 'react-router'
import { ExercisePage } from '../pages/ExercisePage'
import { HomePage } from '../pages/HomePage'
import { LevelPage } from '../pages/LevelPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ReviewPage } from '../pages/ReviewPage'
import { TopicCardsTab, TopicLayout, TopicPracticeTab, TopicTheoryTab } from '../pages/topic'
import { VerbsLayout, VerbsTableTab, VerbsTrainTab } from '../pages/VerbsPage'
import { Layout } from './Layout'

// Hash-роутинг: статический хостинг без настройки сервера (GitHub Pages, Netlify, file://).
export const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'level/:levelId', element: <LevelPage /> },
      {
        path: 'level/:levelId/:topicId',
        element: <TopicLayout />,
        children: [
          { index: true, element: <TopicTheoryTab /> },
          { path: 'cards', element: <TopicCardsTab /> },
          { path: 'practice', element: <TopicPracticeTab /> },
          { path: 'practice/:setId', element: <ExercisePage /> },
        ],
      },
      { path: 'review', element: <ReviewPage /> },
      {
        path: 'verbs',
        element: <VerbsLayout />,
        children: [
          { index: true, element: <VerbsTableTab /> },
          { path: 'train', element: <VerbsTrainTab /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

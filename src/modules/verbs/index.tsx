import { IconTextGrammar } from '@tabler/icons-react'
import type { AppModule } from '../types'
import { VerbsWidget } from './components/VerbsWidget'
import { VerbsLayout } from './pages/VerbsLayout'
import { VerbsTablePage } from './pages/VerbsTablePage'
import { VerbsTrainPage } from './pages/VerbsTrainPage'
import { BASE_PATH } from './paths'

export const verbsModule: AppModule = {
  id: 'verbs',
  basePath: BASE_PATH,
  nav: { label: 'Глаголы', icon: IconTextGrammar },
  homeWidget: { component: VerbsWidget, order: 2, span: 'half' },
  routes: [
    {
      element: <VerbsLayout />,
      children: [
        { index: true, element: <VerbsTablePage /> },
        { path: 'train', element: <VerbsTrainPage /> },
      ],
    },
  ],
}

import { IconCards } from '@tabler/icons-react'
import type { AppModule } from '../types'
import { BASE_PATH } from './paths'
import { ReviewPage } from './ReviewPage'
import { ReviewWidget } from './ReviewWidget'

export const reviewModule: AppModule = {
  id: 'review',
  basePath: BASE_PATH,
  nav: { label: 'Повторение', icon: IconCards },
  homeWidget: { component: ReviewWidget, order: 1, span: 'half' },
  routes: [{ index: true, element: <ReviewPage /> }],
}

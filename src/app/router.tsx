import { createHashRouter } from 'react-router'
import { modules } from '../modules'
import { NotFound } from '../shared/ui'
import { HomePage } from './HomePage'
import { Layout } from './layout/Layout'

const moduleRoutes = modules.map(({ basePath, routes }) => ({ path: basePath.slice(1), children: routes }))

export const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <HomePage /> }, ...moduleRoutes, { path: '*', element: <NotFound /> }],
  },
])

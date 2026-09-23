import { Grid } from '@mantine/core'
import { modules } from '../modules'
import { PageHeader } from '../shared/ui'

const SPAN = { half: { base: 12, sm: 6 }, full: 12 }

const widgets = modules
  .flatMap(({ id, homeWidget }) => (homeWidget ? [{ id, ...homeWidget }] : []))
  .sort((a, b) => a.order - b.order)

export function HomePage() {
  return (
    <>
      <PageHeader title="Английский шаг за шагом" subtitle="Выберите уровень или повторите слова" />
      <Grid>
        {widgets.map(({ id, component: Widget, span }) => (
          <Grid.Col key={id} span={SPAN[span]}>
            <Widget />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}

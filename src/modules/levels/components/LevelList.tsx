import { Stack } from '@mantine/core'
import { levels } from '../../../content'
import { LevelCard } from './LevelCard'

export function LevelList() {
  return (
    <Stack>
      {levels.map((level) => (
        <LevelCard key={level.id} level={level} />
      ))}
    </Stack>
  )
}

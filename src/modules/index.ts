import { levelsModule } from './levels'
import { reviewModule } from './review'
import type { AppModule } from './types'
import { verbsModule } from './verbs'

export const modules: AppModule[] = [levelsModule, reviewModule, verbsModule]

export type { AppModule } from './types'

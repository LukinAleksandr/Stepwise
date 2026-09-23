import type { Level } from '../../types'
import { articles } from './topics/articles'
import { can } from './topics/can'
import { demonstratives } from './topics/demonstratives'
import { frequency } from './topics/frequency'
import { haveGot } from './topics/have-got'
import { numbersTime } from './topics/numbers-time'
import { plurals } from './topics/plurals'
import { prepositions } from './topics/prepositions'
import { presentContinuous } from './topics/present-continuous'
import { presentSimple } from './topics/present-simple'
import { presentSimpleQuestions } from './topics/present-simple-questions'
import { pronouns } from './topics/pronouns'
import { questionWords } from './topics/question-words'
import { thereIs } from './topics/there-is'
import { toBe } from './topics/to-be'
import { wasWere } from './topics/was-were'

export const a1: Level = {
  id: 'a1',
  code: 'A1',
  title: 'Beginner',
  description: 'Основы: to be, местоимения, артикли, Present Simple и Continuous, can, was / were.',
  // Порядок тем = рекомендуемый порядок изучения
  topics: [
    toBe,
    pronouns,
    articles,
    plurals,
    demonstratives,
    thereIs,
    haveGot,
    presentSimple,
    presentSimpleQuestions,
    frequency,
    can,
    prepositions,
    presentContinuous,
    questionWords,
    wasWere,
    numbersTime,
  ],
}

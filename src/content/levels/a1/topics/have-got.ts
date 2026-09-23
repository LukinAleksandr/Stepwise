import type { Topic } from '../../../types'

export const haveGot: Topic = {
  id: 'have-got',
  title: 'have got / has got',
  summary: 'У меня есть: семья, внешность, вещи',
  theory: [
    {
      type: 'paragraph',
      text: '**have got** = «у меня есть». Так говорят о вещах, родственниках, внешности и самочувствии.',
    },
    {
      type: 'rule',
      text: "I / you / we / they **have got** ('ve got) · he / she / it **has got** ('s got)",
    },
    {
      type: 'table',
      headers: ['', 'I / you / we / they', 'he / she / it'],
      rows: [
        ['+', "I've got a car.", "She's got a car."],
        ['−', "I haven't got a car.", "She hasn't got a car."],
        ['?', 'Have you got a car?', 'Has she got a car?'],
        ['Ответ', "Yes, I have. / No, I haven't.", "Yes, she has. / No, she hasn't."],
      ],
    },
    {
      type: 'examples',
      items: [
        { en: "I've got two brothers.", ru: 'У меня два брата.' },
        { en: "She's got blue eyes.", ru: 'У неё голубые глаза.' },
        { en: "We haven't got a dog.", ru: 'У нас нет собаки.' },
        { en: 'Have you got a pen?', ru: 'У тебя есть ручка?' },
        { en: "I've got a headache.", ru: 'У меня болит голова.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: "**he's got** = he **has** got, а не he is. Смотрите на слово got.",
    },
    {
      type: 'note',
      tone: 'tip',
      text: "Без got тоже можно: I **have** a car. Но тогда отрицание и вопрос — через do / does: I **don't have** a car. **Do** you **have** a car? Это Present Simple.",
    },
  ],
  cards: [
    { id: 'eyes', en: 'eyes', ru: 'глаза', transcription: '/aɪz/', example: 'She has got green eyes.' },
    { id: 'hair', en: 'hair', ru: 'волосы', transcription: '/heə/', example: 'He has got short hair.' },
    { id: 'face', en: 'face', ru: 'лицо', transcription: '/feɪs/' },
    { id: 'nose', en: 'nose', ru: 'нос', transcription: '/nəʊz/' },
    { id: 'mouth', en: 'mouth', ru: 'рот', transcription: '/maʊθ/' },
    { id: 'ear', en: 'ear', ru: 'ухо', transcription: '/ɪə/' },
    { id: 'hand', en: 'hand', ru: 'рука (кисть)', transcription: '/hænd/' },
    { id: 'beard', en: 'beard', ru: 'борода', transcription: '/bɪəd/' },
    { id: 'long', en: 'long', ru: 'длинный', transcription: '/lɒŋ/' },
    { id: 'short', en: 'short', ru: 'короткий; невысокий', transcription: '/ʃɔːt/' },
    { id: 'curly', en: 'curly', ru: 'кудрявый', transcription: '/ˈkɜːli/' },
    {
      id: 'headache',
      en: 'headache',
      ru: 'головная боль',
      transcription: '/ˈhedeɪk/',
      example: "I've got a headache.",
    },
    { id: 'cold', en: 'a cold', ru: 'простуда', example: "He's got a cold." },
    { id: 'pet', en: 'pet', ru: 'домашнее животное', transcription: '/pet/', example: 'Have you got a pet?' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте have / has (got)',
      items: [
        { kind: 'gap', text: "I {have got|'ve got} a sister.", hint: 'have got', translation: 'У меня есть сестра.' },
        {
          kind: 'gap',
          text: "My brother {has got|'s got} a new bike.",
          hint: 'have got',
          translation: 'У моего брата новый велосипед.',
        },
        { kind: 'gap', text: "We {have not got|haven't got} a car.", hint: 'not', translation: 'У нас нет машины.' },
        {
          kind: 'gap',
          text: "She {has not got|hasn't got} any pets.",
          hint: 'not',
          translation: 'У неё нет домашних животных.',
        },
        { kind: 'gap', text: '{Have} you got a pen? — Yes, I {have}.', translation: 'У тебя есть ручка? — Да.' },
        {
          kind: 'gap',
          text: "{Has} your flat got a balcony? — No, it {hasn't|has not}.",
          translation: 'В твоей квартире есть балкон? — Нет.',
        },
        {
          kind: 'gap',
          text: "They {have got|'ve got} three children.",
          hint: 'have got',
          translation: 'У них трое детей.',
        },
        {
          kind: 'gap',
          text: "Tom {has got|'s got} short dark hair.",
          hint: 'have got',
          translation: 'У Тома короткие тёмные волосы.',
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: 'She ___ got green eyes.', options: ['have', 'has'], answer: 1 },
        { kind: 'choice', question: '___ you got a car?', options: ['Has', 'Have', 'Do'], answer: 1 },
        { kind: 'choice', question: 'I ___ got a brother.', options: ["haven't", "hasn't"], answer: 0 },
        { kind: 'choice', question: 'Has he got a dog? — Yes, he ___.', options: ['have', 'has', 'is'], answer: 1 },
        {
          kind: 'choice',
          question: "He's got a cold. = He ___ got a cold.",
          options: ['is', 'has'],
          answer: 1,
          explanation: "Перед **got** сокращение 's — это **has**.",
        },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        { kind: 'order', answer: 'I have got two sisters.', translation: 'У меня две сестры.', distractors: ['has'] },
        { kind: 'order', answer: 'Have you got a pen?', translation: 'У тебя есть ручка?', distractors: ['Has'] },
        {
          kind: 'order',
          answer: 'She has got long curly hair.',
          translation: 'У неё длинные кудрявые волосы.',
          distractors: ['have'],
        },
        { kind: 'order', answer: "We haven't got a garden.", translation: 'У нас нет сада.', distractors: ["hasn't"] },
        {
          kind: 'order',
          answer: 'Has your brother got a car?',
          translation: 'У твоего брата есть машина?',
          distractors: ['Have'],
        },
      ],
    },
  ],
}

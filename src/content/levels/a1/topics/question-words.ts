import type { Topic } from '../../../types'

export const questionWords: Topic = {
  id: 'question-words',
  title: 'Вопросительные слова',
  summary: 'What, Where, When, Why, How и порядок слов в вопросе',
  theory: [
    {
      type: 'table',
      headers: ['Слово', 'Перевод', 'Пример'],
      rows: [
        ['What', 'что? какой?', 'What is your name?'],
        ['Who', 'кто?', 'Who is that man?'],
        ['Where', 'где? куда?', 'Where do you live?'],
        ['When', 'когда?', 'When is your birthday?'],
        ['Why', 'почему?', 'Why are you sad?'],
        ['How', 'как?', 'How are you?'],
        ['Which', 'который? (из выбора)', 'Which colour do you like: red or blue?'],
        ['Whose', 'чей?', 'Whose bag is this?'],
        ['How much', 'сколько? (неисчисляемое, цена)', 'How much is it?'],
        ['How many', 'сколько? (исчисляемое)', 'How many brothers have you got?'],
        ['How old', 'сколько лет?', 'How old are you?'],
        ['What time', 'во сколько? который час?', 'What time is it?'],
      ],
    },
    {
      type: 'rule',
      title: 'Порядок слов',
      text: '**Вопросительное слово** + вспомогательный глагол (am / is / are, do / does, can) + **подлежащее** + глагол.',
    },
    {
      type: 'examples',
      items: [
        { en: 'Where are you from?', ru: 'Откуда ты?' },
        { en: 'What do you do?', ru: 'Кем ты работаешь?' },
        { en: 'When does the film start?', ru: 'Когда начинается фильм?' },
        { en: 'How can I help you?', ru: 'Чем я могу вам помочь?' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'На **Why?** отвечаем с **Because...**: Why are you tired? — Because I work a lot.',
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'Если **Who** — это подлежащее (кто делает), do / does не нужны: **Who lives** here? (не Who does live here?)',
    },
  ],
  cards: [
    { id: 'what', en: 'what', ru: 'что? какой?' },
    { id: 'who', en: 'who', ru: 'кто?' },
    { id: 'where', en: 'where', ru: 'где? куда?' },
    { id: 'when', en: 'when', ru: 'когда?' },
    { id: 'why', en: 'why', ru: 'почему?' },
    { id: 'how', en: 'how', ru: 'как?' },
    { id: 'which', en: 'which', ru: 'который?' },
    { id: 'whose', en: 'whose', ru: 'чей?' },
    { id: 'how-much', en: 'how much', ru: 'сколько? (неисчисляемое)', example: 'How much is this?' },
    { id: 'how-many', en: 'how many', ru: 'сколько? (исчисляемое)', example: 'How many people?' },
    { id: 'how-old', en: 'how old', ru: 'сколько лет?' },
    { id: 'what-time', en: 'what time', ru: 'во сколько?' },
    { id: 'because', en: 'because', ru: 'потому что', transcription: '/bɪˈkɒz/' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте вопросительное слово',
      items: [
        { kind: 'gap', text: '{Where} do you live? — In Moscow.', translation: 'Где ты живёшь? — В Москве.' },
        {
          kind: 'gap',
          text: '{When} is your birthday? — In April.',
          translation: 'Когда у тебя день рождения? — В апреле.',
        },
        { kind: 'gap', text: '{Who} is that man? — My uncle.', translation: 'Кто этот мужчина? — Мой дядя.' },
        { kind: 'gap', text: "{How} are you? — I'm fine, thanks.", translation: 'Как дела? — Хорошо, спасибо.' },
        {
          kind: 'gap',
          text: "{Why} are you sad? — Because it's raining.",
          translation: 'Почему ты грустишь? — Потому что идёт дождь.',
        },
        { kind: 'gap', text: '{How many} children have they got? — Two.', translation: 'Сколько у них детей? — Двое.' },
        {
          kind: 'gap',
          text: '{How much} is this T-shirt? — Ten pounds.',
          translation: 'Сколько стоит эта футболка? — Десять фунтов.',
        },
        {
          kind: 'gap',
          text: "{How old} is your sister? — She's twelve.",
          translation: 'Сколько лет твоей сестре? — Двенадцать.',
        },
        {
          kind: 'gap',
          text: '{What time|When} does the lesson start? — At ten.',
          translation: 'Во сколько начинается урок? — В десять.',
        },
        { kind: 'gap', text: "{Whose} bag is this? — It's Anna's.", translation: 'Чья это сумка? — Анны.' },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        {
          kind: 'choice',
          question: '___ milk do you need?',
          options: ['How many', 'How much'],
          answer: 1,
          explanation: '**milk** — неисчисляемое → How much.',
        },
        { kind: 'choice', question: '___ do you go to work? — By bus.', options: ['How', 'What', 'Where'], answer: 0 },
        {
          kind: 'choice',
          question: '___ is your favourite colour? — Blue.',
          options: ['What', 'Who', 'Why'],
          answer: 0,
        },
        {
          kind: 'choice',
          question: 'Какой вопрос правильный?',
          options: ['Who lives here?', 'Who does live here?', 'Who do live here?'],
          answer: 0,
          explanation: 'Who — подлежащее, поэтому без do / does.',
        },
        {
          kind: 'choice',
          question: "___ phone is this? — It's my phone.",
          options: ['Who', 'Whose', 'Which'],
          answer: 1,
        },
      ],
    },
    {
      id: 'order',
      title: 'Соберите вопрос',
      items: [
        {
          kind: 'order',
          answer: 'Where do your parents live?',
          translation: 'Где живут твои родители?',
          distractors: ['does'],
        },
        { kind: 'order', answer: 'What time is it?', translation: 'Который час?', distractors: ['does'] },
        {
          kind: 'order',
          answer: 'How old is your brother?',
          translation: 'Сколько лет твоему брату?',
          distractors: ['has'],
        },
        {
          kind: 'order',
          answer: 'Why are you so happy?',
          translation: 'Почему ты такой счастливый?',
          distractors: ['do'],
        },
        {
          kind: 'order',
          answer: 'How many languages can you speak?',
          translation: 'На скольких языках ты говоришь?',
          distractors: ['much'],
        },
        {
          kind: 'order',
          answer: 'Who is your favourite singer?',
          translation: 'Кто твой любимый певец?',
          distractors: ['Whose'],
        },
      ],
    },
  ],
}

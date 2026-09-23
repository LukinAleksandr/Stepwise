import type { Topic } from '../../../types'

export const prepositions: Topic = {
  id: 'prepositions',
  title: 'Предлоги in / on / at',
  summary: 'Предлоги времени и места',
  theory: [
    { type: 'heading', text: 'Время' },
    {
      type: 'table',
      headers: ['Предлог', 'Когда', 'Примеры'],
      rows: [
        ['**at**', 'точное время, праздники, выражения', "at 7 o'clock, at night, at the weekend, at Christmas"],
        ['**on**', 'дни недели и даты', 'on Monday, on 5 May, on my birthday'],
        ['**in**', 'месяцы, годы, сезоны, части дня', 'in June, in 2020, in summer, in the morning'],
      ],
    },
    { type: 'note', tone: 'warning', text: 'in the morning, in the afternoon, in the evening, но **at night**.' },
    {
      type: 'note',
      tone: 'tip',
      text: 'Со словами every, next, last, this предлог не нужен: every day, next week, last year.',
    },
    { type: 'heading', text: 'Место' },
    {
      type: 'table',
      headers: ['Предлог', 'Значение', 'Примеры'],
      rows: [
        ['**in**', 'внутри', 'in the box, in the room, in London, in Canada'],
        ['**on**', 'на поверхности', 'on the table, on the wall, on the floor'],
        ['**at**', 'в точке, у места, на мероприятии', 'at the bus stop, at home, at work, at school, at a party'],
      ],
    },
    {
      type: 'examples',
      items: [
        { en: 'The keys are on the table.', ru: 'Ключи на столе.' },
        { en: 'My parents live in Montreal.', ru: 'Мои родители живут в Монреале.' },
        { en: "I'm at work now.", ru: 'Я сейчас на работе.' },
      ],
    },
    { type: 'heading', text: 'Другие предлоги места' },
    {
      type: 'list',
      items: [
        '**under** — под',
        '**next to** — рядом с',
        '**between** — между',
        '**behind** — за, позади',
        '**in front of** — перед',
        '**near** — недалеко от',
        '**opposite** — напротив',
      ],
    },
  ],
  cards: [
    { id: 'under', en: 'under', ru: 'под', example: 'The cat is under the bed.' },
    { id: 'next-to', en: 'next to', ru: 'рядом с', example: 'The bank is next to the cafe.' },
    { id: 'between', en: 'between', ru: 'между', transcription: '/bɪˈtwiːn/' },
    { id: 'behind', en: 'behind', ru: 'за, позади', transcription: '/bɪˈhaɪnd/' },
    { id: 'in-front-of', en: 'in front of', ru: 'перед', example: 'There is a tree in front of the house.' },
    { id: 'near', en: 'near', ru: 'недалеко от, рядом' },
    { id: 'opposite', en: 'opposite', ru: 'напротив', transcription: '/ˈɒpəzɪt/' },
    { id: 'above', en: 'above', ru: 'над', transcription: '/əˈbʌv/' },
    { id: 'at-work', en: 'at work', ru: 'на работе' },
    { id: 'at-school', en: 'at school', ru: 'в школе' },
    { id: 'on-the-wall', en: 'on the wall', ru: 'на стене' },
    { id: 'in-the-morning', en: 'in the morning', ru: 'утром' },
    { id: 'at-night', en: 'at night', ru: 'ночью' },
    { id: 'at-the-weekend', en: 'at the weekend', ru: 'в выходные' },
  ],
  exercises: [
    {
      id: 'time',
      title: 'Предлоги времени',
      items: [
        { kind: 'gap', text: "The lesson starts {at} 9 o'clock.", translation: 'Урок начинается в 9 часов.' },
        { kind: 'gap', text: 'My birthday is {in} May.', translation: 'Мой день рождения в мае.' },
        { kind: 'gap', text: "I don't work {on} Sundays.", translation: 'Я не работаю по воскресеньям.' },
        { kind: 'gap', text: 'We usually go to the sea {in} summer.', translation: 'Летом мы обычно ездим на море.' },
        { kind: 'gap', text: 'I read {in} the evening.', translation: 'Я читаю вечером.' },
        { kind: 'gap', text: 'He works {at} night.', translation: 'Он работает ночью.' },
        { kind: 'gap', text: 'See you {on} Friday!', translation: 'Увидимся в пятницу!' },
      ],
    },
    {
      id: 'place',
      title: 'Предлоги места',
      items: [
        { kind: 'gap', text: 'The keys are {on} the table.', translation: 'Ключи на столе.' },
        { kind: 'gap', text: 'My parents live {in} Montreal.', translation: 'Мои родители живут в Монреале.' },
        { kind: 'gap', text: 'Wait for me {at} the bus stop.', translation: 'Жди меня на остановке.' },
        { kind: 'gap', text: 'The milk is {in} the fridge.', translation: 'Молоко в холодильнике.' },
        { kind: 'gap', text: 'There is a picture {on} the wall.', translation: 'На стене картина.' },
        { kind: 'gap', text: "I'm {at} work now.", translation: 'Я сейчас на работе.' },
        { kind: 'gap', text: 'The cat is {under} the bed.', hint: 'под', translation: 'Кошка под кроватью.' },
        { kind: 'gap', text: 'The bank is {next to} the cafe.', hint: 'рядом с', translation: 'Банк рядом с кафе.' },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: '___ Monday', options: ['in', 'on', 'at'], answer: 1 },
        { kind: 'choice', question: '___ 2025', options: ['in', 'on', 'at'], answer: 0 },
        { kind: 'choice', question: '___ the weekend', options: ['in', 'on', 'at'], answer: 2 },
        { kind: 'choice', question: 'I am ___ home.', options: ['in', 'on', 'at'], answer: 2 },
        {
          kind: 'choice',
          question: 'The pharmacy is ___ the bank and the post office.',
          options: ['near', 'between', 'opposite'],
          answer: 1,
          explanation: '**between** A **and** B — между A и B.',
        },
        {
          kind: 'choice',
          question: 'I have breakfast ___.',
          options: ['in the morning', 'at the morning', 'on the morning'],
          answer: 0,
        },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        { kind: 'order', answer: 'The cat is under the table.', translation: 'Кошка под столом.', distractors: ['on'] },
        {
          kind: 'order',
          answer: 'I have a meeting on Monday.',
          translation: 'У меня встреча в понедельник.',
          distractors: ['in'],
        },
        {
          kind: 'order',
          answer: 'We live in a big city.',
          translation: 'Мы живём в большом городе.',
          distractors: ['at'],
        },
        {
          kind: 'order',
          answer: 'The bus stop is opposite the park.',
          translation: 'Остановка напротив парка.',
          distractors: ['of'],
        },
      ],
    },
  ],
}

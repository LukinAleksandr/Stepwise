import type { Topic } from '../../../types'

export const presentSimple: Topic = {
  id: 'present-simple',
  title: 'Present Simple: утверждения',
  summary: 'Привычки, распорядок дня, факты. Окончание -s в 3-м лице',
  theory: [
    {
      type: 'paragraph',
      text: '**Present Simple** — для того, что происходит **регулярно**: привычки, распорядок, факты, расписание.',
    },
    {
      type: 'list',
      items: [
        'every day / every week — каждый день / каждую неделю',
        'on Mondays — по понедельникам',
        'at weekends — по выходным',
        'usually, often, always — обычно, часто, всегда',
      ],
    },
    {
      type: 'rule',
      text: 'I / you / we / they + глагол: I **work**. · he / she / it + глагол**-s**: She **works**.',
    },
    {
      type: 'table',
      headers: ['Глагол оканчивается на', 'Правило', 'Примеры'],
      rows: [
        ['большинство глаголов', '+ **s**', 'work → works, live → lives'],
        ['-s, -sh, -ch, -x, -o', '+ **es**', 'watch → watches, wash → washes, go → goes, do → does'],
        ['согласная + y', 'y → **ies**', 'study → studies, fly → flies'],
        ['гласная + y', '+ **s**', 'play → plays, buy → buys'],
        ['исключение', '', 'have → **has**'],
      ],
    },
    {
      type: 'examples',
      items: [
        { en: 'I work in an office.', ru: 'Я работаю в офисе.' },
        { en: 'She lives in London.', ru: 'Она живёт в Лондоне.' },
        { en: 'Water boils at 100 degrees.', ru: 'Вода кипит при 100 градусах.' },
        { en: 'The train leaves at 7.', ru: 'Поезд отправляется в 7.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'Самая частая ошибка — забыть **-s** в 3-м лице: She **likes** coffee (не She like).',
    },
  ],
  cards: [
    { id: 'get-up', en: 'get up', ru: 'вставать', example: 'I get up at 7.' },
    { id: 'wake-up', en: 'wake up', ru: 'просыпаться', example: 'She wakes up early.' },
    { id: 'have-breakfast', en: 'have breakfast', ru: 'завтракать', example: 'We have breakfast at 8.' },
    { id: 'take-shower', en: 'take a shower', ru: 'принимать душ' },
    { id: 'go-to-work', en: 'go to work', ru: 'ходить на работу', example: 'He goes to work by bus.' },
    { id: 'start-work', en: 'start work', ru: 'начинать работу' },
    { id: 'have-lunch', en: 'have lunch', ru: 'обедать' },
    { id: 'finish-work', en: 'finish work', ru: 'заканчивать работу' },
    { id: 'come-home', en: 'come home', ru: 'приходить домой' },
    { id: 'cook-dinner', en: 'cook dinner', ru: 'готовить ужин' },
    { id: 'have-dinner', en: 'have dinner', ru: 'ужинать' },
    { id: 'watch-tv', en: 'watch TV', ru: 'смотреть телевизор' },
    { id: 'go-to-bed', en: 'go to bed', ru: 'ложиться спать', example: 'I go to bed at 11.' },
    { id: 'every-day', en: 'every day', ru: 'каждый день' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Поставьте глагол в нужную форму',
      items: [
        { kind: 'gap', text: 'I {work} in a bank.', hint: 'work', translation: 'Я работаю в банке.' },
        { kind: 'gap', text: 'My sister {lives} in Ottawa.', hint: 'live', translation: 'Моя сестра живёт в Оттаве.' },
        {
          kind: 'gap',
          text: 'He {watches} TV every evening.',
          hint: 'watch',
          translation: 'Он смотрит телевизор каждый вечер.',
        },
        {
          kind: 'gap',
          text: 'We {play} football on Sundays.',
          hint: 'play',
          translation: 'Мы играем в футбол по воскресеньям.',
        },
        { kind: 'gap', text: 'She {studies} English.', hint: 'study', translation: 'Она изучает английский.' },
        {
          kind: 'gap',
          text: "The shop {opens} at 9 o'clock.",
          hint: 'open',
          translation: 'Магазин открывается в 9 часов.',
        },
        {
          kind: 'gap',
          text: 'My father {goes} to work by car.',
          hint: 'go',
          translation: 'Мой отец ездит на работу на машине.',
        },
        { kind: 'gap', text: 'Tom {has} breakfast at 8.', hint: 'have', translation: 'Том завтракает в 8.' },
        {
          kind: 'gap',
          text: 'They {drink} coffee every morning.',
          hint: 'drink',
          translation: 'Они пьют кофе каждое утро.',
        },
        { kind: 'gap', text: 'My cat {sleeps} all day.', hint: 'sleep', translation: 'Мой кот спит весь день.' },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: 'She ___ tea.', options: ['like', 'likes'], answer: 1 },
        {
          kind: 'choice',
          question: 'My parents ___ in a village.',
          options: ['live', 'lives'],
          answer: 0,
          explanation: 'parents = they → без -s.',
        },
        { kind: 'choice', question: 'He ___ his homework in the evening.', options: ['do', 'dos', 'does'], answer: 2 },
        { kind: 'choice', question: 'Anna ___ the piano.', options: ['plaies', 'plays', 'playes'], answer: 1 },
        { kind: 'choice', question: 'I ___ up at 7.', options: ['get', 'gets'], answer: 0 },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        {
          kind: 'order',
          answer: "I get up at seven o'clock.",
          translation: 'Я встаю в семь часов.',
          distractors: ['gets'],
        },
        {
          kind: 'order',
          answer: 'She works in a hospital.',
          translation: 'Она работает в больнице.',
          distractors: ['work'],
        },
        { kind: 'order', answer: 'We have lunch at one.', translation: 'Мы обедаем в час.', distractors: ['has'] },
        {
          kind: 'order',
          answer: 'My brother goes to bed late.',
          translation: 'Мой брат поздно ложится спать.',
          distractors: ['go'],
        },
        {
          kind: 'order',
          answer: 'The film starts at eight.',
          translation: 'Фильм начинается в восемь.',
          distractors: ['start'],
        },
      ],
    },
  ],
}

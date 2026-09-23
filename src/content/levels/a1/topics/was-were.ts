import type { Topic } from '../../../types'

export const wasWere: Topic = {
  id: 'was-were',
  title: 'was / were',
  summary: 'Прошедшее время глагола to be: был, была, были',
  theory: [
    {
      type: 'paragraph',
      text: '**was / were** — прошедшее время глагола to be: «был, была, было, были».',
    },
    { type: 'rule', text: 'I / he / she / it **was** · we / you / they **were**' },
    {
      type: 'table',
      headers: ['', 'I / he / she / it', 'we / you / they'],
      rows: [
        ['+', 'I was at home.', 'They were tired.'],
        ['−', "I wasn't at home.", "They weren't tired."],
        ['?', 'Was she at home?', 'Were they tired?'],
        ['Ответ', "Yes, she was. / No, she wasn't.", "Yes, they were. / No, they weren't."],
      ],
    },
    {
      type: 'list',
      items: [
        'yesterday — вчера',
        'last night / last week / last year — вчера вечером / на прошлой неделе / в прошлом году',
        'two days ago — два дня назад',
        'in 2010 — в 2010 году',
      ],
    },
    {
      type: 'examples',
      items: [
        { en: 'I was at work yesterday.', ru: 'Вчера я был на работе.' },
        { en: 'We were in Spain last summer.', ru: 'Прошлым летом мы были в Испании.' },
        { en: 'Where were you last night?', ru: 'Где ты был вчера вечером?' },
        { en: "The film wasn't very good.", ru: 'Фильм был не очень.' },
      ],
    },
    {
      type: 'rule',
      title: 'Родился',
      text: 'I **was born** in 1990. — Я родился в 1990. **Where were** you **born**? — Где ты родился?',
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'I was, he was, но you **were** — даже если «ты» один.',
    },
  ],
  cards: [
    { id: 'yesterday', en: 'yesterday', ru: 'вчера', transcription: '/ˈjestədeɪ/' },
    { id: 'last-night', en: 'last night', ru: 'вчера вечером / ночью' },
    { id: 'last-week', en: 'last week', ru: 'на прошлой неделе' },
    { id: 'ago', en: 'ago', ru: 'назад', example: 'two years ago' },
    { id: 'born', en: 'be born', ru: 'родиться', example: 'I was born in Vancouver.' },
    { id: 'party', en: 'party', ru: 'вечеринка' },
    { id: 'great', en: 'great', ru: 'отличный' },
    { id: 'boring', en: 'boring', ru: 'скучный' },
    { id: 'interesting', en: 'interesting', ru: 'интересный', transcription: '/ˈɪntrəstɪŋ/' },
    { id: 'busy', en: 'busy', ru: 'занятой', transcription: '/ˈbɪzi/' },
    { id: 'ill', en: 'ill', ru: 'больной', example: 'I was ill last week.' },
    { id: 'cinema', en: 'cinema', ru: 'кинотеатр' },
    { id: 'trip', en: 'trip', ru: 'поездка' },
    { id: 'weather', en: 'weather', ru: 'погода', transcription: '/ˈweðə/' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте was / were',
      items: [
        { kind: 'gap', text: 'I {was} at home yesterday.', translation: 'Вчера я был дома.' },
        { kind: 'gap', text: 'They {were} in Paris last week.', translation: 'На прошлой неделе они были в Париже.' },
        { kind: 'gap', text: 'The weather {was} great!', translation: 'Погода была отличная!' },
        {
          kind: 'gap',
          text: '{Were} you at work yesterday? — Yes, I {was}.',
          translation: 'Ты был вчера на работе? — Да.',
        },
        { kind: 'gap', text: "We {were not|weren't} tired.", hint: 'not', translation: 'Мы не устали.' },
        {
          kind: 'gap',
          text: "She {was not|wasn't} at the party.",
          hint: 'not',
          translation: 'Её не было на вечеринке.',
        },
        { kind: 'gap', text: 'Where {were} you born?', translation: 'Где ты родился?' },
        { kind: 'gap', text: 'I {was} born in 1998.', translation: 'Я родился в 1998 году.' },
        {
          kind: 'gap',
          text: 'The shops {were} closed on Sunday.',
          translation: 'В воскресенье магазины были закрыты.',
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        {
          kind: 'choice',
          question: 'You ___ late yesterday.',
          options: ['was', 'were'],
          answer: 1,
          explanation: 'С **you** всегда **were**.',
        },
        { kind: 'choice', question: 'It ___ cold last night.', options: ['was', 'were'], answer: 0 },
        { kind: 'choice', question: '___ your parents at home?', options: ['Was', 'Were'], answer: 1 },
        {
          kind: 'choice',
          question: 'Was the film good? — No, it ___.',
          options: ["wasn't", "weren't", "isn't"],
          answer: 0,
        },
        { kind: 'choice', question: 'I ___ born in Toronto.', options: ['am', 'was', 'were'], answer: 1 },
        {
          kind: 'choice',
          question: 'My friends ___ at the cafe two hours ago.',
          options: ['are', 'was', 'were'],
          answer: 2,
        },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        {
          kind: 'order',
          answer: 'I was very busy yesterday.',
          translation: 'Вчера я был очень занят.',
          distractors: ['were'],
        },
        {
          kind: 'order',
          answer: 'Where were you last night?',
          translation: 'Где ты был вчера вечером?',
          distractors: ['was'],
        },
        {
          kind: 'order',
          answer: "The party wasn't boring.",
          translation: 'Вечеринка не была скучной.',
          distractors: ["weren't"],
        },
        { kind: 'order', answer: 'When were you born?', translation: 'Когда ты родился?', distractors: ['was'] },
        {
          kind: 'order',
          answer: 'We were in London two years ago.',
          translation: 'Мы были в Лондоне два года назад.',
          distractors: ['last'],
        },
      ],
    },
  ],
}

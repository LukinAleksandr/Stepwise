import type { Topic } from '../../../types'

export const can: Topic = {
  id: 'can',
  title: 'Модальный глагол can',
  summary: 'Умею, могу, можно: умения, возможности и просьбы',
  theory: [
    {
      type: 'paragraph',
      text: '**can** выражает умение, возможность, разрешение и вежливую просьбу.',
    },
    {
      type: 'rule',
      text: '**can** одинаков для всех лиц. После него — глагол **без to и без -s**: She **can swim**.',
    },
    {
      type: 'table',
      headers: ['', 'Форма', 'Пример'],
      rows: [
        ['+', 'can + глагол', 'I can swim.'],
        ['−', "can't / cannot + глагол", "He can't drive."],
        ['?', 'Can + подлежащее + глагол', 'Can you cook?'],
        ['Ответ', '', "Yes, I can. / No, I can't."],
      ],
    },
    {
      type: 'examples',
      items: [
        { en: 'I can speak English.', ru: 'Я умею говорить по-английски. (умение)' },
        { en: 'You can buy tickets online.', ru: 'Билеты можно купить онлайн. (возможность)' },
        { en: 'Can I open the window?', ru: 'Можно открыть окно? (разрешение)' },
        { en: 'Can you help me, please?', ru: 'Можешь мне помочь? (просьба)' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'He can **play** — не can plays и не can to play.',
    },
    { type: 'note', tone: 'tip', text: '**cannot** пишется слитно.' },
  ],
  cards: [
    { id: 'swim', en: 'swim', ru: 'плавать', example: 'I can swim.' },
    { id: 'drive', en: 'drive', ru: 'водить машину', example: "She can't drive." },
    { id: 'cook', en: 'cook', ru: 'готовить (еду)' },
    { id: 'dance', en: 'dance', ru: 'танцевать' },
    { id: 'sing', en: 'sing', ru: 'петь' },
    { id: 'ride-bike', en: 'ride a bike', ru: 'ездить на велосипеде' },
    { id: 'play-guitar', en: 'play the guitar', ru: 'играть на гитаре' },
    { id: 'draw', en: 'draw', ru: 'рисовать' },
    { id: 'run', en: 'run', ru: 'бегать' },
    { id: 'ski', en: 'ski', ru: 'кататься на лыжах' },
    { id: 'help', en: 'help', ru: 'помогать' },
    { id: 'can-i', en: 'Can I...?', ru: 'Можно мне...?', example: 'Can I come in?' },
    { id: 'can-you-help', en: 'Can you help me?', ru: 'Можешь мне помочь?' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте can / can’t',
      items: [
        { kind: 'gap', text: 'I {can} swim very well.', translation: 'Я очень хорошо плаваю.' },
        { kind: 'gap', text: "She {can't|cannot} drive.", hint: 'not', translation: 'Она не умеет водить.' },
        {
          kind: 'gap',
          text: '{Can} you play the guitar? — Yes, I {can}.',
          translation: 'Ты умеешь играть на гитаре? — Да.',
        },
        {
          kind: 'gap',
          text: "Can he speak Spanish? — No, he {can't|cannot}.",
          translation: 'Он говорит по-испански? — Нет.',
        },
        { kind: 'gap', text: '{Can} I open the window, please?', translation: 'Можно открыть окно?' },
        {
          kind: 'gap',
          text: 'My son can {ride} a bike.',
          hint: 'ride',
          translation: 'Мой сын умеет кататься на велосипеде.',
        },
        {
          kind: 'gap',
          text: "We {can't|cannot} come tomorrow.",
          hint: 'not',
          translation: 'Мы не можем прийти завтра.',
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        {
          kind: 'choice',
          question: 'She can ___ very well.',
          options: ['sings', 'sing', 'to sing'],
          answer: 1,
          explanation: 'После **can** — глагол без to и без -s.',
        },
        { kind: 'choice', question: '___ you help me?', options: ['Do', 'Can', 'Are'], answer: 1 },
        { kind: 'choice', question: "I ___ cook. I'm a bad cook.", options: ['can', "can't"], answer: 1 },
        { kind: 'choice', question: 'Can your sister ski? — Yes, she ___.', options: ['can', 'does', 'is'], answer: 0 },
        { kind: 'choice', question: 'Как правильно пишется?', options: ['cannot', 'can not', "cann't"], answer: 0 },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        {
          kind: 'order',
          answer: 'Can you speak English?',
          translation: 'Ты умеешь говорить по-английски?',
          distractors: ['Do'],
        },
        {
          kind: 'order',
          answer: "My dad can't swim.",
          translation: 'Мой папа не умеет плавать.',
          distractors: ['swims'],
        },
        { kind: 'order', answer: 'Can I ask a question?', translation: 'Можно задать вопрос?', distractors: ['to'] },
        {
          kind: 'order',
          answer: 'She can play the piano.',
          translation: 'Она умеет играть на пианино.',
          distractors: ['plays'],
        },
        {
          kind: 'order',
          answer: 'We can meet tomorrow.',
          translation: 'Мы можем встретиться завтра.',
          distractors: ['to'],
        },
      ],
    },
  ],
}

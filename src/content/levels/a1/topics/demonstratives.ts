import type { Topic } from '../../../types'

export const demonstratives: Topic = {
  id: 'demonstratives',
  title: 'this / that / these / those',
  summary: 'Указательные местоимения: этот, тот, эти, те',
  theory: [
    {
      type: 'table',
      headers: ['', 'Близко (здесь)', 'Далеко (там)'],
      rows: [
        ['Ед. ч.', '**this** — этот, эта, это', '**that** — тот, та, то'],
        ['Мн. ч.', '**these** — эти', '**those** — те'],
      ],
    },
    {
      type: 'examples',
      items: [
        { en: 'This is my phone.', ru: 'Это мой телефон.' },
        { en: 'That car is very fast.', ru: 'Та машина очень быстрая.' },
        { en: 'These apples are sweet.', ru: 'Эти яблоки сладкие.' },
        { en: 'Those people are my neighbours.', ru: 'Те люди — мои соседи.' },
      ],
    },
    {
      type: 'rule',
      text: 'После **these / those** — множественное число и **are**: **These are** my keys.',
    },
    { type: 'heading', text: 'Вопросы и ответы' },
    {
      type: 'examples',
      items: [
        { en: "What's this? — It's a pen.", ru: 'Что это? — Это ручка.' },
        { en: "What are those? — They're birds.", ru: 'Что это там? — Это птицы.' },
        { en: 'Is that your bag? — Yes, it is.', ru: 'Это твоя сумка? — Да.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'В ответе на вопрос с this / that используем **it**, с these / those — **they**.',
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Так представляют людей: **This is** my friend Tom. — Это мой друг Том.',
    },
    { type: 'paragraph', text: 'Похожая пара для места: **here** — здесь, **there** — там.' },
  ],
  cards: [
    { id: 'pen', en: 'pen', ru: 'ручка', transcription: '/pen/' },
    { id: 'key', en: 'key', ru: 'ключ', transcription: '/kiː/', example: 'Is this your key?' },
    { id: 'bag', en: 'bag', ru: 'сумка', transcription: '/bæɡ/' },
    { id: 'phone', en: 'phone', ru: 'телефон', transcription: '/fəʊn/' },
    { id: 'cup', en: 'cup', ru: 'чашка', transcription: '/kʌp/' },
    { id: 'chair', en: 'chair', ru: 'стул', transcription: '/tʃeə/' },
    { id: 'table', en: 'table', ru: 'стол', transcription: '/ˈteɪbl/' },
    { id: 'window', en: 'window', ru: 'окно', transcription: '/ˈwɪndəʊ/' },
    { id: 'door', en: 'door', ru: 'дверь', transcription: '/dɔː/' },
    { id: 'glasses', en: 'glasses', ru: 'очки', transcription: '/ˈɡlɑːsɪz/', example: 'These are my glasses.' },
    { id: 'shoes', en: 'shoes', ru: 'обувь, туфли', transcription: '/ʃuːz/' },
    { id: 'wallet', en: 'wallet', ru: 'кошелёк', transcription: '/ˈwɒlɪt/' },
    { id: 'neighbour', en: 'neighbour', ru: 'сосед', transcription: '/ˈneɪbə/' },
    { id: 'here-there', en: 'here / there', ru: 'здесь / там' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте this, that, these или those',
      items: [
        {
          kind: 'gap',
          text: '{This} is my friend Kate.',
          hint: 'близко, ед. ч.',
          translation: 'Это моя подруга Кейт.',
        },
        { kind: 'gap', text: '{These} shoes are new.', hint: 'близко, мн. ч.', translation: 'Эти туфли новые.' },
        {
          kind: 'gap',
          text: 'Look at {that} bird in the sky!',
          hint: 'далеко, ед. ч.',
          translation: 'Посмотри на ту птицу в небе!',
        },
        {
          kind: 'gap',
          text: '{Those} houses over there are old.',
          hint: 'далеко, мн. ч.',
          translation: 'Те дома вон там старые.',
        },
        {
          kind: 'gap',
          text: 'Is {this} your pen? — Yes, {it} is.',
          hint: 'близко',
          translation: 'Это твоя ручка? — Да.',
        },
        {
          kind: 'gap',
          text: "What are {those}? — They're birds.",
          hint: 'далеко',
          translation: 'Что это там? — Это птицы.',
        },
        { kind: 'gap', text: '{These} are my parents.', hint: 'близко', translation: 'Это мои родители.' },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: '___ books are interesting.', options: ['This', 'These', 'That'], answer: 1 },
        { kind: 'choice', question: "What's ___? — It's a key.", options: ['these', 'this', 'those'], answer: 1 },
        { kind: 'choice', question: 'These ___ my keys.', options: ['is', 'are', 'am'], answer: 1 },
        {
          kind: 'choice',
          question: 'Are those your glasses? — Yes, ___ are.',
          options: ['it', 'they', 'those'],
          answer: 1,
          explanation: 'Для these / those в ответе — **they**.',
        },
        { kind: 'choice', question: '___ is my brother, Sam.', options: ['These', 'Those', 'This'], answer: 2 },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        { kind: 'order', answer: 'This is my new bag.', translation: 'Это моя новая сумка.', distractors: ['These'] },
        { kind: 'order', answer: 'Are these your keys?', translation: 'Это твои ключи?', distractors: ['this'] },
        {
          kind: 'order',
          answer: 'That man is my teacher.',
          translation: 'Тот мужчина — мой учитель.',
          distractors: ['Those'],
        },
        {
          kind: 'order',
          answer: 'Those flowers are beautiful.',
          translation: 'Те цветы красивые.',
          distractors: ['is'],
        },
        { kind: 'order', answer: 'What is this?', translation: 'Что это?', distractors: ['these'] },
      ],
    },
  ],
}

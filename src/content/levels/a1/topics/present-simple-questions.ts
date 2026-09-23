import type { Topic } from '../../../types'

export const presentSimpleQuestions: Topic = {
  id: 'present-simple-questions',
  title: 'Present Simple: отрицания и вопросы',
  summary: 'do / does, don’t / doesn’t и краткие ответы',
  theory: [
    {
      type: 'rule',
      text: 'Отрицания и вопросы строятся с помощью **do** (I / you / we / they) и **does** (he / she / it).',
    },
    {
      type: 'table',
      headers: ['', 'I / you / we / they', 'he / she / it'],
      rows: [
        ['+', 'I work.', 'She works.'],
        ['−', "I don't work.", "She doesn't work."],
        ['?', 'Do you work?', 'Does she work?'],
        ['Ответ', "Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."],
      ],
    },
    {
      type: 'rule',
      text: 'После **does / doesn’t** глагол идёт **без -s**: She doesn’t **work**. Does he **like** tea? Окончание уже «забрал» does.',
    },
    { type: 'heading', text: 'Вопросы с вопросительным словом' },
    {
      type: 'paragraph',
      text: 'Порядок: **вопросительное слово + do / does + подлежащее + глагол**.',
    },
    {
      type: 'examples',
      items: [
        { en: 'Where do you live?', ru: 'Где ты живёшь?' },
        { en: 'What does she do?', ru: 'Кем она работает?' },
        { en: 'When does the shop open?', ru: 'Когда открывается магазин?' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'do / does **не** используются с to be: **Are** you tired? (не Do you are tired?)',
    },
    { type: 'note', tone: 'tip', text: '**What do you do?** — «Чем ты занимаешься? / Кем работаешь?»' },
  ],
  cards: [
    { id: 'like', en: 'like', ru: 'нравиться, любить', example: 'Do you like pizza?' },
    { id: 'love', en: 'love', ru: 'любить, обожать' },
    { id: 'hate', en: 'hate', ru: 'ненавидеть', example: 'I hate Mondays.' },
    { id: 'want', en: 'want', ru: 'хотеть' },
    { id: 'need', en: 'need', ru: 'нуждаться, нужно', example: 'I need help.' },
    { id: 'know', en: 'know', ru: 'знать', example: "I don't know." },
    { id: 'understand', en: 'understand', ru: 'понимать', example: 'Do you understand me?' },
    { id: 'speak', en: 'speak', ru: 'говорить (на языке)', example: 'She speaks French.' },
    { id: 'listen-music', en: 'listen to music', ru: 'слушать музыку' },
    { id: 'play-football', en: 'play football', ru: 'играть в футбол' },
    { id: 'go-shopping', en: 'go shopping', ru: 'ходить по магазинам' },
    { id: 'travel', en: 'travel', ru: 'путешествовать' },
    { id: 'what-do-you-do', en: 'What do you do?', ru: 'Кем ты работаешь?' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте do / does / don’t / doesn’t',
      items: [
        { kind: 'gap', text: "I {do not|don't} like milk.", translation: 'Я не люблю молоко.' },
        { kind: 'gap', text: "She {does not|doesn't} eat meat.", translation: 'Она не ест мясо.' },
        { kind: 'gap', text: '{Do} you speak English? — Yes, I {do}.', translation: 'Ты говоришь по-английски? — Да.' },
        {
          kind: 'gap',
          text: "{Does} your brother work here? — No, he {doesn't|does not}.",
          translation: 'Твой брат здесь работает? — Нет.',
        },
        { kind: 'gap', text: 'Where {do} they live?', translation: 'Где они живут?' },
        { kind: 'gap', text: 'What time {does} the bus leave?', translation: 'Во сколько отходит автобус?' },
        { kind: 'gap', text: "We {do not|don't} work on Sundays.", translation: 'Мы не работаем по воскресеньям.' },
      ],
    },
    {
      id: 'verb-form',
      title: 'Глагол после does',
      instruction: 'Поставьте глагол в правильную форму.',
      items: [
        { kind: 'gap', text: "He doesn't {like} coffee.", hint: 'like', translation: 'Он не любит кофе.' },
        { kind: 'gap', text: 'Does she {speak} French?', hint: 'speak', translation: 'Она говорит по-французски?' },
        { kind: 'gap', text: 'She {speaks} French.', hint: 'speak', translation: 'Она говорит по-французски.' },
        { kind: 'gap', text: 'What does your father {do}?', hint: 'do', translation: 'Кем работает твой отец?' },
        {
          kind: 'gap',
          text: 'My friend {goes} to the gym, but he doesn’t {go} every day.',
          hint: 'go',
          translation: 'Мой друг ходит в спортзал, но не каждый день.',
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: '___ she like music?', options: ['Do', 'Does', 'Is'], answer: 1 },
        { kind: 'choice', question: 'They ___ live here.', options: ["doesn't", "don't", "aren't"], answer: 1 },
        {
          kind: 'choice',
          question: 'Does he ___ tennis?',
          options: ['plays', 'play', 'playing'],
          answer: 1,
          explanation: 'После **does** — глагол без -s.',
        },
        { kind: 'choice', question: 'Where ___ you work?', options: ['do', 'does', 'are'], answer: 0 },
        { kind: 'choice', question: 'Do you like pizza? — Yes, I ___.', options: ['like', 'do', 'am'], answer: 1 },
        {
          kind: 'choice',
          question: 'My mum ___ coffee.',
          options: ["don't drink", "doesn't drink", "doesn't drinks"],
          answer: 1,
        },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        { kind: 'order', answer: 'Do you like cats?', translation: 'Ты любишь кошек?', distractors: ['Does'] },
        {
          kind: 'order',
          answer: "She doesn't speak German.",
          translation: 'Она не говорит по-немецки.',
          distractors: ['speaks'],
        },
        {
          kind: 'order',
          answer: 'Where does your sister live?',
          translation: 'Где живёт твоя сестра?',
          distractors: ['lives'],
        },
        { kind: 'order', answer: 'What do you do?', translation: 'Кем ты работаешь?', distractors: ['does'] },
        {
          kind: 'order',
          answer: "We don't watch TV.",
          translation: 'Мы не смотрим телевизор.',
          distractors: ["doesn't"],
        },
        {
          kind: 'order',
          answer: 'What time does the shop open?',
          translation: 'Во сколько открывается магазин?',
          distractors: ['opens'],
        },
      ],
    },
  ],
}

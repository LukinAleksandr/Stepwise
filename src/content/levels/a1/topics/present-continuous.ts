import type { Topic } from '../../../types'

export const presentContinuous: Topic = {
  id: 'present-continuous',
  title: 'Present Continuous',
  summary: 'Что происходит прямо сейчас: am / is / are + -ing',
  theory: [
    {
      type: 'paragraph',
      text: '**Present Continuous** — действие происходит **сейчас**, в момент речи, или в текущий период.',
    },
    { type: 'rule', text: '**am / is / are** + глагол-**ing**' },
    {
      type: 'table',
      headers: ['', 'Утверждение', 'Отрицание', 'Вопрос'],
      rows: [
        ['I', "I'm working.", "I'm not working.", 'Am I working?'],
        ['he / she / it', "She's working.", "She isn't working.", 'Is she working?'],
        ['we / you / they', "They're working.", "They aren't working.", 'Are they working?'],
      ],
    },
    {
      type: 'table',
      caption: 'Как добавить -ing',
      headers: ['Правило', 'Примеры'],
      rows: [
        ['обычно + ing', 'read → reading, play → playing'],
        ['немая -e отпадает', 'write → writing, make → making'],
        ['короткий слог «согл. + гласн. + согл.» — удваиваем', 'sit → sitting, run → running, swim → swimming'],
        ['-ie → -y', 'lie → lying, die → dying'],
      ],
    },
    {
      type: 'list',
      items: [
        'now, right now — сейчас',
        'at the moment — в данный момент',
        'Look! Listen! — Смотри! Слушай!',
        'today, this week — сегодня, на этой неделе',
      ],
    },
    { type: 'heading', text: 'Present Simple или Present Continuous?' },
    {
      type: 'examples',
      items: [
        { en: "I usually drink tea, but today I'm drinking coffee.", ru: 'Обычно я пью чай, но сегодня пью кофе.' },
        { en: 'She works in a bank.', ru: 'Она работает в банке. (всегда, это её работа)' },
        { en: 'She is working now.', ru: 'Она сейчас работает. (в данный момент)' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'Глаголы состояния обычно **не** используются в Continuous: like, love, want, know, understand, need. I **want** coffee now (не I’m wanting).',
    },
  ],
  cards: [
    { id: 'raining', en: "It's raining.", ru: 'Идёт дождь.' },
    { id: 'snowing', en: "It's snowing.", ru: 'Идёт снег.' },
    { id: 'sunny', en: 'sunny', ru: 'солнечный', example: "It's sunny today." },
    { id: 'cloudy', en: 'cloudy', ru: 'облачный' },
    { id: 'windy', en: 'windy', ru: 'ветреный' },
    { id: 'cold-weather', en: 'cold', ru: 'холодный', example: "It's cold outside." },
    { id: 'hot', en: 'hot', ru: 'жаркий, горячий' },
    { id: 'wear', en: 'wear', ru: 'носить (одежду), быть одетым', example: "I'm wearing a jacket." },
    { id: 'jacket', en: 'jacket', ru: 'куртка, пиджак', transcription: '/ˈdʒækɪt/' },
    { id: 'coat', en: 'coat', ru: 'пальто', transcription: '/kəʊt/' },
    { id: 'dress', en: 'dress', ru: 'платье' },
    { id: 'jeans', en: 'jeans', ru: 'джинсы', transcription: '/dʒiːnz/' },
    { id: 'sweater', en: 'sweater', ru: 'свитер', transcription: '/ˈswetə/' },
    { id: 'at-the-moment', en: 'at the moment', ru: 'в данный момент' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Поставьте глагол в Present Continuous',
      items: [
        { kind: 'gap', text: "Look! It {is raining|'s raining}.", hint: 'rain', translation: 'Смотри! Идёт дождь.' },
        {
          kind: 'gap',
          text: "I {am reading|'m reading} a book now.",
          hint: 'read',
          translation: 'Сейчас я читаю книгу.',
        },
        {
          kind: 'gap',
          text: "They {are playing|'re playing} football at the moment.",
          hint: 'play',
          translation: 'Они сейчас играют в футбол.',
        },
        { kind: 'gap', text: "She {is writing|'s writing} an email.", hint: 'write', translation: 'Она пишет письмо.' },
        {
          kind: 'gap',
          text: "We {are not watching|aren't watching} TV.",
          hint: 'not watch',
          translation: 'Мы не смотрим телевизор.',
        },
        { kind: 'gap', text: '{Are} you {listening} to me?', hint: 'listen', translation: 'Ты меня слушаешь?' },
        {
          kind: 'gap',
          text: "He {is swimming|'s swimming} in the pool.",
          hint: 'swim',
          translation: 'Он плавает в бассейне.',
        },
        { kind: 'gap', text: 'Why {are} you {running}?', hint: 'run', translation: 'Почему ты бежишь?' },
      ],
    },
    {
      id: 'choice',
      title: 'Simple или Continuous?',
      items: [
        { kind: 'choice', question: 'Listen! The baby ___.', options: ['cries', 'is crying', 'cry'], answer: 1 },
        {
          kind: 'choice',
          question: "She ___ in a bank. It's her job.",
          options: ['works', 'is working'],
          answer: 0,
          explanation: 'Постоянная ситуация — **Present Simple**.',
        },
        {
          kind: 'choice',
          question: 'I ___ your question.',
          options: ['am not understanding', "don't understand"],
          answer: 1,
          explanation: '**understand** — глагол состояния, в Continuous не используется.',
        },
        { kind: 'choice', question: 'sit → ___', options: ['siting', 'sitting', 'sitsing'], answer: 1 },
        { kind: 'choice', question: 'What ___ you doing?', options: ['do', 'are', 'is'], answer: 1 },
        { kind: 'choice', question: 'Right now I ___ a jacket.', options: ['wear', 'am wearing', 'wears'], answer: 1 },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        {
          kind: 'order',
          answer: 'What are you doing now?',
          translation: 'Что ты сейчас делаешь?',
          distractors: ['do'],
        },
        { kind: 'order', answer: 'She is making dinner.', translation: 'Она готовит ужин.', distractors: ['makes'] },
        { kind: 'order', answer: "It isn't raining now.", translation: 'Сейчас нет дождя.', distractors: ["doesn't"] },
        { kind: 'order', answer: 'Are they working today?', translation: 'Они сегодня работают?', distractors: ['Do'] },
        {
          kind: 'order',
          answer: 'I am wearing a blue jacket.',
          translation: 'На мне синяя куртка.',
          distractors: ['wear'],
        },
      ],
    },
  ],
}

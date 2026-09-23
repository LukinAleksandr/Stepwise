import type { Topic } from '../../../types'

export const thereIs: Topic = {
  id: 'there-is',
  title: 'there is / there are',
  summary: 'Есть, имеется, находится: описываем дом и город',
  theory: [
    {
      type: 'paragraph',
      text: '**There is / there are** используют, когда сообщают, что что-то **где-то есть**.',
    },
    {
      type: 'rule',
      text: '**There is** + единственное число или неисчисляемое. **There are** + множественное число.',
    },
    {
      type: 'examples',
      items: [
        { en: 'There is a bank near my house.', ru: 'Рядом с моим домом есть банк.' },
        { en: 'There is some milk in the fridge.', ru: 'В холодильнике есть молоко.' },
        { en: 'There are two bedrooms in the flat.', ru: 'В квартире две спальни.' },
      ],
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Русское предложение часто начинается с места: «В комнате есть стол». В английском место уходит в конец: **There is** a table **in the room**.',
    },
    { type: 'heading', text: 'Отрицание и вопрос' },
    {
      type: 'table',
      headers: ['', 'Единственное число', 'Множественное число'],
      rows: [
        ['+', "There is (There's) a cafe.", 'There are some shops.'],
        ['−', "There isn't a cafe.", "There aren't any shops."],
        ['?', 'Is there a cafe? — Yes, there is.', "Are there any shops? — No, there aren't."],
      ],
    },
    {
      type: 'rule',
      title: 'some / any',
      text: '**some** — в утверждениях, **any** — в отрицаниях и вопросах.',
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Сколько? — **How many** rooms **are there**?',
    },
  ],
  cards: [
    { id: 'kitchen', en: 'kitchen', ru: 'кухня', transcription: '/ˈkɪtʃɪn/' },
    { id: 'bedroom', en: 'bedroom', ru: 'спальня', transcription: '/ˈbedruːm/' },
    { id: 'bathroom', en: 'bathroom', ru: 'ванная', transcription: '/ˈbɑːθruːm/' },
    { id: 'living-room', en: 'living room', ru: 'гостиная' },
    { id: 'fridge', en: 'fridge', ru: 'холодильник', transcription: '/frɪdʒ/' },
    { id: 'sofa', en: 'sofa', ru: 'диван', transcription: '/ˈsəʊfə/' },
    { id: 'bed', en: 'bed', ru: 'кровать', transcription: '/bed/' },
    { id: 'shop', en: 'shop', ru: 'магазин', transcription: '/ʃɒp/' },
    { id: 'bank', en: 'bank', ru: 'банк', transcription: '/bæŋk/' },
    { id: 'park', en: 'park', ru: 'парк', transcription: '/pɑːk/' },
    { id: 'supermarket', en: 'supermarket', ru: 'супермаркет', transcription: '/ˈsuːpəmɑːkɪt/' },
    { id: 'pharmacy', en: 'pharmacy', ru: 'аптека', transcription: '/ˈfɑːməsi/' },
    { id: 'station', en: 'station', ru: 'станция, вокзал', transcription: '/ˈsteɪʃn/' },
    { id: 'street', en: 'street', ru: 'улица', transcription: '/striːt/' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте is / are / isn’t / aren’t',
      items: [
        { kind: 'gap', text: "There {is|'s} a sofa in the living room.", translation: 'В гостиной есть диван.' },
        { kind: 'gap', text: 'There {are} three chairs in the kitchen.', translation: 'На кухне три стула.' },
        { kind: 'gap', text: "There {is|'s} some water in the bottle.", translation: 'В бутылке есть вода.' },
        {
          kind: 'gap',
          text: "There {are not|aren't} any shops in my street.",
          hint: 'not',
          translation: 'На моей улице нет магазинов.',
        },
        {
          kind: 'gap',
          text: "There {is not|isn't} a bath in the bathroom.",
          hint: 'not',
          translation: 'В ванной комнате нет ванны.',
        },
        {
          kind: 'gap',
          text: '{Is} there a bank near here? — Yes, there {is}.',
          translation: 'Здесь рядом есть банк? — Да.',
        },
        { kind: 'gap', text: "{Are} there any eggs? — No, there {are not|aren't}.", translation: 'Есть яйца? — Нет.' },
        {
          kind: 'gap',
          text: 'How many students {are} there in your class?',
          translation: 'Сколько учеников в твоём классе?',
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: 'There ___ a park near my house.', options: ['is', 'are'], answer: 0 },
        { kind: 'choice', question: 'There ___ many people in the street.', options: ['is', 'are'], answer: 1 },
        {
          kind: 'choice',
          question: 'Are there ___ apples?',
          options: ['some', 'any'],
          answer: 1,
          explanation: 'В вопросах — **any**.',
        },
        { kind: 'choice', question: 'There are ___ books on the table.', options: ['some', 'any'], answer: 0 },
        {
          kind: 'choice',
          question: 'Is there a pharmacy here? — No, there ___.',
          options: ["isn't", "aren't", 'is'],
          answer: 0,
        },
        {
          kind: 'choice',
          question: 'There ___ some milk in the fridge.',
          options: ['is', 'are'],
          answer: 0,
          explanation: '**milk** — неисчисляемое, поэтому **is**.',
        },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        {
          kind: 'order',
          answer: 'There is a cat under the table.',
          translation: 'Под столом кошка.',
          distractors: ['are'],
        },
        {
          kind: 'order',
          answer: 'Are there any cafes near here?',
          translation: 'Здесь поблизости есть кафе?',
          distractors: ['some'],
        },
        {
          kind: 'order',
          answer: "There aren't any chairs in the room.",
          translation: 'В комнате нет стульев.',
          distractors: ["isn't"],
        },
        {
          kind: 'order',
          answer: 'Is there a supermarket in your street?',
          translation: 'На твоей улице есть супермаркет?',
          distractors: ['Are'],
        },
        { kind: 'order', answer: 'How many rooms are there?', translation: 'Сколько там комнат?', distractors: ['is'] },
      ],
    },
  ],
}

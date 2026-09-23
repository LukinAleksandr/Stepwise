# Stepwise

**Демо:** https://lukinaleksandr.github.io/Stepwise/

Статическое React-приложение для изучения английского: уровни → темы (теория, карточки, практика), тренажёр неправильных глаголов. Прогресс хранится в `localStorage` браузера, сервер не нужен.

## Команды

```bash
npm run dev        # разработка: http://localhost:5173
npm run build      # сборка в dist/ — можно выложить на любой статический хостинг
npm run preview    # посмотреть собранную версию
npm run typecheck  # проверка типов, в том числе всего контента
npm run check      # Biome: линтер + форматирование + сортировка импортов
npm run check:fix  # то же, с автоисправлением
```

## Деплой

Каждый push в `main` через GitHub Actions (`.github/workflows/ci.yml`) проверяет код (Biome, TypeScript), собирает проект и публикует его на GitHub Pages. Pull request'ы только проверяются.

## Стек

| Библиотека | Зачем |
|---|---|
| Vite + React 19 + TypeScript | сборка и типизация, включая контент |
| Mantine 9 (`@mantine/core`, `@mantine/hooks`) | готовые UI-компоненты, тёмная тема |
| `@tabler/icons-react` | иконки |
| react-router (hash-режим) | маршруты без настройки сервера |
| zustand + persist | прогресс в `localStorage` |
| Web Speech API | озвучка слов, без внешних сервисов |
| Biome | линтер и форматтер в одном инструменте; для VS Code — расширение `biomejs.biome` |

## Структура

```
src/
  app/            router, Layout (AppShell), paths — все URL
  content/        ДАННЫЕ: types.ts (модель), index.ts (реестр), levels/, verbs.ts
  features/
    theory/       TheoryView — рендер блоков теории
    flashcards/   Flashcard, FlashcardSession (SRS), WordList
    verbs/        VerbTable, VerbTrainer
    exercises/    GapFillItem, SentenceBuilderItem, MultipleChoiceItem, ExerciseRunner
  shared/
    lib/          answers (проверка ответов), srs (интервальное повторение), speech, random
    ui/           доменные обёртки над Mantine: Feedback, SpeakButton, PageHeader, RouteTabs, RichText
  store/          progress — zustand-хранилище прогресса
  pages/          страницы, собирающие фичи
  styles/theme.ts тема Mantine
```

Компоненты из `features/` не знают об уровнях: они получают данные через пропсы. Поэтому для всех уровней работают одни и те же компоненты.

## Как добавить контент

1. **Тема:** создать `src/content/levels/<level>/topics/<topic>.ts`, экспортировать объект `Topic`, добавить его в `topics` уровня.
2. **Уровень:** создать `src/content/levels/<level>.ts` (или папку) и добавить в массив `levels` в `src/content/index.ts`.
3. **Глаголы:** дописать в `src/content/verbs.ts`.

Пример со всеми типами блоков и заданий: `src/content/levels/a1/topics/to-be.ts`.

### Блоки теории
`heading`, `paragraph`, `rule`, `note` (tip/warning), `list`, `examples` (с озвучкой), `table`. В тексте работает `**жирный**`.

### Типы заданий
- `gap` — пропуски в фигурных скобках, альтернативы через `|`: `"She {is|'s} a doctor."`
- `order` — собрать предложение из слов: `translation` (обязательный русский перевод — что собираем) + `answer` (строка или массив допустимых вариантов) + `distractors` (лишние слова)
- `choice` — выбор варианта: `options` + индекс `answer` + `explanation`

При проверке не учитываются регистр, лишние пробелы, типографские апострофы и точка/вопрос в конце.

### Важно: id
`id` карточек, тем и наборов заданий — это ключи прогресса в `localStorage`. После публикации их лучше не менять, иначе прогресс по ним сбросится.

## Как добавить новый тип задания

1. Добавить интерфейс в `ExerciseItem` (`content/types.ts`).
2. Создать компонент с интерфейсом `ItemProps<T>` (`features/exercises/types.ts`): он сам проверяет ответ и один раз вызывает `onDone(correct)`.
3. Добавить `case` в `ExerciseItemView.tsx`. TypeScript подскажет, если какой-то case пропущен.

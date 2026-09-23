# Stepwise

**Демо:** https://lukinaleksandr.github.io/Stepwise/

Статическое React-приложение для изучения английского: уровни → темы (теория, карточки, практика), повторение слов по интервальной системе, тренажёр неправильных глаголов. Прогресс хранится в `localStorage`, сервер не нужен.

## Команды

```bash
npm run dev          # разработка: http://localhost:5173
npm run check        # Biome + TypeScript + границы модулей + проверка контента
npm run check:fix    # автоисправление форматирования и линта
npm run build        # сборка в dist/
npm run preview      # посмотреть собранную версию
```

## Стек

Vite · React 19 · TypeScript · Mantine 9 · react-router (hash) · zustand · Biome · Web Speech API

## Архитектура

```
src/
  app/        точка сборки: роутер, layout, главная, миграция хранилища
  modules/    подключаемые разделы (levels, review, verbs) и их реестр
  features/   переиспользуемые блоки без маршрутов (theory, flashcards, exercises)
  shared/     общие блоки (ui, lib, srs)
  content/    учебные данные
```

Модуль сам объявляет свои маршруты, пункт меню и виджет на главной. Подключить или отключить модуль — одна строка в `src/modules/index.ts`. Модули не импортируют друг друга, это проверяется в CI.

Правила кода и архитектуры — в [`CLAUDE.md`](CLAUDE.md) и навыках [`.claude/skills`](.claude/skills).

## Контент

- **Тема:** файл в `src/content/levels/<level>/topics/`, подключается в `topics` уровня.
- **Уровень:** файл в `src/content/levels/`, подключается в массив `levels` в `src/content/index.ts`.
- **Глаголы:** `src/content/verbs.ts`.

Пример со всеми типами блоков и заданий: `src/content/levels/a1/topics/to-be.ts`.

Типы заданий:
- `gap` — пропуски в фигурных скобках, альтернативы через `|`: `"She {is|'s} a doctor."`
- `order` — сборка предложения: `translation` (обязательно), `answer`, `distractors`
- `choice` — выбор варианта: `options`, индекс `answer`, `explanation`

`id` тем, карточек и наборов — ключи прогресса, после публикации их не меняют. `npm run check:content` проверяет дубли, собираемость предложений и корректность ответов.

## Версии и деплой

Версия — git-тег. При слиянии PR в `main` CI определяет тип повышения по имени ветки, ставит тег, публикует GitHub Release и выкладывает сборку на GitHub Pages. Версия видна в меню приложения.

| Префикс ветки | Версия |
|---|---|
| `major/`, `breaking/` | major |
| `feat/`, `feature/` | minor |
| любой другой | patch |
| прямой push без PR | без изменений |

Зависимости обновляет Dependabot: раз в месяц по одному PR для npm и GitHub Actions, уязвимости — сразу. В `main` попадает только код с зелёной проверкой CI.

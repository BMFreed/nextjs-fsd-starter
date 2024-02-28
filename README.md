# Универсальный стартер проекта на NextJS 14

Репозиторий-стартер для разработки приложения любой сложности на [Next.js](https://nextjs.org/). 
Инициализирован через [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
в комплекте с [TSS](https://www.tss-react.dev/) и MUI(https://mui.com/).

## Архитектура и code-style

Линтер настроен на строгое соблюдение методологии [Feature-Sliced Design](https://feature-sliced.design/).
Также при конфигурации TSC и ESLint делался упор на максимальную строгость. За основу кнофига для ESLint взят 
[eslint-config-hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore), но многие правила, касающиеся именно стиля кода
обоснованны, в основном, устоявшимися практиками на рабочих проектах.

## Запуск в режиме разработки

```bash
npm run dev
```

Проект запускается по умолчанию на [http://localhost:3000](http://localhost:3000)

## Билд

```bash
npm run build
```

Проект по умолчанию настроен на генерацию статического сайта. Чтобы настроить сборку гибридного SSR-приложения - уберите
из файла next.config.mjs настройку `output: 'export'`.
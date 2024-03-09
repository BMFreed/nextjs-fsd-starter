# Универсальный стартер проекта на NextJS 14

Репозиторий-стартер для разработки приложения любой сложности на [Next.js](https://nextjs.org/). 
Инициализирован через [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
в комплекте со [Styled-Components](https://styled-components.com/) и [PrimeReact](https://primereact.org/installation/).

## Архитектура и code-style

Линтер настроен на строгое соблюдение методологии [Feature-Sliced Design](https://feature-sliced.design/).
Также при конфигурации TSC и ESLint делался упор на максимальную строгость. За основу конфига для ESLint взят 
[eslint-config-hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore), правила которого переопределялись для
большего соответствия устоявшимся рабочим практикам. 

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

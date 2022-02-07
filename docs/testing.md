# Тестирование

В проекте реализовано несколько технологий тестирования:
- Unit тесты логики (Jest), React хуков (Jest + [`react-hooks-testing-library`](https://github.com/testing-library/react-hooks-testing-library)) и snapshot тестирование React компонентов (Jest + [`react-test-renderer`](https://reactjs.org/docs/test-renderer.html))
- End-to-end тестирование всего проекта ([`Playwright`](https://playwright.dev))

### Unit тесты

Unit тесты пишутся в файлах `*.test.ts` внутри папки `/src`. Это обычные Jest тесты ([документация](https://jestjs.io/ru/docs/getting-started)). Также интегрированы `react-hooks-testing-library` для тестирования React хуков и `react-test-renderer` для snapshot тестирования React компонентов.

Пример обычного теста: [index.test.ts](https://github.com/gooditcollective/base/blob/main/src/index.test.ts)

Пример тестирование React хука: [useCounter.test.ts](https://github.com/gooditcollective/base-frontend/blob/main/src/hooks/useCounter.test.ts)

Пример snapshot тестирования React компонента: [Counter.test.tsx](https://github.com/gooditcollective/base-frontend/blob/main/src/components/Counter/Counter.test.tsx)

Запуск этих тестов производится командой `npm run test:unit`.

### End-to-end тесты

В проект интегрирована и настроена система e2e тестирования Playwright ([документация](https://playwright.dev/docs/intro)). Файлы тестов `*.test.ts` находятся внутри папки `/tests`.

Пример базового smoke теста: [started.test.ts](https://github.com/gooditcollective/base-frontend/blob/main/tests/started.test.ts)

Пример взаимодействия со страницей посредством [POM](https://playwright.dev/docs/test-pom): [counter.test.ts](https://github.com/gooditcollective/base-frontend/blob/main/tests/started.test.ts)

Пример shapshot теста: [snapshots/index.test.ts](https://github.com/gooditcollective/base-frontend/blob/main/tests/snapshots/index.test.ts)

Запуск e2e тестов производится командой `npm run test:e2e`.

# Тестирование

В проекте реализовано несколько технологий тестирования:
- Unit тесты логики (Jest)
- Тесты React компонентов и хуков (Jest + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro))
- End-to-end тестирование всего проекта ([Playwright](https://playwright.dev))

### Unit тесты

Unit тесты пишутся в файлах `*.test.ts` внутри папки `/src`. Это обычные Jest тесты ([документация](https://jestjs.io/ru/docs/getting-started)). Также интегрирован [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) для тестирования React компонентов и хуков.

Пример обычного теста: [index.test.ts](https://github.com/gooditworks/base/blob/main/src/index.test.ts)

Пример тестирование React хука: [useCounter.test.ts](https://github.com/gooditworks/base-frontend/blob/main/src/hooks/useCounter.test.ts)

Пример snapshot тестирования React компонента: [Counter.test.tsx](https://github.com/gooditworks/base-frontend/blob/main/src/components/Counter/Counter.test.tsx)

Запуск этих тестов производится командой `npm run test:unit`.

### End-to-end тесты

В проект интегрирована и настроена система e2e тестирования Playwright ([документация](https://playwright.dev/docs/intro)). Файлы тестов `*.test.ts` находятся внутри папки `/tests`.

Пример базового smoke теста: [started.test.ts](https://github.com/gooditworks/base-frontend/blob/main/tests/started.test.ts)

Пример взаимодействия со страницей посредством [POM](https://playwright.dev/docs/test-pom): [counter.test.ts](https://github.com/gooditworks/base-frontend/blob/main/tests/started.test.ts)

Файл с shapshot тестами: [snapshots/index.test.ts](https://github.com/gooditworks/base-frontend/blob/main/tests/snapshots/index.test.ts)

Запуск e2e тестов производится командой `npm run test:e2e`.

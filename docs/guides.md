# Инструкции по разработке

## Локальный запуск
1. Выполнить требования из [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
2. Установить зависимости: `pnpm install`
3. Установить env переменные согласно [`docs/env.md`](docs/env.md)
3. Development запуск: `pnpm start`
4. Production сборка: `pnpm run build`

## Релиз новой версии

Для корректной работы системы релизов необходимо делать все коммиты согласно [Conventional commits](https://www.conventionalcommits.org), для этого в репозитории уже настроены [commitzen](https://github.com/commitizen/cz-cli) (`pnpm run commit`) и [commitlint](https://github.com/conventional-changelog/commitlint) (настроен git хук для автоматического запуска перед коммитом).

В репозитории настроен Github Action [release-please](https://github.com/googleapis/release-please), который автоматически бампает версию пакета, генерирует changelog и создает Github релизы. После каждого пуша в `main` ветку, он автоматически создаст/обновит PR, в котором будет:
- обновленный changelog
- бампнутая версия пакета

Как только релиз готов необходимо смержить этот PR, после чего произойдет публикация Github релиза.

1. Закоммитить изменения согласно [Conventional commits](https://www.conventionalcommits.org)
2. Проверить код: `pnpm run lint && pnpm run test`
3. Запушить созданный changelog: `git push`

## Проверка и ручное обновление base

В репозитории уже настроен Github Action, который раз в сутки (или по требованию) будет проверять состояние репозитория на актуальность base и автоматически создавать PR с обновлением. 

Чтобы обновить base вручную, нужно запустить скрипт обновления base: `npm run base:update` (для проверки необходимости обновления есть команда `npm run base:check`). Если во время обновления произошли конфликты, исправить их и закомитить. При большом количестве конфликтов в файле `pnpm-lock.yaml` можно просто запустить `pnpm install`, который автоматически их исправит.

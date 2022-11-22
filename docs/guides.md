# Инструкции по разработке

## Локальный запуск
1. Выполнить требования из [@gooditworks/shared](https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
2. Установить зависимости: `pnpm install`
3. Установить env переменные согласно [`docs/env.md`](docs/env.md)
3. Development запуск: `pnpm start`
4. Production сборка: `pnpm run build`

## Релиз новой версии
1. Закоммитить изменения согласно [Conventional commits](https://www.conventionalcommits.org)
2. Проверить код: `pnpm run lint && pnpm run test`
3. Запушить созданный changelog: `git push`

## Проверка и ручное обновление base

В репозитории уже настроен Github Action, который раз в сутки (или по требованию) будет проверять состояние репозитория на актуальность base и автоматически создавать PR с обновлением. 

Чтобы обновить base вручную, нужно:
1. Запустить команду для проверки: `pnpm run lint:base`
2. Произвести merge изменений: `git merge base/main`

Если при merge произошли конфликты, исправить их и закомитить. При большом количестве конфликтов в файле `pnpm-lock.yaml` можно просто запустить `pnpm install`, который автоматически их исправит.

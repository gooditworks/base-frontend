# Локальный запуск и разработка

### Запуск
1. Установить зависимости: `npm install`

### Релиз новой версии
1. Закоммитить изменения согласно (Conventional commits)[https://www.conventionalcommits.org]
2. Проверить код: `npm run lint && npm run test`
3. Не бампая версию вручную, запустить `standard-version`: `npm run release`
4. Запушить созданный changelog: `git push`
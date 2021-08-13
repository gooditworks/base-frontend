# Локальный запуск и разработка

### Запуск
1. Выполнить требования из (@gooditworks/shared)[https://github.com/gooditworks/shared#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5]
2. Установить зависимости: `npm install`

### Релиз новой версии
1. Закоммитить изменения согласно (Conventional commits)[https://www.conventionalcommits.org]
2. Проверить код: `npm run lint && npm run test`
3. Не бампая версию вручную, запустить `standard-version`: `npm run release`
4. Запушить созданный changelog: `git push`
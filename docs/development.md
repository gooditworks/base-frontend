# Локальный запуск и разработка

### Запуск
1. Установить зависимости: `npm install`
2. Запустить development server: `npm run dev`
3. Запустить production server: `npm run start`
4. Скомпилировать production build: `npm run build`

Запустить тесты: `npm run test`
Запустить линтеры: `npm run lint`

### Релиз новой версии
1. Закоммитить изменения согласно (Conventional commits)[https://www.conventionalcommits.org]
2. Проверить код: `npm run lint && npm run test`
3. Не бампая версию вручную, запустить `standard-version`: `npm run release`
4. Запушить созданный changelog: `git push`

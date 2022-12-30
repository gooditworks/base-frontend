# Env переменные

Для работы приложения необходимо заполнить следующие env переменные (через командную строку или `.env` файл):

- `SENTRY_URL`: URL до инстанса Sentry (обычно `https://sentry.io`)
- `SENTRY_ORG`: название организации в Sentry
- `SENTRY_PROJECT`: название проекта в Sentry
- `SENTRY_AUTH_TOKEN`: токен от Sentry
- `NEXT_PUBLIC_SENTRY_ENV`: окружение в Sentry (development/production/etc)
- `NEXT_PUBLIC_SENTRY_DSN`: DSN URL от Sentry
- `NEXT_PUBLIC_LOGDNA_APP`: название приложение в logDNA, желательно с окончанием текущего окружения (-dev/-prod/-etc)
- `NEXT_PUBLIC_LOGDNA_KEY`: ключ от logDNA

Заготовка уже есть в файле `.env.example`, его можно просто переименовать в `.env` и заполнить. Если проект задеплоен на Vercel, то для получения актуальных переменных Development окружения можно воспользоваться командой `vercel env pull`.

### Файл `src/env.ts`

В этом файле (и только в нём) производится чтение env переменных всего приложения, а уже из него они пробрасываются дальше. То есть чтение `process.env` вне этого файла запрещено.

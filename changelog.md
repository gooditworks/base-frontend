# Changelog

## [1.1.0](https://github.com/gooditworks/base/compare/v1.0.0...v1.1.0) (2023-02-25)


### Features

* добавлен чистый Sentry/node ([9c593b5](https://github.com/gooditworks/base/commit/9c593b53b4465316606baf1640652b3cc09fd6b9))
* скрипт обновления base, который дополнительно обновляет конфиг renovate ([6f8ea29](https://github.com/gooditworks/base/commit/6f8ea29c714fbcdd76919fd4c6bf44859241b6d5))

## 1.0.0 (2022-11-23)


### Features

* gha для создания PR для полу-автоматического обновления base ([f865da9](https://github.com/gooditworks/base/commit/f865da9dd8e1b0c8423c40ca38e60fb582463364))
* **git:** commitlint-prompt заменен на commitzen ([1151987](https://github.com/gooditworks/base/commit/11519871f0942c247400c89ebcbe78771373f11d))
* **renovate:** major обновление в отдельных PR ([3d9f742](https://github.com/gooditworks/base/commit/3d9f74233d9c153c87cd5a004cecd68f1d6abb94))
* автоматический репортинг результатов тестов в PR с помощью Github Actions ([5935f10](https://github.com/gooditworks/base/commit/5935f10822be76dbe6bf75f81275d7cc2b5c866b))
* базовый переход на pnpm ([8417f70](https://github.com/gooditworks/base/commit/8417f70ef2fe4664642900771963077bf08ac492))
* Добавлен commitlint prompt ([097964f](https://github.com/gooditworks/base/commit/097964fbd1ee8b7bd503f8898bea66d3b20eaeca))
* добавлен Dependabot с конфигом ([8e75a64](https://github.com/gooditworks/base/commit/8e75a64c1afc2f4d86a3408bb10f775be0d0903f))
* добавлен GHA для release-please ([6f1e151](https://github.com/gooditworks/base/commit/6f1e151d41d06c4603df1054182ebabf8962fe90))
* Добавлен standart-version и commitlint ([b713700](https://github.com/gooditworks/base/commit/b713700a6f22366675c411139ab916f30ea54506))
* добавлен мониторинг ([96f8a7e](https://github.com/gooditworks/base/commit/96f8a7e1616bab44fb43033a1a8346a35d355017))
* Добавлен пакет мониторинга ([53afa10](https://github.com/gooditworks/base/commit/53afa10733a14993cf3bfa0406a13b50de90b545))
* добавлен параметр engines.node &gt;= 14, который запрещает использование пакета нодой старше 14й ([5e5f75c](https://github.com/gooditworks/base/commit/5e5f75ca588b51dbdf454e0aef6ee5ac35020f01))
* Запуск commitlint при коммите ([2165c93](https://github.com/gooditworks/base/commit/2165c93cb5c611650695a34712aa75323df5f747))
* запущен npm audit fix --force ([05ac053](https://github.com/gooditworks/base/commit/05ac0533fe855a1324fe61cd58c6ddd770d832ad))
* настройка renovate ([deed473](https://github.com/gooditworks/base/commit/deed4730fb4a0f8bd1a29a22141fdc0b550be6e3))
* проброс названия текущего окружения в Sentry/logDNA ([488d726](https://github.com/gooditworks/base/commit/488d7268cb42cd5e3e17310b6af59d7b15ad0522))
* стандартизированы env переменные и .env файл ([2d1cfc4](https://github.com/gooditworks/base/commit/2d1cfc4f209347e6379587c5aebfdfdd7b2e4be0))
* теперь это не библиотека, а приложение ([623037c](https://github.com/gooditworks/base/commit/623037cd0ad68c514754b2bd4da94408286c7007))


### Bug Fixes

* **deps:** update dependency dotenv to v14 ([1ad15e4](https://github.com/gooditworks/base/commit/1ad15e4d1a588726104cba5900d967346f7ee4db))
* **deps:** update dependency dotenv to v16 ([f970461](https://github.com/gooditworks/base/commit/f970461755ab4b66fa71a91adeafcc2bbce251e5))
* fault tolerant скрипт add_base_remote ([5bc14b6](https://github.com/gooditworks/base/commit/5bc14b6dbd2f347c812d8c60b49134a1cde52388))
* gha для автоматического обновления base репозитория теперь принимает кастомный github токен ([22a26f5](https://github.com/gooditworks/base/commit/22a26f58389b8cfacd2e9ba9145b1847862765e9))
* gha для запуска Jest тестов обновлен и переведен на pnpm ([5257cef](https://github.com/gooditworks/base/commit/5257cef24a202ed82c7ceeb882f1543cea664470))
* github action для тестов запускается только при pull_request, а не при push ([7804a9f](https://github.com/gooditworks/base/commit/7804a9fb2242d2f4b4ba76a2fe62a3c62fa3c0e1))
* **renovate:** вернул base конфиг ([dbc7518](https://github.com/gooditworks/base/commit/dbc75181f8171452cd5cee3ddf6179ea6d09bbeb))
* в триггере GHA тестов триггер pull_request_target заменен на pull_request ([a25856a](https://github.com/gooditworks/base/commit/a25856aae29bd51f80a9bc645547f32c6a0dab1d))
* вернул npm команду release ([caf8306](https://github.com/gooditworks/base/commit/caf8306c28ce101418657c9efb73250c32319ebe))
* возможность через GHA секреты поставить альтернатианый url base репозитория ([a0f92c7](https://github.com/gooditworks/base/commit/a0f92c7af6c13523c6a2db101ec8bb22c3f7cbc8))
* изменен приоритет токенов gha обновления base ([34e559d](https://github.com/gooditworks/base/commit/34e559dd9357d7b3b0aae8cadcdbd1e9c5b57812))
* исправлен github action test-report ([baf1b3a](https://github.com/gooditworks/base/commit/baf1b3a148dd240ccfb6e3973b630a75f5d235dc))
* исправлена разметка yml ([db10f9e](https://github.com/gooditworks/base/commit/db10f9e03311d95bf67ee3ac415c5ea4dda66329))
* кастомный резолвер для Jest, стоковый не поддерживает exports в мониторинге и падает ([00b7730](https://github.com/gooditworks/base/commit/00b77304cbec0396ada02f117d2955e9d1806979))
* пофикшено правило commitlint, теперь можно создавать коммиты типа wip ([51e95d9](https://github.com/gooditworks/base/commit/51e95d93d7ad388882a818cfe137376f591c2995))
* правильный формат файла lefthook ([7355550](https://github.com/gooditworks/base/commit/735555070f27c69440663db0fec486750c42291f))
* преобразование ошибки из unknown в Error ([9a52790](https://github.com/gooditworks/base/commit/9a52790066e769145211f728435984bfec50b012))
* проброс NPM_TOKEN для тестов в Github Actions ([01ca859](https://github.com/gooditworks/base/commit/01ca859409340b725242bcc3c3eb66c22e7fddc6))
* тип коммита chore добавлен в конфиг commitlint ([767c2a2](https://github.com/gooditworks/base/commit/767c2a26eea5665c18ad9946a3a27336d0abe493))


### Reverts

* удален пакет мониторинга ([a37af3d](https://github.com/gooditworks/base/commit/a37af3d2dae321dbf6881e3383c1dee2729c60a0))

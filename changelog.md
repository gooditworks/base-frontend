# Changelog

## [1.1.0](https://github.com/gooditworks/base-frontend/compare/v1.0.0...v1.1.0) (2023-02-25)


### Features

* добавлен чистый @sentry/nextjs ([91ddb44](https://github.com/gooditworks/base-frontend/commit/91ddb442422c0206082bb249c6e4b171029c93ea))
* добавлен чистый Sentry/node ([9c593b5](https://github.com/gooditworks/base-frontend/commit/9c593b53b4465316606baf1640652b3cc09fd6b9))
* чуть более красивая страница ошибки ([ce8d4cb](https://github.com/gooditworks/base-frontend/commit/ce8d4cb717fdfb1c89091e6847b13561e33ad80c))


### Bug Fixes

* update playwright ([605fd7c](https://github.com/gooditworks/base-frontend/commit/605fd7cf4d67723165c4f6a064d6592af69d8586))
* используем bash в GHA проверки обновлений base ([e635eef](https://github.com/gooditworks/base-frontend/commit/e635eef849eaf3daf9e2251ba33da163ff253cbe))
* пофикшен GHA Next bundle analyzer ([3d77201](https://github.com/gooditworks/base-frontend/commit/3d772018465d78c312c8e69c4ffef1245e4e3795))

## 1.0.0 (2022-11-28)

### Features

* gha для создания PR для полу-автоматического обновления base ([f865da9](https://github.com/gooditworks/base-frontend/commit/f865da9dd8e1b0c8423c40ca38e60fb582463364))
* page View Model для тестов Playwright ([4da6955](https://github.com/gooditworks/base-frontend/commit/4da695544e181c4fcb02292a54a380c51c10c342))
* **renovate:** major обновление в отдельных PR ([3d9f742](https://github.com/gooditworks/base-frontend/commit/3d9f74233d9c153c87cd5a004cecd68f1d6abb94))
* slient: true в конфиге SentryWebpackPlugin ([f1c9f8e](https://github.com/gooditworks/base-frontend/commit/f1c9f8ee8608fea55619c242c6d822d1b120fa5b))
* snapshot тесты в Playwright ([d6f358f](https://github.com/gooditworks/base-frontend/commit/d6f358f50451651c54966f6e9e3c6f502fece744))
* базовые тесты playwright ([f7f8d08](https://github.com/gooditworks/base-frontend/commit/f7f8d0871cd6aec73df399d25572135a457049ce))
* базовый переход на pnpm ([8417f70](https://github.com/gooditworks/base-frontend/commit/8417f70ef2fe4664642900771963077bf08ac492))
* включение автоматического трейсинга ([f9e3231](https://github.com/gooditworks/base-frontend/commit/f9e3231661e125aa01d1fd4faa76737409f83f58))
* демонстрация группировки тестов (test.describe) ([4e3ce05](https://github.com/gooditworks/base-frontend/commit/4e3ce054b4d0ccd5a08d9e524d25f9d97d650fb1))
* добавлен @next/font ([5cede8e](https://github.com/gooditworks/base-frontend/commit/5cede8ea8bcb62d08ba6b4b80d69e809533de09c))
* добавлен GHA для release-please ([6f1e151](https://github.com/gooditworks/base-frontend/commit/6f1e151d41d06c4603df1054182ebabf8962fe90))
* добавлен next bundle analyzer и GHA для него ([2e8c116](https://github.com/gooditworks/base-frontend/commit/2e8c1162c930fcc63a0095dd9872c4aa340e5e9c))
* Добавлен Web Vitals для Axiom ([09637e4](https://github.com/gooditworks/base-frontend/commit/09637e42bf3b3479c492281dd873a4d2327f8eda))
* добавлен свежий tRPC, роутер и метод для примера и тесты к ним ([152524c](https://github.com/gooditworks/base-frontend/commit/152524c1e1284a1b7813875a5f84dd55d0e9b04a))
* добавлен список рекоммендованных расширений vscode ([d2456b4](https://github.com/gooditworks/base-frontend/commit/d2456b4ec7e16cdcc31a482da86b47d0ec44ae82))
* добавлены примеры картинок (и статических и внешних) ([36aca12](https://github.com/gooditworks/base-frontend/commit/36aca12dfff72595b435a0733b6bcde943d96729))
* запуск Playwright в Github Actions ([2f0c092](https://github.com/gooditworks/base-frontend/commit/2f0c092458ca25b5585c3a6a0fc3e8145668d014))
* запущен npm audit fix --force ([05ac053](https://github.com/gooditworks/base-frontend/commit/05ac0533fe855a1324fe61cd58c6ddd770d832ad))
* инициалзация @sentry/next из мониторинга ([40a84c2](https://github.com/gooditworks/base-frontend/commit/40a84c20af8d1c27fbfe1b1b19f9a5b9cce4753f))
* интегрирован cssnano ([23b894c](https://github.com/gooditworks/base-frontend/commit/23b894c3528025dbc704ce402033c61816820f84))
* кастомная страница _error для ловли ошибок в getServerSideProps & getStaticProps ([cddabc6](https://github.com/gooditworks/base-frontend/commit/cddabc61e2a3cfe40c5745af426c065fa322854b))
* мобильные устройства для тестирования в Playwright ([c9aca77](https://github.com/gooditworks/base-frontend/commit/c9aca777df0d0d7910a02e2de256da112ce1aa4b))
* настройка renovate ([deed473](https://github.com/gooditworks/base-frontend/commit/deed4730fb4a0f8bd1a29a22141fdc0b550be6e3))
* полноценно интегрирован next-axiom ([a051954](https://github.com/gooditworks/base-frontend/commit/a0519544236020cb48f2107766012b48a97b4575))
* проброс названия текущего окружения в Sentry/logDNA ([488d726](https://github.com/gooditworks/base-frontend/commit/488d7268cb42cd5e3e17310b6af59d7b15ad0522))
* скрипт обновления base, который дополнительно обновляет конфиг renovate ([6f8ea29](https://github.com/gooditworks/base-frontend/commit/6f8ea29c714fbcdd76919fd4c6bf44859241b6d5))


### Bug Fixes

* `baseUrl` в tsconfig вместо отдельных `paths` ([ef13ab6](https://github.com/gooditworks/base-frontend/commit/ef13ab62ea866f94b07a417b9ca26f57e3720490))
* **deps:** pin dependency next to 12.0.9 ([d61653a](https://github.com/gooditworks/base-frontend/commit/d61653a0588fa631a41c44262d8b33488ac2e5c9))
* **deps:** update dependency dotenv to v14 ([1ad15e4](https://github.com/gooditworks/base-frontend/commit/1ad15e4d1a588726104cba5900d967346f7ee4db))
* **deps:** update dependency dotenv to v16 ([f970461](https://github.com/gooditworks/base-frontend/commit/f970461755ab4b66fa71a91adeafcc2bbce251e5))
* **deps:** update react monorepo to v18 ([434f990](https://github.com/gooditworks/base-frontend/commit/434f9906ff6f74c7490c0ea616176e6ac216d1ea))
* eslint правило для a11y ссылок изменено для нормальной поддержки NextLink ([edd4cc0](https://github.com/gooditworks/base-frontend/commit/edd4cc0b79657c63209e434d42935d334b3d500e))
* fault tolerant скрипт add_base_remote ([5bc14b6](https://github.com/gooditworks/base-frontend/commit/5bc14b6dbd2f347c812d8c60b49134a1cde52388))
* gha bundle-analyzer ([1133776](https://github.com/gooditworks/base-frontend/commit/11337769cfd98016fef7f8c8d449496f31f22e51))
* gha Next bundle analyzer ([833cd98](https://github.com/gooditworks/base-frontend/commit/833cd981ed248c5d9aab3a152a15084bc7feb785))
* gha для автоматического обновления base репозитория теперь принимает кастомный github токен ([22a26f5](https://github.com/gooditworks/base-frontend/commit/22a26f58389b8cfacd2e9ba9145b1847862765e9))
* gha для запуска Jest тестов обновлен и переведен на pnpm ([5257cef](https://github.com/gooditworks/base-frontend/commit/5257cef24a202ed82c7ceeb882f1543cea664470))
* gha переведены на pnpm ([32d3e78](https://github.com/gooditworks/base-frontend/commit/32d3e787ffaf754eb05b1f5cb00abae4fa29a23e))
* playwright в GA снова включен, отключены лишь snapshot'ы ([6a38099](https://github.com/gooditworks/base-frontend/commit/6a38099c4cef0604b6bdc3e0aaffddb21c05cf9a))
* **renovate:** вернул base конфиг ([dbc7518](https://github.com/gooditworks/base-frontend/commit/dbc75181f8171452cd5cee3ddf6179ea6d09bbeb))
* более корректная задержка для загрузки шрифтов ([5fa6bd4](https://github.com/gooditworks/base-frontend/commit/5fa6bd46ecf1d2ba0736e565de1ddbff0ff4fb35))
* в триггере GHA тестов триггер pull_request_target заменен на pull_request ([a25856a](https://github.com/gooditworks/base-frontend/commit/a25856aae29bd51f80a9bc645547f32c6a0dab1d))
* возможность через GHA секреты поставить альтернатианый url base репозитория ([a0f92c7](https://github.com/gooditworks/base-frontend/commit/a0f92c7af6c13523c6a2db101ec8bb22c3f7cbc8))
* изменен приоритет токенов gha обновления base ([34e559d](https://github.com/gooditworks/base-frontend/commit/34e559dd9357d7b3b0aae8cadcdbd1e9c5b57812))
* исправлен Playwright GA ([e35c332](https://github.com/gooditworks/base-frontend/commit/e35c332f27c03fe971bbbf23bebfc05230d92325))
* корректная инициализация sentry в server окружении ([b9dbea6](https://github.com/gooditworks/base-frontend/commit/b9dbea693b7f311dd1f9d380e0f8d9af7a0bcbc9))
* корректные Props у компонента ErrorCapturer ([e13ad72](https://github.com/gooditworks/base-frontend/commit/e13ad725bf3925d760b8093550c6abae2a74b441))
* корректные токены для GHA обновления base ([3b40ac5](https://github.com/gooditworks/base-frontend/commit/3b40ac58b536c1812a06c7df6de7aa51ab250dc6))
* обновлён cypress (ломал тесты на свежей ноде) ([896f285](https://github.com/gooditworks/base-frontend/commit/896f285c7dc5821127662f7871d77838be609ade))
* обновлён конфиг jest для ts-jest@29 ([30d40e8](https://github.com/gooditworks/base-frontend/commit/30d40e8aa4e5b45b88417de313bf160180aef3a6))
* обновлена нода в GHA Playwright ([5b39c19](https://github.com/gooditworks/base-frontend/commit/5b39c1965b0665a73e337f3aa2e2790f453311af))
* обновление Next для починки сборки в Vercel ([930ce39](https://github.com/gooditworks/base-frontend/commit/930ce398702e28b0807f437f483fbc358a0b9303))
* обновление мониторинга ([cbb763e](https://github.com/gooditworks/base-frontend/commit/cbb763e40a5a5e30bc98d6562acf6974968862dc))
* отправка source maps в Sentry только при билде в Vercel ([5c5512a](https://github.com/gooditworks/base-frontend/commit/5c5512a9b6cb60116a92d219f472a75affce3f1d))
* пофикшено правило commitlint, теперь можно создавать коммиты типа wip ([51e95d9](https://github.com/gooditworks/base-frontend/commit/51e95d93d7ad388882a818cfe137376f591c2995))
* пофикшены e2e тесты ([04ab2bc](https://github.com/gooditworks/base-frontend/commit/04ab2bccf00b6f3b745a0096e08b599c89c6b6e7))
* починен GA (добавлен runs-on) ([c0fb3a4](https://github.com/gooditworks/base-frontend/commit/c0fb3a4bd35023ae32a8a3fb925d7576932e8083))
* починены обычные unit тесты ([d1d1de9](https://github.com/gooditworks/base-frontend/commit/d1d1de98602efb99c2beef4e3d2d57f235152d25))
* правильный root layout для Next 13 ([4deeb27](https://github.com/gooditworks/base-frontend/commit/4deeb277dc25f1a6dffd35c07aabd4e44546086b))
* преобразование ошибки из unknown в Error ([9a52790](https://github.com/gooditworks/base-frontend/commit/9a52790066e769145211f728435984bfec50b012))
* пробуем запускать e2e тесты в macos (GA) ([95040e5](https://github.com/gooditworks/base-frontend/commit/95040e5085940f8912b0e6ec7851c4bd647cd827))
* проставлен шрифт, чтобы на разных платформах не отличались скришоты страниц в тестах PW ([97a516d](https://github.com/gooditworks/base-frontend/commit/97a516d376325cc17d9e96452dfb4e227bebdddd))
* тесты в Github actions теперь запускаются из ветки PR, а не main ([7f8270a](https://github.com/gooditworks/base-frontend/commit/7f8270ae51afc68a70f5a4fceac7fe4f1f8af48c))

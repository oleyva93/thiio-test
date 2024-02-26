## Thiio Test

A simple and clean SPA project with authentication, user, roles and permissions management. This site uses the following tools:

[![](https://img.shields.io/badge/vue.js-v3.3-04C690.svg)](https://vuejs.org)
[![](https://img.shields.io/badge/Laravel-v10.26.2-ff2e21.svg)](https://laravel.com)
[![](https://img.shields.io/badge/axios-v1.5-5A29E4.svg)](https://axios-http.com)
[![](https://img.shields.io/badge/vite-v4.4-646cff.svg)](https://vitejs.dev)

- [Laravel 10.x](https://github.com/laravel/laravel)
- [Laravel Sanctum](https://laravel.com/docs/10.x/sanctum)
- [Vue 3](https://github.com/vuejs/vue)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Vue I18n](https://vue-i18n.intlify.dev)
- [Laravel Request Docs](https://github.com/rakutentech/laravel-request-docs)

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Features

The following Sanctum features are implemented in this Vue SPA:

- ✅ Laravel 10
- ✅ Vue 3
- ✅ VueRouter + Vuex + Vuetify
- ✅ Login
- ✅ Password Reset
- ✅ Registration
- ✅ Admin Panel
- ✅ Profile Management
- ✅ User Management
- ✅ Roles Management
- ✅ Permissions Management
- ✅ Password Change
- ✅ E-Mail Verification

## How To Use
#### Clone the repository

```bash
git clone https://github.com/oleyva93/thiio-test.git
```

#### Copy .env.example file to .env and edit credentials also set app url

#### Install Via Composer

```bash
composer install
```

#### Generate Application Key

```bash
php artisan key:generate
```

#### Migrate Database

```bash
php artisan migrate
```

#### Run Seeder

```bash
php artisan db:seed
```

#### Install Node Dependencies

```bash
npm install or yarn install

```

#### Run App

```bash
php artisan serve

npm run dev or yarn dev
```

#### Login Credentials

- user: admin@demo.com
- password: 12345678

#### Production

```bash
npm run build or yarn build
```

#### Run Tests

```bash
cp phpunit.dist.xml phpunit.xml
./vendor/bin/phpunit
```

## Email Verification

To enable email verification make sure that your `App\User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.

## Contributing

Thank you for considering contributing to the project! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail via [fazrabbi010@gmail.com](mailto:fazrabbi010@gmail.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).    
The Vue framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).    
This repository is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). 

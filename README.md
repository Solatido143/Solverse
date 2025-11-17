# Solverse

Solverse is a two-part web application consisting of a Laravel backend and a Vue + Vite frontend. The backend provides an API and data models; the frontend is a SPA that consumes the API.

## Repository layout

- `backend/` — Laravel application (API, migrations, seeders, models, tests)
- `frontend/` — Vue + Vite single-page application

## Requirements

- PHP 8.1+ and Composer
- Node.js 16+ and `npm` (or `yarn` / `pnpm`)
- A supported database (MySQL, PostgreSQL, SQLite, etc.)

## Quickstart (PowerShell)

1) Backend (Laravel)

```powershell
cd backend
composer install
copy .env.example .env
php artisan key:generate
# Edit .env to configure database credentials and other secrets
php artisan migrate --seed
php artisan serve --host=127.0.0.1 --port=8000
```

2) Frontend (Vue + Vite)

```powershell
cd frontend
npm install
npm run dev
```

Vite will print the dev-server URL (usually `http://localhost:5173`). Confirm the frontend is using the correct backend API URL in `frontend/src` or environment configuration.

## Running tests

Backend tests (Pest/PHPUnit):

```powershell
cd backend
php artisan test
```

Frontend tests (if configured):

```powershell
cd frontend
npm test
```

## Production build

Frontend:

```powershell
cd frontend
npm run build
```

Backend (typical production steps):

```powershell
cd backend
composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Notable files

- `backend/app/Models/Books.php` — Book model
- `backend/app/Models/User.php` — User model
- `backend/routes/api.php` — API routes
- `backend/database/migrations/2025_11_12_050715_create_books_table.php` — Books migration
- `frontend/src/App.vue` — Vue root component
- `frontend/src/main.js` — Frontend entry

## Contributing

1. Open an issue describing the change or bug.
2. Create a feature branch off `master`.
3. Open a pull request with a clear description and tests where appropriate.
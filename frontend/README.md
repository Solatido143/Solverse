# Frontend (Vue + Vite)

This folder contains the Vue single-page application built with Vite.

Location: `frontend/`

## Requirements

- Node.js 16+
- `npm`, `yarn`, or `pnpm`

## Setup & Development

```powershell
cd .\frontend
npm install
npm run dev
```

Vite will print the local URL (e.g. `http://localhost:5173`). By default the frontend expects the API to be available via `VITE_API_URL` (see `.env` configuration below).

## Build for production

```powershell
cd .\frontend
npm run build
```

## Environment

Create an `.env` or `.env.local` file in `frontend/` with at least the following:

```
VITE_API_URL=http://127.0.0.1:8000/api
```

Adjust the URL/port to match your backend. If using a proxy or different domain, update `VITE_API_URL` accordingly.

## Notable files

- `src/App.vue` — Root Vue component
- `src/main.js` — App bootstrap
- `src/api/` — API helper files (if present)
# Solverse

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

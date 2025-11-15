# Contributing

Thanks for considering contributing to Solverse! Please follow these guidelines to make collaboration smooth.

## How to contribute

1. Open an issue describing the bug or feature you'd like to add.
2. Fork the repository and create a descriptive branch name, e.g. `feature/auth` or `fix/books-migration`.
3. Make small, focused commits with clear commit messages.
4. Add tests for new features or bug fixes when applicable.
5. Open a pull request describing your changes and linking relevant issues.

## Branches

- Work off the `master` branch.
- Use feature branches and open a PR when ready.

## Code style

- Follow existing project conventions.
- For PHP/Laravel: PSR-12 style is recommended.
- For Javascript/Vue: follow existing ESLint configuration when present.

## Tests

Run backend tests:

```powershell
cd backend
php artisan test
```

Run frontend tests (if present):

```powershell
cd frontend
npm test
```

## Review

Provide context for reviewers, include screenshots if the change affects UI, and ensure CI passes before requesting review.

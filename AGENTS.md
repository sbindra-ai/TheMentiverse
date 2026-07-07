# Repository Guidelines

## Project Structure & Module Organization

This repository is currently minimal. The root contains `README.md`, which identifies the project as TheMentiverse. Keep top-level documentation in the repository root. When source code is added, prefer a conventional layout such as `src/` for application code, `tests/` for automated tests, and `assets/` or `public/` for static files. Avoid committing generated build outputs unless they are required for distribution.

## Build, Test, and Development Commands

No project-specific build or test tooling is defined yet. There is no `package.json`, `Makefile`, or language-specific project manifest in the current tree.

Useful repository commands:

- `git status --short` shows local changes before editing or committing.
- `git log --oneline -5` reviews recent commit style.
- `find . -maxdepth 2 -type f` lists the current file layout when adding new structure.

When adding a framework or runtime, document the canonical commands here, for example `npm test`, `npm run build`, `pytest`, or `make build`.

## Coding Style & Naming Conventions

Follow the conventions of the language or framework introduced by future code. Keep filenames descriptive and consistent within each directory. Use lowercase, hyphenated names for Markdown and static assets when practical, for example `project-overview.md`. Prefer clear module names over abbreviations. If a formatter or linter is added, make it the source of truth and document the exact command in this guide.

## Testing Guidelines

There are no tests yet. Add tests alongside the first implementation work, using the standard test framework for the chosen stack. Prefer a dedicated `tests/` directory for cross-module behavior and colocated tests only when that is idiomatic for the framework. Name tests after the behavior they verify, such as `test_user_can_create_project` or `ProjectForm.test.tsx`.

## Commit & Pull Request Guidelines

The current history contains a single commit, `Initial commit`, so no detailed convention is established. Use short, imperative commit messages such as `Add project README` or `Create initial app shell`.

Pull requests should include a concise description, the reason for the change, and any verification performed. Link related issues when available. For user-facing UI changes, include screenshots or screen recordings.

## Agent-Specific Instructions

Before making changes, check for existing files and avoid overwriting user work. Keep edits scoped to the requested task, and update this guide when project structure, tooling, or workflow conventions change.

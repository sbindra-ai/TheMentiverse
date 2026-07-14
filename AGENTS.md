# Repository Guidelines

## Project Structure & Module Organization

Mentiverse is a Next.js 15 App Router application. Keep top-level documentation
in the repository root and longer planning docs in `docs/`.

```text
.
├── app/                 # Routes, layouts, and page UI
├── components/          # Shared UI (layout, auth, globe, sections, ui)
├── lib/                 # Site config, Clerk helpers, roles, utils
├── middleware.ts        # Clerk middleware (no-op when keys unset)
├── docs/                # Architecture and product planning
├── public/              # Static assets
├── Dockerfile           # Production image
└── AGENTS.md / README.md
```

Avoid committing generated outputs such as `.next/`, `node_modules/`, or
`.env.local`. Prefer descriptive names; use lowercase hyphenated names for
Markdown and static assets when practical.

## Build, Test, and Development Commands

Canonical commands:

- `npm install` — install dependencies
- `npm run dev` — local development server (TLS workaround enabled)
- `npm run dev:strict-tls` — local server with strict TLS
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript (`tsc --noEmit`)
- `npm run build` — production build
- `npm start` — serve production build

Useful git helpers:

- `git status --short` — local changes before editing or committing
- `git log --oneline -5` — recent commit style

Run only one `npm run dev` instance at a time for this repo. Concurrent Next
servers can corrupt the Windows webpack pack cache under `.next/cache`.

## Coding Style & Naming Conventions

- TypeScript + React function components
- Tailwind CSS utility classes; shared tokens in `app/globals.css` / `tailwind.config.ts`
- Clerk-specific helpers in `lib/clerk.ts`, `lib/clerk-appearance.ts`, `lib/roles.ts`
- Keep business rules out of page components when logic grows; prefer `lib/` or a future `server/` layer
- Prefer clear module names over abbreviations
- ESLint (`eslint-config-next`) is the lint source of truth

## Authentication Notes

- Clerk is optional until real keys are present in `.env.local`
- Sign-up collects `mentee` or `mentor` and stores it in Clerk `unsafeMetadata.role`
- Dashboard redirects to `/onboarding/role` when a signed-in user has no role
- Never expose `CLERK_SECRET_KEY` to client code
- Place `ClerkProvider` inside `<body>`, not wrapping `<html>`

## Testing Guidelines

There are no automated tests yet. When adding them, prefer architecture-fitting
placement (`tests/` for cross-module behavior; colocated tests when idiomatic for
Next/React). Name tests after the behavior they verify, such as
`UserCanChooseMentorRole.test.tsx`.

## Commit & Pull Request Guidelines

Use short, imperative commit messages such as `Add mentee mentor signup roles`
or `Fix ClerkProvider placement in root layout`.

Pull requests should include a concise description, the reason for the change,
and any verification performed (`npm run typecheck`, manual auth smoke test,
screenshots for UI). Link related issues when available.

## Agent-Specific Instructions

Before making changes, check for existing files and avoid overwriting user work.
Keep edits scoped to the requested task. Update this guide when project
structure, tooling, or workflow conventions change. Never commit secrets from
`.env.local`.

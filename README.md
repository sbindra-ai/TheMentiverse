# The Mentiverse

The Mentiverse is a long-term mentorship SaaS platform connecting students,
young professionals, mentors, universities, nonprofits, companies, and
recruiters.

This repository is currently in Phase 1: public landing website foundation.

## Current Scope

Implemented:

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-ready configuration
- Public landing website
- Responsive navigation and footer
- Brand styling and page structure
- Docker, Docker Compose, and Render.com readiness
- PostgreSQL environment readiness

Not implemented yet:

- Authentication
- Prisma or database access
- AI features
- Application workflows
- Admin dashboard

## Pages

- `/`
- `/about`
- `/programs`
- `/how-it-works`
- `/become-a-mentor`
- `/find-a-mentor`
- `/partner-with-us`
- `/contact`

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Docker

Build and run the web app with PostgreSQL available for future phases:

```bash
docker compose up --build
```

The app will run at `http://localhost:3000`.

## Documentation

Architecture and planning documents live in `docs/`.

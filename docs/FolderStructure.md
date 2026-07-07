# Folder Structure

The repository is currently in Phase 0 and contains only documentation. The intended structure below should guide application scaffolding when approved.

## Current Structure

```text
.
├── AGENTS.md
├── README.md
└── docs/
```

## Planned Structure

```text
.
├── app/                  # Next.js App Router pages, layouts, and route handlers
├── components/           # Shared React components
│   ├── ui/               # shadcn/ui components
│   └── features/         # Feature-specific composed components
├── lib/                  # Shared utilities and configuration
├── server/               # Application services, domain logic, and integrations
│   ├── application/      # Use cases and workflows
│   ├── domain/           # Entities, policies, and business rules
│   └── infrastructure/   # Prisma, auth, storage, email, and AI adapters
├── prisma/               # Schema and database migrations
├── public/               # Static assets
├── tests/                # Integration and end-to-end tests
├── docs/                 # Architecture and product planning
└── docker/               # Deployment and local infrastructure files
```

## Organization Rules

- Keep business rules out of page components.
- Prefer feature folders when a capability grows beyond one or two files.
- Keep reusable UI components generic and domain components explicit.
- Place external service clients behind infrastructure adapters.
- Document structural changes in this file before they become conventions.


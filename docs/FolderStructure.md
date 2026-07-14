# Folder Structure

The repository now contains the Phase 1 public site plus Clerk authentication. The structure below reflects the current tree and the intended growth path.

## Current Structure

```text
.
├── AGENTS.md
├── README.md
├── Dockerfile
├── middleware.ts
├── package.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Landing page
│   ├── dashboard/               # Protected signed-in home
│   ├── onboarding/role/         # Mentee/mentor role capture
│   ├── sign-in/[[...sign-in]]/
│   ├── sign-up/[[...sign-up]]/
│   ├── sso-callback/
│   ├── about/
│   ├── become-a-mentor/
│   ├── contact/
│   ├── find-a-mentor/
│   ├── how-it-works/
│   ├── partner-with-us/
│   └── programs/
├── components/
│   ├── auth/                    # Role picker, Clerk signup flow, Google button
│   ├── globe/                   # Network globe
│   ├── layout/                  # Header, footer
│   ├── sections/                # Shared page sections
│   └── ui/                      # Button and other primitives
├── lib/
│   ├── clerk.ts
│   ├── clerk-appearance.ts
│   ├── roles.ts
│   ├── site.ts
│   └── utils.ts
├── public/
└── docs/
```

## Planned Structure Additions

```text
.
├── server/               # Application services, domain logic, and integrations
│   ├── application/      # Use cases and workflows
│   ├── domain/           # Entities, policies, and business rules
│   └── infrastructure/   # Prisma, auth sync, storage, email, and AI adapters
├── prisma/               # Schema and database migrations
├── tests/                # Integration and end-to-end tests
└── docker/               # Extra infra files if composition grows
```

## Organization Rules

- Keep business rules out of page components.
- Prefer feature folders when a capability grows beyond one or two files.
- Keep reusable UI components generic and domain components explicit.
- Place external service clients behind infrastructure adapters.
- Document structural changes in this file before they become conventions.

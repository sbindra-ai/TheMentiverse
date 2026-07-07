# Architecture

The Mentiverse will use a modular monolith architecture built on Next.js 15 App Router. This keeps deployment and development simple in early phases while preserving clean boundaries for future service extraction.

## Architectural Style

- Frontend: Next.js App Router with React Server Components where appropriate.
- Backend: Next.js Route Handlers and Server Actions for application workflows.
- Data access: Prisma ORM with PostgreSQL.
- UI system: Tailwind CSS and shadcn/ui.
- Authentication: Clerk planned for a later phase.
- Storage: Supabase Storage planned for user-uploaded files.
- AI: OpenAI API planned behind dedicated application services.

## Layering

The codebase should separate responsibilities into clear layers:

- Presentation: pages, layouts, components, forms, and client interaction.
- Application: use cases, workflows, validation, permissions, and orchestration.
- Domain: core entities, business rules, and policy decisions.
- Infrastructure: Prisma, external APIs, authentication providers, storage, email, and AI clients.

Next.js should not become the business logic layer. Route Handlers and Server Actions should call application services rather than directly owning complex rules.

## Key Decisions

- Start as a modular monolith to reduce operational overhead while the domain is still evolving.
- Use PostgreSQL as the system of record because mentorship relationships, applications, programs, and opportunities are relational.
- Keep AI integrations behind interfaces so prompts, providers, models, and safety checks can evolve independently.
- Use role-aware authorization from the beginning, even before full enterprise features exist.
- Maintain architecture decision records in `docs/decisions/` once implementation begins.

## Quality Attributes

The platform must be secure, accessible, observable, testable, and deployable through repeatable automation. Features should be designed for future organizations, roles, audit trails, and reporting needs.


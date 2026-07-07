# Technology Stack

This document defines the intended platform stack for The Mentiverse. Tooling should be introduced deliberately and documented when added.

## Frontend

- Next.js 15 App Router for routing, rendering, and full-stack workflows.
- React with TypeScript for reusable, typed UI.
- Tailwind CSS for utility-first styling.
- shadcn/ui for accessible, composable UI primitives.

## Backend

- Next.js Route Handlers for HTTP APIs.
- Server Actions for authenticated form-driven workflows where appropriate.
- Prisma ORM for database access and migrations.

## Database

- PostgreSQL will be the primary relational database.
- Prisma migrations should be the source of schema change history.

## Authentication And Authorization

- Clerk is planned for authentication.
- Application-level authorization should model roles such as student, mentor, admin, organization owner, recruiter, and partner.

## Storage

- Supabase Storage is planned for resumes, profile images, program materials, and future document uploads.
- Uploaded files should be scanned, access-controlled, and associated with owner records.

## Deployment

- Docker will define repeatable runtime environments.
- Render.com is the planned hosting platform.
- GitHub will be the source of truth for version control and pull request review.

## Future AI

- OpenAI API will power AI mentor assistance, career coaching, resume review, and interview preparation.
- AI calls should be isolated behind service interfaces with logging, evaluation, and safety controls.


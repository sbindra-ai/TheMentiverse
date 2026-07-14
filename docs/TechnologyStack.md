# Technology Stack

This document defines the platform stack for The Mentiverse. Tooling should be introduced deliberately and documented when added.

## Frontend

- Next.js 15 App Router for routing, rendering, and full-stack workflows.
- React 19 with TypeScript for reusable, typed UI.
- Tailwind CSS for utility-first styling.
- shadcn/ui-style primitives (`components/ui`) for accessible, composable UI.
- `cobe` for the landing-page network globe animation.

## Backend

- Next.js Route Handlers for HTTP APIs (as product APIs are added).
- Server Actions for authenticated form-driven workflows where appropriate.
- Prisma ORM for database access and migrations (planned).

## Database

- PostgreSQL will be the primary relational database (Neon planned for hosted use).
- Prisma migrations should be the source of schema change history.
- Auth identity currently lives in Clerk; Mentiverse domain data will live in PostgreSQL.

## Authentication And Authorization

- Clerk is implemented for sign-in, sign-up, Google OAuth, and session middleware.
- Sign-up collects initial participation role: `mentee` or `mentor` (`unsafeMetadata.role`).
- Application-level authorization will later model richer roles such as student, mentor, admin, organization owner, recruiter, and partner in PostgreSQL.

## Storage

- Supabase Storage is planned for resumes, profile images, program materials, and future document uploads.
- Uploaded files should be scanned, access-controlled, and associated with owner records.

## Deployment

- Docker defines a repeatable production runtime (`Dockerfile`).
- Render.com is the planned hosting platform.
- GitHub is the source of truth for version control and pull request review.

## Future AI

- OpenAI API will power AI mentor assistance, career coaching, resume review, and interview preparation.
- AI calls should be isolated behind service interfaces with logging, evaluation, and safety controls.

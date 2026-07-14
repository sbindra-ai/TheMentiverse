# Roadmap

The Mentiverse roadmap is organized into phases that protect long-term architecture while still delivering visible product value.

## Phase 0: Foundation — done

- Architecture documentation
- Folder structure and code organization
- Database design (planned model)
- Deployment strategy
- Developer workflow
- Initial engineering standards

## Phase 1: Public Platform — done

- Landing website
- Navigation and brand system
- Responsive marketing pages
- Animated network globe
- Docker setup
- Render-oriented deployment config

## Phase 1.5: Accounts Foundation — in progress / partial

Moved ahead of original Phase 3 so users can create Mentiverse accounts early:

- Clerk authentication (email + Google)
- Sign-up mentee/mentor role selection
- Role onboarding fallback
- Protected dashboard shell
- Still pending: PostgreSQL-backed profiles and application workflows

## Phase 2: Applications And Admin

- Mentor application workflow
- Mentee application workflow
- PostgreSQL / Prisma / Neon integration
- Sync Clerk users into Mentiverse `User` + role records
- API and Server Action workflows
- Admin dashboard for reviewing applications

## Phase 3: Profiles And Matching

- Richer user profiles and role expansion
- Manual mentor-mentee matching
- Program management for organizations
- Basic notifications

## Phase 4: AI Guidance

- AI mentor assistant
- AI career coach
- Resume review
- Interview preparation
- Prompt evaluation, safety checks, and usage logging

## Phase 5: Marketplace And Network

- Internship marketplace
- Scholarship portal
- Messaging
- Events and groups
- Alumni network
- Mobile application planning

## Roadmap Principles

- Each phase should leave the codebase deployable.
- Data models should support later phases without overbuilding early screens.
- Security, accessibility, and observability are not optional follow-up work.

# Database Design

PostgreSQL will be the primary system of record. Prisma should manage schema definitions, migrations, and typed database access.

## Design Principles

- Model the platform around users, roles, profiles, programs, applications, matches, and opportunities.
- Preserve auditability for sensitive workflows such as applications, matching, and AI-assisted recommendations.
- Prefer explicit join tables for many-to-many relationships.
- Use stable IDs and timestamps on all major records.
- Avoid storing derived data unless it improves performance or reporting.

## Initial Domain Entities

- User: identity record linked to authentication provider data.
- Profile: public and private user details.
- Role: student, mentor, admin, organization owner, recruiter, or partner.
- Organization: university, nonprofit, company, or community partner.
- Program: structured mentorship initiative owned by an organization or the platform.
- MentorApplication: mentor onboarding and review data.
- MenteeApplication: mentee onboarding and goals.
- Match: relationship between mentor, mentee, program, and status.
- Opportunity: internships, scholarships, events, or partner offerings.
- MessageThread and Message: future communication model.
- AiInteraction: future record of AI requests, outputs, metadata, and safety signals.

## Data Protection

Educational, career, resume, and application data should be treated as sensitive. Authorization must be enforced at the application layer and supported by database constraints where practical. Avoid logging raw personal data. File metadata should live in the database while binary content remains in object storage.

## Migration Strategy

All schema changes should be created through Prisma migrations. Production migrations must be reviewed in pull requests and tested against realistic seed data before deployment.


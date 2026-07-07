# Deployment Strategy

The Mentiverse should use repeatable, environment-based deployments from the beginning. Docker will define the runtime and Render.com is the planned hosting platform.

## Environments

- Local: developer machines using local environment variables and development services.
- Preview: pull request or branch deployments for review.
- Staging: production-like validation before release.
- Production: public customer-facing environment.

## Docker

Docker should provide consistent application runtime behavior across local development, CI, and Render. The production image should install only required dependencies, build the Next.js application, and run with environment-specific configuration.

## Render.com

Render should host the web service and managed PostgreSQL database when the application is ready. Environment variables must be configured through Render secrets rather than committed files.

## Configuration

Use `.env.local` for local development and document required variables in `.env.example`. Never commit secrets. Expected future variables include database URLs, Clerk keys, Supabase credentials, and OpenAI API keys.

## Release Process

- Merge through reviewed pull requests.
- Run formatting, linting, type checks, tests, and build before deployment.
- Apply Prisma migrations as part of a controlled release process.
- Verify health checks and key user flows after deploy.

## Observability

Add structured logging, error tracking, and basic performance monitoring before production launch. Sensitive user data must be redacted from logs and third-party monitoring tools.


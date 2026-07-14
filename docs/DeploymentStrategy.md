# Deployment Strategy

The Mentiverse should use repeatable, environment-based deployments from the beginning. Docker defines the runtime and Render.com is the planned hosting platform.

## Environments

- Local: developer machines using `.env.local` and development Clerk keys.
- Preview: pull request or branch deployments for review.
- Staging: production-like validation before release.
- Production: public customer-facing environment.

## Docker

Docker should provide consistent application runtime behavior across local development, CI, and Render. The production image should install only required dependencies, build the Next.js application, and run with environment-specific configuration. See the root `Dockerfile`.

## Render.com

Render should host the web service and managed PostgreSQL database when the application is ready. Environment variables must be configured through Render secrets rather than committed files.

Required now for auth-enabled deploys:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- Clerk URL helpers (`NEXT_PUBLIC_CLERK_SIGN_IN_URL`, etc.)
- `NEXT_PUBLIC_APP_URL` set to the deployed origin

Also configure the same origin in the Clerk dashboard allowed origins / redirect URLs.

## Configuration

Use `.env.local` for local development and document required variables in `.env.example`. Never commit secrets. Expected variables include database URLs, Clerk keys, Supabase credentials, and OpenAI API keys.

Local Windows note: if corporate TLS inspection breaks Clerk server-side fetches, prefer installing the org root CA via `NODE_EXTRA_CA_CERTS`. `npm run dev` temporarily sets `NODE_TLS_REJECT_UNAUTHORIZED=0` for local Node only; do not rely on that in production.

## Release Process

- Merge through reviewed pull requests.
- Run linting, type checks, tests (when present), and build before deployment.
- Apply Prisma migrations as part of a controlled release process once the database exists.
- Verify health checks and key user flows after deploy (sign-up role selection, Google OAuth, dashboard).

## Observability

Add structured logging, error tracking, and basic performance monitoring before production launch. Sensitive user data must be redacted from logs and third-party monitoring tools.

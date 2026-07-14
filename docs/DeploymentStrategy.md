# Deployment Strategy

The Mentiverse should use repeatable, environment-based deployments from the beginning. Docker defines the runtime and Render.com is the planned hosting platform.

## Environments

- Local: developer machines using `.env.local` and development Clerk keys.
- Preview: pull request or branch deployments for review.
- Staging: production-like validation before release.
- Production: public customer-facing environment.

## Docker

Docker should provide consistent application runtime behavior across local development, CI, and Render. The production image should install only required dependencies, build the Next.js application, and run with environment-specific configuration. See the root `Dockerfile`.

The runner image must set `HOSTNAME=0.0.0.0`. Render sets `HOSTNAME` to the container id by default; Next.js standalone would bind to that value and return HTTP 502. Render injects `PORT` at runtime (often `10000`) — do not assume port `3000` in production.

`NEXT_PUBLIC_*` and Clerk keys used by middleware must be available as Docker build `ARG`s (same names as env vars) so the client bundle and middleware see them at build time.

## Render.com

Render hosts the web service. PostgreSQL is optional until Prisma/profiles ship. Environment variables must be configured through Render secrets rather than committed files.

Required now for auth-enabled deploys:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- Clerk URL helpers (`NEXT_PUBLIC_CLERK_SIGN_IN_URL`, etc.)
- `NEXT_PUBLIC_APP_URL` set to the deployed origin (e.g. `https://the-mentiverse-web.onrender.com` or the custom domain)
- `HOSTNAME=0.0.0.0` (also baked into the Dockerfile)

Also configure the same origin in the Clerk dashboard allowed origins / redirect URLs. After changing `NEXT_PUBLIC_*` values, trigger a **clear cache / rebuild** so Docker rebuilds with the new build args.

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

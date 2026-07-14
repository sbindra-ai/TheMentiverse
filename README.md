# Mentiverse

Mentiverse is a long-term mentorship SaaS platform connecting students,
young professionals, mentors, universities, nonprofits, companies, and
recruiters.

## Current Scope

Implemented:

- Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS
- Public marketing site with animated network globe
- Clerk authentication (email + Google OAuth)
- Sign-up role selection (**mentee** or **mentor**)
- Role onboarding fallback for users without a role
- Protected dashboard with role-aware CTAs
- Docker / Render readiness

Not implemented yet:

- Prisma / Neon application database
- Mentorship matching and program workflows
- AI features
- Full admin dashboard

## Local Development

```bash
npm install
cp .env.example .env.local
```

Add your Clerk keys to `.env.local`, then:

```bash
npm run dev
```

Open `http://localhost:3000` (or the port Next prints if 3000 is busy).

Only run **one** `npm run dev` for this project at a time. Multiple Next
servers can race the `.next` webpack cache on Windows and produce
`ENOENT ... *.pack.gz` rename warnings.

### Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local server (includes TLS workaround for corporate proxies) |
| `npm run dev:strict-tls` | Local server with normal TLS verification |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run build` | Production build |
| `npm start` | Serve production build |

> **Windows / corporate network note:** If Clerk logs
> `unable to resolve handshake: fetch failed` or Node reports
> `SELF_SIGNED_CERT_IN_CHAIN`, something on your machine (VPN, antivirus,
> or proxy) is intercepting HTTPS. `npm run dev` relaxes TLS verification
> for local Node fetches. Prefer installing your org’s root CA into Node
> via `NODE_EXTRA_CA_CERTS` when you can.

## Authentication Setup (Clerk + Google)

You do **not** need Neon/PostgreSQL to sign users up. Clerk stores identity
and sessions. Role choice (`mentee` / `mentor`) is stored in Clerk
`unsafeMetadata.role` until the app database is added. Neon is only needed
later for Mentiverse profiles, matches, and programs.

### 1. Create a Clerk application

1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Create an application (for example `Mentiverse`)
3. Enable **Email** and **Google** as sign-in methods
4. Copy **Publishable key** and **Secret key**

### 2. Add keys to `.env.local`

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Leave Clerk keys blank to browse the public site without auth UI enabled.
Do not use placeholder values like `pk_test_paste_here`.

### 3. Enable Google in Clerk

In the Clerk dashboard:

1. **User & Authentication → Social Connections → Google**
2. Toggle Google on (Clerk development credentials work for local testing)
3. For production later, create Google OAuth credentials in Google Cloud Console
   and paste Client ID / Secret into Clerk

Also add `http://localhost:3000` (and `http://localhost:3001` if Next uses that port)
under Clerk **Paths / Allowed origins** if prompted.

### 4. Try it

- `/sign-up` — choose mentee or mentor, then create an account (email or Google)
- `/sign-up?role=mentee` or `/sign-up?role=mentor` — skip straight to that role
- `/sign-in` — sign in
- `/onboarding/role` — pick a role if the account is missing one
- `/dashboard` — protected home after auth

Restart `npm run dev` after changing env vars.

## Auth And App Routes

| Route | Purpose |
| --- | --- |
| `/sign-in` | Clerk sign-in |
| `/sign-up` | Role picker + Clerk sign-up |
| `/sso-callback` | Google OAuth return |
| `/onboarding/role` | Role selection for signed-in users without a role |
| `/dashboard` | Protected signed-in home |
| `/find-a-mentor` | Mentee marketing page (`/sign-up?role=mentee`) |
| `/become-a-mentor` | Mentor marketing page (`/sign-up?role=mentor`) |

## Docker

```bash
docker compose up --build
```

## Documentation

Planning and architecture docs live in `docs/`:

- `docs/Vision.md` / `docs/Mission.md` — product direction
- `docs/Architecture.md` — system design
- `docs/TechnologyStack.md` — chosen tools
- `docs/FolderStructure.md` — repo layout
- `docs/DatabaseDesign.md` — planned data model
- `docs/DeploymentStrategy.md` — environments and hosting
- `docs/Roadmap.md` — delivery phases

`AGENTS.md` covers repository conventions for humans and coding agents.

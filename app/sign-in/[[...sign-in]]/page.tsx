import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { clerkAppearance } from "@/lib/clerk-appearance";
import { isClerkConfigured } from "@/lib/clerk";

export default function SignInPage() {
  if (!isClerkConfigured()) {
    return <ClerkSetupNotice action="sign in" />;
  }

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-16">
      <SignIn
        appearance={clerkAppearance}
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
        fallbackRedirectUrl="/dashboard"
      />
    </section>
  );
}

function ClerkSetupNotice({ action }: { action: string }) {
  return (
    <section className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
      <div className="max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-8 text-left shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">
          Clerk setup needed
        </p>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          Add real Clerk keys to enable {action}
        </h1>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>
            Create an app at{" "}
            <a
              className="font-medium text-blue-600 underline"
              href="https://dashboard.clerk.com"
              target="_blank"
              rel="noreferrer"
            >
              dashboard.clerk.com
            </a>
          </li>
          <li>Copy Publishable Key and Secret Key</li>
          <li>
            Paste them into <code className="rounded bg-white px-1">.env.local</code>
          </li>
          <li>Enable Google under Social Connections</li>
          <li>
            Restart <code className="rounded bg-white px-1">npm run dev</code>
          </li>
        </ol>
        <Button asChild className="mt-6">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}

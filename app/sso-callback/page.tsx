import Link from "next/link";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { isClerkConfigured } from "@/lib/clerk";

export default function SSOCallbackPage() {
  if (!isClerkConfigured()) {
    return (
      <section className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
        <div className="max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h1 className="text-2xl font-bold">Clerk is not configured</h1>
          <p className="mt-3 text-sm text-slate-700">
            Add real Clerk keys to <code>.env.local</code> before using Google
            sign-in.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Finishing Google sign-in…
        </p>
        <AuthenticateWithRedirectCallback />
      </div>
    </section>
  );
}

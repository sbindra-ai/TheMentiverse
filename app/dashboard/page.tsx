import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { isClerkConfigured } from "@/lib/clerk";
import { getRoleFromUser, roleCopy } from "@/lib/roles";

export default async function DashboardPage() {
  if (!isClerkConfigured()) {
    return (
      <section className="container py-16">
        <div className="mx-auto max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h1 className="text-2xl font-bold">Dashboard needs Clerk</h1>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Add real Clerk keys to <code>.env.local</code>, then restart the
            dev server and sign in.
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </section>
    );
  }

  await auth.protect();

  const user = await currentUser();
  const role = getRoleFromUser(user);

  if (!role) {
    redirect("/onboarding/role");
  }

  const firstName = user?.firstName ?? "there";
  const roleLabel = roleCopy[role].label;

  return (
    <section className="container py-16 sm:py-20">
      <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-border bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {roleLabel} dashboard
            </p>
            <h1 className="display-heading mt-3 text-3xl font-bold sm:text-4xl">
              Hi {firstName} — you&apos;re signed in as a {roleLabel.toLowerCase()}.
            </h1>
            <p className="mt-4 leading-7 text-muted-foreground">
              {role === "mentee"
                ? "Your Mentiverse mentee account is ready. Next we will connect goals, mentor matching, and programs."
                : "Your Mentiverse mentor account is ready. Next we will connect expertise, availability, and mentee matching."}
            </p>
          </div>
          <UserButton />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {role === "mentee" ? (
            <>
              <Button asChild size="lg">
                <Link href="/find-a-mentor" className="gap-2">
                  Find a mentor
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/programs">Explore programs</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild size="lg">
                <Link href="/become-a-mentor" className="gap-2">
                  Complete mentor profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">See how matching works</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

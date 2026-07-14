"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SignUp } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";

import { RolePicker } from "@/components/auth/role-picker";
import { Button } from "@/components/ui/button";
import { clerkAppearance } from "@/lib/clerk-appearance";
import {
  ROLE_STORAGE_KEY,
  parseRole,
  roleCopy,
  type UserRole
} from "@/lib/roles";

export function SignUpFlow() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<UserRole | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const fromQuery = parseRole(searchParams.get("role"));
    if (fromQuery) {
      setRole(fromQuery);
      setConfirmed(true);
      window.sessionStorage.setItem(ROLE_STORAGE_KEY, fromQuery);
      return;
    }

    const stored = parseRole(window.sessionStorage.getItem(ROLE_STORAGE_KEY));
    if (stored) {
      setRole(stored);
    }
  }, [searchParams]);

  function continueWithRole() {
    if (!role) return;
    window.sessionStorage.setItem(ROLE_STORAGE_KEY, role);
    setConfirmed(true);
  }

  function changeRole() {
    setConfirmed(false);
  }

  if (!confirmed || !role) {
    return (
      <div className="w-full max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Mentiverse
        </p>
        <h1 className="display-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Join as a mentee or mentor
        </h1>
        <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
          Choose how you want to start. You can still use Google or email in the
          next step.
        </p>

        <div className="mt-8">
          <RolePicker value={role} onChange={setRole} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" disabled={!role} onClick={continueWithRole}>
            Continue to sign up
          </Button>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col items-stretch gap-5">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={changeRole}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Change role
        </button>
        <p className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Joining as {roleCopy[role].label}
        </p>
      </div>

      <SignUp
        appearance={clerkAppearance}
        signInUrl="/sign-in"
        forceRedirectUrl="/dashboard"
        fallbackRedirectUrl="/dashboard"
        unsafeMetadata={{ role }}
      />
    </div>
  );
}

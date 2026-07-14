"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { RolePicker } from "@/components/auth/role-picker";
import { Button } from "@/components/ui/button";
import { ROLE_STORAGE_KEY, type UserRole } from "@/lib/roles";

export function ChooseRoleForm() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [role, setRole] = useState<UserRole | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function saveRole() {
    if (!role || !user) return;

    setIsSaving(true);
    setError(null);

    try {
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          role
        }
      });
      window.sessionStorage.setItem(ROLE_STORAGE_KEY, role);
      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError("Could not save your role. Please try again.");
      setIsSaving(false);
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Mentiverse
      </p>
      <h1 className="display-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        One more step — who are you here as?
      </h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
        Tell us whether you want guidance or want to give it. You can update this
        later as your Mentiverse profile grows.
      </p>

      <div className="mt-8">
        <RolePicker value={role} onChange={setRole} />
      </div>

      <div className="mt-8">
        <Button
          size="lg"
          disabled={!role || !isLoaded || isSaving}
          onClick={saveRole}
        >
          {isSaving ? "Saving…" : "Continue to Mentiverse"}
        </Button>
        {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}
      </div>
    </div>
  );
}

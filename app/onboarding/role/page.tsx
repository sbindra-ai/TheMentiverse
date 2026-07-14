import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";

import { ChooseRoleForm } from "@/components/auth/choose-role-form";
import { isClerkConfigured } from "@/lib/clerk";
import { getRoleFromUser } from "@/lib/roles";

export default async function OnboardingRolePage() {
  if (!isClerkConfigured()) {
    redirect("/sign-up");
  }

  await auth.protect();

  const user = await currentUser();
  if (getRoleFromUser(user)) {
    redirect("/dashboard");
  }

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-16">
      <ChooseRoleForm />
    </section>
  );
}

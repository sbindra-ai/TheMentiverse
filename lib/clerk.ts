/**
 * Clerk is optional until real API keys are added to `.env.local`.
 * Placeholder values like `pk_test_paste_here` are treated as unset.
 */
export function isClerkConfigured() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
  const secretKey = process.env.CLERK_SECRET_KEY ?? "";

  return (
    publishableKey.startsWith("pk_test_") || publishableKey.startsWith("pk_live_")
  ) &&
    publishableKey.length > 20 &&
    !publishableKey.includes("paste_here") &&
    (secretKey.startsWith("sk_test_") || secretKey.startsWith("sk_live_")) &&
    secretKey.length > 20 &&
    !secretKey.includes("paste_here");
}

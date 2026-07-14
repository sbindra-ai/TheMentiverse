"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useSignIn } from "@clerk/nextjs/legacy";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type GoogleSignInButtonProps = {
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const hasClerkKey =
  (publishableKey.startsWith("pk_test_") ||
    publishableKey.startsWith("pk_live_")) &&
  publishableKey.length > 20 &&
  !publishableKey.includes("paste_here");

export function GoogleSignInButton({
  label = "Sign in with Google",
  className,
  size = "lg"
}: GoogleSignInButtonProps) {
  if (!hasClerkKey) {
    return (
      <div className="flex max-w-sm flex-col gap-2">
        <Button asChild size={size} variant="outline" className={className}>
          <Link href="/sign-in" className="gap-2">
            <GoogleMark />
            {label}
          </Link>
        </Button>
        <p className="text-sm text-amber-700">
          Add real Clerk keys to <code>.env.local</code> to enable Google sign-in.
        </p>
      </div>
    );
  }

  return (
    <GoogleSignInButtonActive
      label={label}
      className={className}
      size={size}
    />
  );
}

function GoogleSignInButtonActive({
  label,
  className,
  size
}: Required<Pick<GoogleSignInButtonProps, "label">> &
  Omit<GoogleSignInButtonProps, "label">) {
  const { isLoaded: authLoaded } = useAuth();
  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (authLoaded && signInLoaded) return;
    const timer = window.setTimeout(() => setTimedOut(true), 2500);
    return () => window.clearTimeout(timer);
  }, [authLoaded, signInLoaded]);

  async function handleGoogleSignIn() {
    if (!signInLoaded || !signIn) {
      window.location.assign("/sign-in");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/onboarding/role"
      });
    } catch (err) {
      console.error(err);
      setError(
        "Google sign-in failed. Enable Google under Clerk → Social Connections."
      );
      setIsLoading(false);
    }
  }

  if (timedOut && !(authLoaded && signInLoaded)) {
    return (
      <Button asChild size={size} variant="outline" className={className}>
        <Link href="/sign-in" className="gap-2">
          <GoogleMark />
          {label}
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        size={size}
        variant="outline"
        className={className}
        disabled={isLoading}
        onClick={handleGoogleSignIn}
      >
        <GoogleMark />
        {isLoading ? "Redirecting…" : label}
      </Button>
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.7 14.5 2.7 12 2.7 6.9 2.7 2.7 6.9 2.7 12S6.9 21.3 12 21.3c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"
      />
      <path
        fill="#34A853"
        d="M3.9 7.4l3 2.2C7.7 7.4 9.7 6.2 12 6.2c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.7 14.5 2.7 12 2.7 8.5 2.7 5.5 4.7 3.9 7.4z"
      />
      <path
        fill="#4A90E2"
        d="M12 21.3c2.4 0 4.4-.8 5.9-2.2l-2.8-2.2c-.8.6-1.9 1-3.1 1-2.4 0-4.4-1.6-5.1-3.8l-3 2.3c1.6 3.1 4.7 4.9 8.1 4.9z"
      />
      <path
        fill="#FBBC05"
        d="M6.9 14.1c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9l-3-2.3C3.3 9.3 3 10.6 3 12s.3 2.7.9 3.9l3-1.8z"
      />
    </svg>
  );
}

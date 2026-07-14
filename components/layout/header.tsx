"use client";

import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";

const clerkEnabled =
  typeof process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "string" &&
  (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_test_") ||
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_live_")) &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 20 &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("paste_here");

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <div className="container flex min-h-[4.25rem] items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[1.05rem] font-bold tracking-tight text-foreground"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-[0_10px_24px_rgba(37,99,235,0.28)]">
            M
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {clerkEnabled ? (
            <>
              <Show when="signed-out">
                <Button asChild variant="ghost" className="hidden sm:inline-flex">
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </Show>
              <Show when="signed-in">
                <Button asChild variant="ghost" className="hidden sm:inline-flex">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <UserButton />
              </Show>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>

      <nav
        className="container flex gap-2 overflow-x-auto pb-3 text-sm font-medium text-muted-foreground xl:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            className="shrink-0 rounded-full bg-secondary px-3 py-2 transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

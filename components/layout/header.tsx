import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#fff8ed]/90 backdrop-blur-xl">
      <div className="container flex min-h-[4.5rem] items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold tracking-normal text-foreground"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-[0_14px_30px_rgba(18,105,100,0.18)]">
            M
          </span>
          <span>The Mentiverse</span>
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-semibold text-muted-foreground lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.slice(1, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/find-a-mentor">Find a Mentor</Link>
          </Button>
        </div>
      </div>

      <nav
        className="container flex gap-3 overflow-x-auto border-t border-amber-900/10 py-3 text-sm font-semibold text-muted-foreground lg:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-white/60 px-3 py-2 transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

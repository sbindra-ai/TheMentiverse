import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-amber-900/10 bg-[#1f2a2e] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-lg font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7b267] text-[#1f2a2e]">
              M
            </span>
            The Mentiverse
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            A long-term mentorship platform for students, mentors, education
            partners, nonprofits, companies, and early-career talent.
          </p>
          <p className="mt-5 text-sm font-semibold text-[#f7b267]">
            Guidance. Growth. Giving Back.
          </p>
        </div>

        <nav
          className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Footer navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="transition-colors hover:text-white"
          >
            {siteConfig.links.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

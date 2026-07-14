import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import { footerColumns, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.1fr_2fr]">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[1.05rem] font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              M
            </span>
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Connecting mentors and students worldwide. Build guidance, growth,
            and opportunity across a global community.
          </p>
          <div className="mt-5 flex items-center gap-3 text-muted-foreground">
            <a
              href="https://twitter.com"
              className="rounded-lg p-2 transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              className="rounded-lg p-2 transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              className="rounded-lg p-2 transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-foreground">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col gap-3 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.links.email}
            </a>
            <span className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium">
              English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

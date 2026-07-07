import { Mail } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with The Mentiverse."
        description="Reach out about mentorship programs, partnerships, early access, or future collaboration."
      />
      <section className="container py-14">
        <div className="max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
          <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold">Email</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Use email for now while application workflows are introduced in a
            later phase.
          </p>
          <Button asChild className="mt-6">
            <a href={`mailto:${siteConfig.links.email}`}>
              {siteConfig.links.email}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

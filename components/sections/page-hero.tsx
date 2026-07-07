import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction
}: PageHeroProps) {
  return (
    <section className="overflow-hidden border-b bg-[linear-gradient(135deg,#fff8ed_0%,#f9efe1_45%,#edf8f6_100%)]">
      <div className="container py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            {eyebrow}
          </p>
          <h1 className="display-heading mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryAction ? (
                <Button asChild size="lg">
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button asChild size="lg" variant="outline">
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

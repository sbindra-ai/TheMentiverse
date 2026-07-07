type ContentSectionProps = {
  title: string;
  description?: string;
  items?: Array<{
    title: string;
    description: string;
  }>;
};

export function ContentSection({
  title,
  description,
  items = []
}: ContentSectionProps) {
  return (
    <section className="container py-16">
      <div className="max-w-2xl">
        <h2 className="display-heading text-3xl font-bold sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {items.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border bg-card/95 p-6 shadow-[0_18px_46px_rgba(58,38,20,0.07)] transition-transform hover:-translate-y-1"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

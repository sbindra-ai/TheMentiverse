import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";

const audiences = [
  {
    title: "Students",
    label: "Find direction",
    description:
      "Explore guidance for school, career choices, internships, scholarships, and the next step in front of you."
  },
  {
    title: "Mentors",
    label: "Give back",
    description:
      "Share experience through meaningful conversations, structured programs, and practical career support."
  },
  {
    title: "Organizations",
    label: "Scale impact",
    description:
      "Build mentorship pathways for universities, nonprofits, companies, recruiters, and community programs."
  }
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Education to career guidance",
    description:
      "Support for high school, college, and early-career transitions."
  },
  {
    icon: Handshake,
    title: "Mentorship relationships",
    description:
      "Built around durable mentor-mentee connections and program workflows."
  },
  {
    icon: Building2,
    title: "Partner ecosystems",
    description:
      "Prepared for universities, nonprofits, companies, and recruiting partners."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-amber-900/10 bg-[linear-gradient(135deg,#fff3df_0%,#fff8ed_43%,#e6f5f1_100%)]">
        <div className="container grid gap-12 py-14 sm:py-[4.5rem] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <p className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" aria-hidden="true" />
              Guidance. Growth. Giving Back.
            </p>
            <h1 className="display-heading mt-6 max-w-4xl text-5xl font-bold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Your Universe of Mentors, Guidance, and Opportunity
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              The Mentiverse helps students, young professionals, mentors, and
              organizations connect through meaningful guidance, career support,
              and opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/find-a-mentor">
                  Find a Mentor
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/become-a-mentor">Become a Mentor</Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm font-semibold text-muted-foreground">
              <div className="rounded-lg border border-white/70 bg-white/60 p-3">
                Students
              </div>
              <div className="rounded-lg border border-white/70 bg-white/60 p-3">
                Mentors
              </div>
              <div className="rounded-lg border border-white/70 bg-white/60 p-3">
                Partners
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-8 z-10 hidden rounded-lg border bg-white/90 p-4 shadow-soft sm:block">
              <p className="text-xs font-semibold uppercase text-primary">
                Mentorship path
              </p>
              <p className="mt-2 text-sm font-semibold">
                Goals, guidance, and opportunity in one place.
              </p>
            </div>
            <Image
              src="/images/mentiverse-community-hero.png"
              alt="Students and mentors gathered in a warm learning space"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full rounded-[1.75rem] border-[8px] border-white object-cover shadow-[0_30px_90px_rgba(58,38,20,0.18)]"
            />
            <div className="absolute -bottom-6 right-4 hidden max-w-xs rounded-lg border bg-[#1f2a2e] p-5 text-white shadow-soft md:block">
              <HeartHandshake className="h-6 w-6 text-[#f7b267]" aria-hidden="true" />
              <p className="mt-3 text-sm leading-6 text-white/80">
                Built for the relationships that help people choose, prepare,
                and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            One platform, many pathways
          </p>
          <h2 className="display-heading mt-3 text-3xl font-bold sm:text-4xl">
            Mentorship should feel personal, structured, and accessible.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="mt-8 rounded-lg border bg-white/80 p-6 shadow-[0_18px_46px_rgba(58,38,20,0.07)] transition-transform hover:-translate-y-1 md:mt-0"
            >
              <p className="text-sm font-semibold text-primary">{item.label}</p>
              <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="container py-16">
          <div className="max-w-2xl">
            <h2 className="display-heading text-3xl font-bold sm:text-4xl">
              A movement for guidance, growth, and giving back.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              The Mentiverse starts with a public foundation and grows into the
              infrastructure for mentorship programs, opportunity discovery,
              career support, and community-led advancement.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-lg border border-white/70 bg-white/75 p-6 shadow-[0_18px_46px_rgba(58,38,20,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="rounded-[1.5rem] bg-[#1f2a2e] p-8 text-white shadow-[0_30px_90px_rgba(31,42,46,0.18)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#f7b267]">
              Build the future of mentorship
            </p>
            <h2 className="display-heading mt-3 text-3xl font-bold sm:text-4xl">
              Join a platform designed to help people move forward together.
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Start with mentorship. Grow into programs, opportunity pathways,
              career readiness, and community impact.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button asChild size="lg" variant="secondary">
              <Link href="/partner-with-us">Partner With Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

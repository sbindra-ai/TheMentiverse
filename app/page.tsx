import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  ChevronRight,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Users
} from "lucide-react";

import { NetworkGlobe } from "@/components/globe/network-globe";
import { Button } from "@/components/ui/button";

const leaders = [
  { name: "Satya Nadella", role: "CEO, Microsoft", tone: "bg-sky-100 text-sky-700" },
  { name: "Indra Nooyi", role: "Former CEO, PepsiCo", tone: "bg-violet-100 text-violet-700" },
  { name: "Sundar Pichai", role: "CEO, Google", tone: "bg-emerald-100 text-emerald-700" },
  { name: "Mary Barra", role: "CEO, General Motors", tone: "bg-amber-100 text-amber-700" },
  { name: "Jensen Huang", role: "CEO, NVIDIA", tone: "bg-rose-100 text-rose-700" },
  { name: "Arvind Krishna", role: "CEO, IBM", tone: "bg-indigo-100 text-indigo-700" }
];

const journey = [
  {
    title: "Discover",
    description: "Explore mentors matched to your goals, industry, and stage.",
    icon: Compass,
    color: "text-violet-500 bg-violet-50"
  },
  {
    title: "Learn",
    description: "Grow through guided sessions, feedback, and real-world insight.",
    icon: GraduationCap,
    color: "text-blue-500 bg-blue-50"
  },
  {
    title: "Achieve",
    description: "Turn guidance into outcomes — offers, projects, and clarity.",
    icon: Award,
    color: "text-emerald-500 bg-emerald-50"
  },
  {
    title: "Lead",
    description: "Build confidence and step into roles that shape others.",
    icon: Sparkles,
    color: "text-orange-500 bg-orange-50"
  },
  {
    title: "Give Back",
    description: "Mentor the next wave and keep the network growing.",
    icon: HeartHandshake,
    color: "text-rose-500 bg-rose-50"
  }
];

const fields = [
  "All Fields",
  "Technology",
  "Business",
  "Design",
  "Healthcare",
  "Finance",
  "Education"
];

const mentors = [
  {
    name: "Priya Sharma",
    title: "AI Research Lead",
    company: "DeepMind",
    tags: ["AI", "Research"],
    initials: "PS",
    tone: "from-slate-700 to-slate-900"
  },
  {
    name: "Marcus Chen",
    title: "Product Director",
    company: "Stripe",
    tags: ["Product", "Growth"],
    initials: "MC",
    tone: "from-zinc-600 to-zinc-900"
  },
  {
    name: "Amara Okafor",
    title: "Design Systems Lead",
    company: "Figma",
    tags: ["Design", "UX"],
    initials: "AO",
    tone: "from-neutral-600 to-neutral-900"
  },
  {
    name: "David Kim",
    title: "Partner",
    company: "Sequoia",
    tags: ["Startups", "Strategy"],
    initials: "DK",
    tone: "from-stone-600 to-stone-900"
  }
];

const stats = [
  { label: "Countries", value: "125+", icon: Globe2 },
  { label: "Mentors", value: "50K+", icon: Users },
  { label: "Students", value: "200K+", icon: GraduationCap },
  { label: "Organizations", value: "5K+", icon: Building2 }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_42%),radial-gradient(circle_at_10%_80%,rgba(147,197,253,0.18),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
        <div className="container grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-16 xl:py-20">
          <div className="max-w-xl">
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Mentiverse
            </p>
            <h1 className="display-heading animate-fade-up-delay-1 mt-4 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]">
              Find the person who{" "}
              <span className="text-primary">changes your future.</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Connect with world-class mentors across industries. Build skills,
              open doors, and grow inside a global mentorship network built for
              lasting relationships.
            </p>
            <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
              <Button asChild size="lg">
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sign-up?role=mentor">Become a mentor</Link>
              </Button>
            </div>
            <div className="animate-fade-up-delay-3 mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["SK", "AL", "JM", "RT"].map((initials, index) => (
                  <span
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm"
                    style={{
                      background: [
                        "#3b82f6",
                        "#6366f1",
                        "#0ea5e9",
                        "#2563eb"
                      ][index]
                    }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Join <span className="text-foreground">50,000+</span> people
                growing together
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <NetworkGlobe />
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-white py-6">
        <div className="container">
          <div className="overflow-hidden">
            <div className="mentor-scroll flex w-max gap-10 pr-10">
              {[...leaders, ...leaders].map((leader, index) => (
                <div
                  key={`${leader.name}-${index}`}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold ${leader.tone}`}
                  >
                    {leader.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {leader.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-heading text-3xl font-bold sm:text-4xl">
            Your journey. One platform.
          </h2>
          <p className="mt-3 text-muted-foreground">
            From discovery to giving back — mentorship that compounds over time.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
          {journey.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-stretch gap-3">
              <article className="flex-1 rounded-2xl border border-border bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.color}`}
                >
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </article>
              {index < journey.length - 1 ? (
                <div className="hidden items-center text-slate-300 lg:flex">
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/40 py-16 sm:py-20">
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="display-heading text-3xl font-bold sm:text-4xl">
                Learn from the best
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Browse mentors across fields and start a conversation that moves
                your career forward.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/find-a-mentor" className="gap-2">
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {fields.map((field, index) => (
              <button
                key={field}
                type="button"
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground shadow-[0_8px_20px_rgba(37,99,235,0.25)]"
                    : "border border-border bg-white text-muted-foreground hover:text-foreground"
                }`}
              >
                {field}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {mentors.map((mentor) => (
              <article
                key={mentor.name}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.1)]"
              >
                <div
                  className={`flex h-44 items-end bg-gradient-to-br ${mentor.tone} p-5`}
                >
                  <span className="text-4xl font-bold tracking-tight text-white/90">
                    {mentor.initials}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {mentor.title} · {mentor.company}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Available
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 py-12">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="rounded-[1.75rem] border border-border bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] px-6 py-12 text-center shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:px-10">
          <h2 className="display-heading text-3xl font-bold sm:text-4xl">
            Be part of something bigger
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Whether you are looking for guidance or ready to share it, Mentiverse
            is where meaningful careers are built together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/sign-up">Join as a Mentor</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/sign-up">Join as a Student</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

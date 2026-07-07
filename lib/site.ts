export const siteConfig = {
  name: "The Mentiverse",
  description:
    "A mentorship ecosystem connecting students, professionals, mentors, universities, nonprofits, companies, and recruiters.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    email: "hello@thementiverse.com"
  }
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/become-a-mentor", label: "Become a Mentor" },
  { href: "/find-a-mentor", label: "Find a Mentor" },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/contact", label: "Contact" }
] as const;

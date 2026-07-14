export const siteConfig = {
  name: "Mentiverse",
  description:
    "A global mentorship ecosystem connecting students, professionals, mentors, universities, nonprofits, companies, and recruiters.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    email: "hello@thementiverse.com"
  }
};

export const navItems = [
  { href: "/find-a-mentor", label: "Mentors" },
  { href: "/programs", label: "Students" },
  { href: "/partner-with-us", label: "Organizations" },
  { href: "/how-it-works", label: "Opportunities" },
  { href: "/become-a-mentor", label: "Careers" },
  { href: "/about", label: "About" }
] as const;

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { href: "/find-a-mentor", label: "Find a Mentor" },
      { href: "/become-a-mentor", label: "Become a Mentor" },
      { href: "/programs", label: "Programs" },
      { href: "/how-it-works", label: "How it Works" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/about", label: "Guides" },
      { href: "/programs", label: "Success Stories" },
      { href: "/contact", label: "Help Center" },
      { href: "/partner-with-us", label: "API" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/partner-with-us", label: "Careers" },
      { href: "/partner-with-us", label: "Press" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Privacy" },
      { href: "/contact", label: "Terms" },
      { href: "/contact", label: "Cookies" },
      { href: "/contact", label: "Security" }
    ]
  }
] as const;

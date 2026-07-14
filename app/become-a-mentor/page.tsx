import { ContentSection } from "@/components/sections/content-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: "Become a Mentor"
};

export default function BecomeAMentorPage() {
  return (
    <>
      <PageHero
        eyebrow="Become a mentor"
        title="Help students and early-career professionals move with confidence."
        description="The Mentiverse will make it easier for mentors to share experience through structured programs, clear expectations, and responsible matching."
        primaryAction={{
          label: "Sign up as a mentor",
          href: "/sign-up?role=mentor"
        }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
      <ContentSection
        title="Mentor principles"
        items={[
          {
            title: "Clarity",
            description:
              "Mentors should understand the goals, time commitment, and support model before joining."
          },
          {
            title: "Safety",
            description:
              "Future mentor workflows will include review, role-based access, and appropriate program oversight."
          },
          {
            title: "Impact",
            description:
              "Mentorship should produce practical next steps, stronger networks, and measurable growth."
          }
        ]}
      />
    </>
  );
}

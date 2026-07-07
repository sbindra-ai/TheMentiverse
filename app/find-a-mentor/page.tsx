import { ContentSection } from "@/components/sections/content-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: "Find a Mentor"
};

export default function FindAMentorPage() {
  return (
    <>
      <PageHero
        eyebrow="Find a mentor"
        title="Guidance for school, career, and the decisions in between."
        description="The Mentiverse will help students and young professionals connect with mentors who can support their goals, questions, and next opportunities."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "See Programs", href: "/programs" }}
      />
      <ContentSection
        title="Areas of support"
        items={[
          {
            title: "College guidance",
            description:
              "Explore academic paths, applications, majors, scholarships, and transition planning."
          },
          {
            title: "Career readiness",
            description:
              "Prepare for resumes, interviews, internships, networking, and early professional decisions."
          },
          {
            title: "Long-term growth",
            description:
              "Build confidence, accountability, and a stronger support network over time."
          }
        ]}
      />
    </>
  );
}

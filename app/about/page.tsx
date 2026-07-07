import { ContentSection } from "@/components/sections/content-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A mentorship ecosystem designed for long-term impact."
        description="The Mentiverse is being built to make guidance, opportunity, and professional development more accessible across education and career stages."
      />
      <ContentSection
        title="What we are building"
        description="The platform will support students, mentors, and organizations through structured programs, career pathways, and eventually AI-assisted guidance."
        items={[
          {
            title: "Student-centered",
            description:
              "High school students, college students, and young professionals should be able to find practical guidance."
          },
          {
            title: "Mentor-enabled",
            description:
              "Experienced professionals should have clear ways to support people without unnecessary operational overhead."
          },
          {
            title: "Partner-ready",
            description:
              "Universities, nonprofits, companies, and recruiters should be able to scale mentorship programs responsibly."
          }
        ]}
      />
    </>
  );
}

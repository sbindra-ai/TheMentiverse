import { ContentSection } from "@/components/sections/content-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: "Programs"
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Structured mentorship programs for every stage of growth."
        description="The Mentiverse will support program models for education, career readiness, alumni engagement, internships, and community partnerships."
        primaryAction={{ label: "Partner With Us", href: "/partner-with-us" }}
      />
      <ContentSection
        title="Initial program areas"
        items={[
          {
            title: "College and career readiness",
            description:
              "Guidance for students preparing for applications, majors, interviews, and professional pathways."
          },
          {
            title: "Mentor networks",
            description:
              "Program structures for matching, check-ins, goals, and relationship tracking."
          },
          {
            title: "Opportunity pathways",
            description:
              "A future foundation for internships, scholarships, events, and recruiting partnerships."
          }
        ]}
      />
    </>
  );
}

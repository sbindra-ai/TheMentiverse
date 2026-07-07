import { ContentSection } from "@/components/sections/content-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: "How It Works"
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A simple public entry point for a deeper mentorship platform."
        description="Phase 1 introduces the brand and core pathways. Later phases will add applications, profiles, matching, dashboards, and program management."
      />
      <ContentSection
        title="Future user journey"
        items={[
          {
            title: "Choose a pathway",
            description:
              "Students, mentors, and partners start from the public site based on their goals."
          },
          {
            title: "Apply or connect",
            description:
              "Future workflows will collect structured information for review, matching, and program placement."
          },
          {
            title: "Grow with support",
            description:
              "The platform will help users track goals, meetings, opportunities, and guidance over time."
          }
        ]}
      />
    </>
  );
}

import { ContentSection } from "@/components/sections/content-section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = {
  title: "Partner With Us"
};

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Mentorship infrastructure for organizations and communities."
        description="The Mentiverse is being designed for universities, nonprofits, companies, recruiters, and community partners that want to support emerging talent."
        primaryAction={{ label: "Start a Conversation", href: "/contact" }}
      />
      <ContentSection
        title="Partnership models"
        items={[
          {
            title: "Universities",
            description:
              "Support students with alumni networks, career preparation, and program-based mentorship."
          },
          {
            title: "Nonprofits",
            description:
              "Scale mission-aligned guidance with better coordination, tracking, and mentor engagement."
          },
          {
            title: "Companies",
            description:
              "Build talent pipelines through mentorship, internships, scholarships, and early-career programs."
          }
        ]}
      />
    </>
  );
}

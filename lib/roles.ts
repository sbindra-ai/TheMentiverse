export const USER_ROLES = ["mentee", "mentor"] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const ROLE_STORAGE_KEY = "mentiverse_signup_role";

export const roleCopy: Record<
  UserRole,
  { label: string; title: string; description: string }
> = {
  mentee: {
    label: "Mentee",
    title: "I'm looking for a mentor",
    description:
      "Get guidance, grow your skills, and open doors with experienced mentors."
  },
  mentor: {
    label: "Mentor",
    title: "I want to mentor others",
    description:
      "Share your experience, guide rising talent, and give back through mentorship."
  }
};

export function parseRole(value: unknown): UserRole | null {
  if (value === "mentee" || value === "mentor") {
    return value;
  }
  return null;
}

export function getRoleFromUser(user: {
  unsafeMetadata?: Record<string, unknown> | null;
  publicMetadata?: Record<string, unknown> | null;
} | null | undefined): UserRole | null {
  return (
    parseRole(user?.unsafeMetadata?.role) ??
    parseRole(user?.publicMetadata?.role)
  );
}

export const clerkAppearance = {
  variables: {
    colorPrimary: "#3b82f6",
    colorText: "#0f172a",
    colorTextSecondary: "#64748b",
    colorBackground: "#ffffff",
    colorInputBackground: "#ffffff",
    colorInputText: "#0f172a",
    borderRadius: "0.75rem",
    fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif"
  },
  elements: {
    card: "shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-slate-200",
    headerTitle: "text-slate-900",
    headerSubtitle: "text-slate-500",
    socialButtonsBlockButton:
      "border border-slate-200 hover:bg-slate-50 transition-colors",
    formButtonPrimary:
      "bg-blue-500 hover:bg-blue-600 shadow-[0_10px_28px_rgba(37,99,235,0.28)]",
    footerActionLink: "text-blue-500 hover:text-blue-600"
  }
} as const;

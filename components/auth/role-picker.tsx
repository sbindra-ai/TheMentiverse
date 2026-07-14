"use client";

import { GraduationCap, HeartHandshake } from "lucide-react";

import { cn } from "@/lib/utils";
import { roleCopy, type UserRole } from "@/lib/roles";

const roleIcons = {
  mentee: GraduationCap,
  mentor: HeartHandshake
} as const;

type RolePickerProps = {
  value: UserRole | null;
  onChange: (role: UserRole) => void;
};

export function RolePicker({ value, onChange }: RolePickerProps) {
  return (
    <div
      className="grid gap-3 sm:grid-cols-2"
      role="radiogroup"
      aria-label="Choose how you want to join Mentiverse"
    >
      {(["mentee", "mentor"] as const).map((role) => {
        const selected = value === role;
        const Icon = roleIcons[role];
        const copy = roleCopy[role];

        return (
          <button
            key={role}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(role)}
            className={cn(
              "group rounded-2xl border px-5 py-5 text-left transition-all duration-200",
              "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/60",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              selected
                ? "border-primary bg-accent shadow-[0_14px_36px_rgba(37,99,235,0.14)]"
                : "border-border bg-white"
            )}
          >
            <span
              className={cn(
                "mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                selected
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-primary group-hover:bg-primary/10"
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {copy.label}
            </span>
            <span className="mt-2 block text-lg font-bold text-foreground">
              {copy.title}
            </span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              {copy.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}

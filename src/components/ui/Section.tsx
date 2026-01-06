import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "muted" | "forest" | "gradient";
  padding?: "sm" | "md" | "lg" | "none";
  id?: string;
}

const backgrounds = {
  white: "bg-white",
  muted: "bg-muted",
  forest: "bg-forest text-white",
  gradient: "bg-gradient-to-br from-white via-sunrise/5 to-sky/10",
};

const paddings = {
  none: "",
  sm: "py-8 lg:py-12",
  md: "py-12 lg:py-16",
  lg: "py-16 lg:py-24",
};

export default function Section({
  children,
  className = "",
  background = "white",
  padding = "md",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-10 lg:mb-12 ${className}`}>
      <h2 className="text-forest mb-4">{title}</h2>
      {subtitle && (
        <p className="text-warmgray text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

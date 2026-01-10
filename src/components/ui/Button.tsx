import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "gold" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  primary:
    "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl font-semibold relative overflow-hidden group transition-all duration-300",
  secondary:
    "bg-forest hover:bg-forest-dark text-white shadow-lg hover:shadow-xl font-semibold relative overflow-hidden group transition-all duration-300",
  gold:
    "bg-gold hover:bg-gold-warm text-forest-dark shadow-lg hover:shadow-xl font-semibold relative overflow-hidden group transition-all duration-300",
  ghost:
    "bg-transparent hover:bg-muted text-primary font-medium transition-colors",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-lg font-semibold relative overflow-hidden group transition-all duration-300",
};

const sizes = {
  sm: "px-6 py-3 text-sm min-h-[44px]",
  md: "px-8 py-3.5 text-sm min-h-[48px]",
  lg: "px-10 py-4 text-base min-h-[52px]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}

import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  href,
  hover = true,
}: CardProps) {
  const baseStyles = `bg-white rounded-xl border border-border overflow-hidden ${
    hover ? "transition-shadow duration-200 hover:shadow-lg" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${baseStyles}`}>
        {children}
      </Link>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
}

export function CardImage({ src, alt, aspectRatio = "video" }: CardImageProps) {
  const ratios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`${ratios[aspectRatio]} relative overflow-hidden bg-muted`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-5 lg:p-6 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function CardTitle({
  children,
  as: Component = "h3",
  className = "",
}: CardTitleProps) {
  return (
    <Component className={`text-lg font-semibold text-forest mb-2 ${className}`}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p className={`text-warmgray text-sm leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

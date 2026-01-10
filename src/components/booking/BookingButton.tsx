"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function BookingButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
}: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "text-white bg-primary hover:bg-primary-dark shadow-sm hover:shadow-md",
    gold: "text-primary-dark bg-gold hover:bg-gold-light border-2 border-gold shadow-sm hover:shadow-md",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary-dark",
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </button>
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

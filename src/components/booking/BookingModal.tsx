"use client";

import { useEffect, useRef } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-primary text-white">
          <h2 className="text-xl font-semibold">Book an Appointment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close booking modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ZocDoc Widget Container */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 80px)" }}>
          <iframe
            src="https://www.zocdoc.com/wl/newhorizonscenterforhealing/search?address=75069&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentReferer=mydallascounselors.com&ppsSelectionId=&reason_visit=-1&referrerType=widget&sees_children=false&sort_type=Default&widget=true"
            title="Book an appointment with New Horizons Center for Healing"
            className="w-full border-0"
            style={{ height: "600px", minHeight: "500px" }}
            allow="geolocation"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-border bg-muted text-center">
          <p className="text-xs text-warmgray">
            Secure, HIPAA-compliant scheduling powered by{" "}
            <a
              href="https://www.zocdoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ZocDoc
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

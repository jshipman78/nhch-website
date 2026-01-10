"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  bestTime: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredContact: "phone",
    bestTime: "morning",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Using Formspree - replace with your form ID
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
        ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
        : null;

      if (!formspreeEndpoint) {
        // Fallback: open email client
        const subject = encodeURIComponent("New Contact Request from Website");
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Contact: ${formData.preferredContact}\nBest Time: ${formData.bestTime}`
        );
        window.location.href = `mailto:info@mydallascounselors.com?subject=${subject}&body=${body}`;
        setStatus("success");
        return;
      }

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredContact: "phone",
          bestTime: "morning",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary-lighter rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-primary-dark text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-warmgray mb-4">
          We&apos;ve received your request and will contact you within 1-2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-medium hover:text-primary-dark transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Privacy Notice */}
      <div className="bg-primary-lighter/50 rounded-lg p-4 text-sm text-warmgray">
        <p>
          <strong>Privacy Notice:</strong> This form collects basic contact information only.
          For appointment scheduling, please use our{" "}
          <a
            href="https://www.zocdoc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark underline"
          >
            secure booking system
          </a>
          .
        </p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-warmgray mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-warmgray mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-warmgray mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-medium text-warmgray mb-2">
          Preferred Contact Method
        </label>
        <div className="flex gap-4">
          {["phone", "email"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="text-warmgray capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Best Time to Call */}
      <div>
        <label htmlFor="bestTime" className="block text-sm font-medium text-warmgray mb-2">
          Best Time to Contact
        </label>
        <select
          id="bestTime"
          name="bestTime"
          value={formData.bestTime}
          onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none bg-white"
        >
          <option value="morning">Morning (9am - 12pm)</option>
          <option value="afternoon">Afternoon (12pm - 5pm)</option>
          <option value="evening">Evening (5pm - 8pm)</option>
        </select>
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-red-50 text-red-600 rounded-lg p-4 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Request Callback"}
      </Button>

      <p className="text-xs text-warmgray text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

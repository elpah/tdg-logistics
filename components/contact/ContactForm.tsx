"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error ||
            "We could not send your request. Please try again or email us at info@tdgslogistics.com.",
        );
        return;
      }

      setStatus("success");
      setFormData(emptyForm);
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not send your request. Please try again or email us at info@tdgslogistics.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputStyles =
    "h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-70";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Full Name *
            </label>

            <input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              autoComplete="name"
              className={inputStyles}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email Address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              autoComplete="email"
              className={inputStyles}
            />
          </div>
        </div>

        {/* Phone + Company */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+233 55 000 0000"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="tel"
              className={inputStyles}
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Company Name
            </label>

            <input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="organization"
              className={inputStyles}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Service Interested In
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputStyles}
          >
            <option value="">Select a service</option>
            <option value="sea-freight">Sea Freight</option>
            <option value="air-freight">Air Freight</option>
            <option value="consolidation">Cargo Consolidation</option>
            <option value="customs">Customs Clearance</option>
            <option value="warehouse">Warehousing & Delivery</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message *
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell us about your shipment, cargo type, origin, destination, quantity, and any special requirements..."
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none disabled:opacity-70"
          />
        </div>

        {status === "success" && (
          <p className="text-sm font-medium text-accent" role="status">
            Thank you. Your request has been sent. We will be in touch as soon
            as possible.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm font-medium text-destructive" role="alert">
            {errorMessage}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-70 md:w-auto"
        >
          <Send className="mr-2 size-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
  );
}

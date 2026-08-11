"use client";

import { useState } from "react";

// 1. Sign up free at https://formspree.io
// 2. Create a new form, copy its endpoint (looks like the URL below)
// 3. Paste it in here, replacing the placeholder ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/moeaeryr";

const preferredServices = ["Video", "Photo", "Sole editing", "Other"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line px-6 py-10 text-center">
        <p className="font-display text-2xl mb-2">Thank you.</p>
        <p className="font-sans text-muted">
          Your message has been sent successfully. 
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs uppercase tracking-widest2 text-muted block mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full bg-transparent border border-line px-4 py-3 font-sans text-sm focus:border-brass outline-none"
          />
        </div>
        <div>
          <label className="font-sans text-xs uppercase tracking-widest2 text-muted block mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full bg-transparent border border-line px-4 py-3 font-sans text-sm focus:border-brass outline-none"
          />
        </div>
      </div>

      <div>
        <label className="font-sans text-xs uppercase tracking-widest2 text-muted block mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-transparent border border-line px-4 py-3 font-sans text-sm focus:border-brass outline-none"
        />
      </div>

      <div>
        <label className="font-sans text-xs uppercase tracking-widest2 text-muted block mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full bg-transparent border border-line px-4 py-3 font-sans text-sm focus:border-brass outline-none"
        />
      </div>

      <div>
        <label className="font-sans text-xs uppercase tracking-widest2 text-muted block mb-2">
          Preferred Service *
        </label>
        <select
          name="preferredService"
          required
          defaultValue=""
          className="w-full bg-transparent border border-line px-4 py-3 font-sans text-sm focus:border-brass outline-none"
        >
          <option value="" disabled>Select a service</option>
          {preferredServices.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-sans text-xs uppercase tracking-widest2 text-muted block mb-2">
          Description *
        </label>
        <textarea
          name="description"
          required
          rows={4}
          className="w-full bg-transparent border border-line px-4 py-3 font-sans text-sm focus:border-brass outline-none"
        />
      </div>

      {status === "error" && (
        <p className="font-sans text-sm text-red-700">
          Something went wrong sending that — please try again, or reach
          out directly via the details in the footer.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 font-sans text-xs uppercase tracking-widest2 bg-ink text-paper px-6 py-4 hover:opacity-90 transition-opacity self-start disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

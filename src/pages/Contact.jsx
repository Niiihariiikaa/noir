import { useState } from "react";

const requestTypes = [
  {
    id: "new",
    title: "New Brand / Design Project",
    description:
      "Start from a blank page — identity, website, or campaign built from the ground up.",
  },
  {
    id: "refresh",
    title: "Refresh an Existing Brand",
    description:
      "Sharpen or extend a brand that already exists, without losing what works.",
  },
];

const needs = [
  "Brand Identity",
  "Web Design",
  "Social & Content",
  "Print & Catalogue",
  "Other",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectName: "",
  projectLink: "",
  requirements: "",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdeolglz";

export default function Contact() {
  const [requestType, setRequestType] = useState("new");
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const toggleNeed = (need) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    const typeLabel = requestTypes.find((t) => t.id === requestType)?.title ?? "";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          requestType: typeLabel,
          ...form,
          needs: selectedNeeds.join(", "),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
        setSelectedNeeds([]);
        setRequestType("new");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-b border-ink/60">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="text-xs tracking-tighter">CONTACT US</p>
        <h1 className="mt-8 font-serif text-3xl leading-tight md:text-[44px]">
          Tell Us What You&rsquo;re <em>Building</em>.
        </h1>
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ink/70">
          A few honest questions about your brand and where you&rsquo;re trying
          to go &mdash; that&rsquo;s where every project with us starts. We read
          every enquiry personally and reply within a couple of days.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-4xl px-6 pb-24 md:px-12"
      >
        {/* 01 — Request Type */}
        <div className="flex items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/40 text-xs">
            01
          </span>
          <p className="text-xs tracking-tighter">REQUEST TYPE *</p>
          <span className="h-px flex-1 bg-ink/20" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {requestTypes.map((type) => {
            const active = requestType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setRequestType(type.id)}
                className={`flex flex-col items-start gap-4 border p-6 text-left transition-colors md:p-8 ${
                  active
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/30 bg-stone/40 text-ink hover:border-ink/60"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    active ? "border-cream" : "border-ink/40"
                  }`}
                >
                  {active && (
                    <span className="h-2.5 w-2.5 rounded-full bg-cream" />
                  )}
                </span>
                <span>
                  <span className="block font-serif text-lg">{type.title}</span>
                  <span
                    className={`mt-2 block text-sm leading-relaxed ${
                      active ? "text-cream/70" : "text-ink/60"
                    }`}
                  >
                    {type.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* 02 — Your Details */}
        <div className="mt-20 flex items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/40 text-xs">
            02
          </span>
          <p className="text-xs tracking-tighter">YOUR DETAILS</p>
          <span className="h-px flex-1 bg-ink/20" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          <Field
            label="Full Name"
            required
            value={form.fullName}
            onChange={handleChange("fullName")}
          />
          <Field
            label="Email Address"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
          />
          <Field
            label="Phone Number"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
          />
          <Field
            label="Company (optional)"
            value={form.company}
            onChange={handleChange("company")}
          />
        </div>

        {/* 03 — Project Details */}
        <div className="mt-20 flex items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/40 text-xs">
            03
          </span>
          <p className="text-xs tracking-tighter">PROJECT DETAILS</p>
          <span className="h-px flex-1 bg-ink/20" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          <Field
            label="Project / Brand Name"
            required
            value={form.projectName}
            onChange={handleChange("projectName")}
          />
          <Field
            label="Website / Social Link (optional)"
            placeholder="https://"
            value={form.projectLink}
            onChange={handleChange("projectLink")}
          />
        </div>

        <div className="mt-10">
          <p className="text-xs tracking-tighter text-ink/60">
            WHAT DO YOU NEED?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {needs.map((need) => {
              const active = selectedNeeds.includes(need);
              return (
                <button
                  key={need}
                  type="button"
                  onClick={() => toggleNeed(need)}
                  className={`rounded-full border px-5 py-2 text-xs tracking-tighter transition-colors ${
                    active
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/40 text-ink hover:border-ink"
                  }`}
                >
                  {active ? "−" : "+"} {need}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <label className="text-xs tracking-tighter text-ink/60">
            DESCRIBE YOUR REQUIREMENTS *
          </label>
          <textarea
            required
            rows={5}
            value={form.requirements}
            onChange={handleChange("requirements")}
            className="mt-3 w-full resize-y border-b border-ink/30 bg-transparent py-2 text-sm leading-relaxed outline-none placeholder:text-ink/30 focus:border-ink"
            placeholder="Tell us about your business, your audience, and what's not working yet."
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-14 w-full border border-ink bg-ink py-4 text-xs tracking-tighter text-cream transition-colors hover:bg-transparent hover:text-ink disabled:opacity-50"
        >
          {status === "submitting" ? "SENDING…" : "SUBMIT REQUEST →"}
        </button>

        {status === "success" && (
          <p className="mt-6 text-center text-sm text-ink/70">
            Thanks — your request has been sent. We&rsquo;ll reply within a couple of days.
          </p>
        )}
        {status === "error" && (
          <p className="mt-6 text-center text-sm text-red-700">
            Something went wrong sending that. Please try again, or email us directly at{" "}
            <a href="mailto:niharikaakashyap@gmail.com" className="underline">
              niharikaakashyap@gmail.com
            </a>
            .
          </p>
        )}
      </form>
    </section>
  );
}

function Field({ label, required, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-xs tracking-tighter text-ink/60">
        {label.toUpperCase()} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none placeholder:text-ink/30 focus:border-ink"
      />
    </div>
  );
}

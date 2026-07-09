import { useState } from "react";

const testimonials = [
  {
    quote:
      "Noir Studio didn't just give us a logo, they gave us a point of view. Every deliverable felt intentional — like they understood the brand before we'd fully articulated it ourselves. Working with them felt less like hiring an agency and more like adding a co-founder for two weeks.",
    author: "Anya Kapoor",
  },
  {
    quote:
      "They asked harder questions about our business than our own investors did — and the site that came out the other side finally says what we could never quite put into words.",
    author: "Marc Delacroix",
  },
  {
    quote:
      "Every round of feedback came back sharper, never just different. Six months on, the identity still feels like it was made for exactly where we ended up going.",
    author: "Sofia Lindqvist",
  },
  {
    quote:
      "The catalogue they designed did more for our wholesale accounts than two trade shows. Buyers kept asking who did it — that's when we knew the rebrand had paid for itself.",
    author: "Daniel Mercer",
  },
  {
    quote:
      "We came in asking for a website and left with a brand that finally holds together everywhere — the site, the packaging, even how we write our emails. Nothing has felt improvised since.",
    author: "Camille Roy",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="border-b border-ink/60">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <blockquote className="font-serif text-xl leading-relaxed md:text-[22px]">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <p className="mt-8 font-script text-3xl">~ {current.author}</p>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full border border-ink transition-colors ${
                i === active ? "bg-ink" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

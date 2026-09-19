import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const groups = [
  {
    id: "getting-started",
    title: "Getting Started",
    faqs: [
      {
        question: "What do you need from me to get started?",
        answer:
          "A short brief: what you're building, who it's for, and what isn't working yet. Anything you already have — old logos, references, competitors you admire or can't stand — helps too.",
      },
      {
        question: "Can you work with a brand we already have?",
        answer:
          "Often that's the best place to start. We keep what's working, sharpen what isn't, and extend the system into whatever you need next.",
      },
      {
        question: "Do you work with clients outside India?",
        answer:
          "Yes. Most of our process happens over calls and shared files, so we work with brands across time zones without it slowing anything down.",
      },
      {
        question: "What kind of brands do you work with?",
        answer:
          "Mostly founder-led businesses — hospitality, lifestyle, wellness, retail and interiors — that care about how they're seen and are ready to commit to a clear point of view.",
      },
    ],
  },
  {
    id: "timeline-pricing",
    title: "Timeline & Pricing",
    faqs: [
      {
        question: "How long does a project usually take?",
        answer:
          "A brand identity typically runs four to six weeks. Identity and website together is closer to eight to ten. We'll give you a week-by-week timeline before anything starts, and we stick to it.",
      },
      {
        question: "How much does a project cost?",
        answer:
          "Every project is quoted on scope rather than hours, so the number depends on what you need. Once we've read your brief we send a fixed proposal — no surprise invoices halfway through.",
      },
      {
        question: "How does payment work?",
        answer:
          "Half upfront to reserve your slot, and the remainder on delivery. Larger projects can be split into milestone payments instead.",
      },
      {
        question: "Can you work to a tight deadline?",
        answer:
          "Sometimes. If a launch date is fixed, tell us in your brief and we'll say honestly whether it can be done properly in that time.",
      },
    ],
  },
  {
    id: "process-delivery",
    title: "Process & Delivery",
    faqs: [
      {
        question: "How many rounds of revisions are included?",
        answer:
          "Two structured rounds at each major stage. In practice most projects need fewer, because the thinking is agreed before the design begins.",
      },
      {
        question: "Will I own the final files?",
        answer:
          "Completely. On final payment you receive every source file and export, along with a brand guide so your team can use it all properly.",
      },
      {
        question: "Do you build the website as well as design it?",
        answer:
          "Yes. We design and build, so what you approve is what goes live — no handover gap where the details get lost.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Every project includes a few weeks of post-launch support for small fixes. After that, many clients keep us on for ongoing content, print or website updates.",
      },
    ],
  },
];

const pad = (n) => String(n).padStart(2, "0");

function FaqItem({ number, faq, isOpen, onToggle }) {
  return (
    <li
      className={`border-b border-ink/60 transition-colors duration-300 last:border-b-0 ${
        isOpen ? "bg-stone/50" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-4 px-6 py-6 text-left md:grid-cols-[3.5rem_1fr_auto] md:px-10 md:py-7"
      >
        <span className="text-xs tracking-tighter text-ink/50">{number}</span>
        <span className="font-serif text-xl leading-snug transition-opacity group-hover:opacity-70 md:text-[26px]">
          {faq.question}
        </span>
        <span
          aria-hidden="true"
          className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-ink bg-ink text-cream"
              : "border-ink/40 group-hover:border-ink"
          }`}
        >
          <span className="absolute h-px w-3.5 bg-current" />
          <span className="absolute h-3.5 w-px bg-current" />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl pb-7 pl-20 pr-6 text-[15px] leading-relaxed text-ink/75 md:pb-8 md:pl-28 md:pr-10 phone:text-sm">
            {faq.answer}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Faqs() {
  const [open, setOpen] = useState("0-0");
  const [activeGroup, setActiveGroup] = useState(groups[0].id);

  // Highlight the topic currently in view in the sidebar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveGroup(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    groups.forEach((group) => {
      const el = document.getElementById(group.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  let counter = 0;

  return (
    <>
      <section className="border-b border-ink/60">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <p className="text-xs tracking-tighter">FAQS</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-[56px]">
            Questions, <em>Answered</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink/70">
            The things people usually ask before we start working together. If
            yours isn&rsquo;t here, just ask us directly.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/60">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Sticky topic index */}
          <aside className="hidden border-r border-ink/60 md:col-span-4 md:block">
            <div className="sticky top-16.5 px-10 py-12">
              <p className="text-xs tracking-tighter text-ink/60">TOPICS</p>
              <nav className="mt-6 flex flex-col">
                {groups.map((group, g) => {
                  const active = activeGroup === group.id;
                  return (
                    <a
                      key={group.id}
                      href={`#${group.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        document
                          .getElementById(group.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex items-baseline gap-4 border-b border-ink/20 py-4 transition-opacity ${
                        active ? "opacity-100" : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <span className="w-6 text-xs tracking-tighter">{pad(g + 1)}</span>
                      <span className="font-serif text-2xl phone:text-[28px]">{group.title}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-12">
                <p className="max-w-60 text-sm leading-relaxed text-ink/70">
                  Can&rsquo;t find what you&rsquo;re looking for?
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block border border-ink px-5 py-2.5 text-[11px] tracking-tighter transition-colors hover:bg-ink hover:text-cream phone:text-xs"
                >
                  ASK US DIRECTLY
                </Link>
              </div>
            </div>
          </aside>

          {/* Questions */}
          <div className="md:col-span-8">
            {groups.map((group, g) => (
              <div
                key={group.id}
                id={group.id}
                className="scroll-mt-16.5 border-b border-ink/60 last:border-b-0"
              >
                <div className="flex items-center justify-between border-b border-ink/60 px-6 py-3 md:px-10">
                  <p className="text-xs tracking-tighter">
                    {pad(g + 1)} &mdash; {group.title.toUpperCase()}
                  </p>
                  <p className="text-xs tracking-tighter text-ink/50">
                    {group.faqs.length} QUESTIONS
                  </p>
                </div>

                <ul>
                  {group.faqs.map((faq, i) => {
                    counter += 1;
                    const id = `${g}-${i}`;
                    return (
                      <FaqItem
                        key={faq.question}
                        number={pad(counter)}
                        faq={faq}
                        isOpen={open === id}
                        onToggle={() => setOpen(open === id ? null : id)}
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/60 bg-espresso text-cream">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl leading-snug md:text-[32px] phone:text-[28px]">
            Still have a question?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream/60">
            Tell us a little about what you&rsquo;re building and we&rsquo;ll get back
            to you within a couple of days.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block border border-cream/70 px-6 py-3 text-xs tracking-tighter transition-colors hover:bg-cream hover:text-coal"
          >
            START A PROJECT
          </Link>
        </div>
      </section>
    </>
  );
}

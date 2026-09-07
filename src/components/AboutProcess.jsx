import processMockup from "../assets/about page/ABOUT3.svg";

const steps = [
  {
    label: "Brief",
    description:
      "We read everything before we ask anything. Your business, your audience, your goals — understood before a single decision is made.",
  },
  {
    label: "Direction",
    description:
      "Strategy, moodboards, and visual inspiration agreed before anything is built. You know exactly where we're headed before the work begins.",
  },
  {
    label: "Design",
    description:
      "Every detail considered, every choice intentional. Work shared as it develops so you stay close to the process — no waiting, no guessing.",
  },
  {
    label: "Refine",
    description:
      "Structured feedback that sharpens rather than restarts. We iterate until the work is something worth putting out.",
  },
  {
    label: "Launch",
    description:
      "Clean files, clear handover, everything documented. The brand leaves the studio ready to work from day one.",
  },
];

export default function AboutProcess() {
  return (
    <section className="border-b border-ink/60">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-16 md:border-r md:border-ink/60 md:px-16 md:py-20">
          <h2 className="font-serif text-4xl leading-tight md:text-[44px]">
            How <em>Every</em> Project
            <br />
            <em>Comes</em> Together.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
            Every project follows the same five steps &mdash; because good
            work doesn&rsquo;t happen by accident, it happens by process.
          </p>

          <p className="mt-10 text-xs tracking-tighter text-ink/60">
            THE PROCESS
          </p>
          <div className="mt-2 max-w-sm">
            {steps.map((step) => (
              <details
                key={step.label}
                className="group border-t border-ink/30 py-3 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium tracking-tighter uppercase marker:content-none [&::-webkit-details-marker]:hidden">
                  {step.label}
                  <span className="text-lg leading-none text-ink/40 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed tracking-normal text-ink/70 normal-case">
                  {step.description}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center bg-coal p-10 md:p-14">
          <img
            src={processMockup}
            alt="Lacey's brand deliverable mockup, paperclipped with an iced coffee photo"
            className="h-full max-h-125 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

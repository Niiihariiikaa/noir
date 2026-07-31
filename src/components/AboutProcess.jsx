import processMockup from "../assets/about page/ABOUT3.svg";

const steps = ["Brief", "Direction", "Design", "Refine", "Launch"];

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
          <ul className="mt-2 max-w-sm">
            {steps.map((step) => (
              <li
                key={step}
                className="border-t border-ink/30 py-3 text-sm font-medium tracking-tighter uppercase last:border-b"
              >
                {step}
              </li>
            ))}
          </ul>
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

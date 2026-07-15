import hero1st from "../assets/hero1st.png";
import hero2nd from "../assets/hero2nd.png";
import laceysHero from "../assets/laceyshero.png";

export default function Hero() {
  return (
    <section id="home" className="border-b border-ink/60">
      <div className="mx-auto max-w-378 px-6 pt-6 pb-6 md:px-18 md:pt-8">
        {/* Tiny captions row */}
        <div className="grid grid-cols-1 gap-2 text-xs tracking-[0.08em] text-ink/80 md:grid-cols-[0.9fr_1.1fr]">
          <p>Design is an argument, not decoration.</p>
          <p>Clarity is the only aesthetic that lasts.</p>
        </div>

        {/* Wordmark + headline */}
        <div className="mt-10 grid grid-cols-1 items-end gap-2 md:mt-10 md:grid-cols-[0.9fr_1.1fr]">
          <h1 className="font-logo text-[100px] leading-[0.85] md:text-[clamp(120px,min(13vw,22.1vh),200px)]">
            NOiR
          </h1>
          <div className="max-w-2xl md:justify-self-start md:pb-6">
            <h2 className="font-serif text-2xl leading-snug md:text-[clamp(22px,min(2vw,3.4vh),30px)]">
              Good design starts with content. A beautiful layout means nothing
              if there&rsquo;s nothing to say.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              We treat every project like a piece of writing &mdash; there&rsquo;s a
              brief, a structure, an argument, and an edit at the end.
              Inspiration matters less than discipline. If the idea is clear,
              the visuals follow.
            </p>
          </div>
        </div>

        {/* Image strip */}
        <div className="mt-10 grid grid-cols-1 items-end gap-6 md:mt-8 md:grid-cols-12 md:gap-0">
          <div className="flex gap-3 md:col-span-5">
            <div className="w-1/2 md:w-[46%]">
              <img
                src={hero1st}
                alt="Sunbase prints pinned in a studio notebook"
                className="h-72 w-full object-cover md:aspect-2/3 md:h-auto md:max-h-[44vh]"
              />
            </div>
            <div className="w-1/2 md:w-[46%]">
              <img
                src={hero2nd}
                alt="Maison Florale botanical poster"
                className="h-72 w-full object-cover md:aspect-2/3 md:h-auto md:max-h-[44vh]"
              />
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6 md:pl-6">
            <p className="text-justify text-sm leading-relaxed text-ink/80">
              Good design starts with clarity. A beautiful layout means nothing
              if there&rsquo;s no argument underneath it. At that point,
              it&rsquo;s just decoration.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="mb-2 text-xs tracking-[0.2em]">VOL. 01</p>
            <img
              src={laceysHero}
              alt="Person holding a Lacey's tote bag"
              className="h-72 w-full object-cover md:aspect-3/2 md:h-auto md:max-h-[34vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

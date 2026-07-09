import logo from "../assets/NOiR.svg";
import hero1st from "../assets/hero1st.png";
import hero2nd from "../assets/hero2nd.png";
import laceysHero from "../assets/laceyshero.png";

export default function Hero() {
  return (
    <section id="home" className="border-b border-ink/60">
      <div className="mx-auto max-w-378 px-6 pt-8 pb-14 md:px-12">
        {/* Tiny captions row */}
        <div className="grid grid-cols-1 gap-2 text-[10px] tracking-[0.08em] text-ink/80 md:grid-cols-2">
          <p>Design is an argument, not decoration.</p>
          <p>Clarity is the only aesthetic that lasts.</p>
        </div>

        {/* Wordmark + headline */}
        <div className="mt-6 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <h1>
            <img src={logo} alt="NOIR" className="w-full max-w-xl" />
          </h1>
          <div className="max-w-md md:justify-self-start md:pt-4">
            <h2 className="font-serif text-2xl leading-snug md:text-[27px]">
              Good design starts with content. A beautiful layout means nothing
              if there&rsquo;s nothing to say.
            </h2>
            <p className="mt-4 max-w-sm text-justify text-[10px] leading-relaxed text-ink/70">
              We treat every project like a piece of writing &mdash; there&rsquo;s a
              brief, a structure, an argument, and an edit at the end.
              Inspiration matters less than discipline. If the idea is clear,
              the visuals follow.
            </p>
          </div>
        </div>

        {/* Image strip */}
        <div className="mt-14 grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-0">
          <div className="flex gap-3 md:col-span-3">
            <div className="w-1/2">
              <img
                src={hero1st}
                alt="Sunbase prints pinned in a studio notebook"
                className="h-60 w-full object-cover"
              />
            </div>
            <div className="w-1/2">
              <img
                src={hero2nd}
                alt="Maison Florale botanical poster"
                className="h-60 w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-6 md:pr-6">
            <p className="text-justify text-[10px] leading-relaxed text-ink/80">
              Good design starts with clarity. A beautiful layout means nothing
              if there&rsquo;s no argument underneath it. At that point,
              it&rsquo;s just decoration.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="mb-2 text-[10px] tracking-[0.2em]">VOL. 01</p>
            <img
              src={laceysHero}
              alt="Person holding a Lacey's tote bag"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

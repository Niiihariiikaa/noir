import studioPhoto from "../assets/about page/ABOUT1.png";

export default function AboutIntro() {
  return (
    <section className="border-b border-ink/60">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-10 md:p-14 phone:p-6 phone:pb-0">
          <img
            src={studioPhoto}
            alt="Overhead shot of hands typing on a laptop beside a notebook and candle"
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20 phone:px-6 phone:py-12">
          <p className="text-xs tracking-tighter">ABOUT THE STUDIO</p>
          <h1 className="mt-6 font-serif text-3xl md:text-4xl phone:text-[28px]">
            Our Work Is Grounded In <em className="mr-1.5">Strategy</em> And{" "}
            <em>Editorial Discipline</em>.
          </h1>
          <p className="mt-8 max-w-md text-justify text-sm leading-relaxed text-ink/75 phone:text-left">
            Noir started in New Delhi &mdash; two founders who believed
            design was being sold as decoration when it should be working as
            strategy. We&rsquo;ve built brands for astrology platforms,
            artisan caf&eacute;s, D2C skincare, home d&eacute;cor, and
            everything in between &mdash; and the brief is always the same:
            figure out what this brand actually needs to say, then build
            everything on top of that. We keep the studio small and the work
            senior, because quality doesn&rsquo;t survive a relay system.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block self-start border border-ink px-6 py-3 text-xs tracking-tighter transition-colors hover:bg-ink hover:text-cream"
          >
            WORK WITH US
          </a>
        </div>
      </div>
    </section>
  );
}

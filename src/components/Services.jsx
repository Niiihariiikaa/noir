import whatwebuild from "../assets/whatwebuild.png";
import whatwebuild2 from "../assets/whatwebuild2.png";
import whatwebuild3 from "../assets/whatwebuild3.png";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16.5 border-b border-ink/60">
      {/* Row 1: [ What we Build — spans 2 cols ][ image ][ BRAND & WEB DESIGN ] */}
      <div className="grid grid-cols-1 border-b border-ink/60 md:min-h-90 md:grid-cols-4 phone:grid-cols-2 md:divide-x md:divide-ink/60">
        <div className="flex min-h-75 flex-col justify-between border-b border-ink/60 p-6 md:col-span-2 md:border-b-0 md:p-8 phone:order-1 phone:col-span-2 phone:min-h-0 phone:gap-12">
          <span className="self-start border border-ink px-4 py-2 text-[11px] tracking-tighter phone:text-xs">
            OUR SERVICES
          </span>
          <h2 className="font-serif text-5xl leading-tight md:text-[64px] phone:text-4xl">
            What we
            <br />
            <em>Build</em>
          </h2>
        </div>

        <div className="border-b border-ink/60 md:border-b-0 phone:order-3 phone:border-b-0">
          <img
            src={whatwebuild2}
            alt="Mettali website shown on a laptop"
            className="h-full min-h-65 w-full object-cover phone:aspect-[4/5] phone:min-h-0"
          />
        </div>

        <div className="flex flex-col justify-center phone:order-2 phone:justify-start phone:border-r phone:border-ink/60">
          <p className="border-y border-ink/60 py-3 text-center text-xs tracking-tighter phone:border-t-0">
            BRAND &amp; WEB DESIGN
          </p>
          <p className="px-8 py-5 phone:px-4 text-justify text-sm leading-relaxed text-ink/75 phone:text-left">
            Identity and the website it lives on, designed together so nothing
            feels stitched on afterward &mdash; from logo to launch.
          </p>
        </div>
      </div>

      {/* Row 2: [ SOCIAL & CONTENT ][ image ][ PRINT & CATALOGUE ][ image ] */}
      <div className="grid grid-cols-1 md:min-h-120 md:grid-cols-4 md:divide-x md:divide-ink/60 phone:grid-cols-2">
        <div className="border-b border-ink/60 md:border-b-0 phone:order-2">
          <p className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter">
            SOCIAL &amp; CONTENT
          </p>
          <p className="px-6 py-6 phone:px-4 phone:py-4 text-justify text-sm leading-relaxed text-ink/75 phone:text-left">
            Content and direction that still sound like you, three seconds into
            a scroll &mdash; planned ahead, not improvised week to week.
          </p>
        </div>

        <div className="relative border-b border-ink/60 md:border-b-0 phone:order-1 phone:border-r">
          <img
            src={whatwebuild}
            alt="Mettali prints in a studio folder"
            className="h-full min-h-65 w-full object-cover phone:aspect-[4/5] phone:min-h-0"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="border-b border-ink/60 md:border-b-0 phone:order-3 phone:border-r phone:border-b-0">
          <p className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter">
            PRINT &amp; CATALOGUE
          </p>
          <p className="px-6 py-6 phone:px-4 phone:py-4 text-justify text-sm leading-relaxed text-ink/75 phone:text-left">
            Catalogues and lookbooks built to hold up off-screen too &mdash; same
            brand system, whether someone&rsquo;s scrolling or holding it in hand.
          </p>
        </div>

        <div className="phone:order-4">
          <img
            src={whatwebuild3}
            alt="Mettali catalogue on display"
            className="h-full min-h-65 w-full object-cover phone:aspect-[4/5] phone:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}

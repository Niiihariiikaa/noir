import whatwebuild from "../assets/whatwebuild.png";
import whatwebuild2 from "../assets/whatwebuild2.png";
import whatwebuild3 from "../assets/whatwebuild3.png";

export default function Services() {
  return (
    <section className="border-b border-ink/60">
      {/* Row 1: [ What we Build — spans 2 cols ][ image ][ BRAND & WEB DESIGN ] */}
      <div className="grid grid-cols-1 border-b border-ink/60 md:min-h-90 md:grid-cols-4 md:divide-x md:divide-ink/60">
        <div className="flex min-h-75 flex-col justify-between border-b border-ink/60 p-6 md:col-span-2 md:border-b-0 md:p-8">
          <span className="self-start border border-ink px-4 py-2 text-[11px] tracking-tighter">
            OUR SERVICES
          </span>
          <h2 className="font-serif text-5xl leading-tight md:text-[64px]">
            What we
            <br />
            <em>Build</em>
          </h2>
        </div>

        <div className="border-b border-ink/60 md:border-b-0">
          <img
            src={whatwebuild2}
            alt="Mettali website shown on a laptop"
            className="h-full min-h-65 w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="border-y border-ink/60 py-3 text-center text-xs tracking-tighter">
            BRAND &amp; WEB DESIGN
          </p>
          <p className="px-8 py-5 text-justify text-sm leading-relaxed text-ink/75">
            Identity and the website it lives on, designed together so nothing
            feels stitched on afterward &mdash; from logo to launch.
          </p>
        </div>
      </div>

      {/* Row 2: [ SOCIAL & CONTENT ][ image ][ PRINT & CATALOGUE ][ image ] */}
      <div className="grid grid-cols-1 md:min-h-120 md:grid-cols-4 md:divide-x md:divide-ink/60">
        <div className="border-b border-ink/60 md:border-b-0">
          <p className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter">
            SOCIAL &amp; CONTENT
          </p>
          <p className="px-6 py-6 text-justify text-sm leading-relaxed text-ink/75">
            Content and direction that still sound like you, three seconds into
            a scroll &mdash; planned ahead, not improvised week to week.
          </p>
        </div>

        <div className="border-b border-ink/60 md:border-b-0">
          <img
            src={whatwebuild}
            alt="Mettali prints in a studio folder"
            className="h-full min-h-65 w-full object-cover"
          />
        </div>

        <div className="border-b border-ink/60 md:border-b-0">
          <p className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter">
            PRINT &amp; CATALOGUE
          </p>
          <p className="px-6 py-6 text-justify text-sm leading-relaxed text-ink/75">
            Catalogues and lookbooks built to hold up off-screen too &mdash; same
            brand system, whether someone&rsquo;s scrolling or holding it in hand.
          </p>
        </div>

        <div>
          <img
            src={whatwebuild3}
            alt="Mettali catalogue on display"
            className="h-full min-h-65 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import cover from "../assets/laceys/laceys1.svg";
import deliverablesMockup from "../assets/laceys/laceys2.svg";
import mugFeeling from "../assets/laceys/7.png";
import capFeeling from "../assets/laceys/3.png";
import flatlayFeeling from "../assets/laceys/6.png";
import cupsCollateral from "../assets/laceys/4.png";
import signageCollateral from "../assets/laceys/5.png";
import bagCollateral from "../assets/laceys/8.png";

const chapters = [
  { label: "BRAND STRATEGY", href: "#brand-strategy" },
  { label: "VISUAL IDENTITY", href: "#visual-identity" },
  { label: "SOCIAL DIRECTION", href: "#social-direction" },
];

const deliverableRows = [
  ["Logo Suite", "Color Palette"],
  ["Brand Guidelines", "Typography"],
  ["Social Templates", "Content Direction"],
  ["Reels Direction"],
];

const swatches = [
  { name: "Dusty Rose", hex: "#B98289" },
  { name: "Warm Linen", hex: "#E4D4C0" },
  { name: "Espresso", hex: "#3B2A25" },
  { name: "Blush Cream", hex: "#F1E1DA" },
  { name: "Ivory", hex: "#FAF6EE" },
];

const feelingImages = [
  { src: mugFeeling, alt: "Hand holding a Lacey's mug reading 'Where every sip feels like home'" },
  { src: capFeeling, alt: "Cream cap embroidered with the lacey's script logo" },
  { src: flatlayFeeling, alt: "Iced coffee flatlay styled with Lacey's Bakehouse & Brew signage" },
];

const collateralImages = [
  { src: cupsCollateral, alt: "Three branded Lacey's coffee cups on a café table" },
  { src: signageCollateral, alt: "Wooden sandwich board reading 'Say hi to your new favorite coffee, lacey's'" },
  { src: bagCollateral, alt: "Lacey's Bakehouse and Brew whole bean coffee bag packaging" },
];

const results = [
  { stat: "Social engagement", note: "post-launch" },
  { stat: "Footfall / walk-in bookings", note: "" },
];

export default function Laceys() {
  return (
    <>
      {/* Hero split */}
      <section className="border-b border-ink/60">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-10 md:border-r md:border-ink/60 md:p-12">
            <img
              src={cover}
              alt="Espresso pouring into a maroon Lacey's cup reading 'Where every sip feels like home'"
              className="h-full max-h-125 w-full max-w-125 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20">
            <p className="text-xs tracking-tighter">THE CLIENT</p>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl">LACEYS</h1>
            <p className="mt-8 max-w-md text-justify text-sm leading-relaxed text-ink/75">
              Laceys is an artisan caf&eacute; and bakehouse brand built
              around the idea that every visit should feel like a pause
              &mdash; warm, considered, and worth coming back for. The brief
              was to build an identity that felt as handcrafted as the food
              it represented, and a digital presence that made someone want
              to walk in before they&rsquo;d even looked at the menu.
            </p>
            <p className="mt-4 max-w-md text-justify text-sm leading-relaxed text-ink/75">
              Noir built the complete brand identity and social direction
              from the ground up &mdash; logo suite, color system,
              typography, and a content framework the team could run with
              consistently week to week.
            </p>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="border-b border-ink/60">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed md:text-[28px]">
            A caf&eacute; brand should make someone feel welcome before
            they&rsquo;ve walked through the door. That was the brief.
          </p>
        </div>
      </section>

      {/* Chapter row */}
      <nav className="grid grid-cols-1 border-b border-ink/60 md:grid-cols-3 md:divide-x md:divide-ink/60">
        {chapters.map((chapter) => (
          <a
            key={chapter.label}
            href={chapter.href}
            className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter transition-opacity last:border-b-0 hover:opacity-60 md:border-b-0"
          >
            {chapter.label}
          </a>
        ))}
      </nav>

      {/* Strategy split */}
      <section id="brand-strategy" className="border-b border-ink/60">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:border-r md:border-ink/60 md:px-16 md:py-20">
            <h2 className="font-serif text-3xl italic md:text-4xl">
              Made With Care.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
              Every detail of the Laceys identity was built to feel handmade
              without looking homemade &mdash; warm enough to feel personal,
              considered enough to feel premium.
            </p>
          </div>

          <div className="flex items-center px-8 py-16 md:px-16 md:py-20">
            <p className="text-center text-sm uppercase leading-relaxed tracking-tighter text-ink/80 md:text-base">
              Laceys&rsquo; identity is warm, inviting, and unmistakably
              crafted &mdash; built to make every visit feel like it was made
              for you.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables split */}
      <section id="visual-identity" className="border-b border-ink/60">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-20">
            <p className="text-xs tracking-tighter">DELIVERABLES</p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-ink/70 md:ml-auto md:max-w-xs md:text-right">
              From the ground up &mdash; a complete brand identity and
              social content system that carries the same warmth offline
              and online. Every deliverable built as one connected
              experience, not separate projects handed off in isolation.
            </p>

            <div className="mt-10 flex max-w-xs flex-col gap-2 md:ml-auto">
              {deliverableRows.map((row) => (
                <div key={row[0]} className="flex justify-end gap-2">
                  {row.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap bg-ink px-3 py-2 text-center text-[10px] uppercase tracking-tighter text-cream"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center bg-coal p-10 md:border-l md:border-ink/60 md:p-14">
            <img
              src={deliverablesMockup}
              alt="Lacey's storefront signage lit up with the script logo above the counter"
              className="h-full max-h-125 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* A Brand, In Feeling */}
      <section className="border-b border-ink/60">
        <p className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter">
          A BRAND, IN FEELING
        </p>
        <div className="grid grid-cols-1 border-b border-ink/60 md:grid-cols-3 md:divide-x md:divide-ink/60 md:border-b-0">
          {feelingImages.map((img) => (
            <div
              key={img.src}
              className="border-b border-ink/60 p-6 last:border-b-0 md:border-b-0 md:p-8"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-4/5 w-full border border-ink/60 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Colors + Typography */}
      <section id="social-direction" className="border-b border-ink/60">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 py-16 md:border-r md:border-ink/60 md:px-16 md:py-20">
            <p className="text-xs tracking-tighter">BRAND COLORS</p>
            <div className="mt-6 grid grid-cols-5 gap-3">
              {swatches.map((swatch) => (
                <div key={swatch.hex}>
                  <div
                    className="aspect-1/2 w-full border border-ink/60"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <p className="mt-2 text-xs text-ink/80">{swatch.name}</p>
                  <p className="text-xs text-ink/50">{swatch.hex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-20">
            <p className="text-xs tracking-tighter">TYPOGRAPHY</p>
            <p className="mt-6 font-script text-4xl leading-relaxed text-ink md:text-5xl">
              Where Every Sip Feels Like Home.
            </p>
          </div>
        </div>
      </section>

      {/* Collateral mockups */}
      <section className="border-b border-ink/60">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-ink/60">
          {collateralImages.map((img) => (
            <div
              key={img.src}
              className="border-b border-ink/60 p-6 last:border-b-0 md:border-b-0 md:p-8"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-4/5 w-full border border-ink/60 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      
     
    </>
  );
}

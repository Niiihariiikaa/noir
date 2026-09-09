import cover from "../assets/laceys/1.png";
import deliverablesMockup from "../assets/laceys/2.png";
import capFeeling from "../assets/laceys/3.png";
import cupsFeeling from "../assets/laceys/4.png";
import signageFeeling from "../assets/laceys/5.png";
import flatlayCollateral from "../assets/laceys/6.png";
import mugCollateral from "../assets/laceys/7.png";
import bagCollateral from "../assets/laceys/8.png";
import typography from "../assets/laceys/typography.png";

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
  { name: "Mulled Berry", hex: "#5A1E26" },
  { name: "Rose Macaron", hex: "#BF7983" },
  { name: "Baked Blush", hex: "#8F5B5E" },
  { name: "Oat Cream", hex: "#F2EBE2" },
];

const feelingImages = [
  { src: capFeeling, alt: "Cream cap embroidered with the lacey's script logo" },
  { src: cupsFeeling, alt: "Three branded Lacey's coffee cups on a café table" },
  { src: signageFeeling, alt: "Wooden sandwich board reading 'Say hi to your new favorite coffee, lacey's'" },
];

const collateralImages = [
  { src: flatlayCollateral, alt: "Iced coffee flatlay styled with Lacey's Bakehouse & Brew signage" },
  { src: mugCollateral, alt: "Hand holding a Lacey's mug reading 'Where every sip feels like home'" },
  { src: bagCollateral, alt: "Lacey's Bakehouse and Brew whole bean coffee bag packaging" },
];

export default function Laceys() {
  return (
    <>
      {/* Hero split */}
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-10 md:border-r md:border-hairline md:p-14">
            <img
              src={cover}
              alt="Espresso pouring into a maroon Lacey's cup reading 'Where every sip feels like home'"
              className="aspect-502/578 w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20">
            <p className="text-xs tracking-tighter">THE CLIENT</p>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl">LACEYS</h1>
            <p className="mt-8 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75">
              Laceys is an artisan caf&eacute; and bakehouse brand built
              around the idea that every visit should feel like a pause
              &mdash; warm, considered, and worth coming back for. The brief
              was to build an identity that felt as handcrafted as the food
              it represented, and a digital presence that made someone want
              to walk in before they&rsquo;d even looked at the menu.
            </p>
            <p className="mt-4 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75">
              Noir built the complete brand identity and social direction
              from the ground up &mdash; logo suite, color system,
              typography, and a content framework the team could run with
              consistently week to week.
            </p>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed md:text-[28px]">
            A caf&eacute; brand should make someone feel welcome before
            they&rsquo;ve walked through the door. That was the brief.
          </p>
        </div>
      </section>

      {/* Chapter row */}
      <nav className="grid grid-cols-1 border-b border-hairline md:grid-cols-3 md:divide-x md:divide-hairline">
        {chapters.map((chapter) => (
          <a
            key={chapter.label}
            href={chapter.href}
            className="border-b border-hairline py-3 text-center text-xs tracking-tighter transition-opacity last:border-b-0 hover:opacity-60 md:border-b-0"
          >
            {chapter.label}
          </a>
        ))}
      </nav>

      {/* Strategy + Deliverables — uniform 2x2 grid, equal cell dimensions */}
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            id="brand-strategy"
            className="flex flex-col justify-center px-8 py-16 md:min-h-100 md:border-r md:border-b md:border-hairline md:px-16 md:py-20"
          >
            <h2 className="font-serif text-3xl italic md:text-4xl">
              Made With Care.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
              Every detail of the Laceys identity was built to feel handmade
              without looking homemade &mdash; warm enough to feel personal,
              considered enough to feel premium.
            </p>
          </div>

          <div className="flex items-center border-b border-hairline px-8 py-16 md:px-16 md:py-20">
            <p className="text-center text-sm uppercase leading-relaxed tracking-tighter text-ink/80 md:text-base">
              Laceys&rsquo; identity is warm, inviting, and unmistakably
              crafted &mdash; built to make every visit feel like it was made
              for you.
            </p>
          </div>

          <div
            id="visual-identity"
            className="flex flex-col justify-center px-8 pt-16 pb-10 md:border-r md:border-hairline md:px-16 md:pt-20 md:pb-4"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
              <p className="text-xl font-normal tracking-tighter">DELIVERABLES</p>
              <p className="mt-4 text-justify text-sm leading-relaxed text-ink/70 md:mt-0 md:max-w-xs md:text-right">
                From the ground up &mdash; a complete brand identity and
                social content system that carries the same warmth offline
                and online. Every deliverable built as one connected
                experience, not separate projects handed off in isolation.
              </p>
            </div>

            <div className="mt-6 flex max-w-xs flex-col gap-2 md:ml-auto">
              {deliverableRows.map((row) => (
                <div key={row[0]} className="flex justify-end gap-2">
                  {row.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-xs bg-[#161311] px-4.5 py-2 text-center text-[10px] uppercase tracking-[1.5px] text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-80 md:min-h-96">
            <img
              src={deliverablesMockup}
              alt="Lacey's storefront signage lit up with the script logo above the counter"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* A Brand, In Feeling */}
      <section className="border-b border-hairline">
        <p className="border-b border-hairline py-3 text-center text-xs tracking-tighter">
          A BRAND, IN FEELING
        </p>
        <div className="grid grid-cols-1 border-b border-hairline md:grid-cols-3 md:divide-x md:divide-hairline md:border-b-0">
          {feelingImages.map((img) => (
            <div
              key={img.src}
              className="border-b border-hairline p-6 last:border-b-0 md:border-b-0 md:p-8"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-3/4 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Colors + Typography */}
      <section id="social-direction" className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
          <div className="flex h-full flex-col px-8 py-16 md:border-r md:border-hairline md:px-16 md:py-20">
            <p className="text-xl font-normal tracking-tighter">BRAND COLORS</p>
            <div className="mt-22 flex justify-center">
              <div className="grid grid-cols-[repeat(4,143px)] gap-6">
                {swatches.map((swatch) => (
                  <div key={swatch.hex}>
                    <div
                      className="h-80.75 w-35.75 border border-hairline"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <p className="mt-2 text-xs text-ink/80">{swatch.name}</p>
                    <p className="text-xs text-ink/50">{swatch.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col px-8 py-16 md:px-16 md:py-20">
            <p className="text-xl font-normal tracking-tighter">TYPOGRAPHY</p>
            <div className="mt-0">
              <img
                src={typography}
                alt="Lacey's typography sheet: 'Soft Mornings, Made Daily.' and 'Where every sip feels like home.'"
                className="h-auto w-full max-w-4xl md:w-[calc(100%+3rem)] md:-mx-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collateral mockups */}
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-hairline">
          {collateralImages.map((img) => (
            <div
              key={img.src}
              className="border-b border-hairline p-6 last:border-b-0 md:border-b-0 md:p-8"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-3/4 w-full border border-hairline object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      
     
    </>
  );
}

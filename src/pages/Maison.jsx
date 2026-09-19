import cover from "../assets/maison/1.png";
import deliverablesMockup from "../assets/maison/2.png";
import bagFeeling from "../assets/maison/3.png";
import bouquetFeeling from "../assets/maison/4.png";
import paintingFeeling from "../assets/maison/5.png";
import laceMockup from "../assets/maison/6.png";
import posterMockup from "../assets/maison/7.png";
import stationeryMockup from "../assets/maison/8.png";
import typographyPrimary from "../assets/maison/typography1.svg";
import typographySecondary from "../assets/maison/typography2.svg";
import typographyAccent from "../assets/maison/typography3.svg";

const chapters = [
  { label: "BRAND STRATEGY", href: "#brand-strategy" },
  { label: "VISUAL IDENTITY", href: "#visual-identity" },
  { label: "PRINT", href: "#print" },
];

const deliverableRows = [
  ["Logo Suite", "Monogram"],
  ["Color Palette", "Brand Guidelines"],
  ["Typography", "Print Collateral"],
  ["Brand Patterns"],
];

const swatches = [
  { name: "Vanilla Pod", hex: "#2D2217" },
  { name: "Bay Leaf", hex: "#746A51" },
  { name: "Faded Rose", hex: "#9A8977" },
  { name: "Jasmine", hex: "#E5DCD1" },
];

const feelingImages = [
  { src: bagFeeling, alt: "Maison Florale paper gift bag with white roses hanging on a door" },
  { src: bouquetFeeling, alt: "White lily bouquet wrapped in tissue paper with a Maison Florale gift tag" },
  { src: paintingFeeling, alt: "Maison Florale flower emblem overlaid on a moody landscape painting" },
];

const printImages = [
  { src: laceMockup, alt: "Lace-framed portrait of a blush rose with the Maison Florale emblem" },
  { src: posterMockup, alt: "Maison Florale poster reading 'Rooted in Nature, Made for Spaces' on draped fabric" },
  { src: stationeryMockup, alt: "Maison Florale card and envelope stationery set on a floral backdrop" },
];

export default function Maison() {
  return (
    <>
      {/* Hero split */}
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-10 md:border-r md:border-hairline md:p-14">
            <img
              src={cover}
              alt="Embossed MAISON FLORALE brand cover over a dried flower photograph"
              className="aspect-502/578 w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20">
            <p className="text-xs tracking-tighter">THE CLIENT</p>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl phone:text-[28px]">MAISON FLORALE</h1>
            <p className="mt-8 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75 phone:text-left">
              Maison Florale is a floral art and design studio rooted in the
              belief that flowers are not decoration &mdash; they are the mood
              of a room, the memory of an occasion, and the detail that makes
              everything else feel intentional. The brief was to build a
              brand identity that carried that philosophy visually &mdash;
              heritage-leaning, premium, and unmistakably considered.
            </p>
            <p className="mt-4 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75 phone:text-left">
              Noir built the complete brand identity from scratch &mdash;
              naming, logo suite, visual system, and brand guidelines
              designed to sit as comfortably on a printed card as on an
              Instagram grid.
            </p>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed md:text-[28px] phone:text-[28px]">
            Flowers are not decoration. The brand had to say that before
            anything else did.
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
            <h2 className="font-serif text-3xl italic md:text-4xl phone:text-[28px]">
              L&rsquo;Art de la Fleur.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
              Some brands are built around a product. Maison Florale is built
              around a feeling &mdash; the one a room gets when the flowers
              are exactly right.
            </p>
          </div>

          <div className="flex items-center border-b border-hairline px-8 py-16 md:px-16 md:py-20">
            <p className="text-center text-sm uppercase leading-relaxed tracking-tighter text-ink/80 md:text-base">
              Maison Florale&rsquo;s identity is elegant, heritage-rooted, and
              deeply considered &mdash; built to make floral design feel like
              an art form again.
            </p>
          </div>

          <div
            id="visual-identity"
            className="flex flex-col justify-center px-8 py-16 md:min-h-100 md:border-r md:border-hairline md:px-16 md:py-20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
              <p className="text-xl font-normal tracking-tighter">DELIVERABLES</p>
              <p className="mt-4 text-justify text-sm leading-relaxed text-ink/70 md:mt-0 md:max-w-xs md:text-right phone:text-left">
                From the ground up &mdash; a complete brand identity and print
                system built to feel as premium as the arrangements it
                represents. Every deliverable connected, nothing feeling like
                it came from a different hand.
              </p>
            </div>

            <div className="mt-10 flex max-w-xs flex-col gap-3 md:ml-auto">
              {deliverableRows.map((row) => (
                <div key={row[0]} className="flex justify-end gap-3 phone:flex-wrap phone:justify-start">
                  {row.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-xs bg-[#161311] px-4.5 py-2.5 text-center text-[10px] uppercase tracking-[1.5px] text-white phone:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-80 md:min-h-0">
            <img
              src={deliverablesMockup}
              alt="Maison Florale storefront window display with logo, taglines, and potted flowers"
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
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:min-h-169.5 md:grid-cols-[3fr_2fr]">
          <div className="flex h-full flex-col px-8 py-16 md:border-r md:border-hairline md:px-16 md:py-20 phone:border-b phone:border-hairline phone:py-12">
            <p className="text-xl font-normal tracking-tighter">BRAND COLORS</p>
            <div className="mt-13.5 flex phone:mt-8">
              <div className="grid grid-cols-[repeat(4,143px)] gap-10 phone:w-full phone:grid-cols-4 phone:gap-3">
                {swatches.map((swatch) => (
                  <div key={swatch.hex}>
                    <div
                      className="h-80.75 w-35.75 border border-hairline phone:aspect-[143/323] phone:h-auto phone:w-full"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <p className="mt-2 text-xs leading-snug text-ink/80">{swatch.name}</p>
                    <p className="text-xs text-ink/50">{swatch.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col px-8 py-16 md:px-16 md:py-20 phone:py-12">
            <p className="text-xl font-normal tracking-tighter">TYPOGRAPHY</p>

            <p className="mt-13.5 text-xs tracking-tighter text-ink/50">PRIMARY</p>
            <img
              src={typographyPrimary}
              alt="Where Flowers Become Composition."
              className="mt-3 h-auto w-full max-w-96"
            />

            <p className="mt-12 text-xs tracking-tighter text-ink/50">SECONDARY</p>
            <img
              src={typographySecondary}
              alt="Art Floral &amp; Botanique. Arrangements composed for occasions, interiors, and the ordinary day."
              className="mt-3 h-auto w-full max-w-96"
            />

            <p className="mt-12 text-xs tracking-tighter text-ink/50">ACCENT</p>
            <img
              src={typographyAccent}
              alt="Every bloom, placed with purpose."
              className="mt-3 h-auto w-full max-w-90"
            />
          </div>
        </div>
      </section>

      {/* Print mockups */}
      <section id="print" className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-hairline">
          {printImages.map((img) => (
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
    </>
  );
}

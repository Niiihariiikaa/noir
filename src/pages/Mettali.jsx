import cover from "../assets/mettali/1.png";
import deliverablesMockup from "../assets/mettali/2.png";
import homepageFeeling from "../assets/mettali/3.png";
import vaseFeeling from "../assets/mettali/4.png";
import posterFeeling from "../assets/mettali/5.png";
import chairMockup from "../assets/mettali/6.png";
import foilMockup from "../assets/mettali/7.png";
import campaignMockup from "../assets/mettali/8.png";
import typography from "../assets/mettali/typography.png";

const chapters = [
  { label: "BRAND STRATEGY", href: "#brand-strategy" },
  { label: "VISUAL IDENTITY", href: "#visual-identity" },
  { label: "CATALOGUE DESIGN", href: "#catalogue-design" },
];

const deliverableRows = [
  ["Logo Suite", "Color Palette"],
  ["Brand Guidelines", "Typography"],
  ["Custom Website", "Product Catalogue"],
  ["Editorial Photography Direction"],
];

const swatches = [
  { name: "Raw Linen", hex: "#fffefc" },
  { name: "Slate Moss", hex: "#716f57" },
  { name: "Sandcast", hex: "#ad9e89" },
  { name: "Smoked Bronze", hex: "#584738" },
  { name: "Mulled Iron", hex: "#49110b" },
  { name: "Indigo Metal", hex: "#142940" },
];

const feelingImages = [
  { src: homepageFeeling, alt: "Laptop showing the Mettali 'Metal Crafted for the Home' homepage" },
  { src: vaseFeeling, alt: "Aluminium vase holding dried carnations on a wooden dresser" },
  { src: posterFeeling, alt: "Mettali brand poster leaning against a sofa beside a styled aluminium vase" },
];

const printImages = [
  { src: chairMockup, alt: "Blurred motion shot of a brushed-aluminium chair with a vase of carnations" },
  { src: foilMockup, alt: "Brushed metal texture with the line 'Every Mettali piece is aluminium'" },
  { src: campaignMockup, alt: "Campaign shot of a leaning aluminium shelf unit beside a blurred walking figure" },
];

export default function Mettali() {
  return (
    <>
      {/* Hero split */}
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-10 md:border-r md:border-hairline md:p-14">
            <img
              src={cover}
              alt="Embossed METTALI brand cover wrapped in plastic"
              className="aspect-502/578 w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20">
            <p className="text-xs tracking-tighter">THE CLIENT</p>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl">METTALI</h1>
            <p className="mt-8 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75">
              Mettali is a premium home d&eacute;cor brand built around the
              beauty of metal &mdash; aluminium objects designed to be
              functional and worth looking at. Vases, wine holders,
              bookshelves, organisers: everyday objects elevated into
              considered pieces. The brief was to build a brand identity and
              catalogue that positioned Mettali as a design-led home brand,
              not just another product line.
            </p>
            <p className="mt-4 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75">
              Noir built the complete brand identity, website, and product
              catalogue &mdash; a full visual system designed to carry the
              same editorial weight across digital and print.
            </p>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed md:text-[28px]">
            Metal is a material most brands hide. Mettali makes it the point.
            The brand had to say that clearly.
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
              Form Follows Beauty.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
              Mettali exists in the space where industrial material meets
              deliberate design &mdash; where something made of metal feels
              warm enough to belong in a home.
            </p>
          </div>

          <div className="flex items-center border-b border-hairline px-8 py-16 md:px-16 md:py-20">
            <p className="text-center text-sm uppercase leading-relaxed tracking-tighter text-ink/80 md:text-base">
              Mettali&rsquo;s identity is clean, editorial, and unmistakably
              premium &mdash; built to make everyday objects feel worth
              owning.
            </p>
          </div>

          <div
            id="visual-identity"
            className="flex flex-col justify-center px-8 py-16 md:min-h-100 md:border-r md:border-hairline md:px-16 md:py-20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
              <p className="text-xl font-normal tracking-tighter">DELIVERABLES</p>
              <p className="mt-4 text-justify text-sm leading-relaxed text-ink/70 md:mt-0 md:max-w-xs md:text-right">
                From the ground up &mdash; a complete brand identity, custom
                website, and product catalogue built as one connected system.
                Every deliverable designed to carry the same visual language
                whether someone is browsing online or holding the catalogue in
                their hands.
              </p>
            </div>

            <div className="mt-10 flex max-w-xs flex-col gap-3 md:ml-auto">
              {deliverableRows.map((row) => (
                <div key={row[0]} className="flex justify-end gap-3">
                  {row.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-xs bg-[#161311] px-4.5 py-2.5 text-center text-[10px] uppercase tracking-[1.5px] text-white"
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
              alt="Tablet showing the Mettali 'Built For Every Room' signature products page on a boucle armchair"
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
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
          <div className="flex h-full flex-col px-8 py-16 md:border-r md:border-hairline md:px-16 md:py-20">
            <p className="text-xl font-normal tracking-tighter">BRAND COLORS</p>
            <div className="mt-24 flex w-full justify-center">
              <div className="flex gap-6">
                {swatches.map((swatch) => (
                  <div key={swatch.hex} className="w-25">
                    <div
                      className="h-80.75 w-full border border-hairline"
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
                alt="Mettali typography sheet: 'Aluminium, Shaped With Intention.' and 'Light in hand, lasting in place.'"
                className="h-auto w-full max-w-4xl md:w-[calc(100%+8rem)] md:-mx-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Print mockups */}
      <section id="catalogue-design" className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-hairline">
          {printImages.map((img) => (
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

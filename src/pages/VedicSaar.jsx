import cover from "../assets/vedicpage/image1.svg";
import deliverablesMockup from "../assets/vedicpage/image2.png";
import shellFeeling from "../assets/vedicpage/image3.svg";
import logoLockup from "../assets/vedicpage/image4.svg";
import starsFeeling from "../assets/vedicpage/image5.svg";
import printKit from "../assets/vedicpage/image6.svg";
import printTablet from "../assets/vedicpage/image7.svg";
import printBooklet from "../assets/vedicpage/image8.svg";
import typographyPrimary from "../assets/vedicpage/typography1.svg";
import typographySecondary from "../assets/vedicpage/typography2.svg";
import typographyAccent from "../assets/vedicpage/typography3.svg";

const chapters = [
  { label: "BRAND STRATEGY", href: "#brand-strategy" },
  { label: "VISUAL IDENTITY", href: "#visual-identity" },
  { label: "DISCOVERIES", href: "#discoveries" },
];

const deliverableRows = [
  ["Logo Suite", "Color Palette"],
  ["Brand Guidelines", "Custom Website"],
  ["Stationery", "Print Collateral"],
];

const swatches = [
  { name: "Midnight Earth", hex: "#422F2B" },
  { name: "Burnt Sienna", hex: "#9C7F65" },
  { name: "Sandstone", hex: "#D3C3A7" },
  { name: "Parchment", hex: "#F9F3EC" },
];

const feelingImages = [
  { src: shellFeeling, alt: "Oyster shell with a pearl — clarity was always inside" },
  { src: logoLockup, alt: "Vedic Saar sun emblem logo lockup on textured parchment" },
  { src: starsFeeling, alt: "Ethereal flower petals in dark light — written in the stars" },
];

const printImages = [
  { src: printKit, alt: "Boxed Vedic Saar brand kit with an astrology chart cover" },
  { src: printTablet, alt: "Tablet showing the Vedic Saar Decode Your Destiny web page" },
  { src: printBooklet, alt: "Open printed booklet with Maanish Malhotra's bio" },
];

export default function VedicSaar() {
  return (
    <>
      {/* Hero split */}
      <section className="border-b border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-10 md:border-r md:border-hairline md:p-14">
            <img
              src={cover}
              alt="Embossed Vedic Saar brand cover with gold sun emblem"
              className="aspect-502/578 w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20">
            <p className="text-xs tracking-tighter">THE CLIENT</p>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl">
              VEDIC SAAR by Manish Malhotra
            </h1>
            <p className="mt-8 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75">
              Vedic Saar is a holistic wellness and spiritual guidance brand
              offering astrology, numerology, and Vastu consultations &mdash;
              making ancient Vedic wisdom feel modern, approachable, and
              genuinely trustworthy. The brand exists to simplify accurate
              predictions, practical remedies, and personalised guidance that
              helps people find clarity and balance in their everyday lives.
            </p>
            <p className="mt-4 max-w-149.75 text-justify text-sm leading-relaxed text-ink/75">
              Noir was brought in to build the complete brand identity,
              website, and print collateral from the ground up. The goal: a
              visual language rooted in Vedic heritage that also reads as
              premium and credible to a modern audience discovering spiritual
              guidance for the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed md:text-[28px]">
            Ancient wisdom doesn&rsquo;t sell itself &mdash; not because it
            lacks value, but because it&rsquo;s rarely been given a visual
            language worthy of it. That was the brief.
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
              Rooted in Tradition
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
              Ancient wisdom doesn&rsquo;t sell itself &mdash; not because it
              lacks value, but because it&rsquo;s rarely been given a visual
              language worthy of it. That was the brief.
            </p>
          </div>

          <div className="flex items-center border-b border-hairline px-8 py-16 md:px-16 md:py-20">
            <p className="text-center text-sm uppercase leading-relaxed tracking-tighter text-ink/80 md:text-base">
              Vedic Saar&rsquo;s identity is warm, rooted, and unmistakably
              premium &mdash; built to make ancient wisdom feel as relevant
              today as it has always been.
            </p>
          </div>

          <div
            id="visual-identity"
            className="flex flex-col justify-center px-8 py-16 md:min-h-100 md:border-r md:border-hairline md:px-16 md:py-20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
              <p className="text-xl font-normal tracking-tighter">DELIVERABLES</p>
              <p className="mt-4 text-justify text-sm leading-relaxed text-ink/70 md:mt-0 md:max-w-xs md:text-right">
                From the ground up &mdash; a complete brand identity, a full
                custom website, and a print system that carries the same
                visual language offline. Every deliverable built as one
                connected system, not three separate projects handed off in
                isolation.
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

          <div className="relative min-h-80 md:min-h-0 md:border-l md:border-hairline">
            <img
              src={deliverablesMockup}
              alt="Laptop showing the Vedic Saar Numbers & Love numerology page, resting on a stone plinth"
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
      <section id="discoveries" className="border-b border-hairline">
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

            <p className="mt-20 text-sm tracking-tighter text-ink/50">PRIMARY</p>
            <img
              src={typographyPrimary}
              alt="Where Ancient Wisdom Meets Modern Life."
              className="mt-3 h-auto w-full max-w-133 md:w-[calc(100%+3rem)] md:-mx-3"
            />

            <p className="mt-8 text-sm tracking-tighter text-ink/50">
              SECONDARY
            </p>
            <img
              src={typographySecondary}
              alt="Astrology. Numerology. Vastu. Guidance that stays long after the session ends."
              className="mt-3 h-auto w-full max-w-140 md:w-[calc(100%+3rem)] md:-mx-3"
            />

            <p className="mt-8 text-sm tracking-tighter text-ink/50">ACCENT</p>
            <img
              src={typographyAccent}
              alt="Clarity was always inside."
              className="mt-3 h-auto w-full max-w-120 md:w-[calc(100%+3rem)] md:-mx-3"
            />
          </div>
        </div>
      </section>

      {/* Print mockups */}
      <section className="border-b border-hairline">
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

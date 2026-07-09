import laceys from "../assets/laceys.png";
import mettali from "../assets/mettali.png";
import sunbase from "../assets/sunbase.png";
import maisonflorale from "../assets/maisonflorale.png";

const projects = [
  {
    code: "NS · LC · 01",
    name: "Lacey's",
    services: "Brand Identity & Packaging",
    image: laceys,
    alt: "Lacey's coffee cup on an espresso machine",
    // [textCol, imageCol] on a 4-column track
    layout: { text: 1, image: 2 },
  },
  {
    code: "NS · MT · 02",
    name: "Mettali",
    services: "Brand Identity, Web Design & Print",
    image: mettali,
    alt: "Mettali brand and web design",
    layout: { text: 3, image: 4 },
  },
  {
    code: "NS · SB · 03",
    name: "Sunbase",
    services: "Brand Identity & Packaging",
    image: sunbase,
    alt: "Sunbase packaging and print materials",
    layout: { text: 4, image: 3 },
  },
  {
    code: "NS · MF · 04",
    name: "Maison Florale",
    services: "Brand Identity & Packaging",
    image: maisonflorale,
    alt: "Maison Florale packaging with flowers",
    layout: { text: 2, image: 1 },
  },
];

function TextCell({ project }) {
  return (
    <div className="flex h-full flex-col justify-between p-5">
      <p className="text-[10px] tracking-[0.15em]">{project.code}</p>
      <div>
        <h3 className="font-serif text-2xl">{project.name}</h3>
        <p className="mt-1 text-[10px] text-ink/70">{project.services}</p>
        <a
          href="#work"
          className="mt-5 inline-block border border-ink px-4 py-2 text-[9px] tracking-[0.22em] transition-colors hover:bg-ink hover:text-cream"
        >
          SEE CASE STUDY
        </a>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="border-b border-ink/60">
      <p className="border-b border-ink/60 py-3 text-center text-[10px] tracking-[0.3em]">
        SELECTED WORK
      </p>

      <div className="hidden md:block">
        {projects.map((project) => (
          <div
            key={project.code}
            className="grid min-h-95 grid-cols-4 divide-x divide-ink/60 border-b border-ink/60 last:border-b-0"
          >
            {[1, 2, 3, 4].map((col) => {
              if (col === project.layout.text)
                return <TextCell key={col} project={project} />;
              if (col === project.layout.image)
                return (
                  <div key={col} className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                );
              return <div key={col} />;
            })}
          </div>
        ))}
      </div>

      {/* Mobile: simple stacked cards */}
      <div className="md:hidden">
        {projects.map((project) => (
          <div key={project.code} className="border-b border-ink/60 last:border-b-0">
            <img src={project.image} alt={project.alt} className="h-64 w-full object-cover" />
            <TextCell project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

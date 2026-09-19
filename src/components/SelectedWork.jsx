import { Link } from "react-router-dom";
import laceys from "../assets/laceys/1.png";
import mettali from "../assets/mettali-work-cover.png";
import maisonflorale from "../assets/maison-work-cover-2.png";
import vedicSaarCover from "../assets/vedicpage/image1.svg";

const projects = [
  {
    code: "NS · LC · 01",
    name: "Lacey's",
    services: "Brand Identity & Packaging",
    image: laceys,
    alt: "Lacey's coffee cup on an espresso machine",
    href: "/work/laceys",
    // [textCol, imageCol] on a 4-column track
    layout: { text: 1, image: 2 },
  },
  {
    code: "NS · MT · 02",
    name: "Mettali",
    services: "Brand Identity, Web Design & Print",
    image: mettali,
    alt: "Mettali brand and web design",
    href: "/work/mettali",
    layout: { text: 3, image: 4 },
  },
  {
    code: "NS · MF · 03",
    name: "Maison Florale",
    services: "Brand Identity & Packaging",
    image: maisonflorale,
    alt: "Maison Florale packaging with flowers",
    href: "/work/maison-florale",
    layout: { text: 2, image: 1 },
  },
  {
    code: "NS · VS · 04",
    name: "Vedic Saar",
    services: "Brand Identity, Web Design & Print",
    image: vedicSaarCover,
    alt: "Vedic Saar embossed brand cover with sun emblem",
    href: "/work/vedic-saar",
    layout: { text: 2, image: 3 },
  },
];

function TextCell({ project }) {
  const isRoute = project.href.startsWith("/");
  const buttonClass =
    "mt-8 inline-block border border-ink px-4 py-2 text-[11px] tracking-tighter transition-colors hover:bg-ink hover:text-cream phone:mt-2.5 phone:whitespace-nowrap phone:border-ink/60 phone:px-1 phone:py-1 phone:text-[8px] phone:font-light";

  // Phones show a proportional miniature of the laptop cell.
  return (
    <div className="flex h-full min-w-0 flex-col justify-between p-5 phone:p-2">
      <p className="text-xs tracking-tighter phone:text-[8px] phone:font-light">{project.code}</p>
      <div>
        <h3 className="font-serif text-[32px] phone:text-[13px] phone:leading-tight">{project.name}</h3>
        <p className="mt-1 text-[15px] text-ink/70 phone:mt-0.5 phone:text-[8px] phone:font-light phone:leading-snug">{project.services}</p>
        {isRoute ? (
          <Link to={project.href} className={buttonClass}>
            SEE CASE STUDY
          </Link>
        ) : (
          <a href={project.href} className={buttonClass}>
            SEE CASE STUDY
          </a>
        )}
      </div>
    </div>
  );
}

export default function SelectedWork({ hideLabel = false }) {
  return (
    <section id="work" className="border-b border-ink/60">
      {!hideLabel && (
        <p className="border-b border-ink/60 py-3 text-center text-xs tracking-tighter">
          SELECTED WORK
        </p>
      )}

      <div className="px-6 md:px-16">
        <div className="border-x border-ink/60">
          {projects.map((project) => (
            <div
              key={project.code}
              className="grid aspect-[5/2] grid-cols-4 md:aspect-auto md:h-[min(56vh,33vw)] md:min-h-80 divide-x divide-ink/60 border-b border-ink/60 last:border-b-0"
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
      </div>
      <div className="h-6 border-t border-ink/60 md:h-10" />

    </section>
  );
}

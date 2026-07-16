import instaLogo from "../assets/logos/insta logo.png";
import pinterestLogo from "../assets/logos/pinterest logo.png";
import behanceLogo from "../assets/logos/behance logo.png";

const columns = [
  {
    heading: "Studio",
    links: ["Work", "About us", "Services"],
  },
  {
    heading: "Info",
    links: ["FAQs", "Start a Project"],
  },
];

const socials = [
  { label: "Instagram", logo: instaLogo },
  { label: "Pinterest", logo: pinterestLogo },
  { label: "Behance", logo: behanceLogo },
];

export default function Footer() {
  return (
    <footer className="bg-cream text-ink">
      <div className="mx-auto flex max-w-378 flex-col justify-between gap-12 px-6 pb-12 pt-12 md:flex-row md:px-12">
        <div>
          <p className="font-logo text-[32px] leading-none">NOiR</p>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="transition-opacity hover:opacity-60"
              >
                <img src={social.logo} alt={social.label} className="h-5 w-5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-20 md:pr-24">
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="font-serif text-xl italic">{column.heading}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-xs tracking-tighter text-ink/75 underline underline-offset-4 transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 border-t border-ink/40 py-4 text-[11px] tracking-tighter text-ink/70">
        <p>&copy; NOIR 2026</p>
        <a href="#home" className="transition-colors hover:text-ink">
          TERMS
        </a>
        <a href="#home" className="transition-colors hover:text-ink">
          PRIVACY POLICY
        </a>
      </div>
    </footer>
  );
}

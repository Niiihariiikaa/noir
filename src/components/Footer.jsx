import { Link } from "react-router-dom";
import instaLogo from "../assets/logos/insta logo.png";
import pinterestLogo from "../assets/logos/pinterest logo.png";
import behanceLogo from "../assets/logos/behance logo.png";

const columns = [
  {
    heading: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "About us", href: "/about" },
      { label: "Services", href: "/#services" },
    ],
  },
  {
    heading: "Info",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Start a Project", href: "/contact" },
    ],
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
      <div className="mx-auto flex max-w-378 flex-col justify-between gap-12 px-6 pb-12 pt-12 md:flex-row md:px-12 phone:flex-col phone:gap-10 phone:px-6 phone:pb-10 phone:pt-10">
        <div>
          <Link to="/" className="font-logo text-[32px] leading-none">
            NOiR
          </Link>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="transition-opacity hover:opacity-60"
              >
                <img src={social.logo} alt={social.label} className="h-5 w-5 object-contain phone:h-6 phone:w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-20 md:pr-24 phone:gap-16 phone:pr-0">
          {columns.map((column) => (
            <div key={column.heading}>
              <p className="font-serif text-xl italic">{column.heading}</p>
              <ul className="mt-5 space-y-3 phone:mt-4 phone:space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs tracking-tighter text-ink/75 underline phone:text-sm underline-offset-4 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 border-t border-ink/40 py-4 text-[11px] phone:flex-wrap phone:gap-x-6 phone:gap-y-2 phone:px-6 phone:py-5 tracking-tighter text-ink/70 phone:text-xs">
        <p>&copy; NOIR 2026</p>
        <a href="/#home" className="transition-colors hover:text-ink">
          TERMS
        </a>
        <a href="/#home" className="transition-colors hover:text-ink">
          PRIVACY POLICY
        </a>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

const links = [
  { label: "HOME", href: "/", type: "route" },
  { label: "ABOUT US", href: "/about", type: "route" },
  { label: "WORK", href: "/work", type: "route" },
  { label: "CONTACT US", href: "/contact", type: "route" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-y border-ink/60 bg-cream/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-378 items-center justify-between px-6 md:px-18">
        <Link to="/" className="font-logo text-[32px] leading-none">
          NOiR
        </Link>

        <nav className="hidden items-center gap-14 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {links.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs font-medium tracking-tighter transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-tighter transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <Link
          to="/contact"
          className="border border-ink px-6 py-2.5 text-xs font-medium tracking-tighter transition-colors hover:bg-ink hover:text-cream"
        >
          START A PROJECT
        </Link>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "HOME", href: "/", type: "route" },
  { label: "ABOUT US", href: "/about", type: "route" },
  { label: "WORK", href: "/work", type: "route" },
  { label: "CONTACT US", href: "/contact", type: "route" },
];

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-y border-ink/60 bg-cream/95 backdrop-blur-sm">
        <div className="relative mx-auto flex h-16 max-w-378 items-center justify-between px-6 md:px-18 phone:px-5">
          <Link to="/" className="font-logo text-[32px] leading-none">
            NOiR
          </Link>

          <nav className="hidden items-center gap-14 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 phone:hidden">
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
            className="border border-ink px-6 py-2.5 text-xs font-medium tracking-tighter transition-colors hover:bg-ink hover:text-cream phone:hidden"
          >
            START A PROJECT
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="hidden h-10 w-10 flex-col items-end justify-center gap-1.5 phone:flex"
          >
            <span className="block h-px w-7 bg-ink" />
            <span className="block h-px w-7 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
          </button>
        </div>
      </header>

      {/* Phone-only side menu. */}
      <div
        className={`fixed inset-0 z-60 hidden phone:block ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 w-[82%] overflow-y-auto bg-cream transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex min-h-full flex-col">
            <div className="flex h-16 items-center justify-between border-b border-ink/60 px-6">
              <Link to="/" className="font-logo text-[32px] leading-none">
                NOiR
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="relative h-10 w-10"
              >
                <span className="absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
                <span className="absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ink" />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-4">
              {menuLinks.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`flex items-baseline gap-4 border-b border-ink/20 py-4 font-serif text-[28px] leading-tight ${
                    pathname === link.href ? "italic" : ""
                  }`}
                >
                  <span className="font-sans text-[10px] tracking-tighter text-ink/50 phone:text-xs">
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-10 pt-10">
              <p className="text-[10px] tracking-tighter text-ink/60 phone:text-xs">
                Booking <em>brand</em> &amp; <em>website</em> projects for Fall 2026
              </p>
              <Link
                to="/contact"
                className="mt-4 block border border-ink py-3.5 text-center text-xs font-medium tracking-tighter transition-colors hover:bg-ink hover:text-cream"
              >
                START A PROJECT
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

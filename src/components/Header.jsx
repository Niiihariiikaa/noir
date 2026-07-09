import logo from "../assets/NOiR.svg";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/60 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-378 items-center justify-between px-6 md:px-12">
        <a href="#home">
          <img src={logo} alt="NOIR" className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-[0.28em] transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="border border-ink px-5 py-2 text-xs font-medium tracking-[0.28em] transition-colors hover:bg-ink hover:text-cream"
        >
          START A PROJECT
        </a>
      </div>
    </header>
  );
}

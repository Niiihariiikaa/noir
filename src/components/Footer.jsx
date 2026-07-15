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
  {
    label: "Instagram",
    path: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0-2.5c1.9 0 2.14.01 2.9.04 1.98.09 2.97 1.1 3.06 3.06.03.76.04 1 .04 2.9s-.01 2.14-.04 2.9c-.09 1.96-1.08 2.97-3.06 3.06-.76.03-1 .04-2.9.04s-2.14-.01-2.9-.04c-1.98-.09-2.97-1.1-3.06-3.06C6.01 14.14 6 13.9 6 12s.01-2.14.04-2.9c.09-1.96 1.08-2.97 3.06-3.06C9.86 6.01 10.1 6 12 6Zm3.9 1.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z",
  },
  {
    label: "Pinterest",
    path: "M12 6a6 6 0 0 0-2.4 11.5c-.05-.5-.1-1.3.02-1.85l.7-3s-.18-.36-.18-.9c0-.85.5-1.48 1.1-1.48.52 0 .77.4.77.86 0 .52-.33 1.3-.5 2.02-.15.6.3 1.1.9 1.1 1.07 0 1.9-1.13 1.9-2.76 0-1.44-1.04-2.45-2.52-2.45-1.71 0-2.72 1.29-2.72 2.62 0 .52.2 1.07.45 1.37a.18.18 0 0 1 .04.17l-.17.68c-.03.11-.09.14-.2.08-.76-.35-1.23-1.45-1.23-2.33 0-1.9 1.38-3.65 3.98-3.65 2.09 0 3.71 1.49 3.71 3.48 0 2.08-1.31 3.75-3.13 3.75-.61 0-1.19-.32-1.38-.7l-.38 1.44c-.14.52-.5 1.18-.75 1.58A6 6 0 1 0 12 6Z",
  },
  {
    label: "LinkedIn",
    path: "M8.34 9.13H6.18V16h2.16V9.13ZM7.26 6.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17.82 12.2c0-2.06-1.1-3.02-2.57-3.02-1.18 0-1.71.65-2.01 1.11v-.95h-2.16c.03.61 0 6.66 0 6.66h2.16v-3.72c0-.2.01-.4.07-.54.16-.4.51-.8 1.11-.8.79 0 1.1.6 1.1 1.48V16h2.3v-3.8Z",
  },
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
                className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/60 transition-colors hover:bg-ink hover:text-cream"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d={social.path} />
                </svg>
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
                      className="text-xs text-ink/75 underline underline-offset-4 transition-colors hover:text-ink"
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

      <div className="flex items-center justify-center gap-8 border-t border-ink/40 py-4 text-[11px] tracking-[0.18em] text-ink/70">
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

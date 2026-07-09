import letsconnect from "../assets/letsconnect.png";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-ink/60">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-10 md:border-r md:border-ink/60 md:p-12">
          <img
            src={letsconnect}
            alt="NOIR studio brief papers — we don't decorate brands, we argue for them"
            className="w-full max-w-150 h-auto"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-16 md:px-24 md:py-20">
          <p className="text-xs tracking-[0.3em]">LET&rsquo;S CONNECT</p>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl">
            The <em>Brief</em> Before The Brand.
          </h2>
          <p className="mt-8 max-w-md text-justify text-sm leading-relaxed text-ink/75">
            Tell us what you&rsquo;re building, who it&rsquo;s for, and what&rsquo;s not working
            yet. A few honest questions about your business, your audience, and
            where you&rsquo;re trying to go &mdash; that&rsquo;s where every project with us
            actually starts, long before anything gets designed.
          </p>
          <p className="mt-4 max-w-md text-justify text-sm leading-relaxed text-ink/75">
            We read every enquiry personally and reply within a couple of days.
            If it sounds like a fit, we&rsquo;ll set up a quick call to talk it
            through properly.
          </p>
          <a
            href="mailto:hello@noirstudio.design"
            className="mt-10 inline-block self-start border border-ink px-6 py-3 text-xs tracking-[0.28em] transition-colors hover:bg-ink hover:text-cream"
          >
            WORK WITH US
          </a>
        </div>
      </div>
    </section>
  );
}

const phrases = ["Brands That Convert", "Sites That Sell", "Identities That Stick"];

export default function Marquee() {
  const sequence = Array.from({ length: 4 }, () => phrases).flat();

  return (
    <section className="overflow-hidden border-b border-ink/60 py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {sequence.map((phrase, i) => (
              <span
                key={`${copy}-${i}`}
                className="whitespace-nowrap px-2 font-serif text-lg text-ink/90"
              >
                {phrase} <span className="px-2">&mdash;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

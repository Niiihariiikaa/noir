export default function WorkHero() {
  return (
    <section className="border-b border-ink/60">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32 phone:py-16">
        <p className="text-xs tracking-tighter">SELECTED WORK</p>

        <blockquote className="mt-8 font-serif text-3xl leading-tight md:text-[44px] phone:text-[28px]">
          &ldquo;Design Is An <em>Argument</em>,
          <br />
          Not <em>Decoration</em>.&rdquo;
        </blockquote>

        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ink/70">
          Every project below started with a clear point of view before it
          ever became a layout. Clarity is the only aesthetic that lasts.
        </p>
      </div>
    </section>
  );
}

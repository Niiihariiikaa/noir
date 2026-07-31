import storyImage from "../assets/about page/ABOUT2.png";

export default function AboutStory() {
  return (
    <section className="border-b border-ink/60 bg-stone">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-xs tracking-tighter">THE STORY BEHIND NOIR</p>

        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-[44px]">
          Design <em>Stays</em> With People.
          <br />
          That&rsquo;s <em>Why</em> It Matters.
        </h2>

        <img
          src={storyImage}
          alt="Seen, Shaped, Remembered"
          className="mx-auto mt-10 w-full max-w-md object-cover"
        />

        <p className="mx-auto mt-8 max-w-xl text-justify text-sm leading-relaxed text-ink/70">
          We&rsquo;ve always been drawn to design &mdash; not as decoration,
          but as something that actually changes how people feel about a
          brand. There are so many businesses out there with real potential
          that gets completely overlooked because the way they show up
          doesn&rsquo;t match what they&rsquo;re actually worth. Good design
          fixes that. It&rsquo;s the thing that makes someone stop, feel
          something, and remember you &mdash; and in a market where
          everything looks similar, what looks better gets chosen.
          That&rsquo;s not shallow, that&rsquo;s strategy. Noir exists to
          give that edge to brands that deserve it.
        </p>
      </div>
    </section>
  );
}

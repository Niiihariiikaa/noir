import typewriter from "../assets/belowgooddesignline.png";

export default function Manifesto() {
  return (
    <section id="about" className="border-b border-ink/60">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl leading-tight md:text-[44px]">
          Good Design <em>Begins</em>
          <br />
          When We <em>Commit</em> To a
          <br />
          <em>Point Of View</em>
        </h2>

        <div className="mt-8 flex justify-center">
          <img
            src={typewriter}
            alt=""
            className="h-12 w-auto object-contain"
          />
        </div>

        <p className="mt-8 font-serif text-xl italic leading-snug">
          When a brand commits to one clear idea,
          <br />
          everything else gets easier to design.
        </p>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink/70">
          Our work blends strategic clarity, typographic discipline, and an
          editor&rsquo;s eye for structure. It&rsquo;s less about chasing trends and more
          about giving a brand the nerve to say one true thing, clearly.
        </p>
      </div>
    </section>
  );
}

import bgTerreno from "@/assets/bgTerreno.png";

const TerrenosSection = () => (
  <section
    className="section-transition relative min-h-[90vh] flex items-start bg-cover bg-center"
    style={{ backgroundImage: `url(${bgTerreno})` }}
    data-observe="section"
  >
    <div className="absolute inset-0 bg-black/5" />

    <div className="relative z-10 max-w-7xl mx-11 w-full px-6 md:px-16 pt-30 md:pt-32">
      <div className="max-w-xl mt-14">
        <h2 className="font-rolide text-4xl md:text-6xl leading-[1.1] text-neutral-900 [font-variant-numeric:lining-nums] [text-shadow:0_2px_12px_rgba(0,0,0,0.25)]">        TERRENOS DE <br />
          500 A 800M
          <sup className="text-xl md:text-2xl align-top ml-1">²</sup>
        </h2>

        <p className="mt-6 max-w-lg text-base text-neutral-700 leading-relaxed font-light">
          Amplitude que traduz liberdade.
          <strong className="font-medium">
            {" "}Apenas 268
          </strong>{" "}
          lotes exclusivos e generosos que oferecem espaço para quem valoriza
          o conforto de uma vida verdadeiramente natural.
        </p>
      </div>
    </div>
  </section>
);

export default TerrenosSection;
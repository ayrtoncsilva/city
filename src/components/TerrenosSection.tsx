import bgTerreno from "@/assets/bgTerreno.png";

const TerrenosSection = () => (
  <section
    className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-start bg-cover bg-center"
    style={{ backgroundImage: `url(${bgTerreno})` }}
  >
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-20 md:pt-28">
      <h2 className="font-display text-4xl md:text-6xl font-light tracking-[0.05em] leading-tight text-neutral-900">
        TERRENOS DE
        <br />
        500 A 800M
        <sup className="text-2xl md:text-3xl align-top font-light">²</sup>
      </h2>

      <p className="mt-6 max-w-xl text-sm md:text-base text-neutral-700 leading-relaxed font-light">
        Amplitude que traduz liberdade. <strong className="font-medium">Apenas 268</strong> lotes exclusivos e generosos
        que oferecem espaço para quem valoriza o conforto de uma vida verdadeiramente natural.
      </p>
    </div>
  </section>
);

export default TerrenosSection;

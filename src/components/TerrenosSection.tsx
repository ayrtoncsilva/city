import bgTerreno from "@/assets/bgTerreno.png";
import bgTerrenoMobile from "@/assets/mobile-terreno.png";

const TerrenosSection = () => (
  <section
    className="section-transition relative min-h-[90vh] flex items-start bg-cover bg-center"
    data-observe="section"
  >
    {/* BG DESKTOP */}
    <div
      className="absolute inset-0 bg-cover bg-center hidden md:block"
      style={{ backgroundImage: `url(${bgTerreno})` }}
    />

    {/* BG MOBILE */}
    <div
      className="absolute inset-0 bg-cover bg-center block md:hidden"
      style={{ backgroundImage: `url(${bgTerrenoMobile})` }}
    />

    <div className="absolute inset-0 bg-black/1" />

    <div className="relative z-10 max-w-7xl mx-6 md:mx-40 w-full px-4 md:px-24 pt-14 md:pt-28">
      <div className="max-w-xl mt-6 md:mt-14">
        <h2 className="font-rolide text-3xl md:text-6xl leading-[1.1] text-neutral-900 [font-variant-numeric:lining-nums] [text-shadow:0_2px_12px_rgba(0,0,0,0.25)]">
          TERRENOS DE <br />
          500 A 800M
          <sup className="text-lg md:text-2xl align-top ml-1">²</sup>
        </h2>
        <p className="mt-6 md:mt-10 max-w-xs md:max-w-lg text-sm md:text-base text-neutral-700 leading-relaxed font-light">
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
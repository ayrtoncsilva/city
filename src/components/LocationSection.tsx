import mapCitage from "@/assets/MAPA_CITAGE_COMPLETO-01 1.png";

const LocationSection = () => (
  <section
    className="py-16 md:py-24 px-6 md:px-12"
    style={{ backgroundColor: "#52493B" }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <h2 className="font-display text-4xl md:text-6xl font-light text-white tracking-wide">
          GO-020 | Goiânia
        </h2>
        <p className="max-w-md text-white/80 font-body text-base leading-relaxed">
          A rodovia GO-020 é a região mais nobre dos condomínios horizontais de Goiânia, com acesso
          facilitado aos melhores bairros, escolas e serviços da cidade. O endereço onde
          exclusividade e conveniência se encontram.
        </p>
      </div>

      <div className="relative w-full rounded-sm overflow-hidden">
        <img
          src={mapCitage}
          alt="Mapa GO-020 Goiânia - Localização CITÀGE e pontos de interesse"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </section>
);

export default LocationSection;

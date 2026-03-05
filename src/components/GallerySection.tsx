import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


import ctUrbG357FotomontagemR03 from "@/assets/CT - URB_G3_57_FOTOMONTAGEM_R03.webp";
import ctUrbG101AcessoPrincipalR03 from "@/assets/CT-URB_G1_01_ACESSO PRINCIPAL_R03.webp";
import ctUrbG102AcessoPrincipalR03 from "@/assets/CT-URB_G1_02_ACESSO_PRINCIPAL_R03.webp";
import ctUrbG103AcessoPrincipalR03 from "@/assets/CT-URB_G1_03_ACESSO PRINCIPAL_R03.webp";
import ctUrbG104AcessoPrincipalR03 from "@/assets/CT-URB_G1_04_ACESSO_PRINCIPAL_R03.webp";
import ctUrbG105CoworkingR03 from "@/assets/CT-URB_G1_05_COWORKING_R03.webp";
import ctUrbG106MinimarketR02 from "@/assets/CT-URB_G1_06_MINIMARKET_R02.webp";
import ctUrbG107FeirinhaR03 from "@/assets/CT-URB_G1_07_FEIRINHA_R03.webp";
import ctUrbG108ParqueVooR03 from "@/assets/CT-URB_G1_08_PARQUE VOO_R03.webp";
import ctUrbG109GramadoR03 from "@/assets/CT-URB_G1_09_GRAMADO_R03.webp";
import ctUrbG110GramadoR04 from "@/assets/CT-URB_G1_10_GRAMADO_R04.webp";
import ctUrbG111PrainhaR04 from "@/assets/CT-URB_G1_11_PRAINHA_R04.webp";
import ctUrbG111PrainhaSunset from "@/assets/CT-URB_G1_11_PRAINHA_SUNSET.webp";
import ctUrbG112PrainhaR03 from "@/assets/CT-URB_G1_12_PRAINHA_R03.webp";
import ctUrbG113PrainhaR04 from "@/assets/CT-URB_G1_13_PRAINHA_R04.webp";
import ctUrbG114PomarR03 from "@/assets/CT-URB_G1_14_POMAR_R03.webp";
import ctUrbG115PlaygroundCentralR01 from "@/assets/CT-URB_G1_15_PLAYGROUND CENTRAL_R01.webp";
import ctUrbG116FonteInterativaR02 from "@/assets/CT-URB_G1_16_FONTE INTERATIVA_R02.webp";
import ctUrbG117CalisteniaR03 from "@/assets/CT-URB_G1_17_CALISTENIA_R03.webp";
import ctUrbG118BeachTennisR03 from "@/assets/CT-URB_G1_18_BEACH TENNIS_R03.webp";
import ctUrbG119BeachTennisR03 from "@/assets/CT-URB_G1_19_BEACH TENNIS_R03.webp";
import ctUrbG120QuadrasR01 from "@/assets/CT-URB_G1_20_QUADRAS_R01.webp";
import ctUrbG121ForteApacheR03 from "@/assets/CT-URB_G1_21_FORTE APACHE_R03.webp";
import ctUrbG122PetPlaceR02 from "@/assets/CT-URB_G1_22_PET PLACE_R02.webp";
import ctUrbG123TennisR02 from "@/assets/CT-URB_G1_23_TENNIS_R02.webp";
import ctUrbG124TennisR04 from "@/assets/CT-URB_G1_24_TENNIS_R04.webp";
import ctUrbG125PickleballR03 from "@/assets/CT-URB_G1_25_PICKLEBALL_R03.webp";
import ctUrbG126PlaygroundPracinhaR02 from "@/assets/CT-URB_G1_26_PLAYGROUND PRACINHA_R02.webp";
import ctUrbG127CorredoresVerdesR03 from "@/assets/CT-URB_G1_27_CORREDORES VERDES_R03.webp";
import ctUrbG146EspacoJogosR03 from "@/assets/CT-URB_G1_46_ESPACO JOGOS_R03.webp";
import ctUrbG147EspacoJogosR03 from "@/assets/CT-URB_G1_47_ESPACO_JOGOS_R03.webp";
import ctUrbG148EspacoJogosR03 from "@/assets/CT-URB_G1_48_ESPACO_JOGOS_R03.webp";
import ctUrbG228TrincheiraR03 from "@/assets/CT-URB_G2_28_TRINCHEIRA_R03.webp";
import ctUrbG229TrincheiraR03 from "@/assets/CT-URB_G2_29_TRINCHEIRA_R03.webp";
import ctUrbG230EsculturaExternaR02 from "@/assets/CT-URB_G2_30_ESCULTURA EXTERNA_R02.webp";
import ctUrbG231AreaComercialR03 from "@/assets/CT-URB_G2_31_AREA COMERCIAL_R03.webp";
import ctUrbG232PiscinaR03 from "@/assets/CT-URB_G2_32_PISCINA_R03.webp";
import ctUrbG233PiscinaR03 from "@/assets/CT-URB_G2_33_PISCINA_R03.webp";
import ctUrbG234PilatesR03 from "@/assets/CT-URB_G2_34_PILATES_R03.webp";
import ctUrbG235AcademiaR03 from "@/assets/CT-URB_G2_35_ACADEMIA_R03.webp";
import ctUrbG236AcademiaR03 from "@/assets/CT-URB_G2_36_ACADEMIA_R03.webp";
import ctUrbG237FuncionalR03 from "@/assets/CT-URB_G2_37_FUNCIONAL_R03.webp";
import ctUrbG238SpaR04 from "@/assets/CT-URB_G2_38_SPA_R04.webp";
import ctUrbG239MassagemR03 from "@/assets/CT-URB_G2_39_MASSAGEM_R03.webp";
import ctUrbG240EspacoBeautyR03 from "@/assets/CT-URB_G2_40_ESPAÇO BEAUTY_R03.webp";
import ctUrbG241SaunaR02 from "@/assets/CT-URB_G2_41_SAUNA_R02.webp";
import ctUrbG242SalaoDeFestasR03 from "@/assets/CT-URB_G2_42_SALAO_DE_FESTAS_R03.webp";
import ctUrbG243SalaoDeFestasR03 from "@/assets/CT-URB_G2_43_SALAO_DE_FESTAS_R03.webp";
import ctUrbG244EspacoKidsR03 from "@/assets/CT-URB_G2_44_ESPAÇO KIDS_R03.webp";
import ctUrbG245PokerR03 from "@/assets/CT-URB_G2_45_POKER_R03.webp";
import ctUrbG249EspacoGourmetR03 from "@/assets/CT-URB_G2_49_ESPACO GOURMET_R03.webp";
import ctUrbG250EspacoGourmetR03 from "@/assets/CT-URB_G2_50_ESPACO_GOURMET_R03.webp";
import ctUrbG251EspacoGourmetVooR03 from "@/assets/CT-URB_G2_51_ESPACO GOURMET VOO_R03.webp";

const images = [
  { src: ctUrbG357FotomontagemR03, label: "Fotomontagem" },
  { src: ctUrbG101AcessoPrincipalR03, label: "Acesso Principal 01" },
  { src: ctUrbG102AcessoPrincipalR03, label: "Acesso Principal 02" },
  { src: ctUrbG103AcessoPrincipalR03, label: "Acesso Principal 03" },
  { src: ctUrbG104AcessoPrincipalR03, label: "Acesso Principal 04" },
  { src: ctUrbG105CoworkingR03, label: "Coworking" },
  { src: ctUrbG106MinimarketR02, label: "Minimarket" },
  { src: ctUrbG107FeirinhaR03, label: "Feirinha" },
  { src: ctUrbG108ParqueVooR03, label: "Parque Voo" },
  { src: ctUrbG109GramadoR03, label: "Gramado 01" },
  { src: ctUrbG110GramadoR04, label: "Gramado 02" },
  { src: ctUrbG111PrainhaR04, label: "Prainha 01" },
  { src: ctUrbG111PrainhaSunset, label: "Prainha Sunset" },
  { src: ctUrbG112PrainhaR03, label: "Prainha 02" },
  { src: ctUrbG113PrainhaR04, label: "Prainha 03" },
  { src: ctUrbG114PomarR03, label: "Pomar" },
  { src: ctUrbG115PlaygroundCentralR01, label: "Playground Central" },
  { src: ctUrbG116FonteInterativaR02, label: "Fonte Interativa" },
  { src: ctUrbG117CalisteniaR03, label: "Calistenia" },
  { src: ctUrbG118BeachTennisR03, label: "Beach Tennis 01" },
  { src: ctUrbG119BeachTennisR03, label: "Beach Tennis 02" },
  { src: ctUrbG120QuadrasR01, label: "Quadras" },
  { src: ctUrbG121ForteApacheR03, label: "Forte Apache" },
  { src: ctUrbG122PetPlaceR02, label: "Pet Place" },
  { src: ctUrbG123TennisR02, label: "Tênis 01" },
  { src: ctUrbG124TennisR04, label: "Tênis 02" },
  { src: ctUrbG125PickleballR03, label: "Pickleball" },
  { src: ctUrbG126PlaygroundPracinhaR02, label: "Playground Pracinha" },
  { src: ctUrbG127CorredoresVerdesR03, label: "Corredores Verdes" },
  { src: ctUrbG146EspacoJogosR03, label: "Espaço Jogos 01" },
  { src: ctUrbG147EspacoJogosR03, label: "Espaço Jogos 02" },
  { src: ctUrbG148EspacoJogosR03, label: "Espaço Jogos 03" },
  { src: ctUrbG228TrincheiraR03, label: "Trincheira 01" },
  { src: ctUrbG229TrincheiraR03, label: "Trincheira 02" },
  { src: ctUrbG230EsculturaExternaR02, label: "Escultura Externa" },
  { src: ctUrbG231AreaComercialR03, label: "Área Comercial" },
  { src: ctUrbG232PiscinaR03, label: "Piscina 01" },
  { src: ctUrbG233PiscinaR03, label: "Piscina 02" },
  { src: ctUrbG234PilatesR03, label: "Pilates" },
  { src: ctUrbG235AcademiaR03, label: "Academia 01" },
  { src: ctUrbG236AcademiaR03, label: "Academia 02" },
  { src: ctUrbG237FuncionalR03, label: "Funcional" },
  { src: ctUrbG238SpaR04, label: "Spa" },
  { src: ctUrbG239MassagemR03, label: "Massagem" },
  { src: ctUrbG240EspacoBeautyR03, label: "Espaço Beauty" },
  { src: ctUrbG241SaunaR02, label: "Sauna" },
  { src: ctUrbG242SalaoDeFestasR03, label: "Salão de Festas 01" },
  { src: ctUrbG243SalaoDeFestasR03, label: "Salão de Festas 02" },
  { src: ctUrbG244EspacoKidsR03, label: "Espaço Kids" },
  { src: ctUrbG245PokerR03, label: "Poker" },
  { src: ctUrbG249EspacoGourmetR03, label: "Espaço Gourmet 01" },
  { src: ctUrbG250EspacoGourmetR03, label: "Espaço Gourmet 02" },
  { src: ctUrbG251EspacoGourmetVooR03, label: "Espaço Gourmet Voo" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section-transition bg-foreground py-0"
      data-observe="section"
    >
      <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
        <img
          src={images[current].src}
          alt={images[current].label}
          className="w-full h-full object-cover transition-opacity duration-700"
          loading="lazy"
        />

        <div className="absolute bottom-8 right-8 text-white font-display text-xl tracking-widest">
          {images[current].label}
        </div>

        <div className="absolute bottom-8 left-8 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full border border-white transition-all ${
                i === current ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrent((c) => (c - 1 + images.length) % images.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={() =>
            setCurrent((c) => (c + 1) % images.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
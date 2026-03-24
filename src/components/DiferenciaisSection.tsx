import { useState } from "react";
import leafBg from "@/assets/Textura+Logo 1.png";
import arrowImg from "@/assets/arrow.png";
import academiaImg from "@/assets/Academia.png";
import arvoreImg from "@/assets/Arvore.png";
import beachTennisImg from "@/assets/BeachTennis.png";
import fibraOpticaImg from "@/assets/FibraOptica.png";
import foodTruckImg from "@/assets/FoodTruck.png";
import forteApacheImg from "@/assets/ForteApache.png";
import gourmetImg from "@/assets/Gourmet.png";
import guaritaExclusivaImg from "@/assets/GuaritaExclusiva.png";
import lojaImg from "@/assets/Loja.png";
import piscinaCobertaImg from "@/assets/PiscinaCoberta.png";
import reconhecimentoFacialImg from "@/assets/ReconhecimentoFacial.png";
import redeEletricaImg from "@/assets/RedeEletricaSubterranea.png";
import salaoFestasImg from "@/assets/SalaoDeFestas.png";
import segurancaImg from "@/assets/Segurança.png";
import spaImg from "@/assets/Spa.png";
import tennisImg from "@/assets/Tennis.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type DiferencialItem = {
  texto: string;
  icon: string;
};

const diferenciais1: DiferencialItem[] = [
  {
    texto: "Controle de acesso com reconhecimento facial",
    icon: reconhecimentoFacialImg,
  },
  { texto: "Portaria e segurança 24 horas", icon: segurancaImg },
  { texto: "Rede elétrica subterrânea", icon: redeEletricaImg },
  { texto: "Fibra óptica para telecomunicação", icon: fibraOpticaImg },
];
const diferenciais2: DiferencialItem[] = [
  {
    texto: "Acesso de prestadores por guarita exclusiva",
    icon: guaritaExclusivaImg,
  },
  { texto: "Área verde extensa", icon: arvoreImg },
  { texto: "Parceria com mercado autônomo", icon: lojaImg },
  { texto: "Espaços para feirinhas e food trucks", icon: foodTruckImg },
];
const diferenciais3: DiferencialItem[] = [
  {
    texto: "Piscina coberta e climatizada com raia de 25m",
    icon: piscinaCobertaImg,
  },
  {
    texto: "Salão de Festas para 75 pessoas - 263m²",
    icon: salaoFestasImg,
  },
  { texto: "Academia completa - 246m²", icon: academiaImg },
  {
    texto: "3 Quadras de Beach Tênis/Futevôlei",
    icon: beachTennisImg,
  },
];
const diferenciais4: DiferencialItem[] = [
  {
    texto: "3 Espaços Gourmet para 40 pessoas cada",
    icon: gourmetImg,
  },
  { texto: "SPA com sauna e massagem", icon: spaImg },
  {
    texto: "Playground Temático - Forte Apache",
    icon: forteApacheImg,
  },
  { texto: "Pista de Cooper/Ciclovia", icon: tennisImg },
];

type DiferencialSlide = {
  titulo: string;
  itens: DiferencialItem[];
};

const slides: DiferencialSlide[] = [
  { titulo: "DIFERENCIAIS DE PROJETO", itens: [...diferenciais1] },
  { titulo: "DIFERENCIAIS DE PROJETO", itens: [...diferenciais2] },
  { titulo: "MAIS DE 40 AMBIENTES E LAZER", itens: [...diferenciais3] },
  { titulo: "MAIS DE 40 AMBIENTES DE LAZER", itens: [...diferenciais4] },
];

function DiferenciaisLista({ itens }: { itens: DiferencialItem[] }) {
  return (
    <ul className="w-full space-y-4 md:space-y-5">
      {itens.map((item, i) => (
        <li key={i} className="flex w-full items-center gap-3 md:gap-4">
          <img
            src={item.icon}
            alt=""
            width={48}
            height={48}
            className="h-9 w-9 shrink-0 object-contain md:h-11 md:w-11"
            aria-hidden
          />
          <span className="min-w-0 flex-1 text-left text-sm font-halyard leading-snug text-white [font-variant-numeric:lining-nums] md:text-lg">
            {item.texto}
          </span>
        </li>
      ))}
    </ul>
  );
}

const DiferenciaisSection = () => {
  const [desktopApi, setDesktopApi] = useState<CarouselApi | undefined>(undefined);
  const [mobileApi, setMobileApi] = useState<CarouselApi | undefined>(undefined);

  return (
    <section
      className="section-transition relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${leafBg})` }}
      data-observe="section"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ── DESKTOP ── */}
      <div className="relative z-10 hidden min-h-[420px] items-center justify-center py-24 md:flex md:px-20">
        <div className="flex w-full max-w-5xl justify-end">
          <div className="w-full max-w-xl text-left">
            <Carousel
              opts={{ align: "start", loop: true }}
              setApi={setDesktopApi}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <h2 className="mb-10 text-4xl font-light text-white tracking-[0.15em] [font-variant-numeric:lining-nums] font-rolide leading-[1.1] md:text-5xl">
                        {slide.titulo}
                      </h2>
                      <DiferenciaisLista itens={slide.itens} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Botão seta — desktop */}
        <button
          type="button"
          onClick={() => desktopApi?.scrollNext()}
          className="absolute bottom-10 right-10 h-[54px] w-[106px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
        >
          <img src={arrowImg} alt="próximo" className="h-2 object-contain" />
        </button>
      </div>

      {/* ── MOBILE ── */}
      <div className="relative z-10 min-h-[320px] px-6 pb-20 pt-12 md:hidden">
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setMobileApi}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div>
                  <h2 className="mb-6 text-left text-xl font-light text-white tracking-[0.15em] [font-variant-numeric:lining-nums] font-rolide leading-[1.1]">
                    {slide.titulo}
                  </h2>
                  <DiferenciaisLista itens={slide.itens} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Botão seta — mobile */}
        <button
          type="button"
          onClick={() => mobileApi?.scrollNext()}
          className="absolute bottom-8 right-8 h-[48px] w-[96px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
        >
          <img src={arrowImg} alt="próximo" className="h-2 object-contain" />
        </button>
      </div>
    </section>
  );
};

export default DiferenciaisSection;

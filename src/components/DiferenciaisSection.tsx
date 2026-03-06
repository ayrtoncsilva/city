import { useEffect, useState } from "react";
import leafBg from "@/assets/Textura+Logo 1.png";
import arrowImg from "@/assets/arrow.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const diferenciais1 = [
  "Controle de acesso com reconhecimento facial",
  "Portaria e segurança 24 horas",
  "Rede elétrica subterrânea",
  "Fibra óptica para telecomunicação",
];
const diferenciais2 = [
  "Acesso de prestadores por guarita exclusiva",
  "Área verde extensa",
  "Parceria com mercado autônomo",
  "Espaços para feirinhas e food trucks",
];
const diferenciais3 = [
  "Piscina coberta e climatizada com raia de 25m",
  "Salão de Festas para 75 pessoas - 263m²",
  "Academia completa - 246m²",
  "3 Quadras de Beach Tênis/Futevôlei",
];
const diferenciais4 = [
  "3 Espaços Gourmet para 40 pessoas cada",
  "SPA com sauna e massagem",
  "Playground Temático - Forte Apache",
  "Pista de Cooper/Ciclovia",
];

type DiferencialSlide = {
  titulo: string;
  itens: string[];
};

const slides: DiferencialSlide[] = [
  { titulo: "DIFERENCIAIS DE PROJETO", itens: [...diferenciais1] },
  { titulo: "DIFERENCIAIS DE PROJETO", itens: [...diferenciais2] },
  { titulo: "MAIS DE 40 AMBIENTES E LAZER", itens: [...diferenciais3] },
  { titulo: "MAIS DE 40 AMBIENTES DE LAZER", itens: [...diferenciais4] },
];

const DiferenciaisSection = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);

  // Sem autoplay — só ao clicar na seta

  return (
    <section
      className="section-transition relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${leafBg})` }}
      data-observe="section"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex relative z-10 items-center justify-center min-h-[420px] px-20 py-24">
        {/* Conteúdo deslocado para a direita — logo já está na imagem de fundo à esquerda */}
        <div className="w-full max-w-5xl flex justify-end">
          <div className="w-full max-w-xl text-left">
            <Carousel
              opts={{ align: "start", loop: true }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-light text-white tracking-[0.15em] mb-10 font-rolide">
                        {slide.titulo}
                      </h2>
                      <ul className="space-y-5">
                        {slide.itens.map((d, i) => (
                          <li key={i} className="flex items-center gap-4">
                            <span className="w-3 h-3 rounded-full bg-white/50 shrink-0" />
                            <span className="text-white text-base md:text-lg font-halyard">
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden relative z-10 px-6 pt-12 pb-20 min-h-[320px]">
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div>
                  <h2 className="text-xl font-light text-white tracking-[0.15em] mb-6 font-rolide">
                    {slide.titulo}
                  </h2>
                  <ul className="space-y-4">
                    {slide.itens.map((d, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/50 shrink-0" />
                        <span className="text-white text-sm font-halyard">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* BOTÃO SETA — posição absoluta, igual ao modelo */}
      <button
        type="button"
        onClick={() => api?.scrollNext()}
        className="absolute bottom-8 right-8 md:bottom-10 md:right-10 h-[48px] w-[96px] md:h-[54px] md:w-[106px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
      >
        <img src={arrowImg} alt="próximo" className="h-5 md:h-6 object-contain" />
      </button>
    </section>
  );
};

export default DiferenciaisSection;
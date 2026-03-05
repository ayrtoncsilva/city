import { useEffect, useState } from "react";
import leafBg from "@/assets/Textura+Logo 1.png";
import { ArrowRight } from "lucide-react";
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

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      className="section-transition relative py-32 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${leafBg})` }}
      data-observe="section"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CENTRALIZAÇÃO REAL */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-center px-6">

        {/* DIV DO CAROUSEL */}
        <div className="w-full max-w-2xl text-left">

          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div>

                    <h2
                      className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-10"
                      style={{ fontFamily: "Rolide, 'Cormorant Garamond', serif" }}
                    >
                      {slide.titulo}
                    </h2>

                    <ul className="space-y-5">
                      {slide.itens.map((d, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <span className="w-3 h-3 rounded-full bg-white/50 shrink-0" />

                          <span className="text-white text-base md:text-lg">
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

      {/* BOTÃO */}
      <button
        type="button"
        onClick={() => api?.scrollNext()}
        className="absolute bottom-10 right-10 h-[54px] w-[106px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition"
      >
        <ArrowRight
          size={35}
          strokeWidth={1.5}
          className="translate-x-2"
        />
      </button>

    </section>
  );
};

export default DiferenciaisSection;
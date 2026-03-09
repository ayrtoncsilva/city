import { useState } from "react";
import restaurantImg from "@/assets/restaurant.jpg";
import interior from "@/assets/img4.png";
import cityUrbanismo from "@/assets/City_Urbanismo_Logo.png";
import prnbUrbanismo from "@/assets/logo2.png";
import leoMaia from "@/assets/img1.png";
import yaraImg from "@/assets/yara.png";
import partner1 from "@/assets/img2.png";
import partnersBg from "@/assets/Rectangle 3.png";
import imgMobMaia from "@/assets/img-mob-maia.png";
import imgYaraMobile from "@/assets/img-yara-mobile.png";
import yaraLogo from "@/assets/logo-yara.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
export type CarouselSlide = {
  mainImage: string;
  label: string;
  name?: string;
  logo?: string;
  personImage?: string;
};
const defaultSlides: CarouselSlide[] = [
  {
    mainImage: restaurantImg,
    label: "Projeto de interiores",
    name: "LEOMAIA",
    personImage: leoMaia,
  },
  {
    mainImage: interior,
    label: "Projeto de paisagismo",
    logo: yaraLogo,
    personImage: yaraImg,
  },
];
const mobileSlides = [imgMobMaia, imgYaraMobile];
const ParceriaCarouselSection = ({
  slides = defaultSlides,
}: {
  slides?: CarouselSlide[];
}) => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  return (
    <section
      className="section-transition pt-20 md:pt-40 pb-16 md:pb-24"
      style={{ backgroundColor: "#52493B" }}
      data-observe="section"
    >
      <div className="pl-6 md:pl-20 pr-6 md:pr-10">
        {/* MOBILE HEADER */}
        <div className="md:hidden mb-12">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <img src={partnersBg} className="w-full object-cover" />
            <img src={partner1} className="w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8 items-center">
            <img src={cityUrbanismo} className="w-full object-contain" />
            <img src={prnbUrbanismo} className="w-full object-contain" />
          </div>
          <p className="text-white text-sm leading-relaxed text-center mx-auto max-w-[320px]">
            Quando PRNB Urbanismo e City Urbanismo unem suas trajetórias,
            nasce um novo padrão de excelência em incorporação.
          </p>
        </div>
        {/* DESKTOP BLOCO ORIGINAL */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-24 mb-24 items-start">
          <div className="flex flex-col gap-24">
            <div className="grid grid-cols-2 gap-24">
              <img src={partnersBg} className="w-full object-cover" />
              <img src={partner1} className="w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-24">
              <img src={cityUrbanismo} className="w-full max-w-[300px] object-contain" />
              <img src={prnbUrbanismo} className="w-full max-w-[300px] object-contain" />
            </div>
          </div>
          <div className="flex items-start justify-center">
            <p className="font-halyard text-white text-xl leading-relaxed max-w-[520px]">
              Quando PRNB Urbanismo e City Urbanismo unem suas trajetórias,
              nasce um novo padrão de excelência em incorporação. Décadas de experiência
              em construir o extraordinário agora projetadas em um território de
              novas possibilidades.
            </p>
          </div>
        </div>
        {/* MOBILE CAROUSEL */}
        <div className="md:hidden mb-10">
          <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
            <CarouselContent>
              {mobileSlides.map((img, index) => (
                <CarouselItem key={index}>
                  <img src={img} className="w-full object-cover" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* DESKTOP CAROUSEL */}
        <div className="hidden md:block">
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-[1.8fr_0.9fr] gap-12">
                    {/* Imagem principal */}
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={slide.mainImage}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Coluna direita: flex col, conteúdo empurrado para baixo */}
                    <div className="flex flex-col justify-end items-center pl-12">
                      {/* Título alinhado junto à borda da foto */}
                      <div className="flex flex-col items-center mb-5 w-full mr-28">
                        <span className="font-rolide text-white/70 text-xs tracking-[0.2em] uppercase mb-1">
                          {slide.label}
                        </span>
                        {slide.name && (
                          <span className="text-white text-2xl tracking-[0.3em]">
                            {slide.name}
                          </span>
                        )}
                        {slide.logo && (
                          <img src={slide.logo} className="h-[40px] object-contain" />
                        )}
                      </div>
                      {/* Foto */}
                      {slide.personImage && (
                        <div className="overflow-hidden w-full">
                          <img
                            src={slide.personImage}
                            className="w-200 object-cover object-top"
                          />
                        </div>
                      )}
                      {/* Setas com espaço abaixo da foto */}
                      <div className="flex gap-2 mt-6 w-full">
                        <button
                          onClick={() => api?.scrollPrev()}
                          className="w-[36px] h-[36px] rounded-full border border-white text-white text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => api?.scrollNext()}
                          className="w-[36px] h-[36px] rounded-full border border-white text-white text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default ParceriaCarouselSection;
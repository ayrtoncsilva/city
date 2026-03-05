import { useState } from "react";
import restaurantImg from "@/assets/restaurant.jpg";
import cityUrbanismo from "@/assets/City_Urbanismo_Logo.png";
import prnbUrbanismo from "@/assets/logo2.png";
import leoMaia from "@/assets/img1.png";
import partner1 from "@/assets/img2.png";
import partnersBg from "@/assets/Rectangle 3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export type CarouselSlide = {
  mainImage: string;
  label: string;
  name: string;
  personImage?: string;
};

const defaultSlides: CarouselSlide[] = [
  {
    mainImage: restaurantImg,
    label: "Projeto de interiores",
    name: "LEOMAIA",
    personImage: leoMaia,
  },
];

const ParceriaCarouselSection = ({
  slides = defaultSlides,
}: {
  slides?: CarouselSlide[];
}) => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ backgroundColor: "#52493B" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-16">
          <div>
            <img
              src={partnersBg}
              alt="Sócios PRNB e City Urbanismo"
              className="w-300 h-129 object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={partner1}
              alt=""
              className="w-300 h-129 object-cover"
              loading="lazy"
            />
          </div>
          <p className="font-halyard text-white text-[14px] leading-relaxed self-center max-w-[420px]">
            Quando PRNB Urbanismo e City Urbanismo unem suas trajetórias, nasce
            um novo padrão de excelência em incorporação. Décadas de experiência
            em construir o extraordinário agora projetadas em um território de
            novas possibilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div>
            <img
              src={cityUrbanismo}
              alt="City Urbanismo"
              className="h-[60px] w-auto object-contain"
            />
          </div>
          <div className="md:col-span-2">
            <img
              src={prnbUrbanismo}
              alt="PRNB Urbanismo"
              className="h-[60px] w-auto object-contain"
            />
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_1fr] gap-8 items-start md:items-end">
                  <div>
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={slide.mainImage}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col justify-end items-center h-full">
                    <div className="flex gap-3 mb-2">
                      <button
                        type="button"
                        onClick={() => api?.scrollPrev()}
                        className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 transition-all"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 transition-all"
                      >
                        ›
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 pl-4 md:pl-8">
                    <p className="font-rolide text-white text-[12px] tracking-[0.25em]">
                      {slide.label}
                    </p>

                    <p className="font-display text-white text-[48px] leading-none tracking-[0.35em] mb-4">
                      {slide.name}
                    </p>

                    {slide.personImage ? (
                      <div className="aspect-square w-[260px] overflow-hidden self-start">
                        <img
                          src={slide.personImage}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square w-[260px] bg-white/10 flex items-center justify-center text-white/40 text-sm">
                        Foto
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex md:hidden justify-center gap-3 mt-10">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 transition-all"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 transition-all"
            >
              ›
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ParceriaCarouselSection;
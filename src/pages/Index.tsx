import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TerrenosSection from "@/components/TerrenosSection";
import ParceriaCarouselSection from "@/components/ParceriaCarouselSection";
import GallerySection from "@/components/GallerySection";
import ImplantacaoSection from "@/components/ImplantacaoSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import LocationSection from "@/components/LocationSection";
import VideoSection from "@/components/VideoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      'section[data-observe="section"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <IntroSection />
      <TerrenosSection />
      <ParceriaCarouselSection />
      <VideoSection />
      <GallerySection />
      <ImplantacaoSection />
      <DiferenciaisSection />
      <LocationSection />
      <FooterSection />
    </main>
  );
};

export default Index;

import leafBg from "@/assets/Textura+Logo 1.png";
import { ArrowRight } from "lucide-react";

const diferenciais = [
  "Controle de acesso com reconhecimento facial",
  "Portaria e segurança 24 horas",
  "Rede elétrica subterrânea",
  "Fibra óptica para telecomunicação",
];

const DiferenciaisSection = () => (
  <section
    className="relative py-20 md:py-32 px-6 md:px-12 bg-cover bg-center overflow-hidden"
    style={{ backgroundImage: `url(${leafBg})` }}
  >
    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center">

      <div className="relative flex-[0.9]">
      </div>

      <div className="relative flex-[1.1] md:-ml-40 md:translate-x-[-40px]">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-10 border-b border-white/30 pb-4">
          DIFERENCIAIS DE PROJETO
        </h2>

        <ul className="space-y-5">
          {diferenciais.map((d, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-white/50 shrink-0" />
              <span className="text-white text-base md:text-lg">{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
  className="
    absolute right-10 top-[100%]
    h-[54px] w-[106px]
    rounded-full
    border border-white
    flex items-center justify-center
    text-white
    hover:bg-white/10
    transition
  "
>
  <ArrowRight
    size={35}
    strokeWidth={1.5}
    className="translate-x-2"
  />
</button>
    </div>
  </section>
);

export default DiferenciaisSection;
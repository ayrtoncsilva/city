import simbolo from "@/assets/Simbolo.png";

const IntroSection = () => (
  <section
    className="section-transition bg-city-cream py-20 md:py-28 px-6 md:px-12"
    data-observe="section"
  >
    <div className="flex flex-col items-center md:hidden gap-8">
      <img src={simbolo} alt="Simbolo" className="w-24" />
      <p className="text-lg leading-relaxed font-halyard text-foreground text-left">
        O primeiro condomínio horizontal City une a{" "}
        <strong className="font-semibold">excelência urbana</strong> a um novo horizonte de{" "}
        <strong className="font-semibold">experiências extraordinárias.</strong>
      </p>
      <p className="text-base leading-relaxed font-halyard text-muted-foreground text-left">
        Citàge é uma herança que atravessa gerações, onde cada ambiente cria pertencimento e
        abriga memórias. Santé inaugura esse legado como um brinde à vida bem vivida – celebrando
        conquistas, encontros e o prazer de viver.
      </p>
    </div>

    <div className="hidden md:grid max-w-6xl mx-auto grid-cols-3 gap-16 items-center">
      <div className="flex justify-end">
        <p className="max-w-sm text-xl md:text-2xl leading-relaxed font-halyard text-foreground">
          O primeiro condomínio horizontal City une a{" "}
          <strong className="font-semibold">excelência urbana</strong> a um novo horizonte de{" "}
          <strong className="font-semibold">experiências extraordinárias.</strong>
        </p>
      </div>
      <div className="flex justify-center">
        <img src={simbolo} alt="Simbolo" />
      </div>
      <div className="flex justify-start">
        <p className="max-w-sm text-lg leading-relaxed font-halyard text-muted-foreground">
          Citàge é uma herança que atravessa gerações, onde cada ambiente cria pertencimento e
          abriga memórias. Santé inaugura esse legado como um brinde à vida bem vivida – celebrando
          conquistas, encontros e o prazer de viver.
        </p>
      </div>
    </div>
  </section>
);

export default IntroSection;
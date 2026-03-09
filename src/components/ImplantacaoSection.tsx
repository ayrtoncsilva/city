import ImplementacaoBolotario from "../assets/ImplementacaoBolotario.png";
import ImplantacaoMobile from "../assets/implantacaoMobile.png";

const amenities = [
  { num: 1, name: "ÁREA COMERCIAL" },
  { num: 2, name: "ACESSO PRINCIPAL" },
  { num: 3, name: "ESPAÇO FEIRINHA", desc: "espaço aberto ideal para eventos exclusivos, feiras e vivências extraordinárias sob céu aberto" },
  { num: 4, name: "GRAMADO", desc: "área externa ao ar livre, ideal para celebrar a liberdade e o lazer em família" },
  { num: 5, name: "PRAINHA", desc: "área de lazer aquática com areia para diversão" },
  { num: 6, name: "POMAR PRAÇA CENTRAL", desc: "jardim com árvores frutíferas para contemplação e colheita" },
  { num: 7, name: "PLAYGROUND 1", desc: "parque infantil equipado para diversão das crianças" },
  { num: 8, name: "FONTE INTERATIVA", desc: "espaço lúdico com jatos d'água para entretenimento" },
  { num: 9, name: "CALISTENIA", desc: "área equipada para exercícios funcionais ao ar livre" },
  { num: 10, name: "BLOCO ACADEMIA/PISCINA" },
  { num: 11, name: "ESPAÇO GOURMET 1", desc: "climatizado e equipado para confraternizações" },
  { num: 12, name: "QUADRA SOCIETY", desc: "campo com dimensões oficiais de futebol society" },
  { num: 13, name: "QUADRA POLIESPORTIVA", desc: "quadra com dimensões oficiais para vôlei, handebol e basquete" },
  { num: 14, name: "ESPAÇO GOURMET 2", desc: "climatizado e equipado para confraternizações" },
  { num: 15, name: "QUADRAS BEACH TENNIS", desc: "3 quadras de areia descobertas com medidas oficiais para beach tennis e futevôlei" },
  { num: 16, name: "PET PLACE", desc: "área dedicada ao lazer e cuidados com pets" },
  { num: 17, name: "FUTMESA", desc: "3 futmesas espalhadas pelo complexo para diversão" },
  { num: 18, name: "FORTE APACHE", desc: "playground temático com pomar adjacente" },
  { num: 19, name: "POMAR 2", desc: "jardim com árvores frutíferas para contemplação e colheita" },
  { num: 20, name: "QUADRAS DE TENNIS", desc: "2 quadras de tênis descobertas" },
  { num: 21, name: "ESPAÇO GOURMET 3", desc: "climatizado e equipado para confraternizações" },
  { num: 22, name: "QUADRAS DE PICKLEBALL", desc: "2 quadras para prática de pickleball" },
  { num: 23, name: "PLAYGROUND 2", desc: "parque infantil externo com brinquedos" },
  { num: 24, name: "PISTA DE COOPER", desc: "circuito para corrida e ciclismo" },
  { num: 25, name: "CORREDORES VERDES", desc: "calçadas e caminhos internos para circulação" },
];

const ImplantacaoSection = () => (
  <section className="section-transition py-16 md:py-28" data-observe="section">

    {/* MOBILE */}
    <div className="md:hidden flex flex-col">

      {/* Título */}
      <div className="mb-8 px-6 flex justify-center">
        <div className="inline-block bg-neutral-800 px-6 py-3">
          <h2 className="font-halyard text-white text-2xl tracking-[0.25em] uppercase font-light">
            IMPLANTAÇÃO GERAL
          </h2>
        </div>
      </div>

      {/* Mapa mobile */}
      <img
        src={ImplantacaoMobile}
        alt="Implantação geral do empreendimento"
        className="w-full h-auto"
      />

      {/* Legenda mobile */}
      <div className="mt-8 px-6">
        <div className="space-y-3 text-[12px] leading-relaxed text-neutral-800 font-halyard">
          {amenities.map((a) => (
            <div key={a.num} className="flex">
              <span className="min-w-[28px] font-semibold shrink-0">{a.num} -</span>
              <span>
                <strong>{a.name}</strong>
                {a.desc && <>: <span className="text-neutral-600">{a.desc}</span></>}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* DESKTOP */}
    <div className="hidden md:flex flex-row items-start">

      {/* esquerda */}
      <div className="w-[60%] pl-16 pr-8">

        <div className="mb-12 text-left">
          <div className="inline-block bg-neutral-800 px-10 py-4">
            <h2 className="font-halyard text-white text-4xl tracking-[0.35em] uppercase font-light">
              IMPLANTAÇÃO GERAL
            </h2>
          </div>
        </div>

        <img
          src={ImplementacaoBolotario}
          alt="Implantação geral do empreendimento"
          className="w-full h-auto"
        />

      </div>

      {/* direita */}
      <div className="w-[40%] mt-28 pl-8 pr-16">

        <div className="space-y-3 text-[13px] leading-relaxed text-neutral-800 font-halyard">
          {amenities.map((a) => (
            <div key={a.num} className="flex">
              <span className="min-w-[34px] font-semibold shrink-0">{a.num} -</span>
              <span>
                <strong>{a.name}</strong>
                {a.desc && <>: <span className="text-neutral-600">{a.desc}</span></>}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>

  </section>
);

export default ImplantacaoSection;
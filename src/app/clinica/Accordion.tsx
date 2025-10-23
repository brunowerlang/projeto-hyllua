import React, { useState } from "react";

interface Procedimento {
  titulo: string;
  conteudo: string[];
}

interface AccordionAsideProps {
  procedimentos: Procedimento[];
}

const AccordionAside: React.FC<AccordionAsideProps> = ({ procedimentos }) => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    // Lógica mais limpa: Se for o mesmo índice, fecha (-1). Caso contrário, abre o novo índice.
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  // 💡 FUNÇÃO ATUALIZADA: Com a animação mais fluida (max-height, opacity, padding)
  const getAccordionClass = (isOpen: boolean) =>
    // Duração de 800ms, ease-in-out e transiciona max-height, opacity E padding
    `transition-[max-height,opacity,padding,border] duration-800 ease-in-out overflow-hidden bg-[#abb48d]  ${
      isOpen
        ? "max-h-[1000px] opacity-100 py-4 border"
        : "max-h-0 opacity-100 py-0 border-0"
    }`;

  return (
    <aside className="lg:w-121 w-[75%] lg:pt-44 pt-28 -top-80 lg:-top-44 lg:-ml-0 mx-auto text-[#e5e6e1] flex flex-col absolute z-99">
      {/* Imagem fixa no topo */}
      <div className="shrink-0 relative z-99">
        <img
          src="/images/clinica/accordion-img.webp"
          alt="Procedimento"
          className="object-cover w-full rounded-t-[0.5rem] top-0 z-10"
        />
      </div>

      {/* Accordion */}
      <div className="flex flex-col justify-start">
        {procedimentos.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              // 🚨 CÓDIGO ATUALIZADO: Combinação das lógicas de Borda e Arredondamento
              className={`
                cursor-pointer w-full flex justify-between items-center 
                lg:px-6 px-4 lg:py-3 py-2 bg-[#353a2c] text-[#e5e6e1] 
                font-light tracking-[1px] uppercase lg:text-[13px] text-[12px]
                
                // Lógica de Arredondamento: Só aplica no último botão
                ${index === procedimentos.length - 1 ? "rounded-b-[0.5rem]" : ""}
                
                // Lógica de Borda: 'border' no primeiro, 'border-r border-l border-b' nos demais
                ${index === 0 ? "border" : "border-r border-l border-b"}
              `}
              type="button"
            >
              {item.titulo}
              <span
                // 💡 Icon Class: Duração ajustada para combinar com a nova animação
                className={`transition-transform duration-500 ease-in-out font-black text-[14px] lg:text-[21px] ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* 💡 Aplicação da nova classe de animação */}
            <div className={getAccordionClass(openIndex === index)}>
              <div className="px-0 py-0 grid lg:grid-cols-2 grid-cols-1 gap-x-6 lg:gap-y-4 gap-y-3 text-[#e5e6e1] lg:text-[13px] text-[12px]">
                {item.conteudo.map((linha, i) =>
                  linha.includes("Exclusivas") ? (
                    <p
                      key={i}
                      className="font-semibold py-2 bg-[#353a2c] text-[#e5e6e1] lg:col-span-2 px-3.5 lg:px-6"
                    >
                      {linha}
                    </p>
                  ) : (
                    <p key={i} className="px-2 lg:px-6 lg:w-[15rem]">
                      {linha}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AccordionAside;

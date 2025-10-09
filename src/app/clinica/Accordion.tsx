import React, { useState } from "react";

interface Procedimento {
  titulo: string;
  conteudo: string[];
}

interface AccordionAsideProps {
  procedimentos: Procedimento[];
}

const AccordionAside: React.FC<AccordionAsideProps> = ({ procedimentos }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1); // fecha todas
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <aside className="lg:w-108 w-[75%] lg:pt-44 pt-28 -top-80 lg:-top-44 lg:-ml-0 mx-auto text-white flex flex-col absolute z-99">
      {/* Imagem fixa no topo */}
      <div className="shrink-0 lg:h-[19rem] relative z-99">
        <img
          src="/images/clinica/foto-hyllua-secao-2-clinica.webp"
          alt="Procedimento"
          className="object-cover w-full rounded-t-[0.5rem] top-0 z-10"
        />
      </div>
      {/* Accordion */}
      <div className="flex flex-col justify-start">
        {procedimentos.map((item, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center lg:px-6 px-4 lg:py-3 py-2 bg-[#353a2c] text-white !border-t !border-white font-normal tracking-normal uppercase lg:text-[0.93rem] text-[0.66rem] ${index === procedimentos.length - 1 ? 'rounded-b-[0.5rem]' : ''}`}
              type="button"
            >
              {item.titulo}
              <span
                className={`transition-transform duration-500 ease-in-out font-black text-[10px] lg:text-[17px] ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-[max-height,opacity,padding] duration-700 ease-in-out border border-white ${openIndex === index ? "opacity-100 bg-[#abb48d]" : "max-h-0 opacity-0 py-0 bg-[#abb48d]"}`}
            >
              {openIndex === index && (
                <div className="px-0 lg:py-4 py-2 grid grid-cols-2 gap-x-6 lg:gap-y-2 gap-y-[2px] text-white lg:text-[0.7rem] text-[7.35px]">
                  {item.conteudo.map((linha, i) => (
                    linha.includes("Exclusivas") ? (
                      <p key={i} className="font-bold bg-[#353a2c] text-white lg:py-0 col-span-2 px-2 lg:px-6">{linha}</p>
                    ) : (
                      <p key={i} className="px-2 lg:px-6 lg:w-[15rem]">{linha}</p>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AccordionAside;
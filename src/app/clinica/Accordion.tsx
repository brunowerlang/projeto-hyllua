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
    if (openIndex === index) {
      setOpenIndex(-1); // fecha todas
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <aside className="lg:w-121 w-[75%] lg:pt-44 pt-28 -top-80 lg:-top-44 lg:-ml-0 mx-auto text-[#e5e6e1] flex flex-col absolute z-99">
      {/* Imagem fixa no topo */}
      <div className="shrink-0  relative z-99">
        <img
          src="/images/clinica/accordion-img.webp"
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
              className={`w-full flex justify-between items-center lg:px-6 px-4 lg:py-3 py-2 bg-[#353a2c] text-[#e5e6e1] border-t-1 border-[#e5e6e1] font-light tracking-[1px] uppercase lg:text-[13px] text-[12px] ${index === procedimentos.length - 1 ? 'rounded-b-[0.5rem]' : ''}`}
              type="button"
            >
              {item.titulo}
              <span
                className={`transition-transform duration-500 ease-in-out font-black text-[14px] lg:text-[21px] ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-[max-height,opacity,padding] duration-700 ease-in-out   ${openIndex === index ? "opacity-100 bg-[#abb48d]" : "max-h-0 opacity-0 py-0 bg-[#abb48d]"}`}
            >
              {openIndex === index && (
                <div className="px-0 py-4 grid lg:grid-cols-2 grid-cols-1 gap-x-6 lg:gap-y-4 gap-y-3 text-[#e5e6e1] border-2 lg:text-[13px] text-[12px]">
                  {item.conteudo.map((linha, i) => (
                    linha.includes("Exclusivas") ? (
                      <p key={i} className="font-semibold py-2 bg-[#353a2c] text-[#e5e6e1]  lg:col-span-2 px-3.5 lg:px-6">{linha}</p>
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
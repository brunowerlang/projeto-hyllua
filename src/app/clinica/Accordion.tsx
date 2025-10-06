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
    <aside className=" lg:w-107 w-[85%]   lg:-ml-0 mx-auto max-w-md rounded-lg overflow-hidden bg-[#3e4a2b] text-white flex flex-col    relative z-99 ">
      {/* Imagem fixa no topo */}
      <div className="   shrink-0 ">
        <img
          src="/images/clinica/foto-hyllua-secao-2-clinica.webp"
          alt="Procedimento"
          className="object-cover w-full   top-0 z-10"
        />
      </div>
      {/* Accordion */}
  <div className="flex flex-col justify-start ">
        {procedimentos.map((item, index) => (
          <div key={index} className="border-t border-[#d2d2c7]">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-[#3e4a2b] text-white font-normal tracking-normal uppercase text-[0.9rem]"
              type="button"
            >
              {item.titulo}
              <span
                className={`transition-transform duration-500 ease-in-out ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`transition-[max-height,opacity,padding] duration-700 ease-in-out border-2 border-[#d2d2c7] ${openIndex === index ? "max-h-[1000px] opacity-100 py-4 bg-[#a9b18f]" : "max-h-0 opacity-0 py-0 bg-[#a9b18f]"}`}
            >
              {openIndex === index && (
                <div className="px-0 py-2 grid grid-cols-2 gap-x-6 gap-y-2 text-white text-[0.7rem]">
                  {item.conteudo.map((linha, i) => (
                    linha.includes("Exclusivas") ? (
                      <p key={i} className="font-bold bg-[#3e4a2b] text-white py-1 col-span-2 px-2 lg:px-6">{linha}</p>
                    ) : (
                      <p key={i} className=" px-2 lg:px-6 lg:w-[15rem]">{linha}</p>
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

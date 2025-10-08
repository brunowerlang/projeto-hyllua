

"use client";

import Image from "next/image";
import { useState } from "react";
import AccordionAside from "./Accordion";
import CasosClinicos from "./CasosClinicos";

export default function ClinicaPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const procedimentos = [
    {
      titulo: "PROCEDIMENTOS FACIAIS",
      conteudo: [
        "Bioestimulador de Colágeno Radiesse",
        "Protocol Control",
        "Bioestimulador de Colágeno Sculptra",
        "Lavieen",
        "Botox",
        "Lavieen + PDRN",
        "Injetáveis: Mandíbula, Malár, Olheiras, Mento, Bigode Chinês, Preenchimento Labial, Rinomedificação",
        "Microagulhamento",
        "Protocoll",
        "Visalift",
        "Técnicas Exclusivas Dra. Hyllua Husein",
        "Técnica LAPIDARE",
        "Método WONDERFULL FACE",
      ],
    },
    {
      
      titulo: "PROCEDIMENTOS CORPORAIS",
      conteudo: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
    },
    {
      titulo: "PROCEDIMENTOS ODONTOLÓGICOS",
      conteudo: ["Exemplo 1", "Exemplo 2", "Exemplo 3"],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>

      <main>

      
         
         
                      
        {/* Hero Section Clínica */}
        <section className="relative w-full flex items-center overflow-hidden pt-15 -mb-13 lg:lg:-mb-14 ">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/clinica/background-hero-clinica.webp"
              alt="Fundo decorativo clínica"
              fill
              className="object-cover object-left "
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col lg:flex-row items-end justify-between mx-auto pt-15 lg:pt-30">
            {/* Texto */}
            <div className="texto-hero max-w-lg lg:ml-8 text-center lg:text-left flex-1 pb-12 relative lg:-top-3 lg:left-38">
              <h1 className="text-[1.1rem] titulo-scotch lg:text-[1.8rem] font-normal text-[#abb48d] mb-2 leading-none relative -left-3 lg:-left-0">
                Você não é <br /> feita em partes<br />
                <span className="text-[#abb48d] font-bold text-[2.3rem] lg:text-[4rem] titulo-scotch italic relative lg:-top-1.5 ">e o seu <br /> cuidado</span><br />
                <span className="text-[#abb48d] lg:text-[2rem] text-[1.1rem] font-normal titulo-scotch block mt-3 lg:inline lg:mt-0 relative lg:-top-2 -top-3 -left-1">também não <br /> deveria ser.</span>
              </h1>
              <p className="mt-4 text-[#abb48d] text-[0.95rem] lg:text-[1.1rem]  px-25 lg:px-0 lg:w-[13rem]  leading-none lg:leading-6 relative -top-3 lg:-top-0 -left-3 lg:-left-0">
                Por isso integramos<br className="block lg:hidden"/> <span className="font-semibold">saúde e estética</span> para<br className="block lg:hidden"/> cuidar de você por inteiro.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end lg:mr-8 mt-8 lg:mt-0 relative -right-15 -top-11 lg:-right-6 lg:-top-2">
              <Image
                src="/images/clinica/equipe-hero-clinica.webp"
                alt="Equipe Clínica Hyllua"
                width={900}
                height={780}
                className="object-contain drop-shadow-xl scale-123 lg:scale-105"
                priority
              />
            </div>
          </div>
        </section>

      {/* Section Procedimentos */}
<section
  className="relative  bg-[url('/images/clinica/background-2-clinica.webp')] bg-cover bg-center   z-50 flex items-center -mb-110 lg:-mb-180 "
>
  <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 py-[14.7rem] items-center max-w-4xl">
    {/* Lado Direito - Mobile primeiro */}
    <div className="text-center lg:text-right order-1 lg:order-2 -mt-30 lg:-mt-0">
      <p className="uppercase tracking-wide lg:text-[1.35rem] text-[0.9rem] text-white font-normal relative lg:-right-2 lg:top-1 lg:mb-1">
        Na Clínica Hyllua Husein
      </p>
      <h2 className="lg:text-[52px] text-[1.7rem] font-bold leading-none  titulo-scotch relative">
        rosto, sorriso <br /> e corpo
      </h2>
      <p className="mt-2 uppercase tracking-wider lg:text-[1.60rem] text-[0.85rem] text-white font-regular relative lg:-right-2 ">Andam em harmonia</p>
      <button className="lg:mt-17 mt-12 lg:text-[1.25rem] text-[0.8rem] font-semibold border-t-2 border-white relative lg:-right-2">
        Conheça nossos procedimentos
      </button>
    </div>

    {/* Lado Esquerdo - Mobile por último */}
    <div className="bg-[#353a2c] text-white rounded-lg overflow-hidden items-center flex flex-col order-2 lg:order-1 ">
      {/* Accordion Aside */}
      
    </div>
  </div>
</section>


      {/* Section Procedimentos */}
<section
  className="relative bg-[#dddfde]   flex items-center lg:pb-10 "
>
  <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10  items-center max-w-4xl  mt-40">
    {/* Lado Direito - Mobile primeiro */}
    <div className="text-center lg:text-right order-1 lg:order-2 ">
   
    </div>

    {/* Lado Esquerdo - Mobile por último */}
    <div className=" text-white rounded-lg overflow-hidden items-center flex flex-col order-2 lg:order-1">
      {/* Accordion Aside */}

      
      <AccordionAside procedimentos={procedimentos} />
    </div>
  </div>
</section>


      {/* Section Equipe Multidisciplinar */}
      <section className="bg-[#dddfde] lg:pt-15 pt-44 pb-18 lg:pb-12 -mt-24 ">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left " >
          <div className="text-[#353a2c] lg:text-[1.75rem] text-[1.4rem] font-normal flex items-center justify-center lg:justify-start h-full leading-none lg:-left-6 relative titulo-scotch">
            <span className="block lg:text-left">Nossa equipe<br />se alinha para</span>
          </div>
          <div className="text-[#353a2c] titulo-scotch text-[2rem] lg:text-[58px] font-bold italic leading-none text-center flex flex-col items-center justify-center">
            <span>cuidar <br />
            de você <br />
           como um <br />todo.</span>
          </div>
          <div className="text-[#353a2c] text-[1.15rem]  font-normal flex items-center justify-center lg:justify-end h-full  relative lg:-right-6">
            <span className="block lg:text-right leading-4 px-18 lg:px-0 lg:pl-24">
              Aqui, você é acolhido por uma <span className="font-bold">equipe qualificada</span> que compartilha a mesma <span className="font-bold">visão de cuidado</span> e atua de forma integrada entre especialidades.
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-24 text-center">
          <span className="tracking-wide text-[#353a2c] lg:text-[1.20rem] ">
            CONHEÇA NOSSA <span className="font-semibold">EQUIPE MULTIDISCIPLINAR</span>
          </span>
        </div>
      </section>


      {/* Section Dra. Hyllua */}
      <section className="bg-[#dddfde] ">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4 ">
          {/* Coluna Esquerda: textos e card - Mobile segundo, Desktop primeiro */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 px-8 lg:px-0 items-center  ">
            {/* Texto e dados */}
            <div>
              <h2 className="font-bold lg:text-3xl text-xl text-[#353a2c] mb-1 relative before:content-[''] before:block before:lg:w-32 before:w-20 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:-top-2 before:left-0">Dra. Hyllua Husein</h2>
              <span className="lg:text-[0.95rem] text-[0.65rem] text-[#353a2c] font-semibold mb-10 block">CRBM 6817</span>
              <ul className="text-[#353a2c] lg:text-[1.07rem] text-[0.85rem] space-y-2 list-none pl-0 font-normal">
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Biomédica, com Especialização em Estética</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Há 18 anos atuando na estética • 180 alunos em turmas VIP presencial, +3000 pacientes atendidos</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Especializações internacionais em HOF:<br className="hidden lg:block" /> Formações realizadas na Suíça, Itália e Estados Unidos, com foco em anatomia aplicada, rejuvenescimento avançado e técnicas de<br className="hidden lg:block" /> refinamento estético</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Referência nacional em lábios e rinomodelação<br className="hidden lg:block" />com a técnica LAPIDARE</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Mentora e criadora do método WONDERFULL<br className="hidden lg:block" /> FACE</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />CEO da Clínica Hyllua Husein e da marca nacional<br className="hidden lg:block" />de dermocosméticos Hyllua Beauty</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora convidada no European Biomedical Research Institute of Salerno (EBRIS)</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora chancelada pela Harvard Medical<br className="hidden lg:block" />School</li>
              </ul>
            </div>
              
        {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(true);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#353a2c]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out text-xl font-bold ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#bfc0b6] overflow-hidden  ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-80"}`}
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-x-6 gap-y-2 text-white text-[0.65rem]">
              <span>Bioestimulador de Colágeno Radiesse</span>
              <span>Protocoll Controll</span>
              <span>Bioestimulador de Colágeno Sculptra</span>
              <span>Preenchimento<br />Labial</span>
              <span>Botox</span>
              <span>Rinomodelação</span>
              <span>Geral (ml): Mandíbula, Malár, Olheiras, Mento, Bigode Chinês</span>
              <span>Técnica LAPIDARE</span>
              <span>Protocoll</span>
              <span>Método WONDERFULL<br /> FACE</span>
            </div>
          </div>
        </div>
      );
    })()}
  </div>
</div>

          </div>
          {/* Coluna Direita: imagem - Mobile primeiro, Desktop segundo */}
          <div className="flex justify-center items-start order-1 lg:order-2">
            <div className=" overflow-hidden   flex items-center justify-center px-16 lg:px-0">
              <img
                src="/images/clinica/hyllua.webp"
                alt="Dra. Hyllua Husein"
                className="object-cover lg:w-full h-full"
              />
            </div>
          </div>
          
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4 py-15">
  {/* Coluna Esquerda: imagem - Mobile primeiro, Desktop primeiro */}
  <div className="flex justify-center items-start order-1 lg:order-1 px-16 lg:px-0">
    <div className="overflow-hidden flex items-center justify-center">
      <img
        src="/images/clinica/luiza.webp"
        alt="Dra. Luíza Souza"
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  {/* Coluna Direita: textos e card - Mobile segundo, Desktop segundo */}
  <div className="flex flex-col gap-8 relative lg:-bottom-8 lg:-right-8 order-2 lg:order-2 px-8 lg:px-0 items-center">
    {/* Texto e dados */}
    <div>
      <h2 className="font-bold lg:text-3xl text-xl text-[#353a2c] mb-1 relative before:content-[''] before:block before:lg:w-32 before:w-20 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:-top-2 before:left-0">
        Dra. Luíza Souza
      </h2>
      <span className="lg:text-[0.95rem] text-[0.65rem] text-[#353a2c] font-semibold mb-10 block">
        CRBM 4597
      </span>
      <ul className="text-[#353a2c] lg:text-[1.07rem] text-[0.85rem] space-y-2 list-none pl-0 font-normal">
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Biomédica, com Especialização em Estética,<br className="hidden lg:block" />atuando há mais de 8 anos na área
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Mais de 30 cursos na área de Harmonização Facial<br className="hidden lg:block" />e Corporal
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Criadora da técnica exclusiva de glúteos Brazilian Bumbum Up
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Expert em Tecnologias e Gerenciamento de Pele
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Especialização internacional em Anatomia em<br className="hidden lg:block" />Fresh Frozen Cadaver, pela EBRIS (European<br className="hidden lg:block" />Biomedical Research Institute of Salerno) na Itália,<br className="hidden lg:block" />chancelada pela Harvard Medical School
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Habilitada na Técnica LAPIDARE, de lábios e nariz, criada pela Dra. Hyllua Husein
        </li>
      </ul>
    </div>

    {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#353a2c]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out text-xl font-bold ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#bfc0b6] overflow-hidden  ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-80"}`}
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-x-6 gap-y-2 text-white text-[0.65rem]">
              <span>Bioestimulador de Colágeno Radiesse</span>
              <span>Protocoll Controll</span>
              <span>Bioestimulador de Colágeno Sculptra</span>
              <span>Preenchimento<br />Labial</span>
              <span>Botox</span>
              <span>Rinomodelação</span>
              <span>Geral (ml): Mandíbula, Malár, Olheiras, Mento, Bigode Chinês</span>
              <span>Técnica LAPIDARE</span>
              <span>Protocoll</span>
              <span>Método WONDERFULL<br /> FACE</span>
            </div>
          </div>
        </div>
      );
    })()}
  </div>
</div>
  </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4  py-15">
          {/* Coluna Esquerda: textos e card - Mobile segundo, Desktop primeiro */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 px-8 lg:px-0 items-center  ">
            {/* Texto e dados */}
            <div>
              <h2 className="font-bold lg:text-3xl text-xl text-[#353a2c] mb-1 relative before:content-[''] before:block before:lg:w-32 before:w-20 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:-top-2 before:left-0">Dra. Felipe Vendramini</h2>
              <span className="lg:text-[0.95rem] text-[0.65rem] text-[#353a2c] font-semibold mb-10 block">CRBM 22723</span>
              <ul className="text-[#353a2c] lg:text-[1.07rem] text-[0.85rem] space-y-2 list-none pl-0 font-normal">
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Cirurgião-Dentista, com mais de 10 anos de experiência</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Formado pela Faculdade Meridional - IMED (2014)</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Pós-graduado em Endodontia (CEOM - 2016), área<br className="hidden lg:block" /> da odontologia que trata os canais radiculares e<br className="hidden lg:block" /> evita perdas dentárias</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Pós-graduado em Prótese Dentária (Odontocenter<br className="hidden lg:block" /> - 2022), responsável pela reabilitação com coroas, lentes de contato e próteses estéticas</li>
                
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Formações complementares em estética dental,<br className="hidden lg:block" /> com foco em devolver harmonia, função e naturalidade ao sorriso de forma personalizada</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Especialização internacional em Anatomia em<br className="hidden lg:block" /> Fresh Frozen Cadaver, pela EBRIS (European Biomedical Research Institute of Salerno) na Itália, chancelada pela Harvard Medical School</li>
               
              </ul>
            </div>
              
        {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(true);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#353a2c]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out text-xl font-bold ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#bfc0b6] overflow-hidden  ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-80"}`}
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-x-6 gap-y-2 text-white text-[0.65rem]">
              <span>Bioestimulador de Colágeno Radiesse</span>
              <span>Protocoll Controll</span>
              <span>Bioestimulador de Colágeno Sculptra</span>
              <span>Preenchimento<br />Labial</span>
              <span>Botox</span>
              <span>Rinomodelação</span>
              <span>Geral (ml): Mandíbula, Malár, Olheiras, Mento, Bigode Chinês</span>
              <span>Técnica LAPIDARE</span>
              <span>Protocoll</span>
              <span>Método WONDERFULL<br /> FACE</span>
            </div>
          </div>
        </div>
      );
    })()}
  </div>
</div>

          </div>
          {/* Coluna Direita: imagem - Mobile primeiro, Desktop segundo */}
          <div className="flex justify-center items-start order-1 lg:order-2">
            <div className=" overflow-hidden   flex items-center justify-center px-16 lg:px-0">
              <img
                src="/images/clinica/felipe.webp"
                alt="Dra. Felipe Vendramini"
                className="object-cover lg:w-full h-full"
              />
            </div>
          </div>
          
        </div>

         <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4 py-15">
  {/* Coluna Esquerda: imagem - Mobile primeiro, Desktop primeiro */}
  <div className="flex justify-center items-start order-1 lg:order-1 px-16 lg:px-0">
    <div className="overflow-hidden flex items-center justify-center">
      <img
        src="/images/clinica/danielle.webp"
        alt="Dra. Danielle Marcon"
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  {/* Coluna Direita: textos e card - Mobile segundo, Desktop segundo */}
  <div className="flex flex-col gap-8 relative lg:-bottom-8 lg:-right-8 order-2 lg:order-2 px-8 lg:px-0 items-center">
    {/* Texto e dados */}
    <div>
      <h2 className="font-bold lg:text-3xl text-xl text-[#353a2c] mb-1 relative before:content-[''] before:block before:lg:w-32 before:w-20 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:-top-2 before:left-0">
        Dra. Danielle Marcon
      </h2>
      <span className="lg:text-[0.95rem] text-[0.65rem] text-[#353a2c] font-semibold mb-10 block">
        CRBM 25514
      </span>
      <ul className="text-[#353a2c] lg:text-[1.07rem] text-[0.85rem] space-y-2 list-none pl-0 font-normal">
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Cirurgiã-dentista, atuando há mais de 8 anos na área
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Formação pela PUCRS com graduação sanduíche na SAPIENZA UNIVERSITÀ DI ROMA, em Roma, na Itália
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Especialista em Implantodontia e Prótese dentária
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Extensão em Cirurgia Oral Menor na PUCRS
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Especialização internacional em Anatomia em<br /> Fresh Frozen Cadaver, pela EBRIS (European<br /> Biomedical Research Institute of Salerno) na Itália,<br /> chancelada pela Harvard Medical School
        </li>
       
      </ul>
    </div>

    {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#353a2c]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out text-xl font-bold ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#bfc0b6] overflow-hidden  ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-80"}`}
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-x-6 gap-y-2 text-white text-[0.65rem]">
              <span>Bioestimulador de Colágeno Radiesse</span>
              <span>Protocoll Controll</span>
              <span>Bioestimulador de Colágeno Sculptra</span>
              <span>Preenchimento<br />Labial</span>
              <span>Botox</span>
              <span>Rinomodelação</span>
              <span>Geral (ml): Mandíbula, Malár, Olheiras, Mento, Bigode Chinês</span>
              <span>Técnica LAPIDARE</span>
              <span>Protocoll</span>
              <span>Método WONDERFULL<br /> FACE</span>
            </div>
          </div>
        </div>
      );
    })()}
  </div>
</div>
  </div>
        </div>
      </section>

      
<CasosClinicos />

    <section  className="w-full relative "
  style={{
    backgroundImage: "url('/images/clinica/background-6-clinica.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    backgroundColor: "#dddfde"
  }}
>
      {/* Values Cards Section */}
      <div className="  py-16 lg:pt-25">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 ">

{/* Card 1 - Cuidado de Verdade */}
 <div className="flex items-center justify-center lg:min-h-[480px] px-16 lg:px-0">
              <div className=" border border-[#bfcfae] lg:rounded-[2.8rem]  rounded-[1.25rem] lg:w-[300px] lg:h-[400px] w-[180px] flex flex-col overflow-hidden shadow-sm" style={{ boxSizing: "border-box" }}>
                {/* Top Section */}
                <div className=" lg:px-7 lg:pt-8 pt-4 lg:pb-1 pb-2 text-center lg:rounded-t-[2.8rem]  leading-none ">
                  <p className="text-[#a8b896] lg:text-[1.5rem] font-normal  tracking-wide  titulo-scotch relative lg:-left-8 -left-5" style={{ letterSpacing: "0.02em" }}>
                    Tratamos
                  </p> 
                  <p className="font-serif italic text-[#8b9b7a] lg:text-[3rem] text-[1.8rem] leading-none font-bold  titulo-scotch relative lg:-top-2">
                    pessoas
                  </p>
                  <p className="text-[#a8b896] lg:text-[1.5rem] font-normal tracking-wide  titulo-scotch relative lg:-right-9 lg:-top-3 -right-3" style={{ letterSpacing: "0.02em" }}>
                    não casos
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="bg-[#a8b896] flex-1 lg:px-12 px-6 lg:rounded-b-[2.8rem] rounded-b-[1.25rem] lg:rounded-tl-[2.8rem]  rounded-tl-[1.25rem] flex items-center justify-center mb-4">
                  
                  <p className="text-white py-5 lg:px-3 lg:text-[1.4rem] text-center lg:leading-6 leading-4 font-normal">
                    Construímos relações<br className="block lg:hidden"/><br className="hidden lg:block" /> baseadas em <br className="hidden lg:block"/>
                    
                    <span className="font-bold">confiança, pertencimento<br className="block lg:hidden"/> e<br className="hidden lg:block"/> escuta ativa.</span>
                  </p>
                </div>
              </div>
            </div>
            

            {/* Card 2 - Cuidado de Verdade */}
           <div className="flex items-center justify-center lg:min-h-[480px] px-16 lg:px-0">
              <div className=" border border-[#bfcfae] lg:rounded-[2.8rem] rounded-[1.25rem] lg:w-[300px] lg:h-[400px] w-[180px] flex flex-col overflow-hidden shadow-sm" style={{ boxSizing: "border-box" }}>
                {/* Top Section */}
                <div className=" lg:px-7 lg:pt-8 pt-4 lg:pb-1 pb-2 text-center lg:rounded-t-[2.8rem] rounded-t -[1.25rem] *:leading-none">
                  <p className="text-[#a8b896] lg:text-[1.5rem] font-normal  tracking-wide titulo-scotch relative lg:-left-7 -left-5" style={{ letterSpacing: "0.02em" }}>
                    Cuidado de
                  </p>
                  <p className="font-serif italic text-[#8b9b7a] lg:text-[3rem] text-[1.8rem] leading-none font-bold titulo-scotch relative lg:-top-2 lg:-left-0">
                    verdade
                  </p>
                  <p className="text-[#a8b896] lg:text-[1.5rem] font-normal tracking-wide titulo-scotch relative lg:-right-9 lg:-top-3 -right-3" style={{ letterSpacing: "0.02em" }}>
                    é integrado
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="bg-[#a8b896] flex-1 px-12  lg:rounded-b-[2.8rem] lg:rounded-tl-[2.8rem]  rounded-tl-[1.25rem]  rounded-b-[1.25rem]  flex items-center justify-center mb-4">
                  <p className="text-white py-5 px-3 lg:text-[1.4rem] text-center lg:leading-6 leading-4 font-normal ">
                    Nosso modelo é baseado em <span className="font-bold">diálogo</span> entre especialidades,<br />
                    <span className="font-bold">visão ampla</span> e <span className="font-bold">construção conjunta</span> de cada plano de cuidado.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* Full Width Banner */}
      <div className="bg-[#a8b896]  py-8 lg:py-22">
        <p className="text-center text-lg text-white lg:text-[2.2rem] titulo-scotch ">
          O cuidado que te reconhece <span className=" italic titulo-scotch font-semibold">por completo.</span>
        </p>
      </div>

      {/* CTA Section */}
      <div className=" px-6 pt-12 pb-12 lg:py-40">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
          <div className="text-center lg:text-left">
            <p className="lg:mb-4 mb-12 lg:text-[2rem]  text-[1.4rem] text-[#4a5442] titulo-scotch leading-none px-16 lg:px-0">Agende seu procedimento</p>
            <p className="font-semibold titulo-scotch  italic text-[#4a5442] lg:text-[2.6rem] text-[1.8rem] leading-none px-16 lg:px-0 lg:pr-12">
              e descubra uma nova
              
              forma de se cuidar
              
              por inteiro.
            </p>
          </div>
          <button className="rounded-lg bg-[#a8b896] px-8 relative lg:-right-4 py-4 text-sm font-semibold uppercase tracking-wide text-black border-b-4 border-black transition-colors hover:bg-[#96a684] lg:text-[1.15rem] text-nowrap">
            AGENDAR MEU PROCEDIMENTO
          </button>
        </div>
      </div>
    </section>

{/* Section: Imagens lado a lado */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-full w-full">
          <img
            src="/images/clinica/foto-clinica-1-8.webp"
            alt="Foto clínica 1"
            
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full">
          <img
            src="/images/clinica/foto-clinica-2-8.webp"
            alt="Foto clínica 2"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      </main>

    </>
  );
}

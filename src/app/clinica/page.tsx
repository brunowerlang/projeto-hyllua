

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
        <section className="relative w-full flex items-center overflow-hidden pt-15 -mb-13 lg:lg:-mb-14">
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
            <div className="texto-hero max-w-lg lg:ml-8 text-center lg:text-left flex-1 pb-12 relative lg:-top-6 lg:left-40">
              <h1 className="text-[1.1rem] titulo-scotch lg:text-[1.8rem] font-normal text-[#7cae7e] mb-4 leading-none">
                Você não é <br /> feita em partes<br />
                <span className="text-[#7cae7e] font-bold text-[2.3rem] lg:text-[4rem] titulo-scotch italic ">e o seu <br /> cuidado</span><br />
                <span className="text-[#7cae7e] lg:text-[2rem] text-[1.1rem] font-normal titulo-scotch block mt-3 lg:inline lg:mt-0">também não <br /> deveria ser.</span>
              </h1>
              <p className="mt-4 text-[#7cae7e] text-[1.3rem] lg:text-[1.1rem] px-20 lg:px-0 lg:w-[13rem] leading-none lg:leading-6">
                Por isso integramos <span className="font-semibold">saúde e estética</span> para cuidar de você por inteiro.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end lg:mr-8 mt-8 lg:mt-0 relative -right-15">
              <Image
                src="/images/clinica/equipe-hero-clinica.webp"
                alt="Equipe Clínica Hyllua"
                width={900}
                height={780}
                className="object-contain drop-shadow-xl scale-130 lg:scale-110"
                priority
              />
            </div>
          </div>
        </section>

      {/* Section Procedimentos */}
<section
  className="relative  bg-[url('/images/clinica/background-2-clinica.webp')] bg-cover bg-center   z-50 flex items-center -mb-100 lg:-mb-180"
>
  <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 py-[14.7rem] items-center max-w-4xl">
    {/* Lado Direito - Mobile primeiro */}
    <div className="text-center lg:text-right order-1 lg:order-2 -mt-30 lg:-mt-0">
      <p className="uppercase tracking-wide lg:text-xl text-[1.3rem] text-white font-light">
        Na Clínica Hyllua Husein
      </p>
      <h2 className="lg:text-5xl text-[2.5rem] font-bold leading-none  titulo-scotch">
        rosto, sorriso <br /> e corpo
      </h2>
      <p className="mt-2 uppercase tracking-wide lg:text-[1.6rem] text-[1.3rem] text-white font-light">Andam em harmonia</p>
      <button className="lg:mt-16 mt-12 lg:text-[1.18rem] text-[1.1rem] font-semibold border-t-2 border-white">
        Conheça nossos procedimentos
      </button>
    </div>

    {/* Lado Esquerdo - Mobile por último */}
    <div className="bg-[#3e4a2b] text-white rounded-lg overflow-hidden items-center flex flex-col order-2 lg:order-1 ">
      {/* Accordion Aside */}
      
    </div>
  </div>
</section>


      {/* Section Procedimentos */}
<section
  className="relative bg-[#dddfde]   flex items-center lg:pb-10"
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
      <section className="bg-[#dddfde] pt-40 pb-28 -mt-24">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left " >
          <div className="text-[#3e4a2b] lg:text-[1.7rem] text-[1.4rem] font-normal flex items-center justify-center lg:justify-start h-full leading-none ">
            <span className="block lg:text-left">Nossa equipe<br />se alinha para</span>
          </div>
          <div className="text-[#3e4a2b] titulo-scotch text-[2.7rem] lg:text-[55px] font-bold italic leading-none text-center flex flex-col items-center justify-center">
            <span>cuidar <br />
            de você <br />
           como um <br />todo.</span>
          </div>
          <div className="text-[#3e4a2b] text-xl  font-normal flex items-center justify-center lg:justify-end h-full  ">
            <span className="block lg:text-right leading-5 px-14 lg:px-0 lg:pl-24">
              Aqui, você é acolhido por uma <span className="font-bold">equipe qualificada</span> que compartilha a mesma <span className="font-bold">visão de cuidado</span> e atua de forma integrada entre especialidades.
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-24 text-center">
          <span className="tracking-wide text-[#3e4a2b] text-[1.15rem] ">
            CONHEÇA NOSSA <span className="font-semibold">EQUIPE MULTIDISCIPLINAR</span>
          </span>
        </div>
      </section>


      {/* Section Dra. Hyllua */}
      <section className="bg-[#dddfde] ">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4">
          {/* Coluna Esquerda: textos e card - Mobile segundo, Desktop primeiro */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 px-8 lg:px-0 items-center">
            {/* Texto e dados */}
            <div>
              <h2 className="font-bold text-3xl text-[#3e4a2b] mb-1 relative before:content-[''] before:block before:w-32 before:h-1.5 before:bg-[#3e4a2b] before:mb-3  before:absolute before:-top-5 before:left-0">Dra. Hyllua Husein</h2>
              <span className="text-[0.95rem] text-[#3e4a2b] font-semibold mb-10 block">CRBM 6817</span>
              <ul className="text-[#3e4a2b] text-[1.05rem] space-y-2 list-none pl-0 font-normal">
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Biomédica, com Especialização em Estética</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Há 18 anos atuando na estética • 180 alunos em turmas VIP presencial, +3000 pacientes atendidos</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Especializações internacionais em HOF:<br /> Formações realizadas na Suíça, Itália e Estados Unidos, com foco em anatomia aplicada, rejuvenescimento avançado e técnicas de<br /> refinamento estético</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Referência nacional em lábios e rinomodelação<br /> com a técnica LAPIDARE</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Mentora e criadora do método WONDERFULL<br /> FACE</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />CEO da Clínica Hyllua Husein e da marca nacional<br /> de dermocosméticos Hyllua Beauty</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora convidada no European Biomedical Research Institute of Salerno (EBRIS)</li>
                <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora chancelada pela Harvard Medical<br /> School</li>
              </ul>
            </div>
              
        {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-7">
  {/* Card fixo no lugar */}
  <div className="bg-[#3e4a2b] w-full relative">
    {(() => {
      const [open, setOpen] = useState(true);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#3e4a2b]"
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
            <div className=" overflow-hidden   flex items-center justify-center px-8 lg:px-0">
              <img
                src="/images/clinica/hyllua.webp"
                alt="Dra. Hyllua Husein"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4 py-30">
  {/* Coluna Esquerda: imagem - Mobile primeiro, Desktop primeiro */}
  <div className="flex justify-center items-start order-1 lg:order-1 px-8 lg:px-0">
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
      <h2 className="font-bold text-3xl text-[#3e4a2b] mb-1 relative before:content-[''] before:block before:w-32 before:h-1.5 before:bg-[#3e4a2b] before:mb-3  before:absolute before:-top-5 before:left-0">
        Dra. Luíza Souza
      </h2>
      <span className="text-[0.95rem] text-[#3e4a2b] font-semibold mb-10 block">
        CRBM 4597
      </span>
      <ul className="text-[#3e4a2b] text-[1.05rem] space-y-2 list-none pl-0 font-normal">
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Biomédica, com Especialização em Estética,<br /> atuando há mais de 8 anos na área
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Mais de 30 cursos na área de Harmonização Facial<br /> e Corporal
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
          Especialização internacional em Anatomia em<br /> Fresh Frozen Cadaver, pela EBRIS (European<br /> Biomedical Research Institute of Salerno) na Itália,<br /> chancelada pela Harvard Medical School
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Habilitada na Técnica LAPIDARE, de lábios e nariz, criada pela Dra. Hyllua Husein
        </li>
      </ul>
    </div>

    {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-7">
  {/* Card fixo no lugar */}
  <div className="bg-[#3e4a2b] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#3e4a2b]"
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

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4 ">
  {/* Coluna Esquerda: textos e card - Mobile segundo, Desktop primeiro */}
  <div className="flex flex-col gap-8 order-2 lg:order-1 px-8 lg:px-0 items-center">
    {/* Texto e dados */}
    <div>
      <h2 className="font-bold text-3xl text-[#3e4a2b] mb-1 relative before:content-[''] before:block before:w-32 before:h-1.5 before:bg-[#3e4a2b] before:mb-3  before:absolute before:-top-5 before:left-0">Dr. Felipe Vendramini</h2>
      <span className="text-[0.95rem] text-[#3e4a2b] font-semibold mb-10 block">CRO 22723</span>
      <ul className="text-[#3e4a2b] text-[1.05rem] space-y-2 list-none pl-0 font-normal">
        <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Cirurgião-Dentista, com mais de 10 anos de<br /> experiência</li>
        <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Formado pela Faculdade Meridional – IMED (2014)</li>
        <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Pós-graduado em Endodontia (CEOM – 2016), área<br /> da odontologia que trata os canais radiculares e<br /> evita perdas dentárias</li>
        <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Pós-graduado em Prótese Dentária (Odontocenter<br /> – 2022), responsável pela reabilitação com coroas,<br /> lentes de contato e próteses estéticas</li>
        <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Formações complementares em estética dental,<br /> com foco em devolver harmonia, função e<br /> naturalidade ao sorriso de forma personalizada</li>
        <li className="flex items-start gap-2"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Especialização internacional em Anatomia em<br /> Fresh Frozen Cadaver, pela EBRIS (European<br /> Biomedical Research Institute of Salerno) na Itália,<br /> chancelada pela Harvard Medical School</li>
      </ul>
    </div>
      
    {/* Card de procedimentos */}
    <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-7">
      {/* Card fixo no lugar */}
      <div className="bg-[#3e4a2b] w-full relative">
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <div>
              {/* Botão fixo */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#3e4a2b]"
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
                  <span>Lentes de Contato<br />Dental</span>
                  <span>Facetas</span>
                  <span>Coroas</span>
                  <span>Próteses</span>
                  <span>Endodontia</span>
                  <span>Clareamento<br />Dental</span>
                  <span>Restaurações<br />Estéticas</span>
                  <span>Harmonização<br />do Sorriso</span>
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
    <div className=" overflow-hidden   flex items-center justify-center px-8 lg:px-0">
      <img
        src="/images/clinica/felipe.webp"
        alt="Dr. Felipe Vendramini"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-4 py-30">
  {/* Coluna Esquerda: imagem - Mobile primeiro, Desktop primeiro */}
  <div className="flex justify-center items-start order-1 lg:order-1 px-8 lg:px-0">
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
      <h2 className="font-bold text-3xl text-[#3e4a2b] mb-1 relative before:content-[''] before:block before:w-32 before:h-1.5 before:bg-[#3e4a2b] before:mb-3  before:absolute before:-top-5 before:left-0">
        Dra. Danielle Marcon
      </h2>
      <span className="text-[0.95rem] text-[#3e4a2b] font-semibold mb-10 block">
        CRO 25514
      </span>
      <ul className="text-[#3e4a2b] text-[1.05rem] space-y-2 list-none pl-0 font-normal">
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Cirurgiã-dentista, atuando há mais de 8 anos na<br /> área
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Formação pela PUCRS com graduação saduíche<br /> na SAPIENZA UNIVERSITÀ DI ROMA, em Roma, na<br /> Itália
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
    <div className="flex flex-col items-start lg:w-[320px] w-[240px] relative lg:-right-7">
      {/* Card fixo no lugar */}
      <div className="bg-[#3e4a2b] w-full relative">
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <div>
              {/* Botão fixo */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex justify-between items-center px-4 py-2 border-b border-[#d2d2c7] text-white font-normal lg:text-[0.85rem] text-[0.75rem] uppercase bg-[#3e4a2b]"
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
                  <span>Implantes<br />Dentários</span>
                  <span>Próteses<br />Dentárias</span>
                  <span>Cirurgia Oral<br />Menor</span>
                  <span>Exodontias</span>
                  <span>Restaurações<br />Estéticas</span>
                  <span>Limpeza<br />Dental</span>
                  <span>Enxertos<br />Ósseos</span>
                  <span>Harmonização<br />do Sorriso</span>
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

    <section  className="w-full relative"
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
      <div className="  py-16 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

{/* Card 1 - Cuidado de Verdade */}
 <div className="flex items-center justify-center lg:min-h-[480px] px-16 lg:px-0">
              <div className=" border border-[#bfcfae] rounded-[2.8rem] lg:w-[300px] lg:h-[400px]  flex flex-col overflow-hidden shadow-sm" style={{ boxSizing: "border-box" }}>
                {/* Top Section */}
                <div className=" px-7 pt-8 pb-4 text-center rounded-t-[2.8rem] leading-none ">
                  <p className="text-[#a8b896] text-[1.5rem] font-normal  tracking-wide  titulo-scotch relative -left-8" style={{ letterSpacing: "0.02em" }}>
                    Tratamos
                  </p>
                  <p className="font-serif italic text-[#8b9b7a] text-[3rem] leading-none font-bold  titulo-scotch">
                    pessoas
                  </p>
                  <p className="text-[#a8b896] text-[1.5rem] font-normal tracking-wide  titulo-scotch relative -right-8" style={{ letterSpacing: "0.02em" }}>
                    não casos
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="bg-[#a8b896] flex-1 px-12  rounded-b-[2.8rem] rounded-tl-[2.8rem] flex items-center justify-center mb-4">
                  
                  <p className="text-white py-5 px-3 text-[1.4rem] text-center leading-6 font-normal">
                    Construímos relações<br />
                    baseadas em<br />
                    <span className="font-bold">confiança, pertencimento e<br />escuta ativa.</span>
                  </p>
                </div>
              </div>
            </div>
            

            {/* Card 2 - Cuidado de Verdade */}
           <div className="flex items-center justify-center lg:min-h-[480px] px-16 lg:px-0">
              <div className=" border border-[#bfcfae] rounded-[2.8rem] lg:w-[300px] lg:h-[400px] flex flex-col overflow-hidden shadow-sm" style={{ boxSizing: "border-box" }}>
                {/* Top Section */}
                <div className=" px-7 pt-8 pb-4 text-center rounded-t-[2.8rem] leading-none">
                  <p className="text-[#a8b896] text-[1.5rem] font-normal  tracking-wide titulo-scotch relative -left-8" style={{ letterSpacing: "0.02em" }}>
                    Cuidado de
                  </p>
                  <p className="font-serif italic text-[#8b9b7a] text-[3rem] leading-none font-bold titulo-scotch">
                    verdade
                  </p>
                  <p className="text-[#a8b896] text-[1.5rem] font-normal tracking-wide titulo-scotch relative -right-8" style={{ letterSpacing: "0.02em" }}>
                    é integrado
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="bg-[#a8b896] flex-1 px-12  rounded-b-[2.8rem] rounded-tl-[2.8rem] flex items-center justify-center mb-4">
                  <p className="text-white py-5 px-3 text-[1.4rem] text-center leading-6 font-normal ">
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
            <p className="font-semibold titulo-scotch  italic text-[#4a5442] lg:text-[2.6rem] text-[1.8rem] leading-none px-16 lg:px-0 lg:pr-26">
              e descubra uma nova
              
              forma de se cuidar
              
              por inteiro.
            </p>
          </div>
          <button className="rounded-lg bg-[#a8b896] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black border-b-4 border-black transition-colors hover:bg-[#96a684] lg:text-base text-nowrap">
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

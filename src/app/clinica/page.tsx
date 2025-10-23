

"use client";

import Image from "next/image";
import { useState } from "react";
import AccordionAside from "./Accordion";
import CasosClinicos from "./CasosClinicos";
import "./casos.css";


export default function ClinicaPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const procedimentos = [
    {
      titulo: "PROCEDIMENTOS FACIAIS",
     conteudo: [
  "- Bioestimulador de Colágeno Radiesse",
  "- Protocoll Controll",
  "- Bioestimulador de Colágeno Sculptra",
  "- Lavieen",
  "- Botox",
  "- Lavieen + PDRN",
  "- Injetáveis: Mandíbula, Malár, Olheiras, Mento, Bigode Chinês, Preenchimento Labial, Rinomodelação",
  "- Microagulhamento",
  "- Protocoll",
  "- Visalift",
  " Técnicas Exclusivas Dra. Hyllua Husein",
  "- Técnica LAPIDARE",
  "- Método WONDERFULL FACE"
],

    },
    {
      
      titulo: "PROCEDIMENTOS CORPORAIS",
       conteudo: [
    "- PEIM - Secagem de Micro Vasos",
    "- Subcisão de Celulites",
    "- Visalift (Ultrassom Micro e Macrofocado) facial e corporal",
    "- Bioestimuladores corporais",
    "- Preenchimentos com Ácido Hialurônico",
    "- Lipo enzimática",
    "- Brazilian Bumbum Up: associação de tratamentos com bioestimuladores + ácido hialurônico"
  ],
    },
    {
      titulo: "PROCEDIMENTOS ODONTOLÓGICOS",
       conteudo: [
    "- Profilaxia (limpeza)",
    "- Próteses dentárias",
    "- Implantes",
    "- Cirurgia oral menor (siso, extrações em geral, bichectomia)",
    "- Cirurgia periodontal",
    "- Facetas e lentes de contato em cerâmica e resina",
    "- Clareamento dental (caseiro e de consultório)",
    "- Restaurações (cáries, retrações gengivais, fraturas)",
    "- Restaurações estéticas",
    "- Tratamento de canal",
    "- Placa de bruxismo"
  ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>

      <main>



        {/* Hero Section Clínica */}
        <section className="relative w-full flex items-center  lg:pt-46 pt-32  z-20 ">
          <div className="">
          {/* Background image */}
          <div className=" inset-0 w-full h-full">
            <Image
              src="/images/clinica/background-hero-clinica.webp"
              alt="Fundo decorativo clínica"
              fill
              className="object-cover "
              priority
            />
          </div>
          <div className="  relative z-10 flex flex-col lg:flex-row items-end justify-between mx-auto pt-0 lg:pt-0">
            {/* Texto */}
            <div className=" lg:ml-8 text-center lg:text-left flex-1 pb-12 relative lg:-top-10 lg:left-44 text-hero mx-auto">
              <h1 className="text-[20px] titulo-scotch lg:text-[1.8rem] font-normal text-[#798062] mb-3 leading-none relative -left-0 lg:left-4 ">
                Você não é <br /> feita em partes<br />
                <span className="text-[#798062] font-bold text-[38px] lg:text-[4rem] titulo-scotch italic relative lg:-top-1.5 ">e o seu <br /> cuidado</span><br />
                <span className="text-[#798062] lg:text-[2rem] text-[19.5px] font-normal titulo-scotch block mt-3 lg:inline lg:mt-0 relative mx-auto lg:-top-1 -top-2 -left-0 lg:left-1">também não <br /> deveria ser.</span>
              </h1>
              <p className="lg:mt-4 my-6 text-[#798062] text-[17px] lg:text-[1.1rem]  font-light px-25 lg:px-0 lg:w-[13rem]  leading-none lg:leading-6 relative -top-3 lg:-top-0 -left-0 lg:left-4 tracking-[0.01em]">
                Por isso integramos<br className="block lg:hidden"/> <span className="font-semibold">saúde e estética</span> para<br className="block lg:hidden"/> cuidar de você por inteiro.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end  lg:mt-0 relative lg:-right-6  lg:top-4 -right-9 -top-6 z-99">
              <Image
                src="/images/clinica/equipe-hero-clinica1.webp"
                alt="Equipe Clínica Hyllua"
                width={900}
                height={780}
                className="object-contain drop-shadow-xl lg:scale-118 scale-115"
                priority
              />
            </div>
          </div>
          </div>
        </section>

      {/* Section Procedimentos */}
<section
  className="relative bg-[url('/images/clinica/clinica-background-.webp')] lg:bg-[url('/images/clinica/background-2-clinica.webp')] bg-cover bg-center bg-no-repeat lg:-mt-18 -mt-13 z-50 flex items-center  "
>
  <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 py-[15rem] items-center max-w-4xl">
    {/* Lado Direito - Mobile primeiro */}
    <div className="text-center lg:text-right order-1 lg:order-2 relative -top-38 lg:-top-3">
      <p className="uppercase tracking-wide lg:text-[1.35rem] text-[16px] text-[#e5e6e1] font-normal relative lg:-right-2 lg:top-1 lg:mb-1">
        Na Clínica Hyllua Husein
      </p>
      <h2 className="lg:text-[52px] text-[29px] lg:-right-2 font-bold leading-none  text-[#353a2c] titulo-scotch relative">
        rosto, sorriso <br /> e corpo
      </h2>
      <p className="mt-2 uppercase tracking-wider lg:text-[1.60rem] text-[16px] text-[#e5e6e1] font-regular relative lg:-right-2 ">Andam em harmonia</p>
      <button className="lg:mt-17 mt-7 lg:text-[1.25rem] text-[14px] font-semibold border-t-2 border-[#e5e6e1] relative lg:-right-2 text-[#353a2c]">
        Conheça nossos procedimentos
      </button>
    </div>

    {/* Lado Esquerdo - Mobile por último */}
    <div className="bg-[#353a2c] text-white rounded-lg overflow-hidden items-center flex flex-col order-2 lg:order-1 ">
      {/* Accordion Aside */}
      
    </div>
  </div>
</section>

<section className="relative  flex items-center lg:pb-10  lg:-mt-56 -mt-48 lg:-top-99 z-99  ">
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10  items-center max-w-4xl -mt-55 lg:-mt-154">
    {/* Lado Direito - Mobile primeiro */}
    <div className="text-center lg:text-right order-1 lg:order-2 ">
   
    </div>

    {/* Lado Esquerdo - Mobile por último */}
    <div className=" text-white rounded-lg overflow-hidden items-center flex flex-col order-2 lg:order-1">
      {/* Accordion Aside */}


      <AccordionAside  procedimentos={procedimentos} />
    </div>
     </div>
</section>


      {/* Section Equipe Multidisciplinar */}
      <section className="bg-[#dddfde] lg:pt-100 pt-72 pb-24 lg:pb-12 lg:-mt-20 -mt-0 relative z-10 ">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left " >
          <div className="text-[#353a2c] lg:text-[1.75rem] text-[18px] font-normal flex items-center justify-center lg:justify-start h-full leading-none lg:-left-6 relative titulo-scotch">
            <span className="block lg:text-left">Nossa equipe<br />se alinha para</span>
          </div>
          <div className="text-[#353a2c] titulo-scotch text-[2rem] lg:text-[58px] font-bold italic leading-none text-center flex flex-col items-center justify-center">
            <span>cuidar <br />
            de você <br />
           como um <br />todo.</span>
          </div>
          <div className="text-[#353a2c] lg:text-[17px] text-[1.15rem]  font-normal flex items-center justify-center lg:justify-end h-full  relative lg:-right-6">
            <span className="block lg:text-right leading-[21px] lg:leading-[21px] tracking-[0.08em] px-14 lg:px-0 lg:pl-24">
              Aqui, você é<br className="hidden lg:block" />  acolhido por uma <span className="font-bold">equipe qualificada</span> que compartilha a mesma <span className="font-bold">visão de cuidado</span> e atua de forma integrada<br className="hidden lg:block" />  entre<br className="hidden lg:block" />  especialidades.
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 lg:mt-26 mt-10  text-center">
          <span className="tracking-wide text-[#353a2c] lg:text-[1.20rem]  ">
            CONHEÇA NOSSA<br className="block lg:hidden" /> <span className="font-semibold">EQUIPE MULTIDISCIPLINAR</span>
          </span>
        </div>
      </section>


      {/* Section Dra. Hyllua */}
      <section className=" bg-[#dddfde] relative  pb-10 lg:pt-16 lg:pb-12 -mt-12 lg:-mt-0 z-99">


        <div className="max-w-[61rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-6 lg:px-4">
          {/* Coluna Esquerda: textos e card - Mobile segundo, Desktop primeiro */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 px-4 lg:px-0 items-center  ">
            {/* Texto e dados */}
            <div className="relative lg:-left-4 -left-0 -top-0 lg:-top-0">
              <h2 className="font-bold lg:text-[1.75rem] text-[20px] text-[#353a2c] mb-0 relative before:content-[''] before:block before:lg:w-40 before:w-20 before:lg:h-1.5 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:lg:-top-5 before:-top-2 before:left-0 titulo-scotch">Dra. Hyllua Husein</h2>
              <span className="lg:text-[17px] text-[14px] text-[#353a2c] font-medium lg:mb-12 mb-3 block">CRBM 6187</span>
              <ul className="text-[#353a2c]  lg:space-y-4 space-y-3 list-none pl-0 font-normal lg:leading-[1.4rem] leading-[1rem]">
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.83rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Biomédica, com Especialização em Estética</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Há 9 anos atuando na estética: +250 alunos em<br className="hidden lg:block" /> turmas VIP presencial, +5000 pacientes atendidos</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Especializações internacionais em HOF:<br className="hidden lg:block" /> Formações realizadas na Suíça, Itália e Estados<br className="hidden lg:block" /> Unidos, com foco em anatomia aplicada,<br className="hidden lg:block" /> rejuvenescimento avançado e técnicas de<br className="hidden lg:block" /> refinamento estético</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Referência nacional em lábios e rinomodelação <br className="hidden lg:block" />com a técnica LAPIDARE</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Mentora e criadora do método WONDERFULL<br className="hidden lg:block" /> FACE</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />CEO da Clínica Hyllua Husein e da marca nacional<br className="hidden lg:block" />de dermocosméticos Hyllua Beauty</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora convidada no European Biomedical<br className="hidden lg:block" /> Research Institute of Salerno (EBRIS)</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora convidada no American Anatomy Institute</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Professora chancelada pela Harvard Medical<br className="hidden lg:block" />School</li>
              </ul>
            </div>
              
        {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[440px] w-[270px] relative -mt-4 lg:-mt-0 lg:-right-8 lg:top-6 mb-4 lg:mb-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer w-full flex justify-between items-center px-4 py-2 lg:py-2 border-b border-[#d2d2c7] text-[#e5e6e1] font-normal lg:text-[0.85rem] text-[12px] uppercase bg-[#353a2c] tracking-[1px]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out text-[14px] lg:text-[21px] font-black ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#898c85] overflow-hidden  ${open ? " max-h-[100%] opacity-100" : "max-h-0 opacity-100"}`}
          >
            <div className="px-6 py-4 grid lg:grid-cols-2 gap-x-6 lg:gap-y-4 gap-y-4 text-[#e5e6e1] lg:text-[13px] text-[12px]">
              <span>- Injetáveis:  Mandíbula, Malar, Olheiras, Mento, Bigode Chinês, Preenchimento Labial, Rinomodelação</span>
              <span>- Bioestimulador de Colágeno Radiesse</span>
              <span>- Protocoll Controll</span>
              <span>- Bioestimulador de Colágeno Sculptra</span>
              <span>- Preenchimento Labial</span>
              <span>- Botox</span>
              <span>- Rinomodelação</span>
              
              <span>- Técnica LAPIDARE</span>
              <span>- Protocoll</span>
              <span>- Método WONDERFULL FACE</span>
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
                className="object-cover lg:w-full h-full relative lg:scale-90 lg:-right-3 lg:top-4"
              />
            </div>
          </div>
          
        </div>

        <div className="max-w-[61rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-6 lg:px-4 lg:py-24 py-4">
  {/* Coluna Esquerda: imagem - Mobile primeiro, Desktop primeiro */}
  <div className="flex justify-center items-start order-1 lg:order-1 px-16 lg:px-0">
    <div className="overflow-hidden flex items-center justify-center">
      <img
        src="/images/clinica/luiza.webp"
        alt="Dra. Luíza Souza"
        className="object-cover w-full h-full  relative lg:scale-90 lg:-right-0 lg:-left-4 lg:-top-10"
      />
    </div>
  </div>

  {/* Coluna Direita: textos e card - Mobile segundo, Desktop segundo */}
  <div className="flex flex-col gap-8 relative lg:-bottom-8 lg:-right-8 order-2 lg:order-2 px-6 lg:px-0 items-center">
    {/* Texto e dados */}
    <div className="relative lg:left-3 -left-0 -top-0 lg:-top-0">
      <h2 className="font-bold lg:text-[1.75rem] text-[20px] text-[#353a2c] mb-0 relative before:content-[''] before:block before:lg:w-40 before:w-20 before:lg:h-1.5 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:lg:-top-5 before:-top-2 before:left-0 titulo-scotch">
        Dra. Luíza Souza
      </h2>
      <span className="lg:text-[17px] text-[14px] text-[#353a2c] font-medium lg:mb-12 mb-3 block">
        CRBM 4597
      </span>
      <ul className="text-[#353a2c]  lg:space-y-4 space-y-3 list-none pl-0 font-normal lg:leading-[1.4rem] leading-[1rem] lg:text-[1.07rem] text-[0.85rem]">
        <li className="flex items-start gap-2 ">
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

          <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Habilitada no método WONDERFULL FACE, criado pela Dra. Hyllua Husein
        </li>
      </ul>
    </div>

            {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[440px] w-[270px] relative -mt-4 lg:-mt-0 lg:-right-7 lg:top-6 mb-4 lg:mb-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className=" cursor-pointer w-full flex justify-between items-center px-4 py-2 lg:py-2 border-b border-[#d2d2c7] text-[#e5e6e1] font-normal lg:text-[0.85rem] text-[12px] uppercase bg-[#353a2c] tracking-[1px]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out lg:text-xl font-black text-[14px] ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#898c85] overflow-hidden  ${open ? " max-h-[100%] opacity-100" : "max-h-0 opacity-100"}`}
          >
            <div className="px-6 py-4 grid lg:grid-cols-2 gap-x-6 lg:gap-y-4 gap-y-4 text-[#e5e6e1] lg:text-[13px] text-[12px]">
                    <span>- Bioestimulador de Colágeno Radiesse (facial e corporal)</span>
                    <span>- Bioestimulador de Colágeno Sculptra (facial e corporal)</span>
                    <span>- Método Brazilian Bumbum Up: associação de tratamentos com bioestimuladores + ácido hialurônico</span>
                    
                    <span>- Injetáveis:  Mandíbula, Malar, Olheiras, Mento, Bigode Chinês, Preenchimento Labial e Rinomodelação</span>
                    <span>- PEIM (Secagem de Micro Vasos)</span>
                    <span>- Visalift (Ultrassom Micro e Macrofocado) facial e corporal</span>
                    <span>- Laser Lavieen </span>
                    <span>- Lipo enzimática</span>
                    <span>- Botox</span>
                    <span>- Subsição de Celulites</span>
                    <span>- Microagulhamento</span>
            </div>
          </div>
        </div>
      );
    })()}
  </div>
</div>
  </div>
        </div>


      <div className="max-w-[61rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-6 lg:px-4">
          {/* Coluna Esquerda: textos e card - Mobile segundo, Desktop primeiro */}
          <div className="flex flex-col gap-8 order-2 lg:order-1 px-4 lg:px-0 items-center  ">
            {/* Texto e dados */}
            <div className="relative lg:-left-4 -left-0 -top-0 lg:top-4">
              <h2 className="font-bold lg:text-[1.75rem] text-[20px] text-[#353a2c] mb-0 relative before:content-[''] before:block before:lg:w-40 before:w-20 before:lg:h-1.5 before:h-1 before:bg-[#353a2c] before:mb-3  before:absolute before:lg:-top-5 before:-top-2 before:left-0 titulo-scotch">Dr. Felipe Vendramini</h2>
              <span className="lg:text-[17px] text-[14px] text-[#353a2c] font-medium lg:mb-12 mb-3 block">CRO 22723</span>
              <ul className="text-[#353a2c]  lg:space-y-4 space-y-3 list-none pl-0 font-normal lg:leading-[1.4rem] leading-[1rem]">
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.83rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Cirurgião-Dentista, com mais de 10 anos de experiência</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Formado pela Faculdade Meridional - IMED (2014)</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Pós-graduado em Endodontia (CEOM - 2016), área<br className="hidden lg:block" /> da odontologia que trata os canais radiculares e<br className="hidden lg:block" /> evita perdas dentárias</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Pós-graduado em Prótese Dentária (Odontocenter<br className="hidden lg:block" /> - 2022), responsável pela reabilitação com coroas, lentes de contato e próteses estéticas</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Formações complementares em estética dental,<br className="hidden lg:block" /> com foco em devolver harmonia, função e naturalidade ao sorriso de forma personalizada</li>
                <li className="flex items-start gap-2 lg:text-[1.07rem] text-[0.85rem]"><img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />Especialização internacional em Anatomia em Fresh Frozen Cadaver, pela EBRIS (European Biomedical Research Institute of Salerno) na Itália, chancelada pela Harvard Medical School</li>
             
              </ul>
            </div>
              
         {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[440px] w-[280px] relative -mt-4 lg:-mt-0 lg:-right-0 lg:top-6 mb-4 lg:mb-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className=" cursor-pointer w-full flex justify-between items-center px-4 py-2 lg:py-2 border-b border-[#d2d2c7] text-[#e5e6e1] font-normal lg:text-[0.85rem] text-[12px] uppercase bg-[#353a2c] tracking-[1px]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out lg:text-xl text-[14px] font-black ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#898c85] overflow-hidden  ${open ? "max-h-[100%] opacity-100" : "max-h-0 opacity-100"}`}
          >
            <div className="px-6 py-4 grid lg:grid-cols-2 gap-x-6 lg:gap-y-4 gap-y-4 text-text-[#e5e6e1] lg:text-[13px] text-[12px] text-[#e5e6e1]">
              <span>- Avaliações e planejamentos</span>
<span>- Profilaxia (limpeza)</span>
<span>- Clareamento dental (caseiro e de consultório)</span>
<span>- Restaurações (cáries, retrações gengivais, fraturas)</span>
<span>- Restaurações estéticas</span>
<span>- Facetas e lentes de contato em cerâmica/resina</span>
<span>- Tratamento de canal</span>
<span>- Placa de bruxismo</span>
<span>- Próteses dentárias</span>
<span>- Reabilitações estéticas e funcionais</span>

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
                className="object-cover lg:w-full h-full relative lg:scale-90 lg:-right-3 lg:top-4"
              />
            </div>
          </div>
          
        </div>


        <div className="max-w-[61rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start px-6 lg:px-4 lg:pt-30 py-4">
  {/* Coluna Esquerda: imagem - Mobile primeiro, Desktop primeiro */}
  <div className="flex justify-center items-start order-1 lg:order-1 px-16 lg:px-0">
    <div className="overflow-hidden flex items-center justify-center">
      <img
        src="/images/clinica/danielle.webp"
        alt="Dra. Danielle Souza"
        className="object-cover w-full h-full  relative lg:scale-87 lg:-right-0 lg:-left-4 lg:-top-10"
      />
    </div>
  </div>

  {/* Coluna Direita: textos e card - Mobile segundo, Desktop segundo */}
  <div className="flex flex-col gap-8 relative lg:-bottom-8 lg:-right-8 order-2 lg:order-2 px-6 lg:px-0 items-center">
    {/* Texto e dados */}
    <div className="relative lg:left-3 -left-0 -top-0 lg:-top-0">
      <h2 className="font-bold lg:text-[1.75rem] text-[20px] text-[#353a2c] mb-0 relative before:content-[''] before:block before:lg:w-40 before:w-20 before:h-1 before:lg:h-1.5 before:bg-[#353a2c] before:mb-3  before:absolute before:lg:-top-5 before:-top-2 before:left-0 titulo-scotch">
        Dra. Danielle Marcon
      </h2>
      <span className="lg:text-[17px] text-[14px] text-[#353a2c] font-medium lg:mb-12 mb-3 block">
        CRO 25514
      </span>
      <ul className="text-[#353a2c]  lg:space-y-4 space-y-3 list-none pl-0 font-normal lg:leading-[1.4rem] leading-[1rem] lg:text-[1.07rem] text-[0.85rem]">
        <li className="flex items-start gap-2 ">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
          Cirurgiã-dentista, atuando há mais de 8 anos na área
        </li>
        <li className="flex items-start gap-2">
          <img src="/images/clinica/icon-topicos.webp" alt="" className="w-4 h-2 mt-2" />
         Formação pela PUCRS com graduação sanduíche<br className="hidden lg:block" /> na SAPIENZA UNIVERSITÀ DI ROMA, em Roma, na<br className="hidden lg:block" /> Itália
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
          Especialização internacional em Anatomia em<br className="hidden lg:block" />
Fresh Frozen Cadaver, pela EBRIS (European<br className="hidden lg:block" />
Biomedical Research Institute of Salerno) na Itália,<br className="hidden lg:block" />
chancelada pela Harvard Medical School
        </li>
       
      </ul>
    </div>

          {/* Card de procedimentos */}
              <div className="flex flex-col items-start lg:w-[440px] w-[270px] relative -mt-4 lg:-mt-0 lg:-right-13 lg:top-6 mb-4 lg:mb-0">
  {/* Card fixo no lugar */}
  <div className="bg-[#353a2c] w-full relative">
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          {/* Botão fixo */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer w-full flex justify-between items-center px-4 py-2 lg:py-2 border-b border-[#d2d2c7] text-[#e5e6e1] font-normal lg:text-[0.85rem] text-[12px] uppercase bg-[#353a2c] tracking-[1px]"
            type="button"
          >
            PROCEDIMENTOS QUE REALIZA
            <span
              className={`transition-transform duration-500 ease-in-out lg:text-xl text-[12px] font-black ${open ? "rotate-180" : "rotate-0"}`}
            >
              {open ? "−" : "+"}
            </span>
          </button>

          {/* Conteúdo absoluto que abre e fecha */}
          <div
            className={`transition-[max-height,opacity] duration-700 ease-in-out bg-[#898c85] overflow-hidden  ${open ? " max-h-[100%] opacity-100" : "max-h-0 opacity-100"}`}
          >
            <div className="px-6 py-4 grid lg:grid-cols-2 gap-x-6 lg:gap-y-4 gap-y-4 text-[#e5e6e1] lg:text-[13px] text-[12px]">
            <span>- Avaliações e planejamentos</span>
            <span>- Profilaxia (limpeza)</span>
            <span>- Próteses dentárias</span>
            <span>- Implantes</span>
            <span>- Cirurgia oral menor (siso, extrações em geral, bichectomia)</span>
            <span>- Cirurgia periodontal</span>
            <span>- Facetas e lentes de contato em cerâmica</span>

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
      <div className="  pt-20 pb-16 lg:pt-25 lg:pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 ">

{/* Card 1 - Cuidado de Verdade */}
 <div className="flex items-center justify-center lg:min-h-[480px] px-16 lg:px-0">
              <div className=" border border-[#abb48d] lg:rounded-[2.8rem]  rounded-[1.25rem] lg:w-[300px] lg:h-[400px] w-[220px] flex flex-col overflow-hidden " style={{ boxSizing: "border-box" }}>
                {/* Top Section */}
                <div className=" lg:px-7 lg:pt-8 pt-4 lg:pb-1 pb-4 text-center lg:rounded-t-[2.8rem]  leading-none ">
                  <p className="text-[#abb48d] lg:text-[22px] text-[18px] font-normal  tracking-[1.5px] titulo-scotch relative lg:-left-8 -left-3" >
                    Tratamos
                  </p> 
                  <p className="font-serif italic text-[#abb48d] lg:text-[3rem] text-[32px] leading-none font-bold  titulo-scotch relative lg:-top-2">
                    pessoas
                  </p>
                  <p className="text-[#abb48d] lg:text-[22px] text-[18px] font-normal tracking-[1.5px] titulo-scotch relative lg:-right-9 lg:-top-3 -right-3" >
                    não casos
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="relative bg-[#abb48d] flex-1 lg:px-12 px-6 lg:rounded-b-[2.8rem] rounded-b-[1.25rem] lg:rounded-tl-[2.8rem]  rounded-tl-[1.25rem] flex items-center justify-center mb-4">
                   <div className="absolute -top-7 -right-0.5 lg:right-0 w-[30px] h-[30px]  ">
    <img src="/images/clinica/CANTO-VETOR.webp" alt="teste" className="w-full h-full object-contain" />
  </div>
                  <p className="text-white py-5 lg:px-3 lg:text-[20px] text-center lg:leading-6 leading-4 font-light tracking-[1.5px]">
                    Construímos relações<br className="block lg:hidden"/><br className="hidden lg:block" /> baseadas em <br className="hidden lg:block"/>
                    
                    <span className="font-semibold">confiança, pertencimento<br className="block lg:hidden"/> e<br className="hidden lg:block"/> escuta ativa.</span>
                  </p>
                </div>
              </div>
            </div>
            

            {/* Card 2 - Cuidado de Verdade */}
           <div className="flex items-center justify-center lg:min-h-[480px] px-16 lg:px-0">
              <div className=" border border-[#abb48d] lg:rounded-[2.8rem] rounded-[1.25rem] lg:w-[300px] lg:h-[400px] w-[220px] flex flex-col overflow-hidden " style={{ boxSizing: "border-box" }}>
                 
                {/* Top Section */}
                <div className=" lg:px-7 lg:pt-8 pt-4 lg:pb-1 pb-4 text-center lg:rounded-t-[2.8rem] rounded-t -[1.25rem] *:leading-none">
                  <p className="text-[#abb48d] lg:text-[22px] text-[18px] font-normal  tracking-[1.5px] titulo-scotch relative lg:-left-7 -left-1.5" >
                    Cuidado de
                  </p>
                  <p className="font-serif italic text-[#abb48d] lg:text-[3rem] text-[32px] leading-none font-bold titulo-scotch relative lg:-top-2 lg:-left-0">
                    verdade
                  </p>
                  <p className="text-[#abb48d] lg:text-[22px] text-[18px] font-normal tracking-[1.5px] titulo-scotch relative lg:-right-9 lg:-top-3 -right-3" >
                    é integrado
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="relative bg-[#abb48d] flex-1 px-12  lg:rounded-b-[2.8rem] lg:rounded-tl-[2.8rem]  rounded-tl-[1.25rem]  rounded-b-[1.25rem]  flex items-center justify-center mb-4">
 <div className="absolute -top-7 -right-0.5 lg:right-0 w-[30px] h-[30px]  ">
    <img src="/images/clinica/CANTO-VETOR.webp" alt="teste" className="w-full h-full object-contain" />
  </div>
                  <p className="text-white py-5 px-3 lg:text-[20px] text-center lg:leading-6 leading-4 font-light tracking-[1.5px]">
                    Nosso modelo é baseado em <span className="font-semibold">diálogo</span> entre especialidades,<br />
                    <span className="font-semibold">visão ampla</span> e <span className="font-semibold">construção conjunta</span> de cada plano de cuidado.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* Full Width Banner */}
      <div className="bg-[#abb48d]  py-8 lg:py-22">
        <p className="text-center text-lg text-white lg:text-[2.2rem] titulo-scotch ">
          O cuidado que te reconhece <span className=" italic titulo-scotch font-semibold">por completo.</span>
        </p>
      </div>

      {/* CTA Section */}
      <div className=" px-6 pt-12 pb-12 lg:py-40">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 lg:flex-row lg:items-center">
          <div className="text-center lg:text-left">
            <p className="lg:mb-4 mb-12 lg:text-[2rem]  text-[1.4rem] text-[#353a2c] titulo-scotch leading-none px-16 lg:px-0">Agende seu procedimento</p>
            <p className="font-semibold titulo-scotch  italic text-[#353a2c] lg:text-[2.6rem] text-[1.8rem] leading-none px-16 lg:px-0 lg:pr-18">
              e descubra uma nova
              
              forma de se cuidar
              
              por inteiro.
            </p>
          </div> 
          <button className="cursor-pointer rounded-lg bg-[#abb48d] px-8 relative lg:-right-4 lg:py-3.5 py-2.5 text-sm font-medium uppercase tracking-wide text-[#353a2c] border-b-4 border-[#353a2c] transition-colors hover:bg-[#96a684] lg:text-[1.15rem] text-nowrap">
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

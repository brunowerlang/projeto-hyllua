import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function EnsinoSections() {
  return (
    <>

    
        
        
      <section className="bg-[url('/images/ensino/background-hero-ensino.webp')] bg-cover bg-[position:80%_20%] lg:bg-center relative overflow-hidden ">
        <div className="max-w-4xl mx-auto w-full flex flex-col lg:flex-row pt-27 lg:pt-46">
          
          {/* Conteúdo do texto - em cima no mobile, à esquerda no desktop */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-0">
            <div className="max-w-md">
              <div className="flex items-start gap-2 justify-center lg:justify-start relative lg:-left-3 ">
                <div className="titulo-scotch font-light text-white text-right leading-none text-[22px] lg:text-[32px] relative lg:top-2 -bottom-12 -left-2 lg:-left-0">
                  Estética<br /> <span className="font-light">exige</span>
                </div>
                <div className="titulo-scotch font-bold italic text-white text-[70px] lg:text-[120px] leading-none relative -bottom-7 lg:-top-8.5  lg:ml-1">ética</div>
              </div>
              <p className="lg:text-[1rem] text-[1.15rem]  top-9  tracking-wide text-white mb-8 lg:mb-8 font-light lg:leading-none leading-[1.2]  text-right relative  lg:-right-37 lg:-top-7   lg:w-[16rem]">
                E não existe cuidado<br className="block lg:hidden" /> ético e seguro
                sem<br className="block lg:hidden" /> <span className="font-semibold ">atualização<br className="block lg:hidden" /> profissional.</span>
              </p>
            </div>
          </div>

          {/* Imagem - embaixo no mobile, à direita no desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative -right-8 lg:-right-16 mt-6 lg:mt-0">
            <Image
              src="/images/ensino/hyllua-hero.webp"
              alt="Dra. Hyllua Husein"
              width={250}
              height={300}
              className="max-w-full max-h-full object-contain lg:w-[300px]  scale-105  top-0 -right-4 relative lg:-top-2"
              priority
            />
          </div>

        </div>
      </section>

      

     <section className=" bg-[#eaeaea] lg:py-25 py-8 px-4 flex flex-col items-center justify-center relative ">


  <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 text-center lg:text-left mb-5">
    {/* Texto principal */}
    <div className="flex flex-1 flex-col items-center lg:items-start titulo-scotch">
      <p className="text-[#3957a6] font-normal text-[16px] lg:text-[1.4rem] self-start leading-none -right-0 top-1 relative lg:-right-2.5 lg:top-2">A prática precisa</p>
      <h2 className="font-bold italic text-[#3957a6] text-[35px] lg:text-[66px] leading-none">acompanhar</h2>
      <span className="text-[#3957a6] font-normal text-[16px] lg:text-[1.4rem] mb-4 self-end lg:-left-31 lg:-top-1 relative">o conhecimento</span>
    </div>
    {/* Balão azul */}
    <div className="bg-[#3957a6]  lg:w-full text-white rounded-[0.8rem] lg:px-10 px-4 py-4 lg:py-4 text-[15px] lg:text-[1.3rem] font-light leading-4 lg:leading-[1.5]  mb-4 lg:mb-0 max-w-[20rem] mx-auto lg:mx-0 text-center lg:-left-12 relative z-3 -top-4" >
      Investir em formação<br className="block lg:hidden" /> constante é o mínimo que um<br className="block lg:hidden" /> profissional deve fazer para<br className="block lg:hidden" /> <span className="font-medium italic">oferecer segurança e<br className="block lg:hidden" /> excelência.</span>
    </div>
  </div>

  {/* Chamada para ação */}
  <div className="text-center lg:mt-10 texto-montreal lg:self-center relative -left-18 lg:-left-58 lg:-top-10 -top-2">
    <span className="text-[#3957a6] font-normal uppercase lg:text-[1.4rem] text-[0.85rem] block">CONHEÇA NOSSAS</span>
    <span className="text-[#3957a6] italic font-semibold block lg:text-[1.4rem] text-[0.85rem]">FORMAÇÕES EXCLUSIVAS</span>
    <div className="flex justify-center mt-2 z-1">
      <Image
        src="/images/ensino/icon-01.webp"
        alt="Ícone de seta para baixo"
        width={20}
        height={20}
        className="object-contain w-4 h-4
         lg:w-8 lg:h-8 "
        priority
      />
    </div>
  </div>

{/* Estrela na parte de baixo da primeira section */}
<div className="absolute  right-[-280px] bottom-[-220px] lg:right-[-190px] lg:bottom-[-400px] z-2">
  <Image
    src="/images/ensino/camada-secao-2.webp"
    alt="Estrela decorativa"
    width={800}
    height={800}
    className="object-contain w-[440px] h-[440px] sm:w-[400px] sm:h-[400px] lg:w-[825px] lg:h-[825px]"
  />
</div>


</section>






  <section className="w-full bg-[url('/images/ensino/background-textura-wonderfull-face.webp')] bg-contain bg-repeat pt-10 pb-4 px-0 flex flex-col items-center justify-center relative ">
    <div className="w-full flex justify-center items-end relative z-3 -top-42 lg:-top-58 -right-10 lg:-right-9">
      <Image
        src="/images/ensino/hyllua-secao-2-ensino.webp"
        alt="Hyllua deitada"
        width={650}
        height={450}
        className="object-contain max-w-full h-auto lg:scale-130 scale-105"
        priority
      />
    </div>


     <div className="absolute inset-y-15 lg:inset-y-26 right-0 w-1/2 z-4 lg:mt-66 mt-240">
    <Image
      src="/images/ensino/foto-fundo-hyllua-palco.webp"
      alt="Fundo Wonderfull"
      fill
      className="lg:object-contain object-right "
    />
  </div>

     {/* Wonderfull Face - Textos e Imagens */}
    <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row lg:gap-10 gap-6 px-4 lg:px-2 py-16 lg:pt-40 lg:pb-30 relative -mt-55">
      {/* Textos à esquerda */}
      <div className="flex-1 flex flex-col justify-start items-center text-white  rounded-2xl lg:p-8 p-4 relative lg:-left-12 lg:mt-8">
        <h2 className="font-scotch text-3xl lg:text-4xl font-bold lg:mb-20 mb-12 tracking-wide px-0 lg:px-0"><img src="/images/ensino/logo-wonderfull-face.webp" alt="Wonderfull Face" className="w-54 lg:w-full" /></h2>
        <div className="flex  flex-row gap-8 lg:gap-4 mb-8 w-full justify-center px-6 lg:px-0 ">
            {/* Bloco 1 */}
            <div className="relative flex flex-col items-center border border-[#c6ad7b] lg:rounded-2xl rounded-[0.5rem] px-1 py-2 lg:px-4 lg:py-6 w-full text-center ">
             <div className="absolute -top-3 lg:-top-5.5 left-6">
     <Image
  src="/images/ensino/icon-02.webp"
  alt="Ícone estrela"
  width={40}
  height={40}
  className="w-5 h-5 md:w-10 md:h-10" 
/>
    </div>
              <span className="font-light text-[13px] lg:text-[15px] lg:leading-normal leading-[1.2] relative top-1 lg:top-0">
                Curso presencial<br />realizado apenas<br /><span className="font-medium ">2 vezes ao ano</span>
              </span>
            </div>

            {/* Bloco 2 */}
            <div className="relative flex flex-col items-center border border-[#c6ad7b] lg:rounded-2xl rounded-[0.5rem] px-1 py-3 lg:px-4 lg:py-6  w-full text-center">
             <div className="absolute -top-3 lg:-top-6  left-6">
   <Image
  src="/images/ensino/icon-02.webp"
  alt="Ícone estrela"
  width={40}
  height={40}
  className="w-5 h-5 md:w-10 md:h-10" 
/>
    </div>
             
          
              <span className="font-light text-[13px] lg:text-[15px] lg:leading-normal leading-[1.2]">
                2 dias.<br /><span className="font-medium ">1 dia de teoria +<br />1 dia de prática</span>
              </span>
            </div>
          </div>
<div className="items-start">
        <p className="mb-5 lg:mt-5 lg:text-[1.05rem] font-light text-[14px] lg:leading-snug leading-[1.1] lg:text-justify lg:mb-5.5 ">
          O WonderFull Face é uma imersão completa e transformadora em harmonização facial avançada, idealizada e conduzida pela Dra. Hyllua Husein. Mais do que um curso, é uma experiência de alto nível voltada a profissionais da saúde que desejam dominar técnicas modernas, seguras e altamente eficazes.
        </p>
        <p className="mb-5 lg:text-[1.066rem] text-[14px] lg:leading-snug leading-[1.1] lg:text-justify font-light">
          O objetivo do WonderFull Face é capacitar profissionais para atuarem com excelência na área da harmonização facial, unindo teoria atualizada, visão ética, reflexão e prática guiada intensiva, com foco em resultados naturais, planejamento estratégico e segurança em cada procedimento.
        </p>
        <p className="mb-5 lg:text-[1.05rem] text-[14px] lg:leading-snug leading-[1.1] lg:text-justify font-light">
          O WonderFull Face é dividido em duas etapas complementares: Teoria e Prática.
        </p>
        <h3 className="font-bold lg:text-[1.05rem]  text-[14px] lg:text-lg lg:mt-14 mt-2 lg:mb-0.9">Parte Teórica</h3>
        <p className="mb-5 lg:mb-4 lg:text-[1.08rem] text-[14px] lg:leading-relaxed leading-[1.1] font-light">
          Realizada em formato de aula expositiva presencial com conteúdo aprofundado sobre anatomia facial, análise personalizada, técnicas injetáveis, planejamento estratégico, protocolos exclusivos da Dra. Hyllua e muito mais.
        </p>
        <h3 className="font-bold lg:text-[1.05rem] lg:text-lg lg:mt-12 lg:mb-1">Parte Prática</h3>
        <p className="mb-5 lg:mb-4 lg:text-[1.08rem] text-[14px] lg:leading-relaxed leading-[1.1] font-light">
          Os alunos colocam em prática todo o conhecimento<br className="block lg:hidden" /> adquirido, realizando atendimentos reais com supervisão<br className="block lg:hidden" /> direta da Dra. Hyllua. Cada aluno recebe seu scrub personalizado, além de orientação individual durante os procedimentos.
        </p>
        <h3 className="font-bold lg:text-[1.05rem] lg:text-lg lg:mt-12 lg:mb-2">Certificação</h3>
        <p className="mb-5 lg:mb-4 lg:text-[1.08rem] text-[14px] lg:leading-relaxed leading-[1.1] font-light">
          Os participantes que optarem pela imersão completa (teoria + prática) recebem dois certificados oficiais. O curso é uma oportunidade única de crescimento técnico, networking qualificado e vivência imersiva com uma das maiores referências em harmonização facial do Brasil.
        </p>
        </div>
      </div>
      {/* Imagens à direita */}
      <div className="flex-1 flex flex-col lg:gap-6 relative px-20 lg:px-0">
        
       <div className="relative z-10 flex flex-col lg:gap-12 gap-6">
  <Image 
    src="/images/ensino/foto-01-wonderfull-ensino.webp" 
    alt="Evento Wonderfull Face 1" 
    width={400} 
    height={250} 
    className="rounded-[30px] object-cover w-full h-auto  scale-105" 
  />

  <Image 
    src="/images/ensino/foto-02-wonderfull-ensino.webp" 
    alt="Evento Wonderfull Face 2" 
    width={400} 
    height={250}  
    className="rounded-[30px] object-cover w-full h-auto  scale-105" 
  />

  <Image 
    src="/images/ensino/foto-03-wonderfull-ensino.webp" 
    alt="Evento Wonderfull Face 3" 
    width={400} 
    height={250} 
    className="rounded-[30px] object-cover w-full h-auto  scale-105" 
  />

  {/* Última imagem com ícone */}
  <div className="relative">
    <Image 
      src="/images/ensino/foto-04-wonderfull-ensino.webp" 
      alt="Evento Wonderfull Face 4" 
      width={400} 
      height={250} 
      className="rounded-[30px] object-cover w-full h-auto  scale-105" 
    />
    {/* Ícone no canto inferior direito */}
    <div className="absolute lg:bottom-[-80px] lg:right-[-85px] bottom-[-40px] right-[-40px]">
      <Image
        src="/images/ensino/icon-03.webp"
        alt="Ícone decorativo"
        width={80}
        height={80}
        className="object-contain w-[80px] h-[80px] lg:w-[150px] lg:h-[150px]"
      />
    </div>
  </div>
</div>

      </div>
    </div>
  </section>



  <section className="w-full bg-[#e8e8e9] lg:pt-20  px-0 flex flex-col items-center justify-center relative ">
  
     {/*  - Textos e Imagens */}
  <div className="w-full max-w-4xl mx-auto flex flex-col-reverse lg:flex-row lg:gap-12 px-4 py-4 lg:py-24 relative ">


       {/* Imagens à direita */}
      <div className="flex-1 flex flex-col  relative px-20 lg:px-0 lg:-left-4 lg:-top-8">
        
       <div className="relative z-10 flex flex-col gap-6 ">
  <Image 
    src="/images/ensino/foto-01-especializacao-ensino.webp" 
    alt="Evento Especialização 1" 
    width={400} 
    height={250} 
    className="rounded-[30px] object-cover w-full h-auto scale-105 lg:mb-8 " 
  />

  <Image 
    src="/images/ensino/foto-02-especializacao-ensino.webp" 
    alt="Evento Especialização 2" 
    width={400} 
    height={250} 
    className="rounded-[30px] object-cover w-full h-auto scale-105" 
  />

  <Image 
    src="/images/ensino/foto-03-especializacao-ensino.webp" 
    alt="Evento Especialização 3" 
    width={400} 
    height={250} 
    className="rounded-[30px] object-cover w-full h-auto scale-105 lg:mt-8" 
  />


</div>
      </div>


      {/* Textos à direita */}
      <div className="flex-1 flex flex-col justify-start items-start text-[#3957a6]  rounded-2xl lg:p-6 px-0 py-6 relative lg:-right-13">
    <h2 className="titulo-scotch text-[24px] text-center lg:text-right lg:text-[2.45rem] font-normal lg:mb-10 mb-6 tracking-[-0.05rem] leading-none px-10 lg:px-0">ESPECIALIZAÇÃO <span className="lg:text-[2.45rem]  "></span>INTERNACIONAL</h2>
        <div className="flex  flex-row lg:gap-4 gap-24 lg:mb-12 mb-7 w-full justify-center px-0 lg:px-0 lg:pt-3">
            {/* Bloco 1 */}
            <div className="relative flex flex-col items-center border bg-[#3957a6] lg:rounded-2xl  rounded-[0.5rem] px-0 py-3.5 lg:px-4 lg:py-5 w-full lg:w-1/2 text-center -right-8 lg:-right-0">
            
              <span className="font-light text-[13px] lg:text-[15px] text-white lg:leading-snug leading-[1.2]">
                Curso<br className="block lg:hidden" /> presencial<br />realizado apenas<br /><span className="font-medium ">1 vez ao ano</span>
              </span>
            </div>

            {/* Bloco 2 */}
            <div className="relative flex flex-col items-center border bg-[#3957a6] lg:rounded-2xl rounded-[0.5rem] px-0 py-3 lg:px-4 lg:py-5 w-full lg:w-1/2 text-center -left-8 lg:-left-0">
             

              <span className=" text-[13px] lg:text-[15px] text-white lg:leading-snug leading-[1.2] font-light">
                4 dias:<br /><span className="font-medium  ">2 dia de teoria<br /> +<br className="block lg:hidden" /> 2 dia de prática</span>
              </span>
            </div>
          </div>

        <p className="lg:mb-12 mb-7 lg:text-[1.05rem] text-[14px] lg:px-2 lg:leading-[1.3] leading-[1.2] lg:text-right mt-2 relative lg:-right-2 px-4 ">
          A Especialização Internacional da Dra. Hyllua Husein é uma formação de alto nível voltada a profissionais que desejam aprofundar seus conhecimentos em anatomia aplicada e técnicas avançadas de harmonização facial, com foco em segurança, naturalidade e embasamento científico.
        </p>
        <p className="lg:mb-18 mb-12 lg:text-[1.05rem] text-[14px]  lg:px-2 px-4  lg:leading-[1.35] leading-[1.2] relative lg:text-right lg:-right-2">
          Curso destinado a profissionais da saúde habilitados que desejam se diferenciar no mercado, oferecendo resultados naturais e seguros, com formação internacional sólida e conteúdo alinhado às exigências das maiores referências médicas do mundo.
        </p>

<div className="px-4 lg:px-0">

        {/* Blocos destacados */}
        <p className="mb-5 text-[#3957a6] border border-[#3957a6]  lg:px-5  px-2 lg:py-2 py-1.5 text-center font-semibold lg:text-[14px] text-[13px] leading-[1.1] lg:leading-normal">
          Prática em Fresh Frozen Cadáver (cadáveres frescos),
          garantindo precisão, segurança e realismo.
        </p>
        <p className="mb-6 text-[#3957a6] border border-[#3957a6]  lg:px-5 px-4  lg:py-2 py-1.5  text-center font-semibold lg:text-[14px] text-[13px]  leading-[1.1] lg:leading-normal">
          Aulas teóricas e práticas conduzidas pessoalmente pela
          Dra. Hyllua Husein.
        </p>
        <p className="mb-4 text-[#3957a6] border border-[#3957a6]  lg:px-4 px-5 lg:py-2 py-1.5 text-center font-semibold lg:text-[14px] text-[13px]  leading-[1.1] lg:leading-normal
        ">
          Turma reduzida para acompanhamento individualizado e
          imersão total.
        </p>

     </div>
       


  
      </div>
     
     
    </div>

    <div className="  w-full bg-[#3957a6] lg:-mt-60 -mt-22"><div className="lg:py-24 py-18"></div></div>
  </section>



<section className="bg-[#e8e8e9] relative overflow-hidden">
  <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end lg:items-start  lg:px-12 pt-12  lg:pt-22 gap-8 z-2">

    {/* Texto à esquerda (coluna 1) */}
    <div className="col-span-1 flex flex-col lg:justify-center lg:items-start items-end lg:text-left text-right z-10 lg:top-30 lg:left-2 relative">
      <h2 className="text-[37px] lg:text-[70px] font-normal text-[#3957a6] leading-none titulo-scotch lg:mb-10 mb-3 ">
        Hyllua<br /> <span className="font-bold italic">Husein</span>
      </h2>

      <p className="text-[#3957a6] lg:text-[20px] text-[15px] lg:leading-[1.45] leading-[1.1]  tracking-[3px] px-8 lg:px-0 relative -right-9 lg:-right-0" >
        <span className="font-semibold">Mentora</span>,<br className="block lg:hidden"/> empresária<br /> e biomédica com<br className="block lg:hidden"/> especialização<br className="block lg:hidden"/> em estética.
      </p>
    </div>

    {/* Imagem à direita (ocupa 2 colunas) */}
    <div className="col-span-2 px-8 lg:px-0 relative flex justify-center lg:justify-end -top-30 lg:top-4 lg:-right-3 z-2">
      <img
        src="/images/ensino/hyllua-secao-4.webp"
        alt="Hyllua Husein"
        className="w-full h-auto lg:scale-100 scale-92"
      />
    </div>

  </div>
  {/* Logo atrás do texto e imagem */}
    <div className="absolute inset-0  pointer-events-none select-none  flex justify-center items-center z-0">
      <img
        src="/images/ensino/logo-hyllua-background.webp"
        alt="Logo Hyllua Husein"
        className="w-full h-full object-contain"
        style={{width: '100vw', height: '100vh'}}
        draggable="false"
      />
    </div>
</section>


   {/* Nova Section Azul Degradê */}
      <section className="relative -mt-150 w-full flex  justify-center items-center px-4 lg:px-0 lg:pt-34 lg:pb-4  pb-8 z-9 ">
        <Image
          src="/images/ensino/camada-secao-4-ensino.webp"
          alt="Fundo azul degradê"
          fill
          className="absolute inset-0 w-full  object-cover"
          priority
        />
  
        <div className="relative z-10 w-full max-w-[51rem] mx-auto flex flex-col lg:flex-row gap-0 lg:gap-8  px-4  lg:px-12 py-55 before:absolute before:top-98 lg:before:top-86 before:left-5 lg:before:left-13 before:w-[90%] lg:before:w-[88%] before:h-[2px] before:bg-white before:rounded-full before:content-['']">
          <div className="flex-1 flex flex-col lg:gap-2 gap-2 text-white  font-light  lg:-bottom-42 -bottom-50 relative">
       
            <div className="flex items-start gap-3 mb-2">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[22rem] lg:leading-tight leading-none  text-[0.9rem] lg:text-[1.1rem]">Há 9 anos atuando na estética: +180 alunos em turmas VIP presencial, +5.000 pacientes atendidos</span>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[21rem] lg:leading-tight leading-none text-[0.9rem] lg:text-[1.1rem]">Especializações internacionais em HOF: Formações realizadas na Suíça, Itália e Estados Unidos, com foco em anatomia aplicada, rejuvenescimento avançado e técnicas de refinamento estético</span>
            </div>
            <div className="flex items-start gap-3  mb-2">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[22rem] lg:leading-tight leading-none text-[0.9rem] lg:text-[1.1rem]">Referência nacional em lábios e rinomodelação com a técnica LAPIDARE</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:gap-2 gap-2 text-white  font-light  lg:-bottom-42  -bottom-50 relative">
            <div className="flex items-start gap-3 mb-2">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[22rem] lg:leading-tight leading-none text-[0.95rem] lg:text-[1.1rem]">Mentora e criadora do método WONDERFULL FACE</span>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[22rem] lg:leading-tight leading-none text-[0.87rem] lg:text-[1.02rem]">CEO da Clinica Hyllua Husein e da marca nacional de dermocosméticos Hyllua Beauty</span>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[22rem] lg:leading-tight leading-none text-[0.88rem] lg:text-[1.1rem]">Professora convidada no European Biomedical Research Institute of Salerno (EBRIS)</span>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <span className="mt-1 lg:w-3 lg:h-3 w-2 h-2 bg-white  inline-block " />
              <span className="lg:w-[19rem] w-[22rem] lg:leading-tight leading-none text-[0.87rem] lg:text-[1.1rem]">Professora chancelada pela Harvard Medical School</span>
            </div>
          </div>
        </div>
      </section>
  



      {/* Section de contato igual ao print */}
      <section className="w-full bg-[#eaeaea] lg:py-28 py-16 px-4 lg:px-0 flex items-center justify-center ">
        <div className="max-w-4xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 ">
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <p className="text-[#3957a6] text-[19px] lg:text-[1.7rem] font-light text-center lg:text-left titulo-scotch lg:leading-none leading-snug">
              Entre em contato e receba mais<br />
              <span className="italic font-bold text-[19px] lg:text-[1.8rem]">informações sobre turmas.</span>
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-end">

            <a href="http://wa.me/5551991271960" className="border-b-4 border-black bg-[#3957a6] hover:bg-[#3957a6] rounded-[5px] text-white font-medium tracking-wider lg:py-4 lg:pb-3 py-2 px-6 lg:px-10 text-[0.8rem] lg:text-[1.25rem]   duration-300">
              ENTRAR EM CONTATO
            </a>
          </div>
        </div>
      </section>
</>
   
  );
}

   

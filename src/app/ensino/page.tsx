

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function EnsinoSections() {
  return (
    <>
      <section className="bg-[url('/images/ensino/background-hero-ensino.webp')] bg-cover bg-[position:80%_20%] lg:bg-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full flex flex-col lg:flex-row pt-40 lg:pt-46">
          
          {/* Conteúdo do texto - em cima no mobile, à esquerda no desktop */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-0">
            <div className="max-w-md">
              <div className="flex items-start gap-2 justify-center lg:justify-start">
                <div className="titulo-scotch font-normal text-white text-right leading-none text-[22px] lg:text-[36px]">
                  Estética<br /> <span className="font-light">exige</span>
                </div>
                <div className="titulo-scotch font-bold italic text-white text-[70px] lg:text-[120px] leading-none relative -top-5 lg:-top-9">ética</div>
              </div>
              <p className="text-[1.1rem] w-[12rem] lg:w-full tracking-wide text-white mb-8 lg:mb-8 font-light leading-tight  text-right relative -right-17 lg:-right-0 -top-4 lg:-top-6 lg:-left-3">
                E não existe cuidado ético e seguro
                sem <span className="font-semibold">atualização profissional.</span>
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
              className="max-w-full max-h-full object-contain lg:w-[300px] lg:h-[400px]"
              priority
            />
          </div>

        </div>
      </section>

     <section className=" bg-[#eaeaea] py-25 px-4 flex flex-col items-center justify-center relative ">


  <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 text-center lg:text-left mb-8">
    {/* Texto principal */}
    <div className="flex flex-1 flex-col items-center lg:items-start titulo-scotch">
      <p className="text-[#23409c] font-normal text-[1.1rem] lg:text-[1.35rem] self-start leading-none">A prática precisa</p>
      <h2 className="font-bold italic text-[#23409c] text-5xl lg:text-[65px] leading-none">acompanhar</h2>
      <span className="text-[#23409c] font-normal text-[1.1rem] lg:text-[1.35rem] mb-4 self-end lg:-left-33 relative">o conhecimento</span>
    </div>
    {/* Balão azul */}
    <div className="bg-[#23409c] w-[16rem] lg:w-full text-white rounded-2xl lg:px-10 px-8 py-4 lg:py-2 text-[1.1rem] lg:text-[1.3rem] font-light leading-5 lg:leading-normal  mb-6 lg:mb-0 max-w-[20rem] mx-auto lg:mx-0 text-center lg:-left-12 relative z-3" >
      Investir em formação constante é o mínimo que um profissional deve fazer para <span className="font-semibold italic">oferecer segurança e excelência.</span>
    </div>
  </div>

  {/* Chamada para ação */}
  <div className="text-center lg:mt-10 texto-montreal lg:self-center relative -left-18 lg:-left-60 lg:-top-8">
    <span className="text-[#23409c] font-normal uppercase lg:text-[1.35rem] block">CONHEÇA NOSSAS</span>
    <span className="text-[#23409c] italic font-semibold block lg:text-[1.35rem]">FORMAÇÕES EXCLUSIVAS</span>
    <div className="flex justify-center mt-2 z-1">
      <Image
        src="/images/ensino/icon-01.webp"
        alt="Ícone de seta para baixo"
        width={20}
        height={20}
        className="object-contain w-5 h-5 lg:w-8 lg:h-8"
        priority
      />
    </div>
  </div>

{/* Estrela na parte de baixo da primeira section */}
<div className="absolute  right-[-290px] bottom-[-150px] lg:right-[-200px] lg:bottom-[-400px] z-2">
  <Image
    src="/images/ensino/camada-secao-2.webp"
    alt="Estrela decorativa"
    width={800}
    height={800}
    className="object-contain w-[440px] h-[440px] sm:w-[400px] sm:h-[400px] lg:w-[800px] lg:h-[800px]"
  />
</div>


</section>

  <section className="w-full bg-[#202e5e] pt-10 pb-4 px-0 flex flex-col items-center justify-center relative ">
    <div className="w-full flex justify-center items-end relative z-3 -top-46 lg:-top-66 -right-10 lg:-right-16">
      <Image
        src="/images/ensino/hyllua-secao-2.webp"
        alt="Hyllua deitada"
        width={650}
        height={450}
        className="object-contain max-w-full h-auto"
        priority
      />
    </div>


     <div className="absolute inset-y-15 lg:inset-y-14 right-0 w-1/2 z-4 lg:mt-50 mt-250">
    <Image
      src="/images/ensino/foto-05-wonderfull-ensino.webp"
      alt="Fundo Wonderfull"
      fill
      className="lg:object-contain object-right "
    />
  </div>

     {/* Wonderfull Face - Textos e Imagens */}
    <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-10 px-4 py-16 lg:py-24 relative -mt-60">
      {/* Textos à esquerda */}
      <div className="flex-1 flex flex-col justify-start items-start text-white  rounded-2xl lg:p-8 p-6 relative lg:-left-12">
        <h2 className="font-scotch text-3xl lg:text-4xl font-bold lg:mb-20 mb-8 tracking-wide px-10 lg:px-0"><img src="/images/ensino/logo-wonderfull-face.webp" alt="Wonderfull Face" /></h2>
        <div className="flex  flex-row gap-4 mb-12 w-full justify-center px-8 lg:px-0">
            {/* Bloco 1 */}
            <div className="relative flex flex-col items-center border border-[#c6ad7b] rounded-2xl px-1 py-4 lg:px-4 lg:py-6 w-full lg:w-1/2 text-center">
             <div className="absolute -top-3 lg:-top-6 left-5">
     <Image
  src="/images/ensino/icon-02.webp"
  alt="Ícone estrela"
  width={40}
  height={40}
  className="w-6 h-6 md:w-10 md:h-10" 
/>
    </div>
              <span className="font-normal text-[0.8rem] lg:text-[1rem]">
                Curso presencial<br />realizado apenas<br /><span className="font-semibold ">2 vezes ao ano</span>
              </span>
            </div>

            {/* Bloco 2 */}
            <div className="relative flex flex-col items-center border border-[#c6ad7b] rounded-2xl px-1 py-4 lg:px-4 lg:py-6  w-full lg:w-1/2 text-center">
             <div className="absolute -top-3 lg:-top-6  left-5">
   <Image
  src="/images/ensino/icon-02.webp"
  alt="Ícone estrela"
  width={40}
  height={40}
  className="w-6 h-6 md:w-10 md:h-10" 
/>
    </div>
             
          
              <span className="font-normal text-[0.8rem] lg:text-[1rem]">
                2 dias.<br /><span className="font-semibold ">1 dia de teoria +<br />1 dia de prática</span>
              </span>
            </div>
          </div>

        <p className="mb-4 lg:text-[1.02rem] text-[0.82rem] lg:leading-normal leading-tight lg:text-justify">
          O WonderFull Face é uma imersão completa e transformadora em harmonização facial avançada, idealizada e conduzida pela Dra. Hyllua Husein. Mais do que um curso, é uma experiência de alto nível voltada a profissionais da saúde que desejam dominar técnicas modernas, seguras e altamente eficazes.
        </p>
        <p className="mb-4 lg:text-[1.02rem] text-[0.82rem] lg:leading-normal leading-tight lg:text-justify">
          O objetivo do WonderFull Face é capacitar profissionais para atuarem com excelência na área da harmonização facial, unindo teoria atualizada, visão ética, reflexão e prática guiada intensiva, com foco em resultados naturais, planejamento estratégico e segurança em cada procedimento.
        </p>
        <p className="mb-4 lg:text-[1.02rem] text-[0.82rem] lg:leading-normal leading-tight lg:text-justify">
          O WonderFull Face é dividido em duas etapas complementares: Teoria e Prática.
        </p>
        <h3 className="font-bold text-[0.9rem] lg:text-lg mt-6 lg:mb-2">Parte Teórica</h3>
        <p className="mb-4 lg:text-[1.06rem] text-[0.8rem] lg:leading-normal leading-tight ">
          Realizada em formato de aula expositiva presencial com conteúdo aprofundado sobre anatomia facial, análise personalizada, técnicas injetáveis, planejamento estratégico, protocolos exclusivos da Dra. Hyllua e muito mais.
        </p>
        <h3 className="font-bold text-[0.9rem] lg:text-lg mt-6 lg:mb-2">Parte Prática</h3>
        <p className="mb-4 lg:text-[1.06rem] text-[0.8rem] lg:leading-normal leading-tight ">
          Os alunos colocam em prática todo o conhecimento adquirido, realizando atendimentos reais com supervisão direta da Dra. Hyllua. Cada aluno recebe seu scrub personalizado, além de orientação individual durante os procedimentos.
        </p>
        <h3 className="font-bold text-[0.9rem] lg:text-lg mt-6 lg:mb-2">Certificação</h3>
        <p className="mb-2 lg:text-[1.06rem] text-[0.8rem] lg:leading-normal leading-tight ">
          Os participantes que optarem pela imersão completa (teoria + prática) recebem dois certificados oficiais. O curso é uma oportunidade única de crescimento técnico, networking qualificado e vivência imersiva com uma das maiores referências em harmonização facial do Brasil.
        </p>
      </div>
      {/* Imagens à direita */}
      <div className="flex-1 flex flex-col lg:gap-6 relative px-20 lg:px-0">
        
       <div className="relative z-10 flex flex-col gap-6">
  <Image 
    src="/images/ensino/foto-01-wonderfull-ensino.webp" 
    alt="Evento Wonderfull Face 1" 
    width={400} 
    height={250} 
    className="rounded-3xl object-cover w-full h-auto" 
  />

  <Image 
    src="/images/ensino/foto-02-wonderfull-ensino.webp" 
    alt="Evento Wonderfull Face 2" 
    width={400} 
    height={250} 
    className="rounded-3xl object-cover w-full h-auto" 
  />

  <Image 
    src="/images/ensino/foto-03-wonderfull-ensino.webp" 
    alt="Evento Wonderfull Face 3" 
    width={400} 
    height={250} 
    className="rounded-3xl object-cover w-full h-auto" 
  />

  {/* Última imagem com ícone */}
  <div className="relative">
    <Image 
      src="/images/ensino/foto-04-wonderfull-ensino.webp" 
      alt="Evento Wonderfull Face 4" 
      width={400} 
      height={250} 
      className="rounded-xl object-cover w-full h-auto" 
    />
    {/* Ícone no canto inferior direito */}
    <div className="absolute lg:bottom-[-60px] lg:right-[-60px] bottom-[-40px] right-[-40px]">
      <Image
        src="/images/ensino/icon-03.webp"
        alt="Ícone decorativo"
        width={80}
        height={80}
        className="object-contain w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
      />
    </div>
  </div>
</div>

      </div>
    </div>
  </section>



  <section className="w-full bg-[#e8e8e9] pt-10  px-0 flex flex-col items-center justify-center relative ">
  
     {/*  - Textos e Imagens */}
  <div className="w-full max-w-4xl mx-auto flex flex-col-reverse lg:flex-row gap-10 px-4 py-16 lg:py-24 relative ">


       {/* Imagens à direita */}
      <div className="flex-1 flex flex-col lg:gap-6 relative px-20 lg:px-0 lg:-left-4">
        
       <div className="relative z-10 flex flex-col gap-6">
  <Image 
    src="/images/ensino/foto-01-especializacao-ensino.webp" 
    alt="Evento Especialização 1" 
    width={400} 
    height={250} 
    className="rounded-3xl object-cover w-full h-auto" 
  />

  <Image 
    src="/images/ensino/foto-02-especializacao-ensino.webp" 
    alt="Evento Especialização 2" 
    width={400} 
    height={250} 
    className="rounded-3xl object-cover w-full h-auto" 
  />

  <Image 
    src="/images/ensino/foto-03-especializacao-ensino.webp" 
    alt="Evento Especialização 3" 
    width={400} 
    height={250} 
    className="rounded-3xl object-cover w-full h-auto" 
  />


</div>
      </div>


      {/* Textos à direita */}
      <div className="flex-1 flex flex-col justify-start items-start text-[#37518c]  rounded-2xl lg:p-6 p-6 relative lg:-right-12">
    <h2 className="titulo-scotch text-3xl lg:text-right lg:text-[2.5rem] font-normal lg:mb-10 mb-8 tracking-wide px-10 lg:px-0">ESPECIALIAÇÃO INTERNACIONAL</h2>
        <div className="flex  flex-row gap-4 mb-12 w-full justify-center px-8 lg:px-0">
            {/* Bloco 1 */}
            <div className="relative flex flex-col items-center border bg-[#37518c] rounded-2xl px-1 py-4 lg:px-4 lg:py-4 w-full lg:w-1/2 text-center">
            
              <span className="font-normal text-[0.8rem] lg:text-[1rem] text-white">
                Curso presencial<br />realizado apenas<br /><span className="font-semibold ">1 vez ao ano</span>
              </span>
            </div>

            {/* Bloco 2 */}
            <div className="relative flex flex-col items-center border bg-[#37518c] rounded-2xl px-1 py-4 lg:px-4 lg:py-4  w-full lg:w-1/2 text-center">
             

              <span className="font-normal text-[0.8rem] lg:text-[1rem] text-white">
                4 dias:<br /><span className="font-semibold  ">2 dia de teoria +<br />2 dia de prática</span>
              </span>
            </div>
          </div>

        <p className="mb-12 lg:text-[1.1rem] text-[0.82rem]  leading-tight  lg:text-right">
          A Especialização Internacional da Dra. Hyllua Husein é uma formação de alto nível voltada a profissionais que desejam aprofundar seus conhecimentos em anatomia aplicada e técnicas avançadas de harmonização facial, com foco em segurança, naturalidade e embasamento científico.
        </p>
        <p className="mb-12 lg:text-[1.1rem] text-[0.82rem]  leading-tight  lg:text-right">
          Curso destinado a profissionais da saúde habilitados que desejam se diferenciar no mercado, oferecendo resultados naturais e seguros, com formação internacional sólida e conteúdo alinhado às exigências das maiores referências médicas do mundo.
        </p>

        {/* Blocos destacados */}
        <p className="mb-4 text-[#37518c] border border-[#37518c]  px-4 py-1 text-center font-semibold lg:text-[0.8rem] text-[0.73rem]">
          Prática em Fresh Frozen Cadáver (cadáveres frescos),
          garantindo precisão, segurança e realismo.
        </p>
        <p className="mb-4 text-[#37518c] border border-[#37518c]  px-4 py-1 text-center font-semibold lg:text-[0.8rem] text-[0.73rem]">
          Aulas teóricas e práticas conduzidas pessoalmente pela
          Dra. Hyllua Husein.
        </p>
        <p className="mb-4 text-[#37518c] border border-[#37518c]  px-4 py-1 text-center font-semibold lg:text-[0.8rem] text-[0.73rem]">
          Turma reduzida para acompanhamento individualizado e
          imersão total.
        </p>

     
       


  
      </div>
     
     
    </div>

    <div className="  w-full bg-[#37518c] lg:-mt-55 -mt-32"><div className="lg:py-30 py-18"></div></div>
  </section>
</>
   
  );
}

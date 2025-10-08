// src/app/hyllua-beauty/page.tsx

import Image from "next/image";

export default function HylluaPage() {
  return (


    <main>


   

      {/* Section Hero Hyllua Beauty */}
      <section className="w-full  bg-[url('/images/beauty/background-hero-hyllua-beauty.webp')] bg-cover bg-center flex items-center justify-center relative ">
        {/* Logo por cima do fundo e atrás do conteúdo */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-end justify-center">
          <Image
            src="/images/beauty/logo-hyllua-beauty-hero.webp"
            alt="Logo Hyllua Beauty de fundo"
            width={900}
            height={400}
            className="object-contain  w-[100%]  "
            priority
          />
        </div>
  <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-0 lg:px-16 pt-8 lg:pt-38 gap-10 relative z-10">
          {/* Textos à esquerda */}
          <div className="flex-1 flex flex-col  justify-center items-center lg:items-end z-10 relative top-20 lg:-top-8 lg:-right-2">
            <div className="text-right">
            <h1 className="titulo-scotch text-[#fff] text-[1.4rem] lg:text-[2.1rem] font-normal italic relative text-left -bottom-2 lg:-bottom-5">Do amor pela pele</h1>
            <h2 className="titulo-scotch text-[#fff] text-[4.4rem] lg:text-[6.7rem] font-bold italic leading-none relative ">ao reino</h2>
            <h3 className="titulo-scotch text-[#fff] text-[1.55rem] lg:text-[2.4rem] font-medium italic mb-3 relative -top-2 lg:-top-1.5 ">das fadas</h3>
            <p className="text-[#fff] text-[0.92rem] lg:text-[1.25rem] font-light mb-8 relative -top-4 lg:-top-0 lg:-bottom-2">Onde cada fórmula <span className="font-semibold">é mágica.</span></p>
            </div>
            <div className="flex flex-row gap-6 lg:gap-10 mt-2 text-center relative lg:top-7 -top-7">

              <a href="#" className="bg-[#e88c8c] hover:bg-[#d86c6c] text-white font-semibold lg:py-2 py-1.5 lg:px-4.5 px-3 lg:rounded-full rounded-[0.5rem] text-[0.55rem] lg:text-[0.75rem] transition-colors duration-200">CONHEÇA O REINO DAS FADAS</a>
              <a href="#" className="bg-[#e88c8c] hover:bg-[#d86c6c] text-white font-semibold lg:py-2 py-1.5 lg:px-4.5 px-3 lg:rounded-full rounded-[0.5rem] text-[0.55rem] lg:text-[0.75rem] transition-colors duration-200">INSTAGRAM DAS FADINHAS</a>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-1 flex items-center justify-center relative z-10 lg:-left-4 top-6 lg:top-0">
            <Image
              src="/images/beauty/foto-hyllua-hero-hyllua-beauty.webp"
              alt="Hyllua Beauty Hero"
              width={420}
              height={520}
              className="object-contain w-full lg:scale-95 scale-100 drop-shadow-xl"
              priority
            />
          </div>
        
        </div>
      </section>


      {/* Section 2 - Como tudo começou */}
      <section className="relative w-full overflow-hidden bg-[url('/images/beauty/background-secao-2-hyllua-beauty.webp')] bg-cover bg-center ">
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8 lg:pb-14 pb-0 pt-16 lg:pt-0 items-center">
          {/* Textos à esquerda */}
          <div className="relative z-10 flex flex-col items-center lg:items-start lg:text-left lg:pt-24 lg:-top-6 lg:-right-6 px-2 lg:px-0">
            <h2 className="titulo-scotch text-[#e49390] text-[1.4rem] lg:text-[2.8rem] font-bold lg:leading-none  leading-tight lg:mb-6 mb-2">
              Como tudo<br />
              <span className="font-bold italic">começou...</span>
            </h2>
            <p className="text-[#e49390] text-[1.03rem] lg:text-[1.3rem] lg:leading-tight leading-[1.03] max-w-[34rem] lg:mb-6 mb-2 lg:w-[24rem]">
              <span className="font-semibold">Hyllua Beauty</span>, nasceu da paixão da Dra.<br className="block lg:hidden"/>
              Hyllua Husein por cuidar da pele de forma
              científica e encantadora.
            </p> 
            <p className="text-[#e49390] text-[0.97rem] lg:text-[1.2rem] lg:leading-[1.35] leading-[1.02]  mb-4 lg:w-[24rem] tracking-wide">
              Após anos de pesquisa, desenvolvimento<br className="hidden lg:block"/> e<br className="block lg:hidden"/> aplicação prática em suas pacientes,<br className="hidden lg:block"/>
              ela criou<br className="block lg:hidden"/> uma linha de dermocosméticos<br className="hidden lg:block"/>
              que une alta performance e tecnologia<br className="hidden lg:block"/><br className="block lg:hidden"/>
              avançada com a delicadeza de<br className="hidden lg:block"/><br className="block lg:hidden"/>
              um toque mágico.
            </p>
            <div className="lg:mt-8 mt-2 border border-[#e49390] text-[#e49390]  lg:px-4 px-2 py-1 text-center lg:w-[23rem]">
              <p className="lg:text-[0.8rem] text-[0.75rem] leading-[1.15] lg:leading-relaxed font-semibold ">
                Todos os produtos são dermatologicamente testados,
                hipoalergênicos, aprovados pela <span className="font-semibold">ANVISA</span>, 100%<br className="block lg:hidden"/> veganos e
                nunca testados em animais.
              </p>
            </div>
          </div>

     
        </div>
        {/* Imagem à direita no canto inferior da section (desktop) */}
        <div className="pointer-events-none lg:absolute bottom-0 right-0 z-0  lg:w-[56vw] w-[100%]">
          <Image
            src="/images/beauty/PETALAS-FOTO-LOGO-SEÇÃO-2-PÁGINA-HYLLUA-BEAUTY.png"
            alt="Hyllua segurando produto"
            width={1800}
            height={1500}
            className="w-full h-auto object-contain object-right"
            priority
          />
        </div>
      </section>



      {/* Section 3 - Cuidados completos */}
      <section className="relative w-full overflow-hidden bg-[url('/images/beauty/background-secao-3-hyllua-beauty.webp')] bg-cover bg-center py-8 lg:py-12 flex items-center justify-center ">
        <div className="max-w-[46rem] w-full mx-auto px-14 lg:px-0">
          <h2 className="text-white text-[0.9rem] lg:text-[1.45rem] font-normal text-center lg:mb-20 mb-10 titulo-scotch leading-[1.1]">
            A linha oferece<br className="block lg:hidden" /> <span className="italic font-bold lg:text-[1.8rem] text-[1.3rem]  ">cuidados completos</span><br className="block lg:hidden" /> em diferentes categorias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8 px-0 ">


            {/* Card Skincare */}
            <div className="bg-transparent border-2 lg:mb-10 mb-0 border-white lg:rounded-xl rounded-[0.6rem] lg:px-14 px-2 py-4 lg:py-0 flex flex-col items-center justify-center lg:min-h-[200px] lg:h-[285px] h-[100px] ">
              <span className="bg-white text-[#e49390] font-bold italic lg:rounded-full rounded-[0.5rem] px-2 lg:px-6 py-0 text-[0.85rem] lg:text-[1.35rem] mb-4 relative lg:-top-23 -top-4 shadow-md titulo-scotch">Skincare</span>
              <p className="text-white text-center lg:text-[1.15rem] text-[0.98rem] font-normal lg:leading-snug leading-none relative lg:-top-6 px-2 lg:px-0 -top-3.5  tracking-wide">Formulados para proteger,<br className="hidden lg:block" /> hidratar, revigorar e renovar<br className="hidden lg:block" /> cada tipo de pele.</p>
            </div>

            {/* Card Cuidados corporais */}
            <div className="bg-transparent border-2 lg:mb-10 mb-0 border-white lg:rounded-xl rounded-[0.6rem] lg:px-8  py-8 flex flex-col items-center justify-center lg:min-h-[200px ] lg:h-[285px] h-[140px]">
              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-2 lg:px-6 py-0 text-[0.8rem] lg:text-[1.25rem] mb-4 relative lg:-top-10 -top-3 shadow-md titulo-scotch">Cuidados corporais</span>
              <p className="text-white text-center lg:text-[1.18rem] text-[0.95rem] font-normal lg:leading-[1.35] leading-[1.05] relative lg:-top-3.5 px-2 lg:px-0 -top-3  tracking-wide">Os produtos tratam a pele com tecnologia dermocosmética, ingredientes eficazes e fragrâncias delicadas, promovendo hidratação profunda, firmeza, luminosidade e bem-estar.</p>
            </div>


            {/* Card Maquiagens */}
            <div className="bg-transparent border-2 lg:mb-18 mb-2 border-white rounded-xl px-2 lg:px-8 py-6 flex flex-col items-center justify-center lg:min-h-[270px] lg:h-[490px] h-[215px]">
              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-4 lg:px-6 py-0 text-[0.8rem] lg:text-[1.3rem] mb-4 relative lg:-top-16 -top-2.5 shadow-md titulo-scotch">Maquiagens</span>
              <p className="text-white text-center lg:text-[1.2rem] text-[0.95rem] font-normal lg:leading-[1.35] leading-[1.05] relative lg:-top-4 px-2 lg:px-0 -top-2.5  tracking-wide">Linha de maquiagens da Hyllua Beauty foi criada para ir além da estética: ela une cuidado com a pele, tecnologia dermocosmética e performance profissional em cada fórmula. Pensada especialmente para mulheres que buscam praticidade no dia a dia sem abrir mão da saúde da pele, cada item entrega beleza imediata e tratamento contínuo.</p>
            </div>


            {/* Card Eau de Parfum */}
            <div className="bg-transparent border-2 lg:mb-18 mb-4 border-white rounded-xl  lg:px-8 py-6 flex flex-col items-center justify-center lg:min-h-[270px] lg:h-[490px] h-[260px]">


              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-4 lg:px-7 py-0 text-[0.85rem] lg:text-[1.3rem] mb-4 relative lg:-top-8 -top-2 shadow-md titulo-scotch">Eau de Parfum</span>
              <p className="text-white text-center lg:text-[1.22rem] text-[0.92rem] font-normal lg:leading-[1.3] leading-[1.1] relative lg:-top-4 px-4 lg:px-0 -top-3   tracking-wide">A linha de Eau de Parfum da Hyllua Beauty foi criada para envolver, marcar presença e eternizar momentos. Cada fragrância é uma composição autoral e sofisticada, pensada para traduzir em aroma tudo o que a marca representa: força, delicadeza, feminilidade e encantamento. Mais do que perfumes, são poções sensoriais que despertam memórias, refletem estados de espírito e revelam sua presença com elegância e personalidade.</p>
            </div>
          </div>
        </div>
      </section>


      
          {/* Section 4 - Hyllua Beauty Cuida da sua pele */}
          <section className="w-full bg-[#eae8ea] py-6 lg:py-18 flex items-center justify-center ">
            <div className="max-w-[65.5rem] w-full mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center lg:gap-10 gap-8 px-6 lg:px-16">
              {/* Textos */}
              <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                <h2 className="titulo-scotch text-[#e49390] text-[1.1rem] lg:text-[2.1rem] font-medium lg:leading-none leading-none lg:mb-2 ">
                  Hyllua <span className="italic font-semibold text-[1.2rem] lg:text-[2.3rem]">Beauty</span><br className="" /> Cuida da sua pele
                </h2>
               
              </div>

              <div>
                 <p className="text-[#e49390] text-[1rem] lg:text-[1.45rem] text-center leading-none lg:leading-[1.15] font-normal tracking-wider mb-0 lg:mt-4 relative lg:-top-3  lg:-right-4 -top-2.5">
                  Fórmulas criadas com<br /> ciência, carinho e um<br />
                  <span className="font-bold">toque de encanto.</span>
                </p>
              </div>
              {/* Botão */}
              <div className="flex-1 flex items-center justify-center lg:justify-end w-full px-16 lg:px-0 relative -top-2 lg:top-0">
                <a href="#" className="bg-[#e49390] hover:bg-[#d86c6c] text-white font-normal lg:py-5 py-2 lg:px-6 px-0 rounded-tl-full rounded-tr-full rounded-bl-full text-[0.76rem] lg:text-[0.9rem] transition-colors duration-200 w-full lg:w-auto text-center lg:-right-2 lg:-top-1 relative">
                  ENTRAR NO REINO DAS FADAS
                </a>
              </div>
            </div>
          </section>
    </main>
  )
}

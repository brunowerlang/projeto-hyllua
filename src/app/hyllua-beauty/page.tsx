// src/app/hyllua-beauty/page.tsx

import Image from "next/image";

export default function HylluaPage() {
  return (


    <main>
      {/* Section Hero Hyllua Beauty */}
      <section className="w-full  bg-[url('/images/beauty/background-hero-hyllua-beauty.webp')] bg-cover bg-center flex items-center justify-center relative">
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
  <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-0 lg:px-16 pt-36 lg:pt-48 gap-10 relative z-10">
          {/* Textos à esquerda */}
          <div className="flex-1 flex flex-col  justify-center items-center lg:items-end z-10 relative lg:-top-17">
            <div className="text-right">
            <h1 className="titulo-scotch text-[#fff] text-[1.7rem] lg:text-[2.2rem] font-normal italic relative text-left -bottom-2 lg:-bottom-5">Do amor pela pele</h1>
            <h2 className="titulo-scotch text-[#fff] text-[5rem] lg:text-[6.7rem] font-bold italic leading-none relative ">ao reino</h2>
            <h3 className="titulo-scotch text-[#fff] text-[2rem] lg:text-[2.4rem] font-medium italic mb-3 relative -top-2 lg:-top-2 ">das fadas</h3>
            <p className="text-[#fff] text-[1.1rem] lg:text-[1.3rem] font-light mb-8">Onde cada fórmula <span className="font-semibold">é mágica.</span></p>
            </div>
            <div className="flex flex-row gap-10 mt-2 text-center relative ">

              <a href="#" className="bg-[#e88c8c] hover:bg-[#d86c6c] text-white font-semibold py-2 px-6 rounded-full text-[0.5rem] lg:text-[0.7rem] transition-colors duration-200">CONHEÇA O REINO DAS FADAS</a>
              <a href="#" className="bg-[#e88c8c] hover:bg-[#d86c6c] text-white font-semibold py-2 px-6 rounded-full text-[0.5rem] lg:text-[0.7rem] transition-colors duration-200">INSTAGRAM DAS FADINHAS</a>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-1 flex items-center justify-center relative z-10">
            <Image
              src="/images/beauty/foto-hyllua-hero-hyllua-beauty.webp"
              alt="Hyllua Beauty Hero"
              width={420}
              height={520}
              className="object-contain w-full max-w-[420px] lg:max-w-[520px] drop-shadow-xl"
              priority
            />
          </div>
        
        </div>
      </section>


      {/* Section 2 - Como tudo começou */}
      <section className="relative w-full overflow-hidden bg-[url('/images/beauty/background-secao-2-hyllua-beauty.webp')] bg-cover bg-center">
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8 lg:pb-14 pb-0 pt-12 lg:pt-0 items-center">
          {/* Textos à esquerda */}
          <div className="relative z-10 flex flex-col items-center lg:items-start lg:text-left lg:pt-24 lg:-top-6 lg:-right-6">
            <h2 className="titulo-scotch text-[#e49390] text-[1.8rem] lg:text-[2.8rem] font-bold leading-none mb-6">
              Como tudo<br />
              <span className="font-bold italic">começou...</span>
            </h2>
            <p className="text-[#e49390] text-[1.1rem] lg:text-[1.3rem] leading-tight max-w-[34rem] mb-4 lg:w-[24rem]">
              <span className="font-semibold">Hyllua Beauty</span>, nasceu da paixão da Dra.
              Hyllua Husein por cuidar da pele de forma
              científica e encantadora.
            </p> 
            <p className="text-[#e49390] text-[1.1rem] lg:text-[1.3rem] leading-tight max-w-[34rem] mb-4 lg:w-[24rem]">
              Após anos de pesquisa, desenvolvimento
              e aplicação prática em suas pacientes,
              ela criou uma linha de dermocosméticos
              que une alta performance e tecnologia<br />
              avançada com a delicadeza de<br />
              um toque mágico.
            </p>
            <div className="mt-8 border border-[#e49390] text-[#e49390]  lg:px-4 px-2 py-1 text-center lg:w-[23rem]">
              <p className="lg:text-[0.8rem] text-[0.8rem] leading-snug lg:leading-relaxed font-semibold ">
                Todos os produtos são dermatologicamente testados,
                hipoalergênicos, aprovados pela <span className="font-semibold">ANVISA</span>, 100% veganos e
                nunca testados em animais.
              </p>
            </div>
          </div>

     
        </div>
        {/* Imagem à direita no canto inferior da section (desktop) */}
        <div className="pointer-events-none lg:absolute bottom-0 right-0 z-0  lg:w-[54vw] w-[100%]">
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
      <section className="relative w-full overflow-hidden bg-[url('/images/beauty/background-secao-3-hyllua-beauty.webp')] bg-cover bg-center py-12 lg:py-18 flex items-center justify-center">
        <div className="max-w-[51rem] w-full mx-auto px-14 lg:px-4">
          <h2 className="text-white text-[1.1rem] lg:text-[1.4rem] font-normal text-center mb-18 titulo-scotch">
            A linha oferece<br className="block lg:hidden" /> <span className="italic font-bold lg:text-[1.8rem] text-[1.7rem]">cuidados completos</span><br className="block lg:hidden" /> em diferentes categorias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card Skincare */}
            <div className="bg-transparent border-2 lg:mb-18 mb-4 border-white rounded-xl lg:px-14 px-2 py-4 lg:py-6 flex flex-col items-center justify-center lg:min-h-[270px]">
              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-4 lg:px-8 py-1 text-[1rem] lg:text-[1.3rem] mb-4 relative lg:-top-24 -top-8 shadow-md titulo-scotch">Skincare</span>
              <p className="text-white text-center lg:text-[1.4rem] font-normal leading-snug relative lg:-top-6 px-2 lg:px-0 -top-6  tracking-wide">Formulados para proteger,<br className="block lg:hidden" /> hidratar, revigorar e renovar cada tipo de pele.</p>
            </div>
            {/* Card Cuidados corporais */}
            
            <div className="bg-transparent border-2 lg:mb-18 mb-4 border-white rounded-xl  lg:px-12 py-6 flex flex-col items-center justify-center lg:min-h-[270px]">
              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-4 lg:px-8 py-1 text-[1rem] lg:text-[1.3rem] mb-4 relative lg:-top-24 -top-9 shadow-md titulo-scotch">Cuidados corporais</span>
              <p className="text-white text-center lg:text-[1.4rem] font-normal leading-snug relative lg:-top-6 px-2 lg:px-0 -top-6  tracking-wide">Os produtos tratam a pele com tecnologia dermocosmética, ingredientes eficazes e fragrâncias delicadas, promovendo hidratação profunda, firmeza, luminosidade e bem-estar.</p>
            </div>
            {/* Card Maquiagens */}
            <div className="bg-transparent border-2 lg:mb-18 mb-4 border-white rounded-xl  lg:px-12 py-6 flex flex-col items-center justify-center lg:min-h-[270px]">
              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-4 lg:px-8 py-1 text-[1rem] lg:text-[1.3rem] mb-4 relative lg:-top-24 -top-9 shadow-md titulo-scotch">Maquiagens</span>
              <p className="text-white text-center lg:text-[1.4rem] font-normal leading-snug relative lg:-top-6 px-2 lg:px-0 -top-6  tracking-wide">Linha de maquiagens da Hyllua Beauty foi criada para ir além da estética: ela une cuidado com a pele, tecnologia dermocosmética e performance profissional em cada fórmula. Pensada especialmente para mulheres que buscam praticidade no dia a dia sem abrir mão da saúde da pele, cada item entrega beleza imediata e tratamento contínuo.</p>
            </div>
            {/* Card Eau de Parfum */}
            <div className="bg-transparent border-2 lg:mb-18 mb-4 border-white rounded-xl  lg:px-12 py-6 flex flex-col items-center justify-center lg:min-h-[270px]">
              <span className="bg-white text-[#e49390] font-bold italic rounded-full px-4 lg:px-8 py-1 text-[1rem] lg:text-[1.3rem] mb-4 relative lg:-top-24 -top-9 shadow-md titulo-scotch">Eau de Parfum</span>
              <p className="text-white text-center lg:text-[1.4rem] font-normal leading-snug relative lg:-top-6 px-2 lg:px-0 -top-6  tracking-wide">A linha de Eau de Parfum da Hyllua Beauty foi criada para envolver, marcar presença e eternizar momentos. Cada fragrância é uma composição autoral e sofisticada, pensada para traduzir em aroma tudo o que a marca representa: força, delicadeza, feminilidade e encantamento. Mais do que perfumes, são poções sensoriais que despertam memórias, refletem estados de espírito e revelam sua presença com elegância e personalidade.</p>
            </div>
          </div>
        </div>
      </section>


      
          {/* Section 4 - Hyllua Beauty Cuida da sua pele */}
          <section className="w-full bg-[#eae8ea] py-14 lg:py-18 flex items-center justify-center">
            <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center lg:gap-10 gap-8 px-6 lg:px-16">
              {/* Textos */}
              <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                <h2 className="titulo-scotch text-[#e49390] text-[1.5rem] lg:text-[2rem] font-medium lg:leading-tight leading-none lg:mb-2">
                  Hyllua <span className="italic font-semibold text-[1.7rem] lg:text-[2.2rem]">Beauty</span><br className="" /> Cuida da sua pele
                </h2>
               
              </div>

              <div>
                 <p className="text-[#e49390] text-[1.3rem] lg:text-[1.3rem] text-center leading-tight font-normal tracking-wider mb-8 lg:mt-4">
                  Fórmulas criadas com<br /> ciência, carinho e um<br />
                  <span className="font-bold">toque de encanto.</span>
                </p>
              </div>
              {/* Botão */}
              <div className="flex-1 flex items-center justify-center lg:justify-end w-full px-12 lg:px-0">
                <a href="#" className="bg-[#e49390] hover:bg-[#d86c6c] text-white font-normal lg:py-5 py-2 lg:px-6 px-4 rounded-tl-full rounded-tr-full rounded-bl-full text-[0.9rem] lg:text-[1rem] transition-colors duration-200 w-full lg:w-auto text-center">
                  ENTRAR NO REINO DAS FADAS
                </a>
              </div>
            </div>
          </section>
    </main>
  )
}

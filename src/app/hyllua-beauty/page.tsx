// src/app/hyllua-beauty/page.tsx

import Image from "next/image";

export default function HylluaPage() {
  return (


    <main>



      {/* Section Hero Hyllua Beauty */}
      <section className="w-full  bg-[url('/images/beauty/background-hero-hyllua-beauty.webp')] bg-cover bg-center flex items-center justify-center relative overflow-hidden  ">
        {/* Logo por cima do fundo e atrás do conteúdo */}
        <div className="absolute lg:-left-20 inset-0 z-0 pointer-events-none select-none flex items-end justify-center bg-gradient-to-r from-opacity-100 via-opacity-20 to-opacity-100">
          <Image
            src="/images/beauty/logo-hyllua-beauty-hero33.webp"
            alt="Logo Hyllua Beauty de fundo"
            width={900}
            height={400}
            className="object-contain  w-[88%]  "
            priority
          />
          
        </div>
  <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-0 lg:px-16 pt-12 lg:pt-38 gap-10 relative z-10">
          {/* Textos à esquerda */}
          <div className="flex-1 flex flex-col  justify-center items-center lg:items-end z-10 relative top-20 lg:-top-8 lg:-right-2">
            <div className="text-right">
            <h1 className="titulo-scotch text-[#fff] text-[1.4rem] lg:text-[2.1rem] font-normal italic relative text-left -bottom-2 lg:-bottom-5">Do amor pela pele</h1>
            <h2 className="titulo-scotch text-[#fff] text-[4.4rem] lg:text-[6.7rem] font-bold italic leading-none relative ">ao reino</h2>
            <h3 className="titulo-scotch text-[#fff] text-[1.55rem] lg:text-[2.4rem] font-medium italic mb-3 relative -top-2 lg:-top-1.5 ">das fadas</h3>
            <p className="text-[#fff] text-[17px] lg:text-[1.25rem] font-light mb-8 relative -top-4 lg:-top-0 lg:-bottom-2">Onde cada fórmula <span className="font-semibold">é mágica.</span></p>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 lg:gap-10 mt-2 text-center relative lg:top-7 -top-7">

              <a href="https://www.hylluabeauty.com.br/" target="_blank" rel="noopener noreferrer" className="bg-[#ed8c7d] hover:bg-[#d86c6c] text-white font-semibold lg:py-2 py-2.5 lg:px-4.5 px-5 lg:rounded-full rounded-[0.5rem] text-[12px] lg:text-[0.75rem] transition-colors duration-200">CONHEÇA O REINO DAS FADAS</a>
              <a href="https://www.instagram.com/hylluabeauty/" target="_blank" rel="noopener noreferrer" className="bg-[#ed8c7d] hover:bg-[#d86c6c] text-white font-semibold lg:py-2 py-2.5 lg:px-4.5 px-5 lg:rounded-full rounded-[0.5rem] text-[12px] lg:text-[0.75rem] transition-colors duration-200">INSTAGRAM DAS FADINHAS</a>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-1 flex items-center justify-center relative z-10 lg:-left-4 top-0 lg:top-3 mt-8 lg:mt-0">
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
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8 lg:pb-10 pb-0 pt-16 lg:pt-0 items-center">
          {/* Textos à esquerda */}
          <div className="relative z-10 flex flex-col items-center lg:items-start lg:text-left lg:pt-24 lg:-top-6 lg:-right-6 px-2 lg:px-0">
            <h2 className="titulo-scotch text-[#e49390] text-[36px] lg:text-[2.8rem] font-medium lg:leading-none  leading-[1] lg:mb-6 mb-10">
              Como tudo<br />
              <span className="font-bold italic">começou...</span>
            </h2>
            <p className="text-[#e49390] text-[15px] lg:text-[16px] lg:leading-[1.5] tracking-[0.13em] leading-[1.03] max-w-[34rem] lg:mb-6 mb-6 lg:w-[24rem]">
              <span className="font-semibold">Hyllua Beauty</span>, nasceu da paixão da Dra.
              Hyllua Husein por cuidar da pele de forma
              científica e encantadora.
            </p> 
            <p className="text-[#e49390] text-[15px] lg:text-[16px] lg:leading-[1.5] leading-[1.02] tracking-[0.13em] lg:mb-4 mb-6 lg:w-[24rem] ">
              Após anos de pesquisa, desenvolvimento<br className="hidden lg:block"/> e aplicação prática em suas pacientes,<br className="hidden lg:block"/>
              ela criou uma linha de dermocosméticos<br className="hidden lg:block"/>
              que une alta performance e tecnologia<br className="hidden lg:block"/>
              avançada com a delicadeza de<br className="hidden lg:block"/>
              um toque mágico.
            </p>
            <div className="lg:mt-8 mt-2 border border-[#e49390] text-[#e49390]  lg:px-4 px-2 lg:py-3 py-2.5 text-center lg:w-[23rem] mb-8 lg:mb-0">
              <p className="lg:text-[14px] text-[13px] leading-[1.15] lg:leading-relaxed font-semibold ">
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
            src="/images/beauty/foto-secao-2-hyllua-beauty.webp"
            alt="Hyllua segurando produto"
            width={1800}
            height={1500}
            className="w-full h-auto object-contain object-right"
            priority
          />
        </div>
      </section>



      {/* Section 3 - Cuidados completos */}
      <section className="relative w-full overflow-hidden bg-[url('/images/beauty/background-secao-3-hyllua-beauty.webp')] bg-cover bg-center py-8 lg:pt-20 lg:pb-0 flex items-center justify-center ">
        <div className="max-w-[46rem] w-full mx-auto px-14 lg:px-0">
          <h2 className="text-white text-[17px] lg:text-[1.45rem] font-normal text-center lg:mb-20 mb-10 titulo-scotch leading-[1.1]">
            A linha oferece<br className="block lg:hidden" /> <span className="italic font-bold lg:text-[1.8rem] text-[28px]  ">cuidados completos</span><br className="block lg:hidden" /> em diferentes categorias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8 px-0 ">


            {/* Card Skincare */}
            <div className="bg-transparent border-2 lg:mb-10 mb-0 border-white lg:rounded-xl rounded-[0.6rem] lg:px-8 px-2 py-4 lg:py-0 flex flex-col items-center justify-center lg:min-h-[200px] lg:h-[285px]  relative ">
              <span className="bg-white text-[#e49390] font-semibold rounded-full  px-3 lg:px-6 lg:py-0.5 py-1 text-[16px] lg:text-[1.35rem] mb-4 absolute lg:-top-4 -top-3 titulo-scotch">Skincare</span>
              <p className="text-white text-center lg:text-[18px] text-[0.98rem] font-light lg:leading-[1.5] leading-none relative lg:top-0 px-2 lg:px-0 top-1 py-4 lg:py-0 tracking-wide">Produtos formulados para restaurar a vitalidade e o equilíbrio da pele.
Cada produto combina tecnologia e sensorialidade para proporcionar hidratação profunda, luminosidade e suavidade ao toque.
</p>
            </div>

            {/* Card Cuidados corporais */}
            <div className="bg-transparent border-2 lg:mb-10 mb-0 border-white lg:rounded-xl rounded-[0.6rem] lg:px-8  py-8 flex flex-col items-center justify-center lg:min-h-[200px ] lg:h-[285px]  relative">
              <span className="bg-white text-[#e49390] font-semibold rounded-full px-3 lg:px-6 lg:py-0.5 py-1 text-[16px] lg:text-[1.25rem] mb-4 absolute lg:-top-4 -top-3 titulo-scotch">Cuidados corporais</span>
              <p className="text-white text-center lg:text-[18px] text-[0.95rem] font-light lg:leading-[1.5] leading-[1.05] relative lg:top-2 px-2 lg:px-0 top-2  tracking-wide py-4 lg:py-0">Texturas envolventes e fragrâncias elegantes que transformam o cuidado diário em um gesto de bem-estar.
Promovem nutrição intensa, firmeza e um toque acetinado à pele.

</p>
            </div>


            {/* Card Maquiagens */}
            <div className="bg-transparent border-2 lg:mb-18 mb-2 border-white rounded-xl px-2 lg:px-8 py-6 flex flex-col items-center justify-center lg:min-h-[270px] lg:h-[285px]  relative">
              <span className="bg-white text-[#e49390] font-semibold rounded-full px-3 lg:px-6 lg:py-0.5 py-1 text-[16px] lg:text-[1.3rem] mb-4 absolute lg:-top-4 -top-4 titulo-scotch">Maquiagens</span>
              <p className="text-white text-center lg:text-[18px] text-[0.95rem] font-light lg:leading-[1.5] leading-[1] relative lg:top-1 px-2 lg:px-0 top-1  tracking-wide py-4 lg:py-0">Desenvolvidas para valorizar a beleza natural com sofisticação e conforto.
Pigmentos finos e acabamento impecável revelam uma aparência radiante, leve e atemporal.
</p>
            </div>


            {/* Card Eau de Parfum */}
            <div className="bg-transparent border-2 lg:mb-18 mb-4 border-white rounded-xl  lg:px-8 py-6 flex flex-col items-center justify-center lg:min-h-[270px] lg:h-[285px] relative">


              <span className="bg-white text-[#e49390] font-semibold rounded-full px-3 lg:px-7 lg:py-0.5 py-1 text-[16px] lg:text-[1.3rem] mb-4 absolute lg:-top-4 -top-4 titulo-scotch">Eau de Parfum</span>
              <p className="text-white text-center lg:text-[18px] text-[0.92rem] font-light lg:leading-[1.5] leading-[1.1] relative lg:top-2 px-4 lg:px-0 top-2   tracking-wide py-4 lg:py-0">Criações olfativas que traduzem personalidade e presença.
Notas refinadas e harmoniosas que despertam elegância, encantamento e memórias inesquecíveis.</p>
            </div>
          </div>
        </div>
      </section>


      
          {/* Section 4 - Hyllua Beauty Cuida da sua pele */}
          <section className="w-full bg-[#eae8ea] py-16 lg:py-20 flex items-center justify-center ">
            <div className="max-w-[65.5rem] w-full mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center lg:gap-10 gap-8 px-6 lg:px-16">
              {/* Textos */}
              <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                <h2 className="titulo-scotch text-[#e49390] text-[28px] lg:text-[2.1rem] font-medium lg:leading-none leading-none lg:mb-2 mb-2 ">
                  Hyllua <span className="italic font-semibold text-[28px] lg:text-[2.3rem]">Beauty</span><br className="" /> Cuida da sua pele
                </h2>
               
              </div>

              <div>
                 <p className="text-[#e49390] text-[18px] lg:text-[20px] text-center leading-none lg:leading-[1.15] font-light tracking-[2.5px] mb-0 lg:mt-4 relative lg:-top-3  lg:-right-4 -top-2.5">
                  Fórmulas criadas com<br /> ciência, carinho e um<br />
                  <span className="font-semibold">toque de encanto.</span>
                </p>
              </div>
              {/* Botão */}
              <div className="flex-1 flex items-center justify-center lg:justify-end w-full px-12 lg:px-0 relative -top-2 lg:top-0">
                <a href="https://www.hylluabeauty.com.br/" className="bg-[#e49390] hover:bg-[#d86c6c] text-white font-normal lg:py-5 py-5 lg:px-6 px-2 rounded-tl-full rounded-tr-full rounded-bl-full text-[14px] lg:text-[0.9rem] transition-colors duration-300 w-full lg:w-auto text-center lg:-right-2 lg:-top-1 relative">
                  ENTRAR NO REINO DAS FADAS
                </a>
              </div>
            </div>
          </section>
    </main>
  )
}

import Image from "next/image";
import Link from "next/link";
// Fetch posts from WordPress API
async function getLatestPosts() {
  try {
    const res = await fetch(
      "https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=3&_embed",
      { next: { revalidate: 60 } }
    );
    return res.ok ? await res.json() : [];
  } catch (error) {
    return [];
  }
}

export default async function HomePage() {
  const posts = await getLatestPosts();
  return (
    <>
      <main>




        <section className=" bg-[url('/images/index/BACKGROUND-HERO-PÁGINA-INICIAL.webp')] bg-cover bg-left lg:bg-center relative overflow-hidden flex items-center z-10  
         lg:pb-8">
          {/* Overlay para melhor legibilidade */}
          <div className="absolute inset-0"></div>
          
          {/* Símbolo médico grande à direita */}
          <div className="absolute -top-12 -right-0 lg:right-4 lg:-top-0 lg:w-1/2 lg:h-[105%] h-[120%] ">
            <Image
              src="/images/index/simbolo-hero.webp"
              alt="Símbolo médico"
              width={600}
              height={600}
              className="w-full h-full object-contain object-right"
              priority
            />
          </div>
          
          <div className="container max-w-4xl mx-auto  pt-50 pb-38 lg:pt-36 lg:pb-26 relative  z-10">
            <div className="relative px-8 top-3 lg:px-0 lg:top-12 lg:-left-[10px]">
              {/* Texto principal */}
              <h1 className="titulo-scotch font-medium italic text-[45px] lg:text-[65px] text-[#b89c6c] mb-8 lg:mb-10 leading-[1] tracking-wide">
                Clínica<br />
                Hyllua
                Husein
              </h1>
              <p className="text-[26px] lg:text-[2.2rem] tracking-wide text-[#b89c6c] mb-26 lg:mb-14 font-light leading-[0.9] relative ">
                Onde saúde e estética<br />
                <em className="font-semibold italic">se completam.</em>
              </p>
             <Link href="/clinica">
  <button className="px-5 py-1.5 lg:px-6.5 lg:py-2 border-2 border-[#b89c6c] text-[#b89c6c] rounded-full font-semibold italic hover:bg-[#b89c6c] hover:text-[#f7eccd] hover:cursor-pointer transition-all duration-300 lg:text-[19px] text-[19px] tracking-[0.09rem]">
    Conheça a clínica
  </button>
</Link>
            </div>
          </div>
        </section>

        {/* Seção Logos */}
        <section className="bg-[#b89c6c] py-1.5 relative z-90 ">
          <div className="container max-w-full mx-auto px-1 lg:px-6">
            <div className="flex justify-between items-center overflow-hidden gap-2">
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={24}
                className="h-4 lg:h-6 w-auto object-contain hidden lg:block"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-4 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-4 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-4 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-4 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={80}
                height={24}
                className="h-6 w-auto object-contain hidden lg:block"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={80}
                height={24}
                className="h-6 w-auto object-contain hidden lg:block"
              />
            </div>
          </div>
        </section>

        {/* Seção Cuidamos de você */}
        <section className="bg-[#f1edec] relative lg:-top-7 ">
          <div className="container max-w-7xl mx-auto px-6 ">
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 items-start pt-6 lg:pt-0">
              {/* Mobile: Texto primeiro, Desktop: Imagem primeiro */}
              <div className="order-2 lg:order-1 lg:col-span-2 relative">
                <Image
                  src="/images/index/FOTO-HYLLUA-SEÇÃO-2-PÁGINA-INICIAL.webp"
                  alt="Profissional da clínica"
                  width={1066}
                  height={1541}
                  className="rounded-lg w-full h-auto relative -top-8 -right-3 lg:-top-15 lg:-left-6 lg:-right-0 lg:scale-90 scale-110"
                />
              </div>
              
              {/* Mobile: Imagem segundo, Desktop: Texto segundo */}
              <div className="order-1 lg:order-2 lg:col-span-1  relative lg:mt-33 lg:-ml-50 px-0 ">
                <div className="flex gap-4 lg:block  ">
                  {/* Título */}
                  <div className="flex-1 lg:w-[26rem] relative -left-2 lg:-left-0 top-3 lg:top-0">
                    <h2 className="titulo-scotch  font-black italic text-[21px] lg:text-[2.5rem] text-[#b89c6c] mb-0 lg:mb-23 lg:leading-[0.95] leading-[1] text-center relative " >
                      Cuidamos<br className="block lg:hidden" /> <span className="text-[28px] lg:text-5xl">de você</span><br className="block lg:hidden" /> por inteiro, <span className="font-normal not-italic">não em<br className="block lg:hidden" /> partes.</span>
                    </h2>
                  </div>
                  
                  {/* Box com ícone */}
                  <div className="flex-1  ">
                    <div className=" rounded-2xl lg:rounded-4xl px-4 py-2 lg:py-[28px] lg:px-4 mb-6 relative lg:w-[25rem] lg:-top-3 lg:left-2 -left-3 border-2 border-[#b89c6c]">
                      <div className="absolute -top-2 -right-3 lg:-top-7 lg:-right-6 w-7 h-7 lg:w-18 lg:h-18  rounded-full flex items-center justify-center ">
                        <Image
  src="/images/index/simbolo-secao-2-inicial11.webp"
  alt="Logo Hyllua"
  width={200}
  height={200}
  className="object-contain w-auto h-auto max-w-[28px] lg:max-w-[72px]"
/>
                      </div>
                      <p className="text-[#b89c6c] lg:text-[1.5rem] lg:leading-[1.65] leading-[1.1] py-1 lg:py-0  text-[0.85rem] text-center ">
                        Transformamos a<br /> experiência estética, <span className="font-semibold italictitulo-stoch">unindo especialidades,</span> ampliando resultados e tocando o que<br className="hidden lg:block"/> é <span className="font-semibold italic titulo-stoch">visível e essencial.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Diferenciais */}
        <section className="  lg:pt-18 lg:pb-0 text-[#b89c6c] relative lg:-mt-[43.5rem] -mt-[14.5rem] ">
          {/* Imagem de fundo com curva */}
          <div className="w-screen h-20 lg:h-66 relative">
              <Image
                src="/images/index/formas-secao-2.webp"
                alt="Curva decorativa"
                width={1920}
                height={800}
                className="w-full object-cover object-top "
              />
          </div>
          
          <div className="  bg-[#b89c6c] mx-auto lg:px-6 px-4  text-center relative z-10  lg:-mt-8">
            <p className="text-[14px] lg:text-[25px] titulo-scotch secundary-color font-light lg:w-[36rem] w-[20rem] m-auto leading-tight relative -top-3 lg:-top-18 mb-4
            
            lg:mb-4 lg:-left-2 ">
              O verdadeiro resultado não está no detalhe isolado
              <span className="font-semibold titulo-scotch italic lg:text-[27px]"> mas na harmonia do conjunto.</span>
            </p>

            <div className="grid grid-cols-1 lg:flex lg:flex-nowrap gap-0 lg:gap-8 mb-0 lg:mb-16 m-auto relative lg:-top-6 justify-center items-center">
              <div className="flex items-center justify-center text-left gap-1 relative -left-24 -top-2 lg:-left-1 lg:-top-1 ">
                <div className="lg:w-7 lg:h-7 w-4 h-4  rounded-full flex items-center justify-center">
                  <Image src="/images/index/check.webp" alt="Check" width={23} height={23} />
                </div>
                <p className="lg:text-[0.9rem] text-[0.65rem] secundary-color m-0 border-b-2 border-[#f7eccd] font-light pb-1">Visão <span className="font-semibold italic">multidisciplinar</span></p>
              </div>
              <div className="flex items-center justify-center text-left gap-1 relative -right-17 -top-8 lg:-left-2 lg:-top-1">
                <div className="lg:w-7 lg:h-7 w-4 h-4  rounded-full flex items-center justify-center ">
                  <Image src="/images/index/check.webp" alt="Check" width={23} height={23} />
                </div>
                <p className="lg:text-[0.90rem] text-[0.66rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1 font-light  whitespace-nowrap ">Protocolos <span className="font-semibold italic">autorais e exclusivos</span></p>
              </div>
              <div className="flex items-center justify-center text-left gap-1 relative -left-17 -top-5 lg:-left-1 lg:-top-1">
                <div className="lg:w-7 lg:h-7 w-4 h-4  rounded-full flex items-center justify-center ">
                  <Image src="/images/index/check.webp" alt="Check" width={23} height={23} />
                </div>
                <p className="lg:text-[0.9rem] text-[0.65rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1 font-light">Equipe com <span className="font-semibold italic ">certificação internacional</span></p>
              </div>
              <div className="flex items-center justify-center text-left gap-1 relative -right-28 -top-11 lg:right-0 lg:-top-1">
                <div className="lg:w-7 lg:h-7 w-4 h-4  rounded-full flex items-center justify-center ">
                  <Image src="/images/index/check.webp" alt="Check" width={23} height={23} />
                </div>
                <p className="lg:text-[0.90rem] text-[0.65rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1 font-light ">Cuidado <span className="font-semibold italic">integrado</span></p>
              </div>
            </div>
            <Link href="/clinica">
            <button className="lg:px-4 px-2 lg:py-[8px] py-1 mb-10 lg:mb-8 bg-[#f7eccd] text-[#b89c6c] lg:text-[16px] tracking-[0.1rem] text-[0.9rem] rounded-[18px] font-normal uppercase   duration-300 relative -top-3 lg:-top-6.5 lg:-left-3 hover:cursor-pointer hover:-translate-y-0.5 transition ">
              CONHEÇA A CLÍNICA
            </button></Link> 
          </div>   
        </section>

        {/* Seção Ensino */}
        <section className="py-0  bg-white text-white relative overflow-hidden ">
          <div className="w-full flex flex-col lg:flex-row  lg:h-[750px]">
            {/* Esquerda: textos com imagem de fundo */}
            <div
  className="relative w-full lg:w-1/2 flex items-start justify-center px-4 bg-pos-mobile bg-pos-desktop"
  style={{
    backgroundImage: "url('/images/index/BACKGROUND-SEÇÃO-4-PÁGINA-INICIAL.jpg')",
    backgroundSize: 'cover'
  }}
>
              <div className="z-10 w-full max-w-lg mt-12 lg:mt-24 relative left-15 -top-8 lg:left-28 lg:top-14.5">
                <div className="flex relative lg:items-start gap-4 mb-8 mt-7 lg:mt-0 lg:ml-6 ">
                  <Image src="/images/index/objeto.webp" alt="Ícone Ensino" className="lg:w-[20px] w-[15px] h-[140px] lg:h-full relative -right-0 lg:-right-0" width={40} height={40} />
                  <div>
                    <h2 className="text-[20px] lg:text-[1.8rem] font-medium italic leading-normal titulo-scotch lg:mb-7 mb-5 secundary-color lg:w-[20rem] w-[15rem] ">
                      Compartilhamos o que vivemos na prática.
                    </h2>
                    <p className="leading-[1.15] secundary-color font-light lg:text-[1.48rem] text-[17px] relative mb-4 lg:mb-0 lg:top-[1px]">
                      Transformamos <span className="font-medium">experiências</span><br />
 <span className="font-medium">em formação</span>, para quem quer<br />
<span className="font-medium">evoluir com propósito</span>.
                    </p>
                  </div>
                </div>
                <p className="text-[17px] lg:text-[1.03rem] lg:mb-17 mb-6 secundary-color lg:leading-tight leading-[1.3] lg:w-[19rem] w-[13rem] relative left-8 font-light -top-6 lg:left-14 lg:top-0">
                  Nossos protocolos autorais <span className="font-semibold titulo-scotch italic">Wonderfull Face</span> e a técnica <span className="font-semibold titulo-scotch italic">Lapidare</span>, nasceram da prática<br className="block lg:hidden" /> diária 
                  com pacientes reais e hoje são <span className="font-semibold titulo-scotch italic">referência entre profissionais</span> que buscam um cuidado mais completo, 
                  ético e <span className="font-semibold titulo-scotch italic">transformador.</span>
                </p>
                <Link href="/ensino">
                  <button className="ml-6 mb-0 lg:mb-0 lg:ml-14 lg:px-5 px-4 py-1.5 lg:py-2.5 lg:text-[0.9rem] text-[0.75rem] bg-[#f7eccd] text-[#151f40]  rounded-full font-semibold uppercase tracking-widest hover:bg-[#a08a5f] transition-colors duration-300 hover:cursor-pointer relative -top-4 lg:-top-0">
                    CONHEÇA NOSSO ENSINO
                  </button>
                </Link>
              </div>
            </div>
            {/* Direita: apenas imagem de fundo */}
            <div className="relative w-full lg:w-1/2 h-full min-h-[500px]">
              <div className="absolute inset-0" style={{backgroundImage: "url('/images/index/FOTO-HYLLUA-SEÇÃO-4-PÁGINA-INICIAL.webp')", backgroundSize: 'cover', backgroundPosition: 'top'}}></div>
            </div>
          </div>
        </section>

        {/* Seção Blog */}
        <section className="lg:pt-28 lg:pb-36 py-10 relative overflow-hidden ">
          <div className="absolute inset-0 w-full h-full bg-[url('/images/index/BACKGROUND-SESSÃO-BLOG-PÁGINA-INICIAL.webp')] bg-cover bg-center "></div>
          <div className="container max-w-[62rem] mx-auto px-22 lg:px-6 relative z-10">
            <h2 className="text-center text-xl lg:text-[26px] text-[#b89c6c] lg:mb-16 mb-4 font-light relative  lg:-top-0  lg:w-[100%] w-[13rem] mx-auto lg:-left-1">
              Leia os últimos posts <span className="lg:text-[44px] text-[30px] titulo-scotch font-semibold italic relative lg:-right-2">do nosso blog</span>
            </h2>
            <div className="relative lg:top-7 z-10 before:lg:content-[''] before:lg:absolute before:lg:-left-20 before:lg:right-0 before:lg:top-36 before:lg:mx-auto before:lg:w-[1115px] before:lg:h-[252px] before:lg:rounded-2xl before:lg:border-1 before:lg:border-[#b89c6c] before:lg:z-0 before:lg:pointer-events-none">
              <div className="grid lg:grid-cols-3 gap-0 relative z-10">
                {posts.length === 0 ? (
                  <div className="text-center text-red-500 col-span-3">Erro ao carregar posts do blog.</div>
                ) : (
                  posts.map((post: any) => {
                    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                    return (
                      <div key={post.id} className=" rounded-2xl flex flex-col items-center my-4 lg:my-0 " style={{ minWidth: 0 }}>
                        <div className="lg:w-[300px] lg:h-[290px] rounded-4xl overflow-hidden mb-2 flex items-center justify-center border border-[#e7dcc2]">
                          <Image
                            src={featuredImage || "/placeholder.svg"}
                            alt={post.title.rendered}
                            width={270}
                            height={270}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className=" w-[11rem] lg:w-[14rem] text-center text-[0.95rem] font-semibold lg:py-[0.3rem] lg:pt-2 lg:text-[1.2rem]  titulo-scotch text-[#b89c6c] mb-0 line-clamp-2" style={{display: 'webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <a href={`/blog/${post.slug}`} className="w-full mt-2 px-0">
                          <button className="mx-auto px-3 flex items-center justify-center gap-2 bg-[#b89c6c] text-white lg:px-5.5 lg:py-2.5 py-1.5 rounded-xl lg:text-[14px] text-[0.85rem] uppercase tracking-wide hover:bg-[#a08a5f] transition-colors duration-300 hover:cursor-pointer">
                            LER POST DO BLOG
                            <span
                              className="ml-[14px] border-2 border-solid border-white rounded-full w-[23px] h-[23px] flex items-center justify-center font-bold "
                              style={{ minWidth: '23px', minHeight: '23px' }}
                            >
                              →
                            </span>
                          </button>
                        </a>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Seção Final */}
        <section className="py-10 bg-[#f7eccd] text-[#b89c6c] text-center ">
          <div className="container max-w-4xl mx-auto px-6">
            <p className="text-[19px] lg:text-2xl font-normal">
              <span className="titulo-scotch font-semibold italic">Na Clínica Hyllua Husein,</span> o cuidado é integrado, o resultado é completo.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
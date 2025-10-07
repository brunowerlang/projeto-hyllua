

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
        <section className=" bg-[url('/images/index/BACKGROUND-HERO-PÁGINA-INICIAL.webp')] bg-cover bg-left lg:bg-center relative overflow-hidden flex items-center">
          {/* Overlay para melhor legibilidade */}
          <div className="absolute inset-0"></div>
          
          {/* Símbolo médico grande à direita */}
          <div className="absolute top-0 -right-48 lg:right-4 lg:-top-0 lg:w-1/2 h-[100%] ">
            <Image
              src="/images/index/SÍMBOLO-COM-EFEITO-HERO-PÁGINA-INICIAL.webp"
              alt="Símbolo médico"
              width={600}
              height={600}
              className="w-full h-full object-contain object-right"
              priority
            />
          </div>
          
          <div className="container max-w-4xl mx-auto  lg:pt-36 lg:pb-26 relative  z-10">
            <div className="relative px-8 top-6 lg:px-0 lg:top-8 lg:left-4">
              {/* Texto principal */}
              <h1 className="titulo-scotch font-medium italic text-[40px] lg:text-[60px] text-[#b89c6c] mb-10 leading-[1]">
                Clínica<br />
                Hyllua
                Husein
              </h1>
              <p className="text-2xl lg:text-[2rem] text-[#b89c6c] mb-20 lg:mb-14 font-light leading-none relative ">
                Onde saúde e estética<br />
                <em className="font-semibold italic">se completam.</em>
              </p>
             <Link href="/clinica">
  <button className="px-2 py-1 lg:px-6 lg:py-2 border-2 border-[#b89c6c] text-[#b89c6c] rounded-full font-semibold italic tracking-wide hover:bg-[#b89c6c] hover:text-[#f7eccd] hover:cursor-pointer transition-all duration-300 text-[18px]">
    Conheça a clínica
  </button>
</Link>
            </div>
          </div>
        </section>

        {/* Seção Logos */}
        <section className="bg-[#b89c6c] py-2">
          <div className="container max-w-full mx-auto px-1 lg:px-6">
            <div className="flex justify-between items-center overflow-hidden gap-2">
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={24}
                className="h-3 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-3 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-3 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-3 lg:h-6 w-auto object-contain"
              />
              <Image
                src="/images/index/logo-faixa.webp"
                alt="Logo Hyllua Husein"
                width={60}
                height={18}
                className="h-3 lg:h-6 w-auto object-contain"
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
        <section className="bg-[#f1edec]">
          <div className="container max-w-7xl mx-auto px-6 ">
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 items-start pt-12 lg:pt-0">
              {/* Mobile: Texto primeiro, Desktop: Imagem primeiro */}
              <div className="order-2 lg:order-1 lg:col-span-2 relative">
                <Image
                  src="/images/index/FOTO-HYLLUA-SEÇÃO-2-PÁGINA-INICIAL.webp"
                  alt="Profissional da clínica"
                  width={1066}
                  height={1541}
                  className="rounded-lg w-full h-auto relative -top-12 -right-3 lg:-top-16 lg:-left-8 lg:-right-0 lg:scale-95 scale-110"
                />
              </div>
              
              {/* Mobile: Imagem segundo, Desktop: Texto segundo */}
              <div className="order-1 lg:order-2 lg:col-span-1 relative lg:mt-25 lg:-ml-50 px-0 ">
                <div className="flex gap-4 lg:block  ">
                  {/* Título */}
                  <div className="flex-1 lg:w-[26rem]">
                    <h2 className="titulo-scotch  font-black italic text-2xl lg:text-[2.5rem] text-[#b89c6c] mb-0 lg:mb-20 leading-[1] text-center relative " >
                      Cuidamos <span className="text-4xl lg:text-5xl">de você</span> por inteiro, <span className="font-normal not-italic">não em partes.</span>
                    </h2>
                  </div>
                  
                  {/* Box com ícone */}
                  <div className="flex-1  lg:w-0">
                    <div className=" rounded-4xl px-5 py-2 lg:py-5 lg:px-13 mb-6 relative lg:w-[25rem]  lg:left-3 border-2 border-[#b89c6c]">
                      <div className="absolute -top-2 -right-3 lg:-top-9 lg:-right-6 w-9 h-9 lg:w-17 lg:h-17 bg-[#b89c6c] rounded-full flex items-center justify-center ">
                        <Image src="/images/index/VETOR-SÍMBOLO-SEÇÃO-2-PÁGINA-INICIAL.webp" alt="Logo Hyllua" width={24} height={24} className="lg:w-16 lg:h-16 w-9 h-9 object-contain" />
                      </div>
                      <p className="text-[#b89c6c] lg:text-[1.5rem] lg:leading-[1.7] text-[0.8rem] text-center ">
                        Transformamos a<br /> experiência estética, <span className="font-semibold italic titulo-stoch">unindo especialidades,</span> ampliando resultados e tocando o que é <span className="font-semibold italic titulo-stoch">visível e essencial.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Diferenciais */}
        <section className="  lg:pt-16 lg:pb-14 text-[#b89c6c] relative lg:-mt-[42rem] -mt-[16rem]">
          {/* Imagem de fundo com curva */}
          <div className="w-screen h-20 lg:h-60 lg:h-80 relative">
              <Image
                src="/images/index/VETOR-SEÇÃO-3-PÁGINA-INICIAL.png"
                alt="Curva decorativa"
                width={1920}
                height={800}
                className="w-full object-cover object-top  "
              />
          </div>
          
          <div className="container  mx-auto lg:px-6 px-4  text-center relative z-10 bg-[#b89c6c]">
            <p className="text-[16px] lg:text-[26px] titulo-scotch secundary-color font-light lg:w-[36rem] m-auto leading-tight relative lg:-top-12 mb-10 lg:mb-0">
              O verdadeiro resultado não está no detalhe< br/> isolado
              <span className="font-semibold titulo-scotch italic"> mas na harmonia do conjunto</span>
            </p>

            <div className="grid grid-cols-1 lg:flex lg:flex-nowrap gap-0 lg:gap-8 mb-6 lg:mb-16 m-auto relative lg:-bottom-1 justify-center items-center">
              <div className="flex items-center justify-center text-left gap-1 relative -left-27 lg:left-0 ">
                <div className="w-6 h-6  rounded-full flex items-center justify-center">
                  <Image src="/images/index/check.webp" alt="Check" width={15} height={15} />
                </div>
                <p className="lg:text-[0.9rem] text-[0.7rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1">Visão <span className="font-semibold italic">multidisciplinar</span></p>
              </div>
              <div className="flex items-center justify-center text-left gap-1 relative -right-19 -top-6 lg:right-0 lg:top-0">
                <div className="w-6 h-6  rounded-full flex items-center justify-center ">
                  <Image src="/images/index/check.webp" alt="Check" width={15} height={15} />
                </div>
                <p className="lg:text-[0.9rem] text-[0.7rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1 whitespace-nowrap ">Protocolos <span className="font-semibold italic">autorais e exclusivos</span></p>
              </div>
              <div className="flex items-center justify-center text-left gap-1 relative -left-19 lg:left-0 ">
                <div className="w-6 h-6  rounded-full flex items-center justify-center ">
                  <Image src="/images/index/check.webp" alt="Check" width={15} height={15} />
                </div>
                <p className="lg:text-[0.9rem] text-[0.7rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1 ">Equipe com <span className="font-semibold italic ">certificação internacional</span></p>
              </div>
              <div className="flex items-center justify-center text-left gap-1 relative -right-30 -top-6 lg:right-0 lg:top-0">
                <div className="w-6 h-6  rounded-full flex items-center justify-center ">
                  <Image src="/images/index/check.webp" alt="Check" width={15} height={15} />
                </div>
                <p className="lg:text-[0.9rem] text-[0.7rem] secundary-color m-0 border-b-2 border-[#f7eccd] pb-1 ">Cuidado <span className="font-semibold italic">integrado</span></p>
              </div>
            </div>
            
            <button className="px-4 py-2 mb-10 lg:mb-8 bg-[#f7eccd] text-[#b89c6c] text-[1.1rem] rounded-3xl font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors duration-300">
              CONHEÇA A CLÍNICA
            </button>
          </div>
        </section>

        {/* Seção Ensino */}
        <section className="py-0  bg-white text-white relative overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row  lg:h-[750px]">
            {/* Esquerda: textos com imagem de fundo */}
            <div
  className="relative w-full lg:w-1/2 flex items-start justify-center px-4 bg-pos-mobile bg-pos-desktop"
  style={{
    backgroundImage: "url('/images/index/BACKGROUND-SEÇÃO-4-PÁGINA-INICIAL.jpg')",
    backgroundSize: 'cover'
  }}
>
              <div className="z-10 w-full max-w-lg text-white mt-12 lg:mt-24 relative left-12 lg:left-30 lg:top-13">
                <div className="flex  lg:items-start gap-4 mb-8 lg:ml-6">
                  <Image src="/images/index/objeto.webp" alt="Ícone Ensino" className="lg:w-[18px] w-[12px]" width={40} height={40} />
                  <div>
                    <h2 className="text-xl lg:text-[1.7rem] font-light italic titulo-scotch mb-7 secundary-color lg:w-[17rem] w-[15rem]">
                      Compartilhamos o que vivemos na prática.
                    </h2>
                    <p className="leading-tight secundary-color lg:text-[1.30rem]">
                      Transformamos <strong>experiências</strong><br />
                      em <strong>formação</strong>, para quem quer<br />
                      <strong>evoluir com propósito</strong>.
                    </p>
                  </div>
                </div>
                <p className="text-[0.95rem] lg:mb-16 mb-6 secundary-color leading-tight lg:w-[19rem] w-[15rem] relative left-7 lg:left-14">
                  Nossos protocolos autorais <span className="font-semibold titulo-scotch">Wonderfull Face</span> e a técnica <span className="font-semibold titulo-scotch">Lapidare</span>, nasceram da prática diária 
                  com pacientes reais e hoje são <span className="font-semibold titulo-scotch">referência entre profissionais</span> que buscam um cuidado mais completo, 
                  ético e <span className="font-semibold titulo-scotch">transformador.</span>
                </p>
                <button className=" ml-7 mb-12 lg:mb-0 lg:ml-14 px-4 py-2 text-[0.95rem] bg-[#f7eccd] text-[#151f40]  rounded-full font-medium uppercase tracking-wide hover:bg-[#a08a5f] transition-colors duration-300">
                  CONHEÇA NOSSO ENSINO
                </button>
              </div>
              <div className="absolute inset-0 bg-black/40 lg:bg-black/30"></div>
            </div>
            {/* Direita: apenas imagem de fundo */}
            <div className="relative w-full lg:w-1/2 h-full min-h-[500px]">
              <div className="absolute inset-0" style={{backgroundImage: "url('/images/index/FOTO-HYLLUA-SEÇÃO-4-PÁGINA-INICIAL.webp')", backgroundSize: 'cover', backgroundPosition: 'top'}}></div>
            </div>
          </div>
        </section>

        {/* Seção Blog */}
        <section className="lg:py-28 py-10 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[url('/images/index/BACKGROUND-SESSÃO-BLOG-PÁGINA-INICIAL.webp')] bg-cover bg-center "></div>
          <div className="container max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-center text-xl lg:text-2xl text-[#b89c6c] mb-12 font-light relative lg:-top-2 lg:-ml-4 lg:w-[100%] w-[13rem] mx-auto ">
              Leia os últimos posts <span className="lg:text-[40px] text-[30px] titulo-scotch font-semibold italic lg:-mr-4">do nosso blog</span>
            </h2>
            <div className="relative lg:top-7 z-10 before:lg:content-[''] before:lg:absolute before:lg:-left-12 before:lg:right-0 before:lg:top-36 before:lg:mx-auto before:lg:w-[950px] before:lg:h-[200px] before:lg:rounded-2xl before:lg:border-2 before:lg:border-[#b89c6c] before:lg:z-0 before:lg:pointer-events-none">
              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {posts.length === 0 ? (
                  <div className="text-center text-red-500 col-span-3">Erro ao carregar posts do blog.</div>
                ) : (
                  posts.map((post: any) => {
                    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                    return (
                      <div key={post.id} className=" rounded-2xl flex flex-col items-center " style={{ minWidth: 0 }}>
                        <div className="w-[270px] h-[270px] rounded-4xl overflow-hidden mb-2 flex items-center justify-center border border-[#e7dcc2]">
                          <Image
                            src={featuredImage || "/placeholder.svg"}
                            alt={post.title.rendered}
                            width={270}
                            height={270}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className=" w-[16rem] lg:w-0 text-center text-[1.1rem] lg:text-[1.15rem]  titulo-scotch text-[#b89c6c] mb-1 line-clamp-1" style={{display: 'webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'}} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <a href={`/blog/${post.slug}`} className="w-full mt-2 px-0">
                          <button className="mx-auto px-4 flex items-center justify-center gap-2 bg-[#b89c6c] text-white  py-2 rounded-xl text-[0.95rem] uppercase tracking-wide hover:bg-[#a08a5f] transition-colors duration-300 ">
                            LER POST DO BLOG
                            <span
                              className="ml-2 border border-solid border-white rounded-full w-[25px] h-[25px] flex items-center justify-center  "
                              style={{ minWidth: '25px', minHeight: '25px' }}
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
        <section className="py-10 bg-[#f7eccd] text-[#b89c6c] text-center">
          <div className="container max-w-4xl mx-auto px-6">
            <p className="text-[19px] lg:text-2xl font-light">
              <span className="titulo-scotch font-semibold italic">Na Clínica Hyllua Husein,</span> o cuidado é integrado, o resultado é completo.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
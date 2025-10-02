// src/app/ensino/page.tsx
import Image from "next/image";

export default function EnsinoPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
         {/* Hero Section Clínica */}
              <section className="relative w-full flex items-center overflow-hidden pt-15 ">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/clinica/background-hero-clinica.webp"
                    alt="Fundo decorativo clínica"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="container relative z-10 flex flex-col lg:flex-row items-end justify-between mx-auto pt-15 lg:pt-30">
                  {/* Texto */}
                  <div className="max-w-lg lg:ml-8 text-center lg:text-left flex-1 pb-12 relative lg:-top-6 lg:left-40">
                    <h1 className="text-[1.1rem] titulo-scotch lg:text-[1.8rem] font-normal text-[#7cae7e] mb-4 leading-none">
                      Você não é <br /> feita em partes<br />
                      <span className="text-[#7cae7e] font-bold text-[2.3rem] lg:text-[4rem] titulo-scotch italic ">e o seu <br /> cuidado</span><br />
                      <span className="text-[#7cae7e] lg:text-[2rem] text-[1.1rem] font-normal titulo-scotch block mt-3 lg:inline lg:mt-0">também não <br /> deveria ser.</span>
                    </h1>
                    <p className="mt-4 text-[#7cae7e] text-[1.1rem] lg:text-[1.1rem] px-24 lg:px-0 lg:w-[13rem] leading-none lg:leading-6">
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
    </main>
  )
}

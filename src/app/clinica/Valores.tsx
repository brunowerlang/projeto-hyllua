export default function ValoresCTA() {
  return (
    <section className="w-full">
      {/* Values Cards Section */}
      <div className="bg-[#f5f3ed] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 - Tratamos Pessoas */}
            <div className="rounded-3xl border border-[#d4d0c4] bg-[#fdfcf9] p-8 md:p-10">
              <p className="mb-4 font-serif text-2xl italic text-[#8b9b7a] md:text-3xl">
                tratamos
                <br />
                pessoas
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#6b7565] md:text-base">
                Nosso compromisso é oferecer um cuidado integral, que vai além da estética e considera cada aspecto do
                seu bem-estar.
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#4a5442] md:text-base">
                EXTERNAMENTE E<br />
                ALÉM DELA.
              </p>
            </div>

            {/* Card 2 - Valorizamos Verdade */}
            <div className="rounded-3xl border border-[#d4d0c4] bg-[#fdfcf9] p-8 md:p-10">
              <p className="mb-4 font-serif text-2xl italic text-[#8b9b7a] md:text-3xl">
                valorizamos
                <br />
                verdade
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#6b7565] md:text-base">
                Transparência e honestidade são a base da nossa relação com você. Acreditamos em resultados reais e
                expectativas alinhadas.
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#4a5442] md:text-base">
                CONFIANÇA E<br />
                RESPEITO.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Banner */}
      <div className="bg-[#a8b896] px-6 py-8">
        <p className="text-center text-lg text-white md:text-xl lg:text-2xl">
          O cuidado que te reconhece <span className="font-serif italic">por completo.</span>
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-[#f5f3ed] px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-center">
          <div className="text-center md:text-left">
            <p className="mb-2 text-base text-[#4a5442] md:text-lg">Agende seu procedimento</p>
            <p className="font-serif text-2xl italic text-[#4a5442] md:text-3xl lg:text-4xl">
              e descubra uma nova
              <br />
              forma de se cuidar
              <br />
              por inteiro.
            </p>
          </div>
          <button className="rounded-lg bg-[#a8b896] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#96a684] md:text-base">
            AGENDAR MEU PROCEDIMENTO
          </button>
        </div>
      </div>
    </section>
  )
}

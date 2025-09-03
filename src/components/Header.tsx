"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-13.5 left-0 w-full z-[100] bg-transparent  px-4 md:px-0">
      <div className="max-w-4xl mx-auto rounded-xl">
        <div className="flex items-center justify-between border border-[#b89c6c] rounded-xl px-4 md:px-9 py-4.5"
          style={{ boxShadow: "0 2px 16px 0 rgba(184,156,108,0.04)" }}>
          {/* Logo à esquerda */}
          <Link href="/blog" className="flex items-center">
            <Image
              src="/images/header/logo-header.webp"
              alt="Hyllua Husein"
              width={110}
              height={34}
              className="h-auto"
              priority
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-8 items-center">
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.8rem] hover:underline transition uppercase tracking-wide">
                  CLÍNICA
                </Link>
              </li>
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.8rem] hover:underline transition uppercase tracking-wide">
                  ENSINO
                </Link>
              </li>
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.8rem] hover:underline transition uppercase tracking-wide">
                  HYLLUA BEAUTY
                </Link>
              </li>
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.8rem] hover:underline transition uppercase tracking-wide">
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão desktop */}
          <Link
            href="/agendar"
            className="hidden md:inline-block ml-6 px-6 py-2 rounded-full border-none bg-[#b89c6c] secundary-color font-normal text-[0.8rem] hover:text-[#b89c6c] hover:border hover:border-[#b89c6c] transition uppercase tracking-wide"
            style={{ boxShadow: "0 1px 4px 0 rgba(184,156,108,0.08)" }}
          >
            AGENDAR PROCEDIMENTO
          </Link>

          {/* Menu Hamburguer mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 flex-col" 
            aria-label="Abrir menu"
            onClick={() => setOpen(!open)}
          >
            <span className="block w-6 h-0.5 bg-[#b89c6c] mb-1 rounded transition-all" />
            <span className="block w-6 h-0.5 bg-[#b89c6c] mb-1 rounded transition-all" />
            <span className="block w-6 h-0.5 bg-[#b89c6c] rounded transition-all" />
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-[200] flex justify-end md:hidden">
          <div className="bg-white w-64 h-full p-6 flex flex-col gap-6 shadow-xl">
            <button
              className="self-end mb-4"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              X
            </button>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-base hover:underline transition uppercase tracking-wide" onClick={() => setOpen(false)}>
                    CLÍNICA
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-base hover:underline transition uppercase tracking-wide" onClick={() => setOpen(false)}>
                    ENSINO
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-base hover:underline transition uppercase tracking-wide" onClick={() => setOpen(false)}>
                    HYLLUA BEAUTY
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-base hover:underline transition uppercase tracking-wide" onClick={() => setOpen(false)}>
                    BLOG
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              href="/agendar"
              className="mt-8 px-6 py-2 rounded-full border-none bg-[#b89c6c] secundary-color font-normal text-base hover:text-[#b89c6c] hover:border hover:border-[#b89c6c] transition uppercase tracking-wide text-center"
              style={{ boxShadow: "0 1px 4px 0 rgba(184,156,108,0.08)" }}
              onClick={() => setOpen(false)}
            >
              AGENDAR PROCEDIMENTO
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
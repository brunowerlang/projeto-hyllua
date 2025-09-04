"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Abrir menu
  const handleOpen = () => {
    setShowMenu(true);
    setTimeout(() => setOpen(true), 10); // pequena espera para animar entrada
  };

  // Fechar menu
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setShowMenu(false), 500); // espera a animação terminar
  };

  return (
    <header className="absolute top-8 md:top-13 left-0 w-full z-[100] bg-transparent px-4 md:px-0">
      <div className="max-w-[57rem] mx-auto rounded-xl">
        <div className="flex items-center justify-between border border-[#b89c6c] rounded-xl px-4 md:px-9 py-2 md:py-4 hover:bg-[#b89c6c] transition-colors duration-500 group cabecalho">
          {/* Logo à esquerda */}
          <Link href="/blog" className="flex items-center">
            <Image
              src="/images/header/logo-header.webp"
              alt="Hyllua Husein"
              width={140}
              height={34}
              className="h-auto block group-hover:hidden transition-all"
              priority
            />
            <Image
              src="/images/header/logo-header-hover.webp"
              alt="Hyllua Husein Hover"
              width={140}
              height={34}
              className="h-auto hidden group-hover:block transition-all"
              priority
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-10 items-center">
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.7rem] hover:underline transition uppercase tracking-wide group-hover:text-[#f7eccd]">
                  CLÍNICA
                </Link>
              </li>
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.7rem] hover:underline transition uppercase tracking-wide group-hover:text-[#f7eccd]">
                  ENSINO
                </Link>
              </li>
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.7rem] hover:underline transition uppercase tracking-wide group-hover:text-[#f7eccd]">
                  HYLLUA BEAUTY
                </Link>
              </li>
              <li>
                <Link href="/blog" className="primary-color texto-montrea font-medium text-[0.7rem] hover:underline transition uppercase tracking-wide group-hover:text-[#f7eccd]">
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão desktop */}
          <Link
            href="#"
            className="hidden md:inline-block ml-6 px-6 py-2 rounded-full border-none bg-[#b89c6c] secundary-color font-normal text-[0.7rem] hover:text-[#b89c6c] hover:border hover:border-[#b89c6c] transition uppercase tracking-wide botao transform hover:-translate-y-0.5 duration-300"
            style={{ boxShadow: "0 1px 4px 0 rgba(184,156,108,0.08)" }}
          >
            AGENDAR PROCEDIMENTO
          </Link>

          {/* Menu Hamburguer mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 flex-col"
            aria-label="Abrir menu"
            onClick={handleOpen}
          >
            <span className="block w-6 h-0.5 bg-[#b89c6c] mb-1 rounded transition-all" />
            <span className="block w-6 h-0.5 bg-[#b89c6c] mb-1 rounded transition-all" />
            <span className="block w-6 h-0.5 bg-[#b89c6c] rounded transition-all" />
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/40 z-[200] flex justify-end md:hidden transition-opacity duration-500">
          <div className={`fundo-categoria w-64 h-full p-6 flex flex-col gap-6 shadow-xl
            transition-all duration-500
            ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}>
            <button
              className="self-end mb-4 primary-color font-bold"
              aria-label="Fechar menu"
              onClick={handleClose}
            >
              X
            </button>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-[12px] hover:underline transition uppercase tracking-wide" onClick={handleClose}>
                    CLÍNICA
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-[12px] hover:underline transition uppercase tracking-wide" onClick={handleClose}>
                    ENSINO
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-[12px] hover:underline transition uppercase tracking-wide" onClick={handleClose}>
                    HYLLUA BEAUTY
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="primary-color texto-montrea font-medium text-[12px] hover:underline transition uppercase tracking-wide" onClick={handleClose}>
                    BLOG
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              href="#"
              className="mt-8 px-6 py-2 rounded-full border-none bg-[#b89c6c] secundary-color font-normal text-[12px] hover:text-[#b89c6c] hover:border hover:border-[#b89c6c] transition uppercase tracking-wide text-center"
              style={{ boxShadow: "0 1px 4px 0 rgba(184,156,108,0.08)" }}
              onClick={handleClose}
            >
              AGENDAR PROCEDIMENTO
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full pt-8 pb-2 bg-transparent fixed z-50">
      <div className={`max-w-7xl mx-auto  rounded-xl ${scrolled ? "backdrop-blur-md bg-white/60" : ""} transition-all duration-300`}>
        <div className="flex items-center justify-between border border-[#b89c6c] rounded-xl  px-6 py-3"
          style={{ boxShadow: "0 2px 16px 0 rgba(184,156,108,0.04)" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-header.webp"
              alt="Hyllua Husein"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Menu */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex gap-8 items-center">
              <li>
                <Link href="/clinica" className="text-[#b89c6c] font-normal text-base hover:underline transition uppercase tracking-wide">
                  CLÍNICA
                </Link>
              </li>
              <li>
                <Link href="/ensino" className="text-[#b89c6c] font-normal text-base hover:underline transition uppercase tracking-wide">
                  ENSINO
                </Link>
              </li>
              <li>
                <Link href="/hylluabeauty" className="text-[#b89c6c] font-normal text-base hover:underline transition uppercase tracking-wide">
                  HYLLUA BEAUTY
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#b89c6c] font-normal text-base hover:underline transition uppercase tracking-wide">
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão */}
          <Link
            href="/agendar"
            className="ml-6 px-6 py-3 rounded-full border-none bg-[#b89c6c] secundary-color font-normal text-sm  hover:text-[#b89c6c] hover:border hover:border-[#b89c6c] transition uppercase tracking-wide"
            style={{ boxShadow: "0 1px 4px 0 rgba(184,156,108,0.08)" }}
          >
            AGENDAR PROCEDIMENTO
          </Link>
        </div>
      </div>
    </header>
  );
}
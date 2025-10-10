import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#b89c6c] text-[#f5f3ea] pt-20 pb-6 ">
      <div className="max-w-5xl mx-auto  flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:w-1/4">
          <Image
            src="/images/footer/logo_footer.webp"
            alt="Clínica Hyllua Husein"
            width={130}
            height={50}
            className="mb-2 mt-4"
          />
        </div>

        {/* Conheça mais */}
        <div className="flex flex-col md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
          <span className="font-semibold titulo-scotch italic mb-3 mt-1 secundary-color tracking-[1px] text-[14px] lg:text-[16px]">Conheça mais</span>
          <Link href="/clinica" className="hover:underline mb-3 secundary-color text-[14px] lg:text-[16px]">Clínica</Link>
          <Link href="/ensino" className="hover:underline mb-3 secundary-color text-[14px] lg:text-[16px]">Ensino</Link>
          <Link href="/hylluabeauty" className="hover:underline mb-3 secundary-color text-[14px] lg:text-[16px]">Hyllua Beauty</Link>
          <Link href="/blog" className="hover:underline secundary-color text-[14px] lg:text-[16px]">Blog</Link>
        </div>

        {/* Endereço */}
        <div className="flex flex-col md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
          <span className="font-semibold titulo-scotch italic mb-3 mt-1 secundary-color tracking-[1px] md:text-[14px] lg:text-[16px]">Endereço</span>
          <span className="mb-3 secundary-color text-[14px] lg:text-[16px]">Walk Offices</span>
          <span className="mb-3 secundary-color whitespace-nowrap text-[14px] lg:text-[16px]">Av. Praia de Belas, 1212 - Salas 1404 e 1405</span>
          <span className="mb-3 secundary-color text-[14px] lg:text-[16px]">Praia de Belas, Porto Alegre/RS, CEP</span>
          <span className="secundary-color text-[14px] lg:text-[16px]">90110-000.</span>
        </div>

        {/* Siga-nos */}
        <div className="flex flex-col md:w-1/4 lg:ml-10 text-center md:text-left">
          <span className="font-semibold titulo-scotch italic mb-3 mt-1 secundary-color tracking-[1px] text-[14px] lg:text-[16px] ">Siga-nos</span>
          <a
            href="https://instagram.com/clinicahylluahusein"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline secundary-color justify-center md:justify-start text-[14px] lg:text-[16px]"
          >
             <BsInstagram className="text-[14px] lg:text-[16px] secundary-color cursor-pointer" />
            @clinicahylluahusein
          </a>
        </div>
      </div>
      <div className="text-center text-[14px] lg:text-[16px] mt-20 secundary-color opacity-80">
        © {new Date().getFullYear()} Clínica Hyllua Husein é uma marca registrada. Todos os direitos reservados.
      </div>
    </footer>
  );
}
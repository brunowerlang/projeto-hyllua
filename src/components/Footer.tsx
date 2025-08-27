import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#b89c6c] text-[#f5f3ea] border-t border-[#ede9dd] pt-20 pb-6 ">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start md:w-1/4">
          <Image
            src="/logo_footer.webp"
            alt="Clínica Hyllua Husein"
            width={180}
            height={60}
            className="mb-2"
          />
        </div>

        {/* Conheça mais */}
        <div className="flex flex-col md:w-1/4 mb-6 md:mb-0">
          <span className="font-semibold italic mb-2 secundary-color">Conheça mais</span>
          <Link href="/clinica" className="hover:underline mb-1 secundary-color">Clínica</Link>
          <Link href="/ensino" className="hover:underline mb-1 secundary-color">Ensino</Link>
          <Link href="/hylluabeauty" className="hover:underline mb-1 secundary-color">Hyllua Beauty</Link>
          <Link href="/blog" className="hover:underline secundary-color">Blog</Link>
        </div>

        {/* Endereço */}
        <div className="flex flex-col md:w-1/4 mb-6 md:mb-0">
          <span className="font-semibold italic mb-2 secundary-color">Endereço</span>
          <span className="mb-1 secundary-color">Walk Offices</span>
          <span className="mb-1 secundary-color whitespace-nowrap">Av. Praia de Belas, 1212 - Salas 1404 e 1405</span>
          <span className="mb-1 secundary-color">Praia de Belas, Porto Alegre/RS, CEP</span>
          <span className="secundary-color">90110-000.</span>
        </div>

        {/* Siga-nos */}
        <div className="flex flex-col md:w-1/4 ml-10">
          <span className="font-semibold italic mb-2 secundary-color">Siga-nos</span>
          <a
            href="https://instagram.com/clinicahylluahusein"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline secundary-color"
          >
             <BsInstagram className="text-xl secundary-color cursor-pointer" />
            @clinicahylluahusein
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-20 secundary-color opacity-80">
        © {new Date().getFullYear()} Clínica Hyllua Husein é uma marca registrada. Todos os direitos reservados.
      </div>
    </footer>
  );
}
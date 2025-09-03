"use client"

import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsPinterest } from "react-icons/bs";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Post {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

interface SidebarProps {
  categories: Category[];
  recentPosts: Post[];
  initialOpen?: "about" | "category" | "social";
}

const sections = [
  { key: "about", label: "Sobre a Clínica" },
  { key: "category", label: "Categorias" },
  { key: "social", label: "Siga a Clínica Hyllua Husein" },
];

type SectionKey = "about" | "category" | "social";

export default function SidebarCategories({
  categories,
  recentPosts,
  initialOpen = "about",
}: SidebarProps) {
  const [open, setOpen] = useState<SectionKey | null>(initialOpen);

  const toggle = (key: SectionKey) => {
    setOpen((prev) => (prev === key ? null : key));
  };
  // Accordion animation with smoother transition
  const getAccordionClass = (isOpen: boolean) =>
    `transition-[max-height,opacity,padding] duration-500 ease-in-out overflow-hidden ${
      isOpen ? "max-h-[500px] opacity-100 py-6 bg-fundo-button-claro" : "max-h-0 opacity-0 py-0 bg-fundo-button-claro"
    }`;

  // Animation classes for the icon
  const getIconClass = (isOpen: boolean) =>
    `transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`;

  return (
    <aside className="lg:w-72 lg:sticky lg:top-6 lg:self-start bg-fundo-button-claro rounded-xl px-0 overflow-hidden border border-[#d2d2c7] ">
      {/* About */}
      <div className="border-b border-[#d2d2c7]">
        <button
          className="w-full flex justify-between items-center px-6 py-2.5 bg-fundo-button secundary-color font-normal text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer uppercase"
          onClick={() => toggle("about")}
          aria-expanded={open === "about"}
          type="button"
        >
          {sections[0].label}
          <span className={getIconClass(open === "about")}>
            {open === "about" ? "−" : "+"}
          </span>
        </button>
        <div className={getAccordionClass(open === "about")}>
          <div className="bg-fundo-button-claro px-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/blog/simbolo.webp"
                alt="Clínica Hyllua Husein"
                width={96}
                height={96}
                className="object-cover w-16 h-16"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-center text-gray-900 mb-2">
              Clínica Hyllua Husein
            </h3>
            <p className="text-sm mb-4 text-center text-gray-900 font-semibold">
              Excelência em Estética e Saúde
            </p>
            <p className="text-sm leading-relaxed text-center text-gray-900">
              Referência em procedimentos estéticos, bem-estar e cuidados integrados. Nossa missão é promover autoestima, saúde e qualidade de vida com atendimento humanizado e tecnologia de ponta.
            </p>
          </div>
        </div>
      </div>

      {/* Categorias */}
      <div className="border-b border-[#d2d2c7]">
        <button
          className="w-full flex justify-between items-center px-6 py-2.5 bg-fundo-button secundary-color font-normal uppercase text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer"
          onClick={() => toggle("category")}
          aria-expanded={open === "category"}
          type="button"
        >
          {sections[1].label}
          <span className={getIconClass(open === "category")}>
            {open === "category" ? "−" : "+"}
          </span>
        </button>
        <div className={getAccordionClass(open === "category")}>
          <div className="bg-fundo-button-claro px-6 space-y-3 text-center">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className="block  transition-all duration-300 group cursor-pointer rounded-xl hover:cursor-pointer hover:underline"
              >
                <span className="text-gray-900 text-sm">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Siga a Clínica Hyllua Husein */}
      <div className="border-b border-[#d2d2c7]">
        <button
          className="w-full flex justify-between items-center px-6 py-2.5 bg-fundo-button secundary-color font-normal uppercase text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer"
          onClick={() => toggle("social")}
          aria-expanded={open === "social"}
          type="button"
        >
          {sections[2].label}
          <span className={getIconClass(open === "social")}>
            {open === "social" ? "−" : "+"}
          </span>
        </button>
        <div className={getAccordionClass(open === "social")}>
          <div className="bg-fundo-button-claro px-6 flex flex-col items-center">
            <div className="flex gap-4  justify-center">
              <a href="https://instagram.com/hylluabeauty" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="text-xl primary-color cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="text-xl primary-color cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsYoutube className="text-xl primary-color cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsPinterest className="text-xl primary-color cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
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
  initialOpen?: "about" | "category" | "social" | "recent";
}

const sections = [
  { key: "about", label: "About" },
  { key: "category", label: "Category" },
  { key: "social", label: "Siga a Hyllua" },
  { key: "recent", label: "Posts Recentes" },
];

export default function SidebarCategories({
  categories,
  recentPosts,
  initialOpen = "about",
}: SidebarProps) {
  const [open, setOpen] = useState({
    about: initialOpen === "about",
    category: initialOpen === "category",
    social: initialOpen === "social",
    recent: initialOpen === "recent",
  });

type SectionKey = "about" | "category" | "social" | "recent";

const toggle = (key: SectionKey) => {
  setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
};
  return (
    <aside className="lg:w-80 lg:sticky lg:top-6 lg:self-start bg-white rounded-xl px-0 overflow-hidden border border-[#d2d2c7]">
      {/* About */}
      <div className="border-b border-[#d2d2c7]">
        <button
          className="w-full flex justify-between items-center px-6 py-2 bg-fundo-button text-white font-normal text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer uppercase"
          onClick={() => toggle("about")}
          aria-expanded={open.about}
          type="button"
        >
          {sections[0].label}
          <span className="text-lg">{open.about ? "−" : "+"}</span>
        </button>
        {open.about && (
          <div className="bg-fundo-button-claro px-6 py-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/hyllua.jpg"
                alt="Dra. Hyllua Husein"
                width={96}
                height={96}
                className="object-cover w-24 h-24"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2 text-center text-white">
              Dra. Hyllua Husein
            </h3>
            <p className="text-muted-foreground text-sm mb-4 text-center text-white">
              Especialista em Estética e Saúde
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed text-center text-white">
              Médica especializada em procedimentos estéticos e cuidados com a saúde, compartilhando conhecimento e dicas para seu bem-estar.
            </p>
          </div>
        )}
      </div>

      {/* Category */}
      <div className="border-b border-[#d2d2c7]">
        <button
          className="w-full flex justify-between items-center px-6 py-2 bg-fundo-button text-white font-normal uppercase text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer"
          onClick={() => toggle("category")}
          aria-expanded={open.category}
          type="button"
        >
          {sections[1].label}
          <span className="text-lg">{open.category ? "−" : "+"}</span>
        </button>
        {open.category && (
          <div className="bg-fundo-button-claro px-6 py-6 space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className="block p-2 transition-all duration-300 group cursor-pointer rounded-xl "
              >
                <span className="text-white text-sm">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Social */}
      <div className="border-b border-[#d2d2c7]">
        <button
          className="w-full flex justify-between items-center px-6 py-2 bg-fundo-button text-white font-normal uppercase text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer"
          onClick={() => toggle("social")}
          aria-expanded={open.social}
          type="button"
        >
          {sections[2].label}
          <span className="text-lg">{open.social ? "−" : "+"}</span>
        </button>
        {open.social && (
          <div className="bg-fundo-button-claro px-6 py-6 flex flex-col items-center">
            <div className="flex gap-4 mb-2 justify-center">
              <a href="https://instagram.com/hylluabeauty" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="text-xl text-white cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="text-xl text-white cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsYoutube className="text-xl text-white cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="text-xl text-white cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BsPinterest className="text-xl text-white cursor-pointer" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Recent Posts */}
      <div>
        <button
          className="w-full flex justify-between items-center px-6 py-2 bg-fundo-button text-white font-normal uppercase text-sm tracking-wide transition hover:bg-[#5a6147] cursor-pointer"
          onClick={() => toggle("recent")}
          aria-expanded={open.recent}
          type="button"
        >
          {sections[3].label}
          <span className="text-lg">{open.recent ? "−" : "+"}</span>
        </button>
        {open.recent && (
          <div className="bg-fundo-button-claro px-6 py-6">
            <ul className="space-y-6">
              {(recentPosts || []).map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex gap-4 items-center group  rounded transition cursor-pointer"
                  >
                    <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] text-white mb-1 font-light">
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <div
                        className="font-right text-xs font-medium group-hover:underline line-clamp-3 overflow-hidden text-white"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
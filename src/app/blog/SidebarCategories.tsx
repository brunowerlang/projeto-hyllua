import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsPinterest } from "react-icons/bs";

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
}

export default function SidebarCategories({ categories, recentPosts }: SidebarProps) {
  return (
    <aside className="lg:w-80 lg:sticky lg:top-6 lg:self-start bg-white rounded-2xl px-4">
      {/* Card do autor */}
      <div className="bg-fundo-blog  p-8 mb-8 ">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center font-editorial">
          #About
        </h3>
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/hyllua.jpg"
            alt="Dra. Hyllua Husein"
            width={96}
            height={96}
            className="object-cover w-24 h-24"
          />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground mb-2 text-center">
          Dra. Hyllua Husein
        </h3>
        <p className="text-muted-foreground text-sm mb-4 text-center">
          Especialista em Estética e Saúde
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed text-center">
          Médica especializada em procedimentos estéticos e cuidados com a saúde, compartilhando conhecimento e dicas para seu bem-estar.
        </p>
      </div>

      {/* Lista de categorias */}
      <div className="bg-fundo-blog  p-8 mb-8 ">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center font-editorial">
          #Category
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog/category/${cat.slug}`}
              className="block p-2 rounded-xl bg-muted hover:bg-accent transition-all duration-300 group"
            >
              <span className="text-muted-foreground group-hover:text-accent-foreground text-sm">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Section: Siga a Hyllua */}
      <div className="bg-black  p-8 mb-8  flex flex-col items-center">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center font-editorial text-white">
          #Siga a Hyllua
        </h3>
        <div className="flex gap-4 mb-6 justify-center">
          <a href="https://instagram.com/hylluabeauty" target="_blank" rel="noopener noreferrer">
            <BsInstagram className="text-xl text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <BsFacebook className="text-xl text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <BsYoutube className="text-xl text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <BsTwitter className="text-xl text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <BsPinterest className="text-xl text-white" />
          </a>
        </div>
      </div>

    {/* Section: Posts Recentes */}
<div className="bg-fundo-blog p-8">
  <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center font-editorial">
    #Posts Recentes
  </h3>
  <ul className="space-y-6">
    {(recentPosts || []).map((post) => (
      <li key={post.id}>
        <Link
          href={`/blog/${post.slug}`}
          className="flex gap-4 items-center group hover:bg-muted rounded transition"
        >
          <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0">
            <img
              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"}
              alt={post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-[10px] text-gray-500 mb-1 font-light">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>
           <div
  className="font-right text-xs font-medium group-hover:underline line-clamp-3 overflow-hidden"
  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
/>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</div>
    </aside>
  );
}
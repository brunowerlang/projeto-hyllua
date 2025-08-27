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
    <aside className="lg:w-80 lg:sticky lg:top-6 lg:self-start bg-background rounded-2xl">
      {/* Card do autor (fixo) */}
      <div className="bg-card rounded-2xl p-8 mb-8">
        <div className="text-center p-4 bg-fundo-blog">
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
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">
            Dra. Hyllua Husein
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Especialista em Estética e Saúde
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Médica especializada em procedimentos estéticos e cuidados com a saúde, compartilhando conhecimento e dicas para seu bem-estar.
          </p>
        </div>
      </div>

      {/* Lista de categorias (dinâmica do WP) */}
      <div className="bg-card rounded-2xl p-8">
        <div className="p-4 bg-fundo-blog">
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
      </div>

      {/* Section: Siga a Hyllua */}
      <div className="p-8 mb-8 flex flex-col items-center">
        <div className="text-center p-6 bg-black">
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
      </div>

      {/* Section: Posts Recentes */}
      <div className="mb-8 p-8">
        <div className="text-center p-6 bg-fundo-blog">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center font-editorial">
            #Posts Recentes
          </h3>
          <ul className="space-y-6">
  {(recentPosts || []).map((post) => (
    <li key={post.id} className="flex gap-4 items-center">
      <img
        src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg"}
        alt={post.title.rendered}
        className="w-20 h-16 object-cover rounded"
      />
                <div>
                  <div className="text-[11px] text-gray-500 mb-1 font-light">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <div
                    className="font-right text-xs font-medium"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
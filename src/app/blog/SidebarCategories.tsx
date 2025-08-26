// src/app/blog/SidebarCategories.tsx
import Link from "next/link";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface SidebarProps {
  categories: Category[];
}

export default function SidebarCategories({ categories }: SidebarProps) {
  return (
    <aside className="lg:w-80 lg:sticky lg:top-6 lg:self-start bg-background" >
      {/* Card do autor (fixo) */}
      <div className="bg-card rounded-2xl p-8   mb-8">
        <div className="text-center p-4" style={{ backgroundColor: "#fcfbfb" }}>
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/hyllua.jpg" // coloque a imagem dentro de /public
              alt="Dra. Hyllua Husein"
              width={96}
              height={96}
              className="object-cover w-24 h-24"
            />
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-editorial)" }}>
            Dra. Hyllua Husein
          </h3>
          <p className="text-muted-foreground text-sm mb-4" style={{ fontFamily: "var(--font-right)" }}>
            Especialista em Estética e Saúde
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "var(--font-right)" }}>
            Médica especializada em procedimentos estéticos e cuidados com a
            saúde, compartilhando conhecimento e dicas para seu bem-estar.
          </p>
        </div>
      </div>

      {/* Lista de categorias (dinâmica do WP) */}
      <div className="bg-card rounded-2xl p-8  ">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center" style={{ fontFamily: "var(--font-editorial)" }}>
          Categorias
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog/category/${cat.slug}`}
              className="block p-2 rounded-xl bg-muted hover:bg-accent transition-all duration-300 group"
            >
              <span className="text-muted-foreground group-hover:text-accent-foreground font-small" style={{ fontFamily: "var(--font-right)" }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

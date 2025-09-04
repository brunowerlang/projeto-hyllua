import BlogCard from "@/components/blog-card";
import SidebarCategories from "./SidebarCategories";
import Image from "next/image";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

/* ---------- Fetch Helpers ---------- */
async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      "https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=10&_embed",
      { next: { revalidate: 60 } }
    );
    return res.ok ? await res.json() : [];
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(
      "https://blog.hylluahusein.com.br/wp-json/wp/v2/categories",
      { next: { revalidate: 3600 } }
    );
    return res.ok ? await res.json() : [];
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
}

/* ---------- Page Component ---------- */
export default async function BlogPage() {
  const posts = await getPosts();
  const categories = await getCategories();

  const recentPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[url('/images/blog/background-posts.webp')] bg-contain bg-top ">
      {/* HERO SECTION */}
<section className="w-full flex items-center bg-[url('/images/blog/background-hero-blog.webp')] bg-cover contain-bg bg-bottom relative overflow-hidden">
        <div className="max-w-4xl mx-auto w-full px-6 flex flex-col md:flex-row items-center h-full relative  ">
          {/* Textos à esquerda */}
          <div
  className="
    text-white max-w-xl flex-1 text-center
    relative z-30
    top-[8rem] left-[-3.5rem]
    md:static md:top-auto md:left-auto
    md:mb-[-3.5rem]
  "
>
            <p className="block text-xl md:text-[1.4rem] font-light texto-montreal ml-[-6rem] lg:ml-[-12rem] ">
              Conteúdos para
            </p>
            <h1 className="titulo-scotch font-black italic leading-none text-6xl md:text-[5.5rem] lg:ml-[-40px]" style={{ fontWeight: 900 }}>
              <span className="block">cuidar</span>
              <span className="block">de você</span>
            </h1>
            <p className="block text-xl md:text-3xl font-medium texto-montreal  mr-[-5.5rem] lg:mr-[-6rem]">
              por completo.
            </p>
            
          </div>

          {/* Imagem à direita */}
          <div className="mt-8 md:mt-0 flex-1 flex justify-start relative z-1 top-16 left-10 md:top-0 md:left-0">
            <Image
              src="/images/blog/bakground-2-hero-blog.webp"
              alt="Equipe Hyllua"
              width={300}
              height={420}
              className="w-[250px] md:w-[335px] h-auto object-contain drop-shadow-xl relative md:top-[90px] md:right-4 md:pt-8"
              priority
            />
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-full pointer-events-none z-20">
          <Image
            src="/images/blog/bakground-3-hero-blog.webp"
            alt="Sombra decorativa"
            width={1920}
            height={500}
            className="w-full h-[70vh] select-none"
            priority
          />
        </div>
      </section>

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto py-11 px-4 md:px-0">
        {/* Badge */}
       <div className="flex items-center gap-2 mb-6 px-2">
  <span className="relative block w-full text-[1rem] font-semibold uppercase primary-color after:absolute after:top-1/2 after:left-0 after:h-[1px] after:bg-current after:w-full after:-translate-y-1/2">
    <span className="relative z-10 pr-4 bg-[#f5f0e8]">Últimos Posts</span>
  </span>
</div>


        <div className="flex flex-col lg:flex-row gap-12">
          {/* Coluna principal */}
          <div className="flex-1 no-scrollbar">
            <div className="relative px-2 bg-[url('/images/blog/posts-bg.png')] bg-repeat rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[...Array(3)].map((_, i) =>
    posts.map((post) => {
      const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      return (
        <article key={`${post.id}-repeat-${i}`}>
          <BlogCard post={post} featuredImage={featuredImage} />
        </article>
      );
    })
  )}
</div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0">
            <SidebarCategories categories={categories} recentPosts={recentPosts} />
          </aside>
        </div>
      </main>
    </div>
  );
}

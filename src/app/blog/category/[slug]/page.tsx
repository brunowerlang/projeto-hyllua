import SidebarCategories from "../../SidebarCategories";
import BlogCard from "@/components/blog-card";
import { BsLightningFill } from "react-icons/bs";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  date: string; // <-- Obrigatório!
  _embedded?: {
    author?: { name: string }[];
    "wp:term"?: { id: number; name: string; taxonomy: string }[][];
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Buscar categorias para a sidebar
  let categories: Category[] = [];
  try {
    const resCategories = await fetch(
      "https://blog.hylluahusein.com.br/wp-json/wp/v2/categories",
      { next: { revalidate: 3600 } }
    );
    if (!resCategories.ok) throw new Error(`Erro: ${resCategories.status}`);
    categories = await resCategories.json();
  } catch (error) {
    console.error("Falha ao buscar categorias:", error);
  }

  // Buscar dados da categoria clicada
  let catData: Category[] = [];
  try {
    const resCat = await fetch(
      `https://blog.hylluahusein.com.br/wp-json/wp/v2/categories?slug=${slug}`
    );
    if (!resCat.ok) throw new Error(`Erro: ${resCat.status}`);
    catData = await resCat.json();
  } catch (error) {
    console.error("Falha ao buscar categoria:", error);
    return <p>Não foi possível carregar esta categoria.</p>;
  }

  if (!catData || catData.length === 0) return <p>Categoria não encontrada.</p>;
  const categoryId = catData[0].id;

  // Buscar posts da categoria
  let posts: Post[] = [];
  try {
    const resPosts = await fetch(
      `https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?categories=${categoryId}&_embed`
    );
    if (!resPosts.ok) throw new Error(`Erro: ${resPosts.status}`);
    posts = await resPosts.json();
  } catch (error) {
    console.error("Falha ao buscar posts:", error);
    return <p>Não foi possível carregar os posts desta categoria.</p>;
  }

  // Buscar posts recentes para a sidebar
  let recentPosts: Post[] = [];
  try {
    const resRecent = await fetch(
      "https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=3&_embed",
      { next: { revalidate: 60 } }
    );
    if (resRecent.ok) {
      recentPosts = await resRecent.json();
    }
  } catch (error) {
    console.error("Falha ao buscar posts recentes:", error);
  }

  return (
    <div className="min-h-screen bg-fundo-blog">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Posts Grid */}
          <div className="flex-1 no-scrollbar">

           {/* Trending Post Badge */}
<div className="flex items-center gap-2 mb-6 mt-20">
  <BsLightningFill className="primary-color" />
  <span
    className="text-xl font-semibold uppercase primary-color relative
               after:block after:absolute after:top-1/2 after:left-full
               after:ml-6 after:h-[1px] after:bg-current after:min-w-full
               after:-translate-y-1/2 ml-2"
  >
    {catData[0]?.name}
  </span>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => {
                const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                return <BlogCard key={post.id} post={post} featuredImage={featuredImage} />;
              })}
            </div>
          </div>

          {/* Sidebar */}
          <SidebarCategories
  categories={categories}
  recentPosts={recentPosts}
  initialOpen="category"
/>
        </div>
      </main>
    </div>
  );
}
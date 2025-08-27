import BlogCard from "@/components/blog-card";
import SidebarCategories from "./SidebarCategories";
import BlogHeroCarousel from "@/components/BlogHeroCarousel";
import { BsLightningFill } from "react-icons/bs";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BlogCard2 from "@/components/blog-card2";

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

export default async function BlogPage() {
  const resPosts = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=10&_embed", {
    next: { revalidate: 60 },
  });
  const posts: Post[] = await resPosts.json();

  const resCategories = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/categories", {
    next: { revalidate: 3600 },
  });
  const categories: Category[] = resCategories.ok ? await resCategories.json() : [];

  // Defina recentPosts após posts serem carregados
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-fundo-blog">
      {/* Hero Carousel */}
      <BlogHeroCarousel posts={posts} />

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-6 py-16 container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Coluna principal */}
          <div className="flex-1 no-scrollbar">
            {/* Trending Post Badge */}
            <div className="flex items-center gap-2 mb-6">
              <BsLightningFill className="primary-color" />
              <span
                className="text-sm font-semibold uppercase primary-color relative
                           after:block after:absolute after:top-1/2 after:left-full
                           after:ml-6 after:h-[1px] after:bg-current after:min-w-full
                           after:-translate-y-1/2 ml-2"
              >
                POST EM DESTAQUE
              </span>
            </div>

            {/* Grid de posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(0, 4).map((post) => {
                const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                return <BlogCard key={post.id} post={post} featuredImage={featuredImage} />;
              })}
            </div>

            {/* Carousel de Depoimentos */}
            <TestimonialsCarousel />

            {/* Trending Post Badge */}
            <div className="flex items-center gap-2 mb-6 mt-20">
              <BsLightningFill className="primary-color" />
              <span
                className="text-sm font-semibold uppercase primary-color relative
                           after:block after:absolute after:top-1/2 after:left-full
                           after:ml-6 after:h-[1px] after:bg-current after:min-w-full
                           after:-translate-y-1/2 ml-2"
              >
                POST MAIS LIDOS
              </span>
            </div>

            {/* Grid de posts */}
            <div className="grid grid-cols-1 gap-8">
              {posts.slice(0, 4).map((post) => {
                const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                return <BlogCard2 key={post.id} post={post} featuredImage={featuredImage} />;
              })}
            </div>
          </div>

          {/* Sidebar */}
          <SidebarCategories categories={categories} recentPosts={recentPosts} />
        </div>
      </main>
    </div>
  );
}
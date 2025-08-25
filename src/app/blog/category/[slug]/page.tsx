// src/app/blog/category/[slug]/page.tsx

import Link from "next/link";
import Image from "next/image";
import SidebarCategories from "../../SidebarCategories";

interface Post { /* ... */ }
interface Category { /* ... */ }

interface CategoryPageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  // Buscar categorias para sidebar
  const resCategories = await fetch(
    "https://blog.hylluahusein.com.br/wp-json/wp/v2/categories",
    { next: { revalidate: 3600 } }
  );
  const categories: Category[] = await resCategories.json();

  // Buscar posts da categoria
  const resCat = await fetch(
    `https://blog.hylluahusein.com.br/wp-json/wp/v2/categories?slug=${slug}`
  );
  const catData = await resCat.json();
  if (catData.length === 0) return <p>Categoria não encontrada.</p>;

  const categoryId = catData[0].id;
  const resPosts = await fetch(
    `https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?categories=${categoryId}&_embed`
  );
  const posts: Post[] = await resPosts.json();

  return (
    <main className="max-w-6xl mx-auto p-6 flex gap-8">
      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <article
              key={post.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {featuredImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    <span
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </Link>
                </h2>
               
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Sidebar */}
      <SidebarCategories categories={categories} />
    </main>
  );
}

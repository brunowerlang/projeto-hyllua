import { notFound } from "next/navigation";
import Image from "next/image";
import SidebarCategories from "../SidebarCategories";

export default async function BlogPostPage({ params }: any) {
  const res = await fetch(
    `https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?slug=${params.slug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Falha ao carregar o post");

  const posts = await res.json();

  if (!posts || posts.length === 0) {
    notFound();
  }

  const post = posts[0];
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // Buscar categorias
  const resCategories = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/categories", {
    next: { revalidate: 3600 },
  });
  const categories = resCategories.ok ? await resCategories.json() : [];

  // Buscar posts recentes
  const resRecent = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=3&_embed", {
    next: { revalidate: 60 },
  });
  const recentPosts = resRecent.ok ? await resRecent.json() : [];

  return (
    <div className="bg-fundo-blog min-h-screen py-10 post-hyllua">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 px-4">
        {/* Conteúdo principal */}
        <main className="flex-1 min-w-0">
          <h1
            className="text-4xl font-bold mb-4 text-center"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="text-center text-gray-500 text-sm mb-8">
            {post._embedded?.author?.[0]?.name && (
              <>by {post._embedded.author[0].name} &middot; </>
            )}
            {post.date && (
              <>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </>
            )}
          </div>
          {featuredImage && (
            <div className="mb-8 w-full h-[400px] relative rounded overflow-hidden">
              <Image
                src={featuredImage}
                alt={post.title.rendered}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
          <article
            className="prose prose-img:mx-auto prose-img:rounded-lg  mx-auto mb-6"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <SidebarCategories categories={categories} recentPosts={recentPosts} />
        </aside>
      </div>
    </div>
  );
}
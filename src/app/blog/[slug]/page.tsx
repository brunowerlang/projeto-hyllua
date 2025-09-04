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
    <div className="bg-[url('/images/blog/background-posts.webp')] bg-contain bg-top post-hyllua">
      <div className="max-w-4xl mx-auto  pt-40 pb-10 px-4 md:px-0">
        {/* Conteúdo principal */}
        <main className="flex-1 min-w-0 bg-background p-6 lg:p-20 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-8">
            {/* Título */}
            <h1
              className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-center md:text-left titulo-scotch italic flex-1"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            {/* Imagem */}
            {featuredImage && (
              <div className="w-full h-[220px] relative rounded-lg overflow-hidden md:w-[340px] md:h-[260px] flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={featuredImage}
                  alt={post.title.rendered}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}
          </div>
          <article
            className="prose prose-img:mx-auto prose-img:rounded-lg  mx-auto texto-montreal "
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </main>

      
      </div>
    </div>
  );
}
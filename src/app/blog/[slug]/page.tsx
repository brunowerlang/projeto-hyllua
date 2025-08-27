// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

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

  return (
    <main className="max-w-4xl mx-auto p-6">
      
      {featuredImage && (
        <div className="mb-6 w-full h-auto relative" style={{ height: 500 }}>
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

      <h1
        className="text-4xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <article
        className="prose max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

            {/* Sidebar */}
            <SidebarCategories categories={categories} recentPosts={recentPosts} />
    </main>
  );
}

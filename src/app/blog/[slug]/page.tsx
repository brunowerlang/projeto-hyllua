// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: any;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?slug=${params.slug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error("Erro na API:", res.status, res.statusText);
    throw new Error("Falha ao carregar o post");
  }

  const posts: Post[] = await res.json();

  if (posts.length === 0) {
    notFound();
  }

  const post = posts[0];
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return (
    <main className="max-w-4xl mx-auto p-6">
      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="mb-6 w-full h-auto"
        />
      )}

      <h1
        className="text-4xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}

// src/app/blog/page.tsx
import Link from "next/link";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}

export default async function BlogPage() {
  const res = await fetch(
    "https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=10",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error("Erro na API:", res.status, res.statusText);
    throw new Error("Falha ao carregar posts");
  }

  const posts: Post[] = await res.json();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>
                <span
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </Link>
            </h2>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Ler mais →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

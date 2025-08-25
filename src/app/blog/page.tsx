// src/app/blog/page.tsx
import Link from "next/link"
import Image from "next/image"

interface Post {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>
    "wp:term"?: Array<Array<{ id: number; name: string; taxonomy: string }>>
  }
}

interface Category {
  id: number
  name: string
  slug: string
}

export default async function BlogPage() {
  // Fetch posts
  const resPosts = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=10&_embed", {
    next: { revalidate: 60 },
  })

  if (!resPosts.ok) {
    console.error("Erro na API:", resPosts.status, resPosts.statusText)
    throw new Error("Falha ao carregar posts")
  }
  const posts: Post[] = await resPosts.json()

  // Fetch categories
  const resCategories = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/categories", {
    next: { revalidate: 3600 },
  })

  if (!resCategories.ok) {
    console.error("Erro ao buscar categorias:", resCategories.statusText)
  }
  const categories: Category[] = await resCategories.json()

  return (
    <main className="max-w-6xl mx-auto p-6 flex gap-8">
      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {posts.map((post) => {
          const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

          return (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              {featuredImage && (
                <div className="relative w-full h-48">
                  <Image src={featuredImage} alt={post.title.rendered} fill style={{ objectFit: "cover" }} />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
                  Ler mais →
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      {/* Sidebar com categorias */}
      <aside className="w-64 hidden md:block">
        <h3 className="text-xl font-bold mb-4">Categorias</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link href={`/blog/category/${cat.slug}`} className="text-gray-700 hover:text-blue-600">
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  )
}

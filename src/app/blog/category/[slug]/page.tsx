// src/app/blog/category/[slug]/page.tsx
import Link from "next/link"
import Image from "next/image"
import SidebarCategories from "../../SidebarCategories"

interface Post {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>
  }
}

interface Category {
  id: number
  name: string
  slug: string
}

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params

  // Buscar todas as categorias (para a sidebar)
  let categories: Category[] = []
  try {
    const resCategories = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/categories", {
      next: { revalidate: 3600 },
    })
    if (!resCategories.ok) throw new Error(`Erro: ${resCategories.status}`)
    categories = await resCategories.json()
  } catch (error) {
    console.error("Falha ao buscar categorias:", error)
  }

  // Buscar dados da categoria clicada
  let catData: Category[] = []
  try {
    const resCat = await fetch(`https://blog.hylluahusein.com.br/wp-json/wp/v2/categories?slug=${slug}`)
    if (!resCat.ok) throw new Error(`Erro: ${resCat.status}`)
    catData = await resCat.json()
  } catch (error) {
    console.error("Falha ao buscar categoria:", error)
    return <p>Não foi possível carregar esta categoria.</p>
  }

  if (!catData || catData.length === 0) return <p>Categoria não encontrada.</p>

  const categoryId = catData[0].id

  // Buscar posts da categoria
  let posts: Post[] = []
  try {
    const resPosts = await fetch(`https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?categories=${categoryId}&_embed`)
    if (!resPosts.ok) throw new Error(`Erro: ${resPosts.status}`)
    posts = await resPosts.json()
  } catch (error) {
    console.error("Falha ao buscar posts:", error)
    return <p>Não foi possível carregar os posts desta categoria.</p>
  }

  return (
    <main className="max-w-6xl mx-auto p-6 flex gap-8">
      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
<<<<<<< HEAD
        {posts.length === 0 && <p>Nenhum post encontrado nesta categoria.</p>}

        {posts.map((post) => {
          const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

          return (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              {featuredImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={featuredImage || "/placeholder.svg"}
=======
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
>>>>>>> 8c63f924b0cc5e799b5cfb2efb93effa9353f7ad
                    alt={post.title.rendered}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`}>
<<<<<<< HEAD
                    <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
=======
                    <span
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </Link>
                </h2>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
>>>>>>> 8c63f924b0cc5e799b5cfb2efb93effa9353f7ad
                  Ler mais →
                </Link>
              </div>
            </article>
<<<<<<< HEAD
          )
=======
          );
>>>>>>> 8c63f924b0cc5e799b5cfb2efb93effa9353f7ad
        })}
      </div>

      {/* Sidebar */}
      <SidebarCategories categories={categories} />
    </main>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 8c63f924b0cc5e799b5cfb2efb93effa9353f7ad
}

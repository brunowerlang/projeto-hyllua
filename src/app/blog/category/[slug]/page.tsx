// src/app/blog/category/[slug]/page.tsx
import Link from "next/link"
import Image from "next/image"
import SidebarCategories from "../../SidebarCategories"
import BlogCard from "@/components/blog-card"

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
  params: { slug: string } // não precisa ser Promise
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params

  // Buscar todas as categorias (para a sidebar)
  let categories: Category[] = []
  try {
    const resCategories = await fetch(
      "https://blog.hylluahusein.com.br/wp-json/wp/v2/categories",
      { next: { revalidate: 3600 } }
    )
    if (!resCategories.ok) throw new Error(`Erro: ${resCategories.status}`)
    categories = await resCategories.json()
  } catch (error) {
    console.error("Falha ao buscar categorias:", error)
  }

  // Buscar dados da categoria clicada
  let catData: Category[] = []
  try {
    const resCat = await fetch(
      `https://blog.hylluahusein.com.br/wp-json/wp/v2/categories?slug=${slug}`
    )
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
    const resPosts = await fetch(
      `https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?categories=${categoryId}&_embed`
    )
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
        {posts.length === 0 && <p>Nenhum post encontrado nesta categoria.</p>}

        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

          return (
            <BlogCard
              key={post.id}
              post={post}
              featuredImage={featuredImage}
            />
          )
        })}
      </div>

      {/* Sidebar */}
      <SidebarCategories categories={categories} />
    </main>
  )
}

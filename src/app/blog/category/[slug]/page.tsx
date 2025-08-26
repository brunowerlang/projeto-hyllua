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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }> // Updated to Promise type for Next.js 15
}) {
  const { slug } = await params // Added await to resolve the Promise

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

  // Buscar posts da categoria específica
  let posts: Post[] = []
  try {
    const resPosts = await fetch(`https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?categories=${slug}`, {
      next: { revalidate: 3600 },
    })
    if (!resPosts.ok) throw new Error(`Erro: ${resPosts.status}`)
    posts = await resPosts.json()
  } catch (error) {
    console.error("Falha ao buscar posts da categoria:", error)
  }

  return (
    <div className="flex">
      <SidebarCategories categories={categories} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Categoria: {slug}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

import SidebarCategories from "@/app/blog/SidebarCategories"
import BlogCard from "@/components/blog-card"
import type { Post, Category } from "@/types/blog"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
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

  const currentCategory = categories.find((cat) => cat.slug === slug)

  let posts: Post[] = []
  try {
    if (currentCategory) {
      const resPosts = await fetch(
        `https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?categories=${currentCategory.id}&_embed`,
        {
          next: { revalidate: 3600 },
        },
      )
      if (!resPosts.ok) throw new Error(`Erro: ${resPosts.status}`)
      posts = await resPosts.json()
    }
  } catch (error) {
    console.error("Falha ao buscar posts da categoria:", error)
  }

  return (
    <div className="flex">
      <SidebarCategories categories={categories} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Categoria: {currentCategory?.name || slug}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
              return <BlogCard key={post.id} post={post} featuredImage={featuredImage} />
            })
          ) : (
            <p className="text-muted-foreground">Nenhum post encontrado nesta categoria.</p>
          )}
        </div>
      </div>
    </div>
  )
}

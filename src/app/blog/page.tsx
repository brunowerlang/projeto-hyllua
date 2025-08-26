//src/app/blog/page.tsx
import BlogCard from "@/components/blog-card"
import SidebarCategories from "./SidebarCategories"

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

export const dynamic = "force-dynamic"

export default async function BlogPage() {
  let posts: Post[] = []
  let categories: Category[] = []

  try {
    const resPosts = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/posts?per_page=10&_embed", {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    })

    if (resPosts.ok) {
      posts = await resPosts.json()
    } else {
      console.error("Erro na API de posts:", resPosts.status, resPosts.statusText)
    }
  } catch (error) {
    console.error("Falha ao carregar posts:", error)
    // Continue with empty posts array
  }

  try {
    const resCategories = await fetch("https://blog.hylluahusein.com.br/wp-json/wp/v2/categories", {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(10000), // 10 second timeout
    })

    if (resCategories.ok) {
      categories = await resCategories.json()
    } else {
      console.error("Erro ao buscar categorias:", resCategories.statusText)
    }
  } catch (error) {
    console.error("Falha ao carregar categorias:", error)
    // Continue with empty categories array
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground tracking-tight">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conteúdos exclusivos sobre saúde, estética e bem-estar para você se manter sempre informado
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Posts Grid */}
          <div className="flex-1 overflow-y-auto max-h-screen no-scrollbar">
            <div className="space-y-8">
              {posts.length > 0 ? (
                posts.map((post) => {
                  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

                  return <BlogCard key={post.id} post={post} featuredImage={featuredImage} />
                })
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Não foi possível carregar os posts no momento. Tente novamente mais tarde.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <SidebarCategories categories={categories} />
        </div>
      </main>
    </div>
  )
}

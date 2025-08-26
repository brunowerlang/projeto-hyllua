import Link from "next/link"
import Image from "next/image"

interface Post {
  id: number
  slug: string
  title: { rendered: string }
  excerpt?: { rendered: string }
  date?: string
  _embedded?: {
    author?: { name: string }[]
    "wp:term"?: { id: number; name: string; taxonomy: string }[][]
    "wp:featuredmedia"?: { source_url: string }[]
  }
}

interface BlogCardProps {
  post: Post
  featuredImage?: string
}

export default function BlogCard({ post, featuredImage }: BlogCardProps) {
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Categoria"
  const author = post._embedded?.author?.[0]?.name ?? "Autor desconhecido"
  const date = post.date
    ? new Date(post.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : ""

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="p-6 text-center space-y-4" style={{ backgroundColor: "#fcfbfb" }}>
        <span
          className="inline-block px-4 py-1 text-xs font-medium tracking-wide uppercase bg-gray-100 text-gray-600 rounded-full"
          style={{ fontFamily: "var(--font-right)" }}
        >
          {category}
        </span>
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
          style={{ fontFamily: "var(--font-editorial)" }}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>

      {featuredImage && (
        <div className="relative w-full h-96 overflow-hidden rounded-t-xl">
          <Image src={featuredImage} alt={post.title.rendered} fill className="object-cover" />
        </div>
      )}

      {post.excerpt?.rendered && (
        <div
          className="p-6 text-gray-600 text-center leading-relaxed font-medium"
          style={{ fontFamily: "var(--font-editorial)" }}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      )}

      <div className="px-6 pb-6 text-center">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold tracking-wide hover:bg-gray-800 transition"
          style={{ fontFamily: "var(--font-right)" }}
        >
          Ler Mais →
        </Link>
      </div>

      <div className="border-t px-6 py-4 flex justify-between text-sm text-gray-500">
        <span>
          <span className="font-semibold" style={{ fontFamily: "var(--font-right)" }}>
            {author}
          </span>
        </span>
        <span className="cursor-pointer hover:underline" style={{ fontFamily: "var(--font-right)" }}>
          🔗 Share
        </span>
        <span style={{ fontFamily: "var(--font-right)" }}>{date}</span>
      </div>
    </article>
  )
}

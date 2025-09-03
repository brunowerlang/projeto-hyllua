"use client"

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
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article className="bg-white rounded-t-xl  overflow-hidden hover:shadow-xl transition  flex flex-col cursor-pointer">
      
        {featuredImage && (
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={featuredImage || "/placeholder.svg"}
              alt={post.title.rendered}
              fill
              className="object-cover"
            />
          </div>
        )}

          <div className="px-6 pt-4 text-center space-y-4">
          <span
            className="inline-block px-4 py-2 text-[10px] font-medium tracking-wide uppercase bg-fundo-button text-white rounded-full font-right"
            
          >
            {category}
          </span>
          <h2
            className="text-[1rem] leading-[1.5rem] font-medium text-gray-900 line-clamp-3 h-22 font-editorial"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>

  

      
      </article>
    </Link>
  )
}

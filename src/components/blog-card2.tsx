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

interface BlogCard2Props {
  post: Post
  featuredImage?: string
}

export default function BlogCard2({ post, featuredImage }: BlogCard2Props) {
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Categoria"
  const author = post._embedded?.author?.[0]?.name ?? "Autor desconhecido"
  const date = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : ""

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="flex bg-white rounded-l-2xl shadow-md overflow-hidden hover:shadow-xl transition w-full max-w-4xl mx-auto">
        {/* Imagem à esquerda */}
        <div className="relative w-1/2 min-h-[340px]">
          <Image
            src={featuredImage || "/placeholder.svg"}
            alt={post.title.rendered}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        {/* Conteúdo à direita */}
        <div className="flex flex-col justify-between w-1/2 p-10">
          <div>
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#d2b6a2] text-white font-right">
              {category}
            </span>
            <h2
              className="text-3xl font-serif font-medium text-gray-900 mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            {post.excerpt && (
              <div
                className="text-base text-[#f5e9df] font-normal mb-4 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-6 text-xs text-gray-500 font-right">
            <span>
              BY <span className="font-semibold text-[#b48b6a] uppercase">{author}</span>
            </span>
            <span className="tracking-wide">{date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
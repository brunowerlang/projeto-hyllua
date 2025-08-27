"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Post {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  _embedded?: {
    author?: Array<{ name: string }>
    "wp:featuredmedia"?: Array<{ source_url: string }>
  }
}

export default function BlogHeroCarousel({ posts }: { posts: Post[] }) {
  return (
    <section className="relative w-full bg-[#f1f1f1] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
{/* Texto à esquerda */}
<div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-12 lg:mb-0 gap-8">
  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-editorial leading-tight">
    <span className="block text-base md:text-lg font-normal mb-2 tracking-wide uppercase">
      BEM-VINDA AO BLOG HYLLUA
    </span>
    <span className="block text-4xl md:text-5xl font-bold text-black mb-2">
      Dicas, tendências<br />e cuidados
    </span>
    <span className="block text-lg md:text-xl font-normal mb-2">
      PARA SUA BELEZA E SAÚDE
    </span>
  </h2>

</div>

        {/* Carousel à direita */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-[400px] rounded-2xl overflow-hidden"
          >
            {posts.slice(0, 3).map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
              const author = post._embedded?.author?.[0]?.name || "Autor desconhecido"
              const date = new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })

              return (
                <SwiperSlide key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="block relative w-full h-[400px]">
                    {featuredImage && (
                      <Image
                        src={featuredImage}
                        alt={post.title.rendered}
                        fill
                        className="object-cover"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center justify-end pb-10 px-6 text-center">
                      <h2
                        className="text-2xl md:text-3xl text-white font-bold mb-2 font-editorial"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <div className="text-white text-xs md:text-sm opacity-80">
                        BY {author} | {date}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff !important;
          width: 40px;
          height: 40px;
          background: rgba(0,0,0,0.4);
          border-radius: 50%;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
          text-shadow: 0px 2px 6px rgba(0,0,0,0.6);
        }
        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #fff !important;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
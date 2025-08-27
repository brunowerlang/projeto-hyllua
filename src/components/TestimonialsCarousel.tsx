"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

interface Testimonial {
  text: string
  author: string
  location: string
  source: string
}
const testimonials: Testimonial[] = [
  {
    text: "Estou muito feliz por conhecer a sua jornada incrível. Feliz em ver você brilhar. Com carinho",
    author: "Sarah Jonson",
    location: "Nova York",
    source: "Instagram",
  },
  {
    text: "Este blog me inspira todos os dias com insights e histórias valiosas. Obrigado por compartilhar!",
    author: "Michael Roberts",
    location: "Los Angeles",
    source: "Twitter",
  },
  {
    text: "Aprendi tanto com suas publicações. Continue brilhando e espalhando positividade!",
    author: "Emma Wilson",
    location: "Londres",
    source: "Facebook",
  },
]


export default function TestimonialsCarousel() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-8 fundo-depoimentos ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl p-8 text-center relative min-h-[160px] bg-fundo-blog">
              
              <p className="text-lg italic text-gray-600 leading-relaxed">
                {item.text}
              </p>
              <div className="mt-6 text-sm font-semibold tracking-wide uppercase primary-color">
                {item.author}, {item.location}, via {item.source}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

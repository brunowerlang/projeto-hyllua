"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./casos.css";
import React from "react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function CasosClinicos() {
  return (
    <section
      className="relative pt-24 pb-16 overflow-hidden bg-[#d2d9c1]"
      style={{
        backgroundImage: "url(/images/clinica/background-5-clinica.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 16px 32px -8px #000"
      }}
    >
      <div className="mx-auto lg:px-6 text-center relative z-10 lg:max-w-6xl  ">
        {/* Bloco de textos */}
        <div className="flex flex-col items-center justify-center mb-12 lg:mb-28 mx-auto">
          <div className="   flex flex-col lg:flex-row items-center justify-between mb-20  gap-12">
            <h2 className="text-white text-[1.2rem] lg:text-[1.7rem] font-normal lg:leading-none leading-7 text-center lg:text-left relative lg:-left-12">
              NOSSO CUIDADO VAI<br /> ALÉM DO QUE É{" "}
              <span className="font-bold">BONITO<br /> OU FUNCIONAL.</span>
            </h2>
            <p className="text-white text-2xl lg:text-[1.7rem] font-light text-center lg:text-left titulo-scotch leading-none relative lg:-right-16">
              Ele é<br /> <span className="italic font-semibold lg:text-[3.5rem] text-[2.2rem] ">transformador</span>
            </p>
          </div>
          <div className="w-48 h-[2px] bg-white mx-auto mb-6" />
          <p className="text-white uppercase tracking-wide font-medium text-center lg:text-2xl  text-[0.8rem] leading-none">
            Veja <span className="font-bold">CASOS CLÍNICOS</span> da nossa equipe
          </p>
          <div className="w-48 h-[2px] bg-white mx-auto mt-6" />
        </div>

       <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1.5}
  spaceBetween={30}
  loop={true}
  navigation={true}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 3,
    slideShadows: false,
  }}
  breakpoints={{
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: false,
      },
    },
  }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper lg:max-w-6xl pt-20 "
        >
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center " >
            <img src="/images/clinica/felipe-01.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Felipe</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/felipe-02.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Felipe</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/felipe-03.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Felipe</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/danielle-01.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Danielle</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/danielle-02.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Danielle</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/danielle-03.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Danielle</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/luiza-01.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Luiza</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/luiza-02.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Luiza</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/luiza-03.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Luiza</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/hyllua-01.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Hyllua Husein</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/hyllua-02.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Hyllua Husein</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white p-4 flex  items-center justify-center ">
            <img src="/images/clinica/hyllua-03.webp" className="lg:w-[400px] lg:h-[240px] object-cover rounded-2xl" />
            <p className="mt-4 text-white">Dr. Hyllua Husein</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
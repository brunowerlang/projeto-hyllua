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
      className="relative lg:pt-26 pt-12 lg:pb-7 pb-8  bg-[#d2d9c1] "
      style={{
        backgroundImage: "url(/images/clinica/background-5-clinica.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 16px 32px -8px #000"
      }}
    >
      <div className="mx-auto lg:px-2 text-center relative z-10 lg:max-w-6xl  ">
        {/* Bloco de textos */}
        <div className="flex flex-col items-center justify-center  mb-0 lg:mb-28 mx-auto">
          <div className="   flex flex-col lg:flex-row items-center justify-between lg:mb-20  lg:gap-12 gap-7">
            <h2 className="text-white text-[1rem] lg:text-[25px] font-light lg:leading-[28px] leading-7 tracking-wider text-center lg:text-left relative lg:-left-14">
              NOSSO CUIDADO VAI<br /> ALÉM DO QUE É{" "}
              <span className="font-semibold">BONITO<br /> OU FUNCIONAL.</span>
            </h2>
            <p className="text-white text-[1.1rem] lg:text-[1.7rem] font-light text-center lg:text-left titulo-scotch leading-none relative lg:-right-15 mb-10 lg:mb-0">
              Ele é<br /> <span className="italic font-semibold lg:text-[3.65rem] text-[2.25rem] ">transformador</span>
            </p>
          </div>
          <div className="lg:w-48 w-35 h-[2px] bg-white mx-auto mb-6.5" />
          <p className="text-white uppercase tracking-wider font-light text-center lg:text-[22px]  text-[14px] leading-none">
            Veja <span className="font-semibold">CASOS CLÍNICOS</span> da nossa equipe
          </p>
          <div className="lg:w-48 w-35 h-[2px] bg-white mx-auto mt-6.5" />
        </div>

       <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1.6}
  spaceBetween={50}
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
          className="mySwiper relative lg:-top-14 mt-6 lg:mt-0 "
        >

<SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/hyllua-03.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-[0.5rem]" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Hyllua Husein</p>
          </SwiperSlide>

           <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 
lg:scale-100 ">
            <img src="/images/clinica/hyllua-01.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Hyllua Husein</p>
          </SwiperSlide>

          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/hyllua-02.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Hyllua Husein</p>
          </SwiperSlide>


          

           

            
          
         
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center  scale-90 lg:scale-100 " >
            <img src="/images/clinica/felipe-01.webp" className=" lg:h-[320px] w-full  object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2  text-white">Dr. Felipe</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/felipe-02.webp" className=" lg:h-[320px] w-full  object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Felipe</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/felipe-03.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Felipe</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/danielle-01.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Danielle</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/danielle-02.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Danielle</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/danielle-03.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Danielle</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/luiza-01.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Luiza</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/luiza-02.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Luiza</p>
          </SwiperSlide>
          <SwiperSlide className="border border-white lg:p-4 p-3  flex  items-center justify-center scale-90 lg:scale-100 ">
            <img src="/images/clinica/luiza-03.webp" className=" lg:h-[320px] w-full object-cover lg:rounded-2xl rounded-xl" />
            <p className="lg:mt-4 mt-2 text-white">Dr. Luiza</p>
          </SwiperSlide>
       
        </Swiper>
      </div>

<div className="absolute z-99 -bottom-12 left-0 w-full h-12 bg-gradient-to-t from-transparent to-black/30 pointer-events-none" />

    </section>
  );
}
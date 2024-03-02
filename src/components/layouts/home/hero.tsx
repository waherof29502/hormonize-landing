'use client';
import { HEROITEM } from '@/src/constants';
import { useState, useLayoutEffect, useRef } from 'react';
import Button from '../../button';
import { ArrowRightIcon, ArrowLeftIcon } from '@/public/svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=250px bottom'
      },
      left: '-100px',
      ease: 'power3.In'
    });
    gsap.to(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: '0px bottom',
        end: 'bottom+=250px bottom'
      },
      left: '0px',
      ease: 'power3.Out'
    });
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="w-full min-h-screen">
        <Swiper
          loop
          slidesPerView={1}
          navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide'
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          {HEROITEM.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${item.imgSrc})` }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden absolute w-full 3md:flex items-center justify-between h-full inset-0 z-20 bg-primary/25">
          <button
            className={`flex justify-end text-primary w-[7.5rem] button-prev-slide ${
              activeIndex === 0 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <ArrowLeftIcon className="text-[48px] text-white" />
          </button>
          <button className={`text-primary w-[7.5rem] button-next-slide opacity-100}`}>
            <ArrowRightIcon className="text-[48px] text-white" />
          </button>
        </div>
      </div>
      {/* hero content */}
      {/* desktop layout */}
      <div className="hidden w-full 3md:flex absolute inset-0 3md:h-[50vh] lg:h-[48vh] xl:h-[42vh] 3xl:h-[42vh] wide:h-[34vh] mt-auto z-20">
        <div className="w-[75%] flex absolute inset-0 ml-auto mt-auto h-full">
          <h2
            data-scroll
            data-scroll-speed="0.2"
            className="text-[2rem] xl:text-[2.5rem] 3xl:text-[3.1875rem] font-sans font-medium leading-normal text-shadow"
          >
            擁有自己的天堂
          </h2>
        </div>
        <div className="w-full flex absolute inset-0 mt-auto 3md:h-[41vh] lg:h-[39vh] xl:h-[32vh] 3xl:h-[30vh] wide:h-[22vh]">
          <div ref={text} className="relative w-1/4 h-full border-solid border-r-[2px] border-white"></div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="w-1/2 h-full flex flex-col px-[5.9375rem] lg:px-[3.5rem] 3xl:px-[5.9375rem] gap-y-[2.3125rem]"
          >
            <h2 className="font-sans text-white text-[1rem] 3xl:text-[1.25rem] wider:text-[1.5rem] font-[350] 3md:leading-[2.125rem] lg:leading-[2.25rem] xl:leading-[2.5rem] text-shadow">
              以居家住宅為主要範圍，從室內設計到工程施工，我們提供一個全方位統包的工作內容。內容包含：空間的規劃與設計、新居裝修、舊屋翻新、客廳設計、廚房及餐廳設計...
            </h2>
            <Button
              containerStyles="font-brandonMed ml-auto border-[1px] border-white px-5 py-2 text-[1rem] 3xl:text-[1.25rem] 3xl:text-[1.5rem] hover:text-primary hover:bg-white"
              path="/projects"
            >
              see all projects
            </Button>
          </div>
          <div className="w-1/4 h-full" />
        </div>
      </div>
      {/* mobile layout */}
      <div className="3md:hidden w-full flex flex-col absolute inset-0 h-[50vh] xs:h-[40vh] md:h-[35vh] mt-auto z-20">
        <div className="w-full h-full flex flex-col px-[2.5rem] gap-y-[1.25rem]">
          <h2 className="font-sans text-[1.25rem] font-medium leading-normal text-shadow">擁有自己的天堂</h2>
          <h2 className="font-sans text-white text-[1rem] font-[350] leading-[29px] tracking-[0.8px] text-shadow">
            以居家住宅為主要範圍，從室內設計到工程施工，我們提供一個全方位統包的工作內容。內容包含：空間的規劃與設計、新居裝修、舊屋翻新、客廳設計、廚房及餐廳設計...
          </h2>
          <Button
            containerStyles="font-brandonMed ml-auto border-[1px] border-white px-5 py-2 text-[1.125rem] hover:text-primary hover:bg-white"
            path="/projects"
          >
            see all projects
          </Button>
        </div>
      </div>
    </section>
  );
}

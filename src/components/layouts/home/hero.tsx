'use client'
import {HEROITEM} from '@/src/constants';
import {useState} from 'react';
import Button from '../../button';
import {ArrowRightIcon,ArrowLeftIcon} from '@/public/svg';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <div className="w-full min-h-screen">
      <Swiper
      slidesPerView={1}
      navigation={{
        nextEl:'.button-next-slide',
        prevEl:'.button-prev-slide'
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      modules={[Navigation]}
      pagination={{clickable:true}}
    >
    {HEROITEM.map((item,index)=>(
      <SwiperSlide key={index} >
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${item.imgSrc})` }}/>
      </SwiperSlide>
      ))} 
    </Swiper>
     <div className="hidden absolute w-full 3md:flex items-center justify-between h-full inset-0 z-20">
        <button className={`text-primary w-[120px] button-prev-slide ${activeIndex === 0 ?"opacity-0" :"opacity-100"}`} ><ArrowLeftIcon className="text-[48px] text-white"/></button>
        <button className={`text-primary w-[120px] button-next-slide ${activeIndex === HEROITEM.length-1 ?"opacity-0" :"opacity-100"}`} ><ArrowRightIcon className="text-[48px] text-white"/></button>
    </div>
      </div>
  {/* hero content */}
  {/* desktop layout */}
        <div className="hidden w-full lg:flex absolute inset-0 h-[50vh] xl:h-[45vh] 3xl:h-[35%] mt-auto z-20">
        <div className="w-[75%] flex absolute inset-0 ml-auto mt-auto h-full">
        <h2 className="lg:text-[2rem] xl:text-[3rem] 3xl:text-[54px] font-sans font-medium leading-normal">擁有自己的天堂</h2>
        </div>          
      <div className="w-full flex absolute inset-0 mt-auto h-[72%]">
          <div className="w-1/4 h-full border-solid border-r-[2px] border-white">
          </div>
          <div className="w-1/2 h-full flex flex-col px-[95px] gap-y-[37px]">
            <h2 className="font-sans text-white text-[1rem] font-normal leading-[40px]">
            以居家住宅為主要範圍，從室內設計到工程施工，我們提供一個全方位統包的工作內容。內容包含：空間的規劃與設計、新居裝修、舊屋翻新、客廳設計、廚房及餐廳設計...</h2>
            <Button containerStyles='font-brandonMed ml-auto border-[1px] border-white px-5 py-2 hover:text-primary hover:bg-white' path="/projects">see all projects</Button>
          </div>
          <div className="w-1/4 h-full" />
        </div>
        </div>
  {/* mobile layout */}
      <div className="lg:hidden w-full flex flex-col absolute inset-0 h-[50vh] xs:h-[40vh] md:h-[35vh] mt-auto z-20">
          <div className="w-full h-full flex flex-col px-[2.5rem] gap-y-[1.25rem]">
            <h2 className="font-sans text-[1.25rem] font-medium leading-normal">擁有自己的天堂</h2>
            <h2 className="font-sans text-white text-[16px] font-normal leading-[40px]">
            以居家住宅為主要範圍，從室內設計到工程施工，我們提供一個全方位統包的工作內容。內容包含：空間的規劃與設計、新居裝修、舊屋翻新、客廳設計、廚房及餐廳設計...</h2>
            <Button containerStyles='font-brandonMed ml-auto border-[1px] border-white px-5 py-2 hover:text-primary hover:bg-white' path="/projects">see all projects</Button>
          </div>
        </div>
    </section>
  );
}

'use client'
import React from 'react'
import ProjectCard from '../../project-card'
import { PROJECTITEM,DESIGNSTORY,PROJECTMOBILEITEM, DESIGNMOBILESTORY} from '@/src/constants'
import StoryCard from '../../story-card'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Project() {
   const spaceBetween = () => {
   if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 38;
    } else if (screenWidth >= 768) {
      return 21;
    } else {
      return 21;
    }
  } else {
    return 21;
  }
}

  return (
     <section className="relative">
      <div className="flex flex-col w-full min-h-[80vh] items-center -mt-[340px] md:-mt-[320px] 3md:-mt-[100px] wide:-mt-[150px] gap-y-16 mb-[120px]">
       <div className="w-full flex flex-col 3md:flex-row  gap-y-12 justify-center items-center">
        <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className='text-[30px] md:text-[3rem] 3md:text-[2.5rem] xl:text-[62px] font-brandonLight'>PROJECTS</span>
            <span className='text-[30px] md:text-[3rem] 3md:text-[2.5rem] xl:text-[62px] font-brandonBld'>REVIEW</span>
        </div>
        {/* desktop layout */}
        <div className="hidden 3md:flex 3md:w-3/4 h-full items-center px-10">
         <Swiper  slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
       {PROJECTITEM.map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <ProjectCard imgSrc={item.imgSrc} title={item.title} icon={item.icon} tag={item.tag}/>
            </SwiperSlide>
            </>
            ))}
        </Swiper>
        </div>
        {/* mobile layout */}
        <div className="lg:hidden w-[120vh] sm:w-[180vh] flex 3md:w-3/4 h-full items-center px-10">
         <Swiper  slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
       {PROJECTMOBILEITEM.map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <ProjectCard imgSrc={item.imgSrc} title={item.title} icon={item.icon} tag={item.tag}/>
            </SwiperSlide>
            </>
            ))}
        </Swiper>
        </div>
      </div>
      
      <div className="flex w-full flex-col 3md:flex-row gap-y-12 items-center pt-12">
       <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className='text-[30px] md:text-[3rem] 3md:text-[2.5rem] xl:text-[62px] font-brandonLight'>DESIGN</span>
            <span className='text-[30px] md:text-[3rem] 3md:text-[2.5rem] xl:text-[62px] font-brandonBld'>STORIES</span>
        </div>
        {/* desktop layout */}
        <div className="hidden 3md:flex 3md:w-3/4 px-10 h-full">
         <Swiper  slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
       {DESIGNSTORY.slice(0,3).map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <StoryCard imgSrc={item.imgSrc} title={item.title} link={item.link}/>
            </SwiperSlide>
            </>
            ))}
        </Swiper>
        </div>  
        {/* mobile layout */}
        <div className="3md:hidden w-[120vh] sm:w-[180vh] flex px-10 h-full">
         <Swiper  slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
       {DESIGNMOBILESTORY.slice(0,3).map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <StoryCard imgSrc={item.imgSrc} title={item.title} link={item.link}/>
            </SwiperSlide>
            </>
            ))}
        </Swiper>
        </div>  
      </div>
      </div>
    </section>
  )
}

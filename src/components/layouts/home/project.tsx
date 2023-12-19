'use client'
import React from 'react'
import ProjectCard from '../../project-card'
import { PROJECTITEM,DESIGNSTORY } from '@/src/constants'
import StoryCard from '../../story-card'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Project() {
  return (
     <section className="relative">
      <div className="flex flex-col w-full min-h-[80vh] items-center -mt-[150px] gap-y-16 mb-[120px]">
       <div className="w-full flex flex-col 3md:flex-row justify-center items-center">
        <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className='text-[30px] 3md:text-[40px] xl:text-[62px] font-brandonLight'>PROJECTS</span>
            <span className='text-[30px] 3md:text-[40px] xl:text-[62px] font-brandonBld'>REVIEW</span>
        </div>
        <div className="flex w-3/4 p-10 h-full">
         <Swiper  slidesPerView={1} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}} spaceBetween={40}>
       {PROJECTITEM.map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <ProjectCard imgSrc={item.imgSrc} title={item.title} icon={item.icon} tag={item.tag}/>
            </SwiperSlide>
            </>
            ))}
        </Swiper>
        </div>
      </div>
      
      <div className="flex w-full  items-center">
       <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className='text-[30px] 3md:text-[40px] xl:text-[62px] font-brandonLight'>DESIGN</span>
            <span className='text-[30px] 3md:text-[40px] xl:text-[62px] font-brandonBld'>STORIES</span>
        </div>
        <div className="flex w-3/4 p-10 h-full">
         <Swiper  slidesPerView={1} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}} spaceBetween={40}>
       {DESIGNSTORY.slice(0,3).map((item,index)=>(
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

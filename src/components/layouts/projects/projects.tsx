'use client'
import React from 'react';
import Image from 'next/image';
import {PROJECTITEM} from '@/src/constants';
import { useInView } from "react-intersection-observer";
import Button from '../../button';
import { motion, easeIn } from "framer-motion";

export default function Projects() {
  const { ref:refOne, inView:ViewOne } = useInView({ threshold: 1 });
  const { ref:refTwo, inView:ViewTwo } = useInView({ threshold: 1 });
  const { ref:refThree, inView:ViewThree } = useInView({ threshold: 1 });
  const { ref:refDesktopOne, inView:ViewDesktopOne } = useInView({ threshold: 1 });
  const { ref:refDesktopTwo, inView:ViewDesktopTwo } = useInView({ threshold: 1 });
    const { ref:refDesktopThree, inView:ViewDesktopThree } = useInView({ threshold: 1 });



  return (
    <section className="relative">
      {/* desktop layout */}
      <div className="hidden 3md:flex flex-col w-full min-h-[90vh] gap-y-[5rem] -mt-[9rem] mb-[9.25rem]">
        {/* project1 */}
        <div  className="w-full flex justify-center items-center" >
         <div ref={refDesktopOne} className="w-1/4 h-[50vh] flex flex-col justify-center items-center text-primary gap-x-2">
           {ViewDesktopOne ?  
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease:easeIn ,duration: 0.25 }} 
            className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[0].projectTag}</motion.span>
            :<span className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[0].category[0]}</span>} 
          </div>   
          <div className="w-[60%] h-full flex justify-center px-[50px] 3xl:px-[90px] gap-y-[16px] 3xl:gap-y-[37px]">
          <Image src={PROJECTITEM[0].imgProjectSrc} alt="123" width={1343} height={580} className='object-cover rounded-[15px]'/>
          </div>
          <div className="w-1/4 h-full flex flex-col justify-center ">
              <p className="mt-6 font-sans text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">                {PROJECTITEM[0].title}
              </p>
              <div className="flex gap-x-2 items-center pt-1">
                <span className="text-[1rem] text-primary">{PROJECTITEM[0].icon}</span>
                <span className="font-sans text-[#3E3E3E] font-syne text-[1rem] tracking-[0.64px] font-light ">{PROJECTITEM[0].tag}</span>
              </div>
            <Button containerStyles='3xl:w-1/3 font-brandonMed mt-8 mr-auto border-[1px] border-primary px-5 py-2 text-primary hover:text-white hover:bg-primary' path={PROJECTITEM[0].path}>learn more</Button>
          </div>
        </div>
        {/* project2 */}
        <div  className="w-full flex justify-center items-center" >
         <div ref={refDesktopTwo} className="w-1/4 h-[50vh] flex flex-col justify-center items-center text-primary gap-x-2">
           {ViewDesktopTwo ?  
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease:easeIn ,duration: 0.25 }} 
            className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[1].projectTag}</motion.span>
            :
            <>
            <span className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[1].category[0]}</span>
            <span className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[1].category[1]}</span>
            </>
            } 
          </div>   
          <div className="w-[60%] h-full flex justify-center px-[50px] 3xl:px-[90px] gap-y-[16px] 3xl:gap-y-[37px]">
          <Image src={PROJECTITEM[1].imgProjectSrc} alt="123" width={1343} height={580} className='object-cover rounded-[15px]'/>
          </div>
          <div className="w-1/4 h-full flex flex-col justify-center ">
              <p className="mt-6 font-sans text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">{PROJECTITEM[1].title}</p>
              <div className="flex gap-x-2 items-center pt-1">
                <span className="text-[1rem] text-primary">{PROJECTITEM[1].icon}</span>
                <span className="font-sans text-[#3E3E3E] font-syne text-[1rem] tracking-[0.64px] font-light ">{PROJECTITEM[1].tag}</span>
              </div>
            <Button containerStyles='3xl:w-1/3 font-brandonMed mt-8 mr-auto border-[1px] border-primary px-5 py-2 text-primary hover:text-white hover:bg-primary' path={PROJECTITEM[1].path}>learn more</Button>
          </div>
        </div>
        {/* project3 */}
        <div  className="w-full flex justify-center items-center" >
         <div ref={refDesktopThree} className="w-1/4 h-[50vh] flex flex-col justify-center items-center text-primary gap-x-2">
           {ViewDesktopThree ?  
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease:easeIn ,duration: 0.25 }} 
            className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[2].projectTag}</motion.span>
            :
            <>
            <span className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[2].category[0]}</span>
            <span className='text-[2.25rem] 3xl:text-[2.5rem] font-brandonBld uppercase'>{PROJECTITEM[2].category[1]}</span>
            </>
            } 
          </div>   
          <div className="w-[60%] h-full flex justify-center px-[50px] 3xl:px-[90px] gap-y-[16px] 3xl:gap-y-[37px]">
          <Image src={PROJECTITEM[2].imgProjectSrc} alt="123" width={1343} height={580} className='object-cover rounded-[15px]'/>
          </div>
          <div className="w-1/4 h-full flex flex-col justify-center ">
              <p className="mt-6 font-sans text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">{PROJECTITEM[2].title}</p>
              <div className="flex gap-x-2 items-center pt-1">
                <span className="text-[1rem] text-primary">{PROJECTITEM[2].icon}</span>
                <span className="font-sans text-[#3E3E3E] font-syne text-[1rem] tracking-[0.64px] font-light ">{PROJECTITEM[2].tag}</span>
              </div>
            <Button containerStyles='3xl:w-1/3 font-brandonMed mt-8 mr-auto border-[1px] border-primary px-5 py-2 text-primary hover:text-white hover:bg-primary' path={PROJECTITEM[2].path}>learn more</Button>
          </div>
        </div>
    
      </div>
      {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-fit pb-[60px] pt-6 gap-y-[5rem]">
         {/* project1 */}
        <div  className="w-full flex flex-col justify-center items-center md:px-6" >
         <div ref={refOne} className="w-full h-[10vh] flex flex-col justify-center items-center text-primary ">
           {ViewOne ?  
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease:easeIn ,duration: 0.25 }} 
            className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[0].projectTag}</motion.span>
            :<span className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[0].category[0]}</span>} 
          </div>  
          <div className="w-[90%] h-[40vh]">
          <Image src={PROJECTITEM[0].imgProjectSrc} alt="123" width={303} height={352} className='object-cover bg-center rounded-[15px] w-full h-full'/>
          </div>
          <div className="w-full h-full flex flex-col justify-center px-8 mx-auto">
            <p className="mt-6 font-sans text-[1.25rem] 3md:text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">
                {PROJECTITEM[0].title}
              </p>
              <div className="flex gap-x-2 items-center pt-3">
                <span className="text-[1.25rem] 3md:text-[1rem] text-primary">{PROJECTITEM[0].icon}</span>
              <span className="font-sans text-[#3E3E3E] font-syne text-[16px] tracking-[0.64px] font-light">{PROJECTITEM[0].tag}</span>
              </div>
            <Button containerStyles='w-1/3 md:w-1/4 font-brandonMed mt-2 ml-auto border-[1px] border-primary p-2 text-primary text-[18px] hover:text-white hover:bg-primary' path={PROJECTITEM[0].path}>learn more</Button>
          </div>
        </div>
         {/* project2 */}
        <div  className="w-full flex flex-col justify-center items-center md:px-6" >
         <div ref={refTwo} className="w-full h-[10vh] flex gap-x-2 justify-center items-center text-primary ">
           {ViewTwo ?  
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease:easeIn ,duration: 0.25 }} 
            className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[1].projectTag}</motion.span>
            :<>
            <span className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[1].category[0]}</span>
            <span className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[1].category[1]}</span>
            </>} 
          </div>   
          <div className="w-[90%] h-[40vh]">
          <Image src={PROJECTITEM[1].imgProjectSrc} alt="123" width={303} height={352} className='object-cover bg-center rounded-[15px] w-full h-full'/>
          </div>
          <div className="w-full h-full flex flex-col justify-center px-8 mx-auto">
            <p className="mt-6 font-sans text-[1.25rem] 3md:text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">
                {PROJECTITEM[1].title}
              </p>
              <div className="flex gap-x-2 items-center pt-3">
                <span className="text-[1.25rem] 3md:text-[1rem] text-primary">{PROJECTITEM[1].icon}</span>
              <span className="font-sans text-[#3E3E3E] font-syne text-[1rem] tracking-[0.64px] font-light">{PROJECTITEM[1].tag}</span>
              </div>
            <Button containerStyles='w-1/3 md:w-1/4 font-brandonMed mt-2 ml-auto border-[1px] border-primary p-2 text-primary text-[18px] hover:text-white hover:bg-primary' path={PROJECTITEM[1].path}>learn more</Button>
          </div>
        </div>
        {/* project3 */}
        <div  className="w-full flex flex-col justify-center items-center md:px-6" >
         <div ref={refThree} className="w-full h-[10vh] flex gap-x-2 justify-center items-center text-primary ">
           {ViewThree ?  
           <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease:easeIn ,duration: 0.25 }} 
            className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[2].projectTag}</motion.span>
            :<>
            <span className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[2].category[0]}</span>
            <span className='text-[1.5rem] md:text-[2.25rem] font-brandonBld uppercase text-shadow'>{PROJECTITEM[2].category[1]}</span>
            </>} 
          </div>   
          <div className="w-[90%] h-[40vh]">
          <Image src={PROJECTITEM[2].imgProjectSrc} alt="123" width={303} height={352} className='object-cover bg-center rounded-[15px] w-full h-full'/>
          </div>
          <div className="w-full h-full flex flex-col justify-center px-8 mx-auto">
            <p className="mt-6 font-sans text-[1.25rem] 3md:text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">
                {PROJECTITEM[2].title}
              </p>
              <div className="flex gap-x-2 items-center pt-3">
                <span className="text-[1.25rem] 3md:text-[1rem] text-primary">{PROJECTITEM[2].icon}</span>
              <span className="font-sans text-[#3E3E3E] font-syne text-[1rem] tracking-[0.64px] font-light">{PROJECTITEM[2].tag}</span>
              </div>
            <Button containerStyles='w-1/3 md:w-1/4 font-brandonMed mt-2 ml-auto border-[1px] border-primary p-2 text-primary text-[18px] hover:text-white hover:bg-primary' path={PROJECTITEM[2].path}>learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

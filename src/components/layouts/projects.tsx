import React from 'react';
import {PROJECTITEM} from '@/src/constants';
import Image from 'next/image';
import Button from '../button';
import Link from 'next/link';
export default function Projects() {
  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[90%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center bg-white border-r-[2px] border-[#A7A7A7]">
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>PROJECTS</span>
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>REVIEW</span>
            </div>
            <div className="w-3/4 h-full bg-projectHero bg-cover bg-no-repeat"></div>
          </div>
          <div className="w-full h-1/4 relative -mt-[0.4px] bg-white">
            <div className="absolute inset-0 bg-[#A7A7A7] clip-path-polygon " />
            <div className="absolute inset-0 clip-small-polygon bg-[#ECECEC] border-solid border-t-[2px] border-[#A7A7A7]" />
          </div>
        </div>
      </div>
      {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-fit mt-[14vh]">
          <div className="w-full h-full flex justify-center items-center py-10">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[30px] sm:text-[3rem] font-brandonLight text-shadow'>PROJECTS</span>
              <span className='text-primary text-[30px] sm:text-[3rem] font-brandonBld text-shadow'>REVIEW</span>
            </div>
          </div>
        <div className="w-full h-[60vh] bg-mobileProjectHero bg-cover bg-no-repeat" /> 
        <div className="w-full h-[45vh] bg-[#ECECEC]"/>
      </div>

      {/* project detail*/}
      {/* desktop layout */}
      <div className="relative hidden 3md:flex flex-col w-full min-h-[90vh] 3md:gap-y-0 xl:gap-y-[5rem] 3md:-mt-[5rem] -mt-[7rem] mb-[9.25rem]">
      {PROJECTITEM.map((item)=>(
        <>
        <div className="w-full flex justify-center items-center scale-90 xl:scale-100 group " >
         <div  className="w-1/5 3xl:w-1/4 h-[35vh] flex flex-col justify-center items-center text-primary gap-x-2">
         <div className="w-full h-[44%] wider:h-[20%] flex flex-col justify-center items-center group overflow-hidden">
         <div className='flex flex-col justify-center items-center'>
         <span className='text-[1.5rem] md:text-[2rem] xl:text-[2.25rem] font-brandonBld uppercase text-shadow ease-linear duration-300 translate-y-5 group-hover:-translate-y-24'>{item.category[0]}</span>
         <span className='text-[1.5rem] md:text-[2rem] xl:text-[2.25rem] font-brandonBld uppercase text-shadow ease-linear duration-300 translate-y-5 group-hover:-translate-y-24'>{item.category[1]}</span>
         </div>
          <span className='text-[1.5rem] md:text-[2rem] xl:text-[2.25rem] font-brandonBld uppercase text-shadow ease-linear duration-300 translate-y-20 group-hover:-translate-y-14'>{item.projectTag}</span>
          </div>
          </div>   
          <div className="w-2/4 h-full flex justify-center px-[50px] 3xl:pl-[0rem] 3xl:pr-[6rem] gap-y-[1rem] 3xl:gap-y-[37px]">
          <Link href={item.path} className='cursor-pointer'>
          <Image src={item.imgProjectSrc} alt={"12"} width={1343} height={580} className='object-cover rounded-[15px] '/>
          </Link>
          </div>
          <div className="w-1/4 h-full flex flex-col justify-center gap-y-1 pl-2">
              <Link href={item.path} className='cursor-pointer'>
              <p className="mt-6 font-sans text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">{item.title}
              </p>
              <div className="flex gap-x-2 items-center pt-1">
                <span className="text-[1rem] text-primary">{item.icon}</span>
                <span className="font-sans text-[#3E3E3E] font-syne text-[1rem] tracking-[0.64px] font-light">{item.tag}</span>
              </div>
              </Link>
            <Button containerStyles='wide:w-1/3 font-brandonMed mt-8 mr-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary' path={item.path}>learn more</Button>
          </div>
        </div>
        </>
      ))}
        </div>
        {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-screen pb-[60px] pt-6 gap-y-[5rem] -mt-[22rem] md:-mt-[16.75rem] ">
          {PROJECTITEM.map((item)=>(
          <>
          <div  className="w-full flex flex-col justify-center items-center md:px-6 group">
          <div className="w-full h-[14vh] flex flex-col justify-center items-center text-primary">
          <div className="w-full h-1/2 flex flex-col justify-center items-center group overflow-hidden">
          <div className='flex gap-x-2 justify-center items-center'>
          <span className='text-[1.5rem] sm:text-[2.25rem] font-brandonBld uppercase text-shadow ease-linear duration-300 translate-y-5 group-hover:-translate-y-10'>{item.category[0]}</span>
          <span className='text-[1.5rem] sm:text-[2.25rem] font-brandonBld uppercase text-shadow ease-linear duration-300 translate-y-5 group-hover:-translate-y-10'>{item.category[1]}</span>
          </div>
          <span className='text-[1.5rem] sm:text-[2.25rem] font-brandonBld uppercase text-shadow ease-linear duration-300 translate-y-20 group-hover:-translate-y-5'>{item.projectTag}</span>
          </div>
          </div>  
          <div className="w-[90%] h-[50vh]">
          <Image src={item.imgProjectSrc} alt="123" width={303} height={352} className='object-cover bg-center rounded-[15px] w-full h-full'/>
          </div>
          <div className="w-full h-full flex flex-col justify-center px-8 mx-auto">
            <p className="mt-6 font-sans text-[1.25rem] 3md:text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">
                {item.title}
              </p>
              <div className="flex gap-x-2 items-center pt-3">
                <span className="text-[1.25rem] 3md:text-[1rem] text-primary">{item.icon}</span>
              <span className="font-sans text-[#3E3E3E] font-syne text-[16px] tracking-[0.64px] font-light">{item.tag}</span>
              </div>
            <Button containerStyles='w-1/3 md:w-1/4 font-brandonMed mt-2 ml-auto border-[1px] border-primary p-2 text-primary text-[18px] hover:text-white hover:bg-primary' path={item.path}>learn more</Button>
          </div>
          </div>
          </>
          ))}

        </div>
    </section>
  );
}

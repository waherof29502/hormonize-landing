'use client'
import React,{ useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function Feature() {
  const text = useRef(null);
  const img = useRef(null);


    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=180px bottom",
            },
            left: "-100px",
            ease: "power3.In"
        })
        gsap.to(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=180px bottom",
            },
            left: "0px",
            ease: "power3.Out"
        })
         gsap.from(img.current, {
            scrollTrigger: {
                trigger: img.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=180px bottom",
            },
            left: "0px",
            ease: "power3.In"
        })
        
    }, [])
  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[90vh] bg-feature bg-cover bg-no-repeat">
        <div className="w-full flex justify-center items-center">
          <div ref={text} className="relative w-1/4 h-full flex flex-col justify-center items-center text-white border-solid border-r-[2px] border-white">
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>DESIGN</span>
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>DNA</span>
          </div>
          <div data-scroll data-scroll-speed="0.4" className="w-1/2 h-full flex flex-col justify-center pl-[3.125rem] 3xl:pl-[5.625rem] gap-y-[1rem] 3xl:gap-y-[2.3125rem]">
            <h2 className="text-white text-[1.25rem] 3xl:text-[1.875rem] tracking-[1.8px] leading-[3rem] font-medium">
              設計空間是須要專注的。
            </h2>
            <span className="text-white text-[1rem] 3xl:text-[1.25rem] leading-[2.5rem] font-sans font-[350] text-shadow">
              我們專注的第一件事，是希望客戶於我們所呈現的作品之中，可以感受到什麼？是愉悅、是驚喜、是自我連繫。然後開始構思與打造設計意圖。不斷的回到初衷，只為了一個最好的定案。為了接近完美，為了豐富生活面貌，我們甚至必須重新開始，直到能感動並提升客戶的生活層次後，我們才會為這樣的作品背書。
            </span>
          </div>
          <div className="relative w-1/4 h-full" />
        </div>
      </div>
       {/* mobile layout */}

      <div className="3md:hidden flex flex-col w-full min-h-screen pb-[100px] md:pb-[120px] bg-mobileFeature bg-cover bg-no-repeat">
        <div className="flex flex-col gap-y-12 w-full justify-center items-center ">
          <div className="block h-[30vh] xs:h-[35vh] 2xs:h-[40vh] sm:h-[63vh] md:h-[70vh]" />
          <div className="w-full h-full flex flex-col justify-center items-center text-white gap-x-2">
            <span className='text-[1.875rem] md:text-[3rem] font-brandonLight text-shadow'>DESIGN</span>
            <span className='text-[1.875rem] md:text-[3rem] font-brandonBld text-shadow'>DNA</span>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center px-[40px] gap-y-[24px]">
            <h2 className="font-sans text-white text-[1.25rem] tracking-[1.8px] leading-[38px] font-medium">
               設計空間是須要專注的。
            </h2>
            <span className="font-sans text-white text-[1rem] leading-[2.25rem] font-normal">
              我們專注的第一件事，是希望客戶於我們所呈現的作品之中，可以感受到什麼？是愉悅、是驚喜、是自我連繫。然後開始構思與打造設計意圖。不斷的回到初衷，只為了一個最好的定案。為了接近完美，為了豐富生活面貌，我們甚至必須重新開始，直到能感動並提升客戶的生活層次後，我們才會為這樣的作品背書。
            </span>
          </div>
        </div>
      </div>
     
    </section>
  );
}

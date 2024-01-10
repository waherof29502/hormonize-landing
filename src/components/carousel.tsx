'use client';
import React, { useState, useEffect } from 'react';
type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  curr: number;
  setCurr: React.Dispatch<React.SetStateAction<number>>;
  setOpenLightBox: React.Dispatch<React.SetStateAction<boolean>>;

};


const Carousel = ({
  children,
  curr,
  setCurr,
  setOpenLightBox,
}: CarouselProps) => {
  // const [curr, setCurr] = useState(0)

  // 輪播功能
  const prev = () => setCurr((curr: number) => (curr === 0 ? React.Children.count(children) - 1 : curr - 1));

  const next = () => setCurr((curr: number) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1));


  return (
    <div className="overflow-x-hidden overflow-y-hidden relative">
      <div
        className="flex 3md:items-center transition-transform ease-out duration-500 md:h-[80vh] 3md:h-[85vh] "
        style={{ transform: `translateX(-${curr * 100}%)`}}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 md:p-10 z-20">
        <div
          className="w-full h-full"
          onClick={() => {
            setOpenLightBox(true);
          }}
        />
      </div>
      {/* 圖示於圖片中展示 */}
      {/* <div className='absolute bottom-8 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {React.Children.toArray(children)?.map((_, i) => (
                        <div key={i} className={`transition-all w-[10px] h-[10px] bg-black rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} onClick={() => {setCurr(i) }}/>
                    ))}
                </div> 
            </div> */}
    </div>
  );
};

export default Carousel;

import React from 'react';

export default function Feature() {
  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden lg:flex w-full min-h-[90vh] bg-feature bg-cover bg-no-repeat">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/4 h-full flex flex-col justify-center items-center text-white border-solid border-r-[2px] border-white">
            <span className='text-[30px] 3md:text-[40px] xl:text-[62px] font-brandonLight'>DESIGN</span>
            <span className='text-[30px] 3md:text-[40px] xl:text-[62px] font-brandonBld'>DNA</span>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center pl-[50px] 3xl:pl-[90px] gap-y-[16px] 3xl:gap-y-[37px]">
            <h2 className="text-white text-[20px] 3xl:text-[30px] tracking-[1.8px] leading-[48px] font-medium">
              設計空間是須要專注的。
            </h2>
            <span className="text-white text-[14px] 3xl:text-[20px] leading-[40px] font-normal">
              我們專注的第一件事，是希望客戶於我們所呈現的作品之中，可以感受到什麼？是愉悅、是驚喜、是自我連繫。然後開始構思與打造設計意圖。不斷的回到初衷，只為了一個最好的定案。為了接近完美，為了豐富生活面貌，我們甚至必須重新開始，直到能感動並提升客戶的生活層次後，我們才會為這樣的作品背書。
            </span>
          </div>
          <div className="w-1/4 h-full" />
        </div>
      </div>
       {/* mobile layout */}

      <div className="lg:hidden flex flex-col w-full min-h-screen pb-[100px] md:pb-[120px] bg-mobileFeature bg-cover bg-no-repeat">
        <div className="flex flex-col gap-y-12 w-full justify-center items-center ">
          <div className="block h-[30vh] xs:h-[35vh] 2xs:h-[40vh] sm:h-[63vh] md:h-[70vh]" />
          <div className="w-full h-full flex flex-col justify-center items-center text-white gap-x-2">
            <span className='text-[30px] md:text-[48px] font-brandonLight'>DESIGN</span>
            <span className='text-[30px] md:text-[48px] font-brandonBld'>DNA</span>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center px-[40px] gap-y-[24px]">
            <h2 className="font-sans text-white text-[20px] tracking-[1.8px] leading-[38px] font-medium">
               設計空間是須要專注的。
            </h2>
            <span className="font-sans text-white text-[16px] leading-[38px] font-normal">
              我們專注的第一件事，是希望客戶於我們所呈現的作品之中，可以感受到什麼？是愉悅、是驚喜、是自我連繫。然後開始構思與打造設計意圖。不斷的回到初衷，只為了一個最好的定案。為了接近完美，為了豐富生活面貌，我們甚至必須重新開始，直到能感動並提升客戶的生活層次後，我們才會為這樣的作品背書。
            </span>
          </div>
        </div>
      </div>
     
    </section>
  );
}

import React from 'react';
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[90%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center bg-white border-r-[2px] border-[#A7A7A7]">
              <span className='text-primary text-[3rem] wide:text-[3.875rem] font-brandonLight text-shadow'>PROJECT</span>
              <span className='text-primary text-[3rem] wide:text-[3.875rem] font-brandonBld text-shadow'>REVIEW</span>
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
              <span className='text-primary text-[30px] md:text-[3rem] font-brandonLight text-shadow'>PROJECT</span>
              <span className='text-primary text-[30px] md:text-[3rem] font-brandonBld text-shadow'>REVIEW</span>
            </div>
          </div>
        <div className="w-full h-[60vh] bg-mobileProjectHero bg-cover bg-no-repeat" />     
      </div>
    </section>
  );
}

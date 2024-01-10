import React from 'react'
import {MailIcon,PhoneIcon,TaxIcon,LocationIcon,ThanksIcon} from '@/public/svg/index'

function ContactUs() {
  return (
    <>
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col items-center bg-contact bg-cover bg-no-repeat border-r-[2px] border-[#A7A7A7] gap-x-2 px-[4rem]">
            <div className="flex justify-center gap-x-4 mt-[8rem]">
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>CONTACT</span>
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>US</span>
            </div>
            <span className='text-[1.5rem] font-normal mt-[4rem] '>了解如何用設計為你的生活開拓嶄新視野，歡迎與我們聯繫</span>
            <div className="flex flex-col gap-y-[1.5rem] my-[16rem]">
            <div className='flex items-center gap-x-[2rem]'>
                <PhoneIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>+886 2-2739-3216</span>
            </div>
            <div className='flex items-center gap-x-[2rem]'>
                <TaxIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>+886 2-2739-3219</span>
            </div>
            <div className='flex items-center gap-x-[2rem]'>
                <MailIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>ching@harmonizedesign.com</span>
            </div>
             <div className='flex items-center gap-x-[2rem]'>
                <LocationIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1rem] font-normal'>110 台北市信義區基隆路二段189號12樓</span>
            </div>
            </div>
            </div>
            <div className="w-3/4 h-full flex items-center justify-center">
              <ThanksIcon className='text-[54rem] text-[#515151]'/>
            </div>
          </div>
        </div>
      </div>
      {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-fit mt-[14vh]">
          <div className="w-full h-full flex justify-center items-center py-10">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow'>PROJECTS</span>
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow'>REVIEW</span>
            </div>
          </div>
        <div className="w-full h-[60vh] bg-mobileProjectHero bg-cover bg-no-repeat" /> 
        <div className="w-full h-[45vh] bg-[#ECECEC]"/>
      </div>
    </>
  )
}

export default ContactUs
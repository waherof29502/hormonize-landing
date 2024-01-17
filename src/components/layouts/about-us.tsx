import React from 'react';
import {PROJECTITEM} from '@/src/constants';
import Image from 'next/image';
import Button from '../button';
import AwardImage from '@/public/images/about/2-1.png';
import GrayBg from '@/public/images/about/2-2.png'
import Signature from '@/public/images/about/3-1.png'

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden">
      {/* hero desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[96vh] mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-1/4 h-full flex gap-x-4 justify-center items-center">
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>ABOUT</span>
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>US</span>
            </div>
            <div className="w-3/4 h-full bg-aboutUsHero bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </div>
      {/* hero mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-fit mt-[14vh]">
          <div className="w-full h-full flex justify-center items-center py-10">
            <div className="w-1/4 h-full flex gap-x-4 justify-center items-center">
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow'>ABOUT</span>
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow'>US</span>
            </div>
          </div>
        <div className="w-full h-[60vh] bg-mobileAboutUsHero bg-cover bg-no-repeat" /> 
      </div>

      {/* project detail*/}
      {/* desktop layout */}
      <div className="relative hidden 3md:flex flex-col w-full min-h-[90vh] gap-y-6 pl-16 -mt-20">
      <div className="w-[70%] wide:w-[64%] pl-3 flex flex-col gap-y-8 ">
      <h2 className="text-primary text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">寬堂空間設計的特點，在於思考『住』的意義。</h2>
      <span className="text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">透過如此的自我探究，讓我們回到的室內設計的原點，因為，住宅必須反應出人類的根本慾望，透過設計的手法，呈現每個居住者的夢想，而不再只是一般意義的形式探索或複製。針對不同類型的居住者，我們著重在創造出一個宜人的居家環境，包括了合宜且適切的規劃，表達居住者個性的設計風格，健康的建材選擇，環保與節能品項的建議，以及，符合市場行情的建構費用。</span>
      </div>
      <div className='flex flex-col gap-y-6 my-[5rem] 3xl:my-[10rem]'>
      <div className="h-[2px] bg-[#929292] w-[40%] ml-auto mr-[10%]" />
      <div className='w-full h-auto'>
      <div className="flex justify-start items-start">
        {/* 第一項圖文區塊  */}
      <div className="flex items-start w-[40%]">
        <Image src={AwardImage} alt='award-image' className="w-full h-auto aspect-auto "/>
      </div>
      <div className="h-full w-[10%] "/>
      <div className="h-[70vh] xl:h-[90vh] w-[40%]">
      <div className="flex flex-col w-full h-full justify-center gap-y-6">
        <h3 className='text-primary text-[2rem] 3xl:text-[3rem] font-brandonBld text-shadow py-2'>EVENTS</h3>
        <h4 className='text-primary text-[1rem] 3xl:text-[1.5rem] font-medium'>獲獎紀錄</h4>
      <div className="flex flex-col gap-y-4">
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans'>2019｜ A’ DESIGN AWARDS: House 4x4x4,Iron Winner</span>
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans'>2021｜ IF DESIGN AWARDS: House 4x4x4,Final Jury</span>   
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans wide:whitespace-pre'>2022 ｜  ARCHITECTURE & DESIGN COLLECTION (ADC): House 4x4x4,Gold Winner</span>
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans'>2023 ｜ MUSE DESIGN AWARDS: CELLIST IN THE LOFT,Silver Winner</span> 
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans'>2023｜  LONDON DESIGN AWARDS: IN THE CLOUDS,Silver Winner</span>   
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="h-[2px] bg-[#929292] w-[40%] ml-auto mr-[10%]" />
      <div className="flex justify-start items-start">
        {/* 第二項圖文區塊  */}
      <div className="flex items-start w-[40%]">
        <Image src={GrayBg} alt='award-image' className="w-full h-auto aspect-auto "/>
      </div>
      <div className="h-full w-[10%] "/>
      <div className="h-[70vh] xl:h-[90vh] w-[39.5%]">
      <div className="flex flex-col w-full h-full justify-center gap-y-6">
        <h3 className='text-primary text-[2rem] 3xl:text-[3rem] font-brandonBld text-shadow py-2'>LEAD DESIGNER</h3>
        <h4 className='text-primary text-[1rem] 3xl:text-[1.5rem] font-medium'>朱慶煌 主持設計師</h4>
      <div className="flex flex-col gap-y-4">
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] leading-[2.5rem]'>
        美國建築師協會會員及註冊建築師，台北市室內設計公會會員。長春藤盟校賓夕法尼亞大學建築研究所碩士，大學建築系學士，義大利國際設計大獎得主(A’Design Award)。現任大學建築系建築設計兼任講師。<br/>
        自1994年從事室內設計及建築設計工作至今，曾任職於美國加州舊金山Anshen and Allen Architects及McCall Design Group及其他國內大型設計團隊。專長於住宅、商業空間及辦公室設計及施工。</span>
        <div>
          <div className='ml-auto w-[28%] h-[28%]'>
            <Image src={Signature} alt="123"/>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div className="h-[2px] bg-[#929292] w-[40%] ml-auto mr-[10%]" />
      </div>
      </div>
        {/* project detail*/}
        {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-screen gap-y-6 px-7">
        <div className="flex flex-col gap-y-5 mt-[5rem]">
        <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal text-shadow leading-[2.375rem]">寬堂空間設計的特點，在於思考『住』的意義。</h2>
        <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem] font-sans font-[350] leading-[2.375rem]">透過如此的自我探究，讓我們回到的室內設計的原點，因為，住宅必須反應出人類的根本慾望，透過設計的手法，呈現每個居住者的夢想，而不再只是一般意義的形式探索或複製。針對不同類型的居住者，我們著重在創造出一個宜人的居家環境，包括了合宜且適切的規劃，表達居住者個性的設計風格，健康的建材選擇，環保與節能品項的建議，以及，符合市場行情的建構費用。</span>
        </div>
        <div className="flex items-start w-full">
        <Image src={AwardImage} alt='award-image' className="w-full h-auto aspect-auto "/>
        </div>
      
        <div className="h-[1.5px] bg-[#929292] w-[100%] ml-auto mr-[10%]" />
        <div>
        <div className="h-full w-full">
      <div className="flex flex-col w-full h-full justify-center gap-y-4">
        <h3 className='text-primary text-[1.5rem] md:text-[3rem] font-brandonBld text-shadow py-2 text-center'>EVENTS</h3>
        <h4 className='text-primary text-[1.25rem] md:text-[1.5rem] font-medium'>獲獎紀錄</h4>
      <div className="flex flex-col gap-y-4">
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans leading-[2.25rem] tracking-[0.8px]'>2019｜ A’ DESIGN AWARDS: House 4x4x4,Iron Winner</span>
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans leading-[2.25rem] tracking-[0.8px]'>2021｜ IF DESIGN AWARDS: House 4x4x4,Final Jury</span>   
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans leading-[2.25rem] tracking-[0.8px]'>2022 ｜  ARCHITECTURE & DESIGN COLLECTION (ADC): House 4x4x4,Gold Winner</span>
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans leading-[2.25rem] tracking-[0.8px]'>2023 ｜ MUSE DESIGN AWARDS: CELLIST IN THE LOFT,Silver Winner</span> 
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans leading-[2.25rem] tracking-[0.8px]'>2023｜  LONDON DESIGN AWARDS: IN THE CLOUDS,Silver Winner</span>   
      </div>
      </div>
      </div>
        </div>
       <div className="h-[1.5px] bg-[#929292] w-[100%] ml-auto mr-[10%]" />
      <div className="flex items-start w-full my-5">
        <Image src={GrayBg} alt='award-image' className="w-full h-auto aspect-auto "/>
      </div>
      <div className="h-[1.5px] bg-[#929292] w-[100%] ml-auto mr-[10%]" />
      <div className="h-full w-full">
      <div className="flex flex-col w-full h-full justify-center gap-y-4 ">
        <h3 className='text-primary text-[1.5rem] md:text-[3rem] font-brandonBld text-shadow py-2 text-center'>LEAD DESIGNER</h3>
        <h4 className='text-primary text-[1.25rem] md:text-[1.5rem] font-medium'>朱慶煌 主持設計師</h4>
      <div className="flex flex-col gap-y-4">
        <span className='text-[#3E3E3E] text-[1rem] 3xl:text-[1.25rem] font-[350] font-sans leading-[2.25rem] tracking-[0.8px]'>美國建築師協會會員及註冊建築師，台北市室內設計公會會員。長春藤盟校賓夕法尼亞大學建築研究所碩士，大學建築系學士，義大利國際設計大獎得主<br/>(A’Design Award)。現任大學建築系建築設計兼任講師。<br/>
        自1994年從事室內設計及建築設計工作至今，曾任職於美國加州舊金山Anshen and Allen Architects及McCall Design Group及其他國內大型設計團隊。專長於住宅、商業空間及辦公室設計及施工。</span>
       <div className='mx-auto w-[9rem] h-[5.875rem]'>
            <Image src={Signature} alt="123"/>
      </div>
      </div>
        <div className="h-[1.5px] bg-[#929292] w-[100%] ml-auto mr-[10%] mt-5 mb-14"/>
      </div>
      </div>
        </div>
    </section>
  );
}

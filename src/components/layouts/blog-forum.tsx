'use client'
import React,{useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Button from '../button';
import ChargeImg01 from '@/public/images/service/2-2.png'
import MobileAwardImage from '@/public/images/service/mobile/1-1.png';
import { ServiceIcon1,ServiceIcon2,ServiceIcon3,ServiceIcon4, DateIcon,CateIcon,TagIcon,SearchIcon, CateItemIcon } from '@/public/svg';
// 首頁圖片及內容
export const HEROITEM = [
{imgSrc:'/images/home/hero/1-1.png'},
{imgSrc:'/images/home/hero/1-2.png'},
{imgSrc:'/images/home/hero/1-3.png'},
{imgSrc:'/images/home/hero/1-4.jpg'},
{imgSrc:'/images/home/hero/1-5.png'},
{imgSrc:'/images/home/hero/1-6.png'},
{imgSrc:'/images/home/hero/1-7.png'},
] as const;

export default function BlogForum() {
  const [searchTerm, setSearchTerm] = useState('');


  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchClick = (event: FormEvent) => {
    event.preventDefault();
    console.log("submit",searchTerm);
  };
  return (
    <section className="relative overflow-hidden">
      {/* hero desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[96vh] mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>BLOG &</span>
              <span className='-mt-4 text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>FORUM</span>
            </div>
            <div className="w-3/4 h-full bg-[#A8A8A8]"></div>
          </div>
        </div>
      </div>
      {/* hero mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-[90vh] mt-[14vh]">
          <div className="w-full h-full flex justify-center items-center py-10">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow'>BLOG &</span>
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow'>FORUM</span>
            </div>
          </div>
        <div className="w-full h-[58vh] bg-[#A8A8A8]" /> 
      </div>

      {/* project detail*/}
      {/* desktop layout */}
      <div className="hidden 3md:flex flex-col w-full -mt-20">
      {/* 第一區塊 */}
      <div className="flex w-full min-h-screen ">
        <div className="w-full flex justify-center items-center pb-[7rem]">
          {/* 左邊文字區塊 */}
          <div className="w-[60%] h-full flex flex-col gap-y-20 items-center">
            {/* 第一篇 */}
            <div className="w-[80%] ">
              <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
              <div className="w-full h-[50vh]">
              <Image src={ChargeImg01} alt="image.charge" className='w-full h-full object-cover'/>
              </div>
              <div className="w-full min-h-fit py-2">
                <div className='flex flex-col gap-y-2 p-5'>
                  <h2 className='text-primary text-[1.75rem] tracking-[0.56px] font-medium'>個人工作室V.S住家</h2>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                    <TagIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計,房間裝修,台北市</p>
                    </div>
                     <div className='flex items-center gap-x-1'>
                    <DateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>2020/8/21</p>
                    </div>
                     <div className='flex items-center gap-x-1'>
                    <CateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計</p>
                    </div>
                  </div>
                  <p className='mt-2  text-[#3E3E3E] text-[1.25rem] tracking-[1px] leading-[29px] font-sans font-[350]'>住宅的主人，是專業的大提琴以及鋼琴演奏者，對於自然有著一樣的愛好，因此，本設計思考的重點在於如何將主人的音樂性與生活態度轉譯成空間，並且以簡潔的空間形式，突顯本身就具備優美造型的鋼琴以及大提琴之存在，成為與主人生活互伴的另外兩個主角。</p>
                  <Button containerStyles='wide:w-1/3 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary' path="/">learn more</Button>

                </div>
              </div>
              </div>
            </div>
            {/* 第二篇 */}
         <div className="w-[80%] ">
              <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
              <div className="w-full h-[50vh]">
              <Image src={ChargeImg01} alt="image.charge" className='w-full h-full object-cover'/>
              </div>
              <div className="w-full min-h-fit py-2">
                <div className='flex flex-col gap-y-2 p-5'>
                  <h2 className='text-primary text-[1.75rem] tracking-[0.56px] font-medium'>個人工作室V.S住家</h2>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                    <TagIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計,房間裝修,台北市</p>
                    </div>
                     <div className='flex items-center gap-x-1'>
                    <DateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>2020/8/21</p>
                    </div>
                     <div className='flex items-center gap-x-1'>
                    <CateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計</p>
                    </div>
                  </div>
                  <p className='mt-2  text-[#3E3E3E] text-[1.25rem] tracking-[1px] leading-[29px] font-sans font-[350]'>住宅的主人，是專業的大提琴以及鋼琴演奏者，對於自然有著一樣的愛好，因此，本設計思考的重點在於如何將主人的音樂性與生活態度轉譯成空間，並且以簡潔的空間形式，突顯本身就具備優美造型的鋼琴以及大提琴之存在，成為與主人生活互伴的另外兩個主角。</p>
                  <Button containerStyles='wide:w-1/3 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary' path="/">learn more</Button>

                </div>
              </div>
              </div>
            </div>

          </div>
          
          {/* 右邊文字區塊 */}
          <div className="w-[40%] h-full flex items-center justify-center">
            <div className="w-[70%] h-full flex flex-col gap-y-[4rem]">
              <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>搜尋</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                <form className="relative" onSubmit={handleSearchClick}>
                <input type="search" id="searchInput" value={searchTerm} onChange={handleChange} placeholder='請輸入關鍵字....' className='w-full p-4 border-[1px] border-[#D1D1D1] text-primary' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4'  onClick={handleSearchClick}>
                <SearchIcon className="text-[19px] bg-white text-[#3E3E3E]"/>
                </button>
                </form>
                </div>
                {/* cate content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>文章分類</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292]' onClick={() => console.log('Clicked on "了解室內設計"')}>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                  </div>
                  <div className='flex items-center gap-x-2 pb-1 border-b border-dashed border-[#3E3E3E]'>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                  </div>
                </div>
                
                
              </div>
              {/* 最新文章 content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>最新文章</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                {/* first */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>
                 {/* second */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#242424]`}>心得短文</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>  
              </div>

               {/* 熱門文章 content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>熱門文章</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                {/* first */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>
                 {/* second */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#242424]`}>心得短文</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>  
              </div>

               {/* 熱門標籤 */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>熱門標籤</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                {/* first */}
                <div className='flex w-full'>
                  <div className='flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]'>
                    <span className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'># 展示空間</span>
                </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
        {/* project detail*/}
        {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-screen">
        <div className="w-full h-full flex flex-col justify-center  gap-y-[2rem]  px-8 py-14">
              <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
              <div className="w-full h-[50vh]">
              <Image src={ChargeImg01} alt="image.charge" className='w-full h-full object-cover'/>
              </div>
              <div className="w-full min-h-fit py-2">
                <div className='flex flex-col gap-y-2 p-5'>
                  <h2 className='text-primary text-[1.25rem] leading-[38px] font-normal text-shadow'>個人工作室V.S住家</h2>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                    <TagIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計,房間裝修,台北市</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                    <DateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>2020/8/21</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                    <CateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計</p>
                    </div>
                  </div>
                  <p className='mt-2 text-[#3E3E3E] text-[1rem] tracking-[0.8px] leading-[38px] font-sans font-[350]'>住宅的主人，是專業的大提琴以及鋼琴演奏者，對於自然有著一樣的愛好，因此，本設計思考的重點在於如何將主人的音樂性與生活態度轉譯成空間，並且以簡潔的空間形式，突顯本身就具備優美造型的鋼琴以及大提琴之存在，成為與主人生活互伴的另外兩個主角。</p>
                  <Button containerStyles='wide:w-1/3 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary' path="/">learn more</Button>
              </div>
              </div>
            </div>
              {/* 搜尋區塊 */}
             <div className="flex flex-col gap-y-5 pt-6">
                <div className='w-fit'>
                  <span className='text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1'>搜尋</span>
                  <div className="h-[1px] bg-primary w-full mt-1 " />
                </div>
                <form className="relative" onSubmit={handleSearchClick}>
                <input type="search" id="searchInput" value={searchTerm} onChange={handleChange} placeholder='請輸入關鍵字....' className='w-full p-4 border-[1px] border-[#D1D1D1] text-primary' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4'  onClick={handleSearchClick}>
                <SearchIcon className="text-[19px] bg-white text-[#3E3E3E]"/>
                </button>
                </form>
                </div>
                {/* cate content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1'>文章分類</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292]' onClick={() => console.log('Clicked on "了解室內設計"')}>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                  </div>
                  <div className='flex items-center gap-x-2 pb-1 border-b border-dashed border-[#3E3E3E]'>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                  </div>
                </div>
                
                
              </div>
              {/* 最新文章 content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1'>最新文章</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                {/* first */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>
                 {/* second */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#242424]`}>心得短文</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>  
              </div>

               {/* 熱門文章 content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1'>熱門文章</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                {/* first */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>
                 {/* second */}
                <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#242424]`}>心得短文</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>  
              </div>

               {/* 熱門標籤 */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1'>熱門標籤</span>
                  <div className="h-[1px] bg-primary w-full mt-2 " />
                </div>
                {/* first */}
                <div className='flex w-full'>
                  <div className='flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]'>
                    <span className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'># 展示空間</span>
                </div>
                </div>  
              </div>
        </div>
        </div>
    </section>
  );
}

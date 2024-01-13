import React from 'react';
import Image from 'next/image';
import Button from '../button';
import ChargeImg01 from '@/public/images/service/2-2.png'
import MobileAwardImage from '@/public/images/service/mobile/1-1.png';
import { ServiceIcon1,ServiceIcon2,ServiceIcon3,ServiceIcon4, DateIcon,CateIcon,TagIcon,SearchIcon, CateItemIcon } from '@/public/svg';


export default function BlogForum() {
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
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow'>PROCESS &</span>
              <span className='text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow'>CHARGES</span>
            </div>
          </div>
        <div className="w-full h-[58vh] bg-mobileServiceHero bg-cover bg-no-repeat" /> 
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
                  <div className='flex items-center gap-x-4'>
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
            {/* second */}
         <div className="w-[80%] ">
              <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
              <div className="w-full h-[50vh]">
              <Image src={ChargeImg01} alt="image.charge" className='w-full h-full object-cover'/>
              </div>
              <div className="w-full h-[40vh] py-2">
                <div className='flex flex-col gap-y-2 p-5'>
                  <h2 className='text-primary text-[1.75rem] tracking-[0.56px] font-medium'>個人工作室V.S住家</h2>
                  <div className='flex items-center gap-x-4'>
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
                  <p className='text-[#3E3E3E] text-[1.25rem] tracking-[1px] leading-[29px] font-sans font-[350]'>住宅的主人，是專業的大提琴以及鋼琴演奏者，對於自然有著一樣的愛好，因此，本設計思考的重點在於如何將主人的音樂性與生活態度轉譯成空間，並且以簡潔的空間形式，突顯本身就具備優美造型的鋼琴以及大提琴之存在，成為與主人生活互伴的另外兩個主角。</p>
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
                  <div className="h-[1px] bg-primary w-full mt-1 " />
                </div>
                <div className="relative">
                <input type="search" placeholder='請輸入關鍵字....' className='w-full p-4 border-[1px] border-[#D1D1D1] text-primary' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4'>
                <SearchIcon className="text-[19px] bg-white text-[#3E3E3E]"/>
                </button>
                </div>
                </div>
                {/* cate content */}
                <div className="flex flex-col gap-y-5">
                <div className='w-fit'>
                  <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>文章分類</span>
                  <div className="h-[1px] bg-primary w-full mt-1 " />
                </div>
                <div className='flex flex-col w-full'>
                  <div className='flex items-center gap-x-2 pb-1 border-b border-dashed border-[#3E3E3E]'>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
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
       <div className="3md:hidden flex flex-col w-full min-h-screen ">
        <div className="w-full h-full flex flex-col justify-center  gap-y-[2rem]  bg-[#292929]/90 backdrop-blur-[7.5px] px-8 pb-14">
          <h3 className='text-white text-[1.5rem] md:text-[3rem] font-brandonBld text-shadow pt-10 text-center'>WORK VALUE</h3>
          <div className="h-[1.5px] bg-[#929292] w-[100%] mb-2" />
            <div className="flex flex-col gap-y-4">
              <div className='flex gap-x-3 justify-start items-center '>
                <ServiceIcon1 className="text-[1.75rem]"/>
                <span className='text-white text-[1.25rem] font-sans font-medium text-shadow'>概念探討</span>
                 </div>       
                <span className='text-white text-[1rem] font-sans font-[350] leading-[38px] tracking-[0.8px] text-shadow'>為了能契合客戶的特殊須求與功能，透過意象的模擬與初步平面的規劃，以作為共同默契與討論基礎。</span>
            </div>
             <div className="flex flex-col gap-y-4">
              <div className='flex gap-x-3 justify-start items-center'>
                <ServiceIcon2 className="text-[1.75rem]"/>
                <span className='text-white text-[1.25rem] font-sans font-medium text-shadow'>設計規劃</span>
                 </div>       
                <span className='text-white text-[1rem] font-sans font-[350] leading-[38px] tracking-[0.8px] text-shadow'>集合共同期望的特色與功能，經由設計者投入其經驗與專業知識，準確的呈現於解說圖面。透過圖說的詮釋，繪製出整套施工圖說與整體施工預算。</span>
            </div>
             <div className="flex flex-col gap-y-4">
              <div className='flex gap-x-3 justify-start items-center'>
                <ServiceIcon3 className="text-[1.75rem]"/>
                <span className='text-white text-[1.25rem] font-sans font-medium text-shadow'>施工管控</span>
                 </div>       
                <span className='text-white text-[1rem] font-sans font-[350] leading-[38px] tracking-[0.8px] text-shadow'>每日工程監造、定期回報與前置規劃，作為提高施工品質並管控施作進度的管理方式，並確保工程能和諧進行，減少衝突與如期完成。</span>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className='flex gap-x-3 justify-start items-center'>
                <ServiceIcon4 className="text-[1.75rem]"/>
                <span className='text-white text-[1.25rem] font-sans font-medium text-shadow'>更多價值</span>
                 </div>       
                <span className='text-white text-[1rem] font-sans font-[350] leading-[38px] tracking-[0.8px] text-shadow'>有效率的提案，執著於創造更貼切的使用經驗。一次到位的方案選擇，反應實際的須求，享受專案服務的過程才是優先考量。</span>
            </div>
        </div>
          {/* 第二區內容 */}       
        <div className="h-full w-full bg-[#D1D1D1]">
        <Image src={MobileAwardImage} alt='award-image' className="w-full h-full aspect-auto "/>
      <div className="flex flex-col w-full h-full justify-center gap-y-4">
        <h3 className='text-white text-[1.5rem] md:text-[3rem] font-brandonBld text-shadow pt-14 text-center'>PROCESS</h3>
          
            </div>
            </div>
      {/* charge 文字區塊 */}
      
      <div className="h-full w-full">
      <div className="flex flex-col w-full h-full justify-center gap-y-4 pt-5">
        <h3 className='text-primary text-[1.5rem] md:text-[3rem] font-brandonBld text-shadow py-10 text-center'>CHARGES</h3>
      <div className="flex flex-col gap-y-4">
        <div>
          <div className='relative w-full h-[48vh] md:h-[60vh] justify-end items-end'>
              <div className='h-full bg-mobileServiceSectionImg01 bg-no-repeat bg-cover'></div>
              <div className="absolute inset-0 mt-auto flex flex-col items-center h-[70%] md:h-[60%] w-full bg-primary/50 backdrop-blur-[2px] px-10  gap-y-4 pt-8 z-10">
              <span className='text-white text-[1.25rem] font-medium leading-[38px] text-shadow'>設計費</span>
              <div className="h-[1px] bg-white w-[95%] " />
              <div className="flex flex-col  w-full gap-y-5 px-2 md:px-4 ">
              <span className="text-white text-[1rem] tracing-[0.8px] font-sans text-shadow font-medium">NT6,000/坪  -  NT8,000/坪</span>
              <span className="text-white text-[1rem] leading-[26px] tracing-[0.8px] font-sans text-shadow font-[350] ">依室內實際設計面積計算，設計總價最低為 NT120,000</span>
              </div>
              <div>
              </div>  
              </div> 
          </div> 
          <div className='relative w-full h-[48vh] md:h-[60vh]  justify-end items-end mt-8 mb-16'>
            <div className='h-full bg-mobileServiceSectionImg02 bg-no-repeat bg-cover'></div>
              <div className="absolute inset-0 mt-auto flex flex-col items-center h-[70%] md:h-[60%] w-full bg-primary/50 backdrop-blur-[2px] px-8 gap-y-4 pt-8 z-10">
              <span className='text-white text-[1.25rem] font-medium leading-[38px] text-shadow'>工程費</span>
              <div className="h-[1px] bg-white w-[95%]" />
              <div className="flex flex-col gap-y-5 px-2 md:px-4">
              <span className="text-white text-[1rem] leading-[24px] tracing-[0.8px] font-sans text-shadow font-medium">視裝修的屋況、屋齡、所選的設備和工程施作的難易度，以及，設計的面積、 性質、所選的材料和複雜度而有所不同。</span>
              <span className="text-white text-[1rem] leading-[26px] tracing-[0.8px] font-sans text-shadow font-[350] ">費用區間依北部的裝修市場行情而定。</span>
              </div>
              <div>
              </div>  
              </div> 
              </div> 

        </div>    
      </div>

      </div>
      </div>
        </div>
    </section>
  );
}

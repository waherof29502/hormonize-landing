import React from 'react';
import Image from 'next/image';
import Button from '../button';
import AwardImage from '@/public/images/about/2-1.png';
import GrayBg from '@/public/images/about/2-2.png'
import Signature from '@/public/images/about/3-1.png';
import ChargeImg01 from '@/public/images/service/2-2.png'
import ChargeImg02 from '@/public/images/service/2-1.png'
import MobileAwardImage from '@/public/images/service/mobile/1-1.png';
import MobileChargeImg01 from '@/public/images/service/mobile/2-1.png'
import MobileChargeImg02 from '@/public/images/service/mobile/2-2.png'

import { ServiceIcon1,ServiceIcon2,ServiceIcon3,ServiceIcon4 } from '@/public/svg';
const PROCESSINFO =[
  { id: 1, title: '初步溝通'},
  { id: 2, title: '設計合約'},
  { id: 3, title: '現場丈量'},
  { id: 4, title: '設計圖面配置'},
  { id: 5, title: '工程合約'},
  { id: 6, title: '工程施工'},
  { id: 7, title: '完工交屋'},
  { id: 8, title: '售後服務'}
];
export default function ProcessCharges() {
  return (
    <section className="relative overflow-hidden">
      {/* hero desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[96vh] mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>PROCESS &</span>
              <span className='-mt-4 text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>CHARGES</span>
            </div>
            <div className="w-3/4 h-full bg-serviceHero bg-cover bg-no-repeat"></div>
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
      <div className="flex w-full min-h-[118vh] ">
        <div className="w-full flex justify-center items-center bg-serviceSectionBg bg-cover bg-no-repeat">
          <div className="w-[26%] h-full flex justify-center items-center text-primary border-solid border-r-[2px] border-white gap-x-2 bg-[#292929]/90 backdrop-blur-[7.5px]">
            <span className='text-white text-[1.875rem] xl:text-[2.75rem] 3xl:text-[3rem] font-brandonMed text-shadow'>WORK</span>
            <span className='text-white text-[1.875rem] xl:text-[2.75rem] 3xl:text-[3rem] font-brandonMed text-shadow'>VALUE</span>
          </div> 
          <div className="w-[40%] h-full flex flex-col justify-center px-[50px] 3xl:px-12 gap-y-[16px] 3xl:gap-y-[37px] bg-[#292929]/90 backdrop-blur-[7.5px]">
            <div className="flex items-center gap-x-10">
                <ServiceIcon1 className="lg:text-[4.75rem] xl:text-[3.75rem]"/>
                <div className='flex flex-col gap-y-5'>
                    <span className='text-white text-[1.25rem] xl:text-[1.5rem] font-sans font-medium tracking-[0.96px]'>概念探討</span>
                    <span className='text-white text-[1rem] xl:text-[1.25rem] font-sans font-[350]'>為了能契合客戶的特殊須求與功能，透過意象的模擬與初步平面的規劃，以作為共同默契與討論基礎。</span>
                </div>       
            </div>
            <div className="flex items-center gap-x-10">
                <ServiceIcon2 className="lg:text-[6.75rem] xl:text-[5.75rem]"/>
                <div className='flex flex-col gap-y-5'>
                    <span className='text-white text-[1.25rem] xl:text-[1.5rem] font-sans font-medium tracking-[0.96px]'>設計規劃</span>
                    <span className='text-white text-[1rem] xl:text-[1.25rem] font-sans font-[350]'>集合共同期望的特色與功能，經由設計者投入其經驗與專業知識，準確的呈現於解說圖面。透過圖說的詮釋，繪製出整套施工圖說與整體施工預算。
                </span>
                </div>
            </div>
            <div className="flex items-center gap-x-10">
                <ServiceIcon3 className="lg:text-[5.75rem] xl:text-[4.75rem]"/>
                <div className='flex flex-col gap-y-5'>
                    <span className='text-white text-[1.25rem] xl:text-[1.5rem] font-sans font-medium tracking-[0.96px]'>施工管控</span>
                    <span className='text-white text-[1rem] xl:text-[1.25rem] font-sans font-[350]'>每日工程監造、定期回報與前置規劃，作為提高施工品質並管控施作進度的管理方式，並確保工程能和諧進行，減少衝突與如期完成。</span>
                </div>
                
            </div>
            <div className="flex items-center gap-x-10">
                <ServiceIcon4 className="lg:text-[5.75rem] xl:text-[4.75rem]"/>
                <div className='flex flex-col gap-y-5'>
                    <span className='text-white text-[1.25rem] xl:text-[1.5rem] font-sans font-medium tracking-[0.96px]'>更多價值</span>
                    <span className='text-white text-[1rem] xl:text-[1.25rem] font-sans font-[350]'>有效率的提案，執著於創造更貼切的使用經驗。一次到位的方案選擇，反應實際的須求，享受專案服務的過程才是優先考量。</span>
                </div>
                
            </div>
          </div>
          <div className="w-[40%] h-full"></div>
        </div>
      </div>
      {/* 第二區塊 */}
      <div className="w-full h-[80vh] flex justify-center items-center bg-[#D1D1D1]">
          <div className="w-[30%] h-full flex justify-center items-center text-primary gap-x-2 ">
            <span className='text-white text-[1.875rem] xl:text-[2.75rem] 3xl:text-[3rem] font-brandonMed text-shadow'>PROCESS</span>
          </div> 
          <div className="w-[80%] xl:w-[80%] h-full flex flex-col justify-center items-center px-0 3xl:px-20 gap-y-10 scale-[.55] xl:scale-[.7] 2xl:scale-75 3xl:scale-[.85] wide:scale-100">
             <ul className="flex w-full items-center 3md:-ml-[20rem] xl:-ml-[5rem] 2xl:ml-0">
              {PROCESSINFO.slice(0, 4).map((item, index) => (
                <li className=" relative flex gap-x-[6rem] mt-[40px] items-center" key={item.id}>
                  <div className="flex justify-center items-center bg-[#77A849] hover:bg-primary rounded-full w-[14.375rem] h-[14.375rem] z-10 group ease-linear duration-200">
                    <p className="absolute text-white font-syne tracking-[2.88px] text-[3rem] font-brandonBld text-shadow opacity-100 group-hover:opacity-0 ">0{item.id}</p>
                    <p className="absolute text-white font-syne tracking-[1.44px] text-[1.5rem] font-sans font-medium text-shadow opacity-0 group-hover:opacity-100 ">{item.title}</p>
                  </div>
                  {index !== PROCESSINFO.slice(0, 4).length - 1 ? (
                    <div className="before:absolute before:z-0 before:left-[40px] before:h-[2px] before:w-full before:bg-[#77A849]" />
                  ) : (
                    <div className="before:absolute before:z-0 before:left-[40px] before:h-[2px] before:w-full" />
                  )}

                </li>
              ))}
            </ul>
             <ul className="flex w-full items-center 3md:-ml-[20rem] xl:-ml-[5rem] 2xl:ml-0">
              {PROCESSINFO.slice(4, 8).map((item, index) => (
                <li className="relative flex  gap-x-[6rem] mt-[40px] items-center" key={item.id}>
                   <div className="flex justify-center items-center bg-[#77A849] hover:bg-primary rounded-full w-[14.375rem] h-[14.375rem] z-10 group ease-linear duration-200">
                    <p className="absolute text-white font-syne tracking-[2.88px] text-[3rem] font-brandonBld text-shadow opacity-100 group-hover:opacity-0 ">0{item.id}</p>
                    <p className="absolute text-white font-syne tracking-[1.44px] text-[1.5rem] font-sans font-medium text-shadow opacity-0 group-hover:opacity-100 ">{item.title}</p>
                  </div>
                  {index !== PROCESSINFO.slice(4, 8).length - 1 ? (
                    <div className="before:absolute before:z-0 before:left-[40px] before:h-[2px] before:w-full before:bg-[#77A849]" />
                  ) : (
                    <div className="before:absolute before:z-0 before:left-[40px] before:h-[2px] before:w-full" />
                  )}

                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 第三區塊 */}
      <div className="w-full h-[65vh] flex justify-center items-center bg-white">
          <div className="w-[26%] h-full flex justify-center items-center text-primary gap-x-2 ">
            <span className='text-primary text-[1.875rem] xl:text-[2.75rem] 3xl:text-[3rem] font-brandonMed text-shadow'>CHARGES</span>
          </div> 
          <div className="w-[80%] h-[80%] flex justify-center items-center gap-x-10">
             <div className='relative w-1/2 h-full justify-end items-end'>
              <Image src={ChargeImg02} alt="charges-image-02" className='w-full h-full'/>
              <div className="absolute inset-0 mt-auto flex items-center h-[40%] w-full bg-primary/50 backdrop-blur-[2px] px-10 gap-x-4 z-10">
              <span className='text-white [writing-mode:vertical-lr] text-[1.25rem] xl:text-[1.5rem] font-medium leading-[31px] tracking-[6px]'>設計費</span>
              <div className="relative right-1 bottom-10 w-px p-[0.5px] h-[5rem] bg-white transform translate-y-1/2" />
              <div className="flex flex-col">
              <span className="text-white text-[1rem] xl:text-[1rem] 3xl:text-[1.5rem] leading-loose 3xl:leading-[2.625rem] font-medium">NT6,000/坪  -  NT8,000/坪</span>
              <span className="text-white text-[0.75rem] xl:text-[0.75rem] 3xl:text-[1.25rem] leading-loose 3xl:leading-[2.5rem] font-sans font-[350] ">依室內實際設計面積計算，設計總價最低為 NT120,000</span>
              </div>
              <div>
              </div>  
              </div>             
          </div>
              <div className='relative w-1/2 h-full justify-end items-end'>
              <Image src={ChargeImg01} alt="charges-image-01" className='w-full h-full'/>
              <div className="absolute inset-0 mt-auto flex items-center h-[40%] w-full bg-primary/50 backdrop-blur-[2px] px-10 gap-x-4 z-10">
              <span className='text-white [writing-mode:vertical-lr] text-[1.5rem] font-medium leading-[31px] tracking-[6px]'>工程費</span>
              <div className="relative  right-1 bottom-10 w-px p-[0.5px] h-[5rem] bg-white transform translate-y-1/2" />
              <div className="flex flex-col">
              <span className="text-white text-[1rem] xl:text-[1rem] 3xl:text-[1.5rem] leading-normal xl:leading-loose 3xl:leading-[2.625rem] font-medium">視裝修的屋況、屋齡、所選的設備和工程施作的難易度，以及，設計的面積、 性質、所選的材料和複雜度而有所不同。</span>
              <span className="text-white text-[0.75rem] xl:text-[0.75rem] 3xl:text-[1.25rem] leading-loose 3xl:leading-[2.5rem] font-sans font-[350] ">費用區間依北部的裝修市場行情而定。</span>
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
          <div className='w-full flex items-center  justify-center pb-12'>
            <ul className='w-[50%] md:w-[60%] justify-center items-center 2ss:pl-14 2xs:pl-20 sm:pl-[8rem] md:pl-[14rem]'>
              {PROCESSINFO.slice(0, 8).filter(item => item.id % 2 !== 0).map((item, index) => (
                <li className="relative flex gap-4 mt-[40px] items-center" key={item.id}>
                  <div className="flex justify-center items-center bg-[#77A849] hover:bg-primary rounded-full w-[8.5rem] h-[8.5rem] z-10 group">
                    <p className="absolute text-white font-syne tracking-[1.8px] text-[1.875rem] font-brandonBld text-shadow opacity-100 group-hover:opacity-0 ">0{item.id}</p>
                    <p className="absolute text-white font-syne tracking-[1.08px] text-[1.125rem] font-sans font-medium text-shadow opacity-0 group-hover:opacity-100">{item.title}</p>
                  </div>
                  {index !== PROCESSINFO.slice(0, 4).length - 1 && (
                    <div className="before:absolute before:z-0 before:left-[4.375rem] before:h-full before:w-[2px] before:bg-[#77A849]" />
                  )}
                </li>
              ))}
            </ul>
            <ul className='w-[40%] 2ss:w-[50%] md:w-[55%] sm:pl-[2rem] md:pl-0 '>
              {PROCESSINFO.slice(0, 8).filter(item => item.id % 2 === 0).map((item, index) => (
                <li className="relative flex gap-4 mt-[40px] items-center" key={item.id}>
                  <div className="flex justify-center items-center bg-[#77A849] hover:bg-primary rounded-full w-[8.5rem] h-[8.5rem] z-10 group">
                    <p className="absolute text-white font-syne tracking-[1.8px] text-[1.875rem] font-brandonBld text-shadow opacity-100 group-hover:opacity-0 ">0{item.id}</p>
                    <p className="absolute text-white font-syne tracking-[1.08px] text-[1.125rem] font-sans font-medium text-shadow opacity-0 group-hover:opacity-100">{item.title}</p>
                  </div>
                  {index !== PROCESSINFO.slice(0, 4).length - 1 && (
                    <div className="before:absolute before:z-0 before:left-[4.375rem] before:h-full before:w-[2px] before:bg-[#77A849]" />
                  )}
                </li>
              ))}
            </ul>
            </div>
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

"use client"
import React,{useState,useEffect}from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { FbSquareIcon, ShareIcon,TwitterSquareIcon } from '@/public/svg'
import Image from 'next/image';
import ScrollCard from '../../scroll-card';
import Carousel from '../../carousel';
import {FacebookShareButton, TwitterShareButton} from 'react-share'
import { PROJECTITEM,PROJECTMOBILEITEM} from '@/src/constants'
import ProjectCard from '../../project-card'
import useScreenSize from '@/src/hooks/useScreenSize'
import Link from 'next/link';
import { CHPROJECTDETAIL } from '@/src/constants';
import { useInView } from "react-intersection-observer";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const PROJECRIMG01 = [
  { id: 1, src: '/images/project-detail/work-changhua/1-1.jpg' },
  { id: 2, src: '/images/project-detail/work-changhua/1-2.jpg' },
  { id: 3, src: '/images/project-detail/work-changhua/1-3.jpg' },
  { id: 4, src: '/images/project-detail/work-changhua/1-4.jpg' },
  { id: 5, src: '/images/project-detail/work-changhua/1-5.jpg' },
  { id: 6, src: '/images/project-detail/work-changhua/1-6.jpg' },
  { id: 7, src: '/images/project-detail/work-changhua/1-7.jpg' },
  { id: 8, src: '/images/project-detail/work-changhua/1-8.jpg' },
];



export default function Project() {
  const [curr, setCurr] = useState(0);
  const [openLightBox, setOpenLightBox] = React.useState(false);
  const toggleLightBoxOpen = (state: boolean) => () => setOpenLightBox(state);
  const updateIndex = ({ index: current }: { index: number }) => setCurr(current);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const screenSize = useScreenSize();
  const [threshold, setThreshold] = useState<number>(0.42);
   const { ref, inView } = useInView({ threshold });
  useEffect(() => {
    // Adjust the threshold based on screen size
    if (screenSize.width <= 1280) {
      setThreshold(0.28);
    } else if (screenSize.width <= 1440) {
      setThreshold(0.25);
    }else if (screenSize.width <= 1680) {
      setThreshold(0.3);
    } else {
      setThreshold(0.42);
    }
  }, [screenSize]);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const copyToClipboard = () => {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    } else {
      // Fallback for browsers that do not support the Clipboard API
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
  } catch (error) {
    console.error('錯誤複製', error);
  }
};
   const spaceBetween = () => {
   if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 38;
    } else if (screenWidth >= 768) {
      return 21;
    } else {
      return 21;
    }
  } else {
    return 21;
  }
}

  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen">
        <div className="relative flex flex-col w-full min-h-fit">
          <div className="w-full h-[90%] flex justify-center items-center">
            {/* left content */}
            <div ref={ref} className={`w-1/4 h-full flex flex-col bg-[rgb(209,209,209)] border-r-[2px] border-primary`}>
              <div  className={`3md:scale-50 xl:scale-75 wide:scale-100 ${inView ? 'fixed mt-[8rem] 3md:mt-[2rem] xl:mt-[4rem] 3xl:mt-[8rem] wide:mt-[4rem] wider:mt-[14rem] pb-[6rem] 3md:-ml-[1.25rem] xl:ml-[0.5rem] 2xl:ml-[1rem] 3xl:ml-[3.75rem] wide:ml-[4rem] wider:ml-[10rem] z-20' :'flex h-full items-end 3md:mb-0 3xl:mb-[6rem] wider:mb-[15rem] 3md:-ml-[1.25rem] 2xl:ml-[1rem] 3xl:ml-[3.75rem] wide:ml-[4rem] wider:ml-[10rem]'}` }>
              {CHPROJECTDETAIL.map((project, index) => (
              <div key={index} className='flex flex-col gap-y-2 py-10 wide:py-[10rem]'>
                <div className="flex gap-x-2 w-[6.25rem] h-[6.25rem] my-[6rem]">
                 {project.iconImgSrc.map((img, index) => (
                  <Image key={index} src={img} alt={project.title} width={100} height={100}/>
                  ))}
                </div>
              <div className="flex flex-col gap-y-2 ml-6 whitespace-pre">
              <h2 className="text-primary text-[42px] font-sans py-5">{project.title}</h2>
              {Object.entries(project.details).map(([key, value],index) => (
              <div className='flex flex-row gap-x-5' key={index}>
              <span className="text-primary text-[1.25rem] font-normal font-sans">
              {key}
              </span>
              <span className="text-primary text-[1.25rem] font-light font-sans tracking-[0.8px]">{value}</span>
              </div>
               ))}
               </div>
            </div>
            ))}
            </div>
            </div>
            {/* right content */}
            {/* TODO:依照未整理的圖片微調，需再調整 */}
            <div className="w-3/4 h-full flex flex-col mt-[13vh] wide:mt-[13vh] ">
            <Lightbox
          open={openLightBox}
          close={toggleLightBoxOpen(false)}
          index={curr}
          slides={PROJECRIMG01}
          on={{ view: updateIndex }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            />
          <Carousel autoSlide={false} setCurr={setCurr} curr={curr} setOpenLightBox={setOpenLightBox}>
          {PROJECRIMG01.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              width={1449}
              height="880"
              alt="bg-img"
              className="3md:object-contain 2lg:object-contain bg-primary mb-[10rem] aspect-square w-full bg-center md:h-[860px] 3md:h-[1120px] 3xl:h-[1560px] wider:h-[1920px]"
            />
          ))}
        </Carousel>
        <div className="mx-auto w-[90%] py-[4rem]">
           <Swiper
        slidesPerView={7.5}
        onSlideChange={(swiper) => setCurr(swiper.activeIndex)}
        >
        {PROJECRIMG01.map((item,index)=>(
          <SwiperSlide key={index} >
          <ScrollCard key={item.id} dataIndex={index} src={item.src} setCurr={setCurr}/>     
          </SwiperSlide>
        ))} 
          </Swiper>
          {/* <div className="flex overflow-x-auto gap-x-2 no-scrollbar w-auto max-w-none">
            {PROJECRIMG01.map((item,index) => (
              <ScrollCard key={item.id} dataIndex={index} src={item.src} setCurr={setCurr}/>
            ))}
          </div> */}
          </div>
          {/* project detail */}
          <div className="mx-auto w-[90%] flex flex-col gap-y-10 pt-1 pb-[6rem]">
          <h2 className="text-primary text-[1.5rem] font-sans font-medium">”緩慢走入四立方 看見居家幸福模樣 &nbsp;&nbsp;”</h2>
          <span className="text-[#3E3E3E] text-[1.25rem] font-sans font-light leading-[2.5rem]">這個三層樓的透天厝，主要的設計想法，是在挑戰郊區傳統街屋的形式。原始的概念是創造一個「生活的光箱」，使居住者在室內就可以享受到晨昏的變化。為了實現這個概念，在屋頂上設置了大型的玻璃天窗，如此，光線就可以大量的進入室內，使得二樓的起居室及三樓在白天都充滿了光線。另一方面，屋內的燈光可溢出室外，隱約的照亮社區，於是，這個房子在晚上便可扮演起社區的燈塔與標地物的角色。它不僅僅是私人住宅，也因為它的簡單，吸引了這個社區與外來者所有的關注。</span>
          <div className="w-full mx-auto aspect-w-16 aspect-h-9 pt-[3.25rem]">
          <YouTube
              videoId="ikd3_3dsHS4?si=91vA7W5p86_q_61r"
              opts={{
                width: '100%', 
                height: '690',
              }}
              onReady={onPlayerReady}
            />
            <div className='flex w-full items-end justify-end gap-x-[0.75rem] pt-[4rem] pb-[6rem] pr-1'>
            <span className="text-primary text-[1rem] tracking-[0.64px] font-normal font-sans">作品分享</span>
            <FacebookShareButton  url={currentUrl}>
            <FbSquareIcon className="text-[1.5rem] bg-primary text-white" />   
            </FacebookShareButton>       
            <TwitterShareButton url={currentUrl}>
            <TwitterSquareIcon className="text-[1.5rem] bg-primary text-white"/>
            </TwitterShareButton>
            <ShareIcon className="text-[1.5rem] bg-primary text-white focus:bg-black/80 cursor-pointer" onClick={copyToClipboard}/>
            </div>
            </div>
          </div>
            </div>
          </div>
          <div className="w-full h-[10%] relative -mt-[0.4px] bg-[#D1D1D1]">
            <div className="absolute inset-0 bg-primary clip-path-polygon " />
            <div className="absolute inset-0 clip-small-polygon bg-[#929292] border-solid border-t-[2px] border-primary" />
          </div>
        </div>
      </div>
       {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-fit mt-[10vh] md:mt-0">
          <Carousel autoSlide={false} setCurr={setCurr} curr={curr} setOpenLightBox={setOpenLightBox}>
          {PROJECRIMG01.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              width={1449}
              height="413"
              alt="bg-img"
              className="object-cover xl:bg-black aspect-square w-full bg-center h-[413px] xs:h-[480px] sm:h-[680px] md:h-[860px]"
            />
          ))}
        </Carousel>
      <div className="mx-auto w-[100%] py-[1rem]">
          <div className="flex overflow-x-auto gap-x-2 no-scrollbar w-auto max-w-none">
            {PROJECRIMG01.map((item,index) => (
              <ScrollCard key={item.id} dataIndex={index} src={item.src} setCurr={setCurr}/>
            ))}
          </div>
      </div>
      <div className="flex flex-col w-full pb-16 pt-16">
              {CHPROJECTDETAIL.map((project, index) => (
              <div key={index} className='flex flex-col gap-y-10 mx-auto font-sans'>
                <div className="flex gap-x-2 w-[3.75rem] h-[3.75rem] md:w-[4.75rem] md:h-[4.75rem]">
                 {project.iconImgSrc.map((img, index) => (
                  <Image key={index} src={img} alt={project.title} width={100} height={100}/>
                  ))}
                </div>
              <div className="flex flex-col gap-y-2">
              <h2 className="text-primary text-[1.5rem] font-sans pt-1 pb-5">{project.title}</h2>
              {Object.entries(project.details).map(([key, value],index) => (
              <div className='flex flex-row gap-x-5' key={index}>
              <span className="text-primary text-[1.125rem] md:text-[1.5rem] font-normal font-sans">
              {key}
              </span>
              <span className="text-primary text-[1.125rem] md:text-[1.5rem] font-light font-sans tracking-[0.8px]">{value}</span>
              </div>
               ))}
               </div>
            </div>
            ))}
            </div>
          {/* project detail */}
          <div className="mx-auto w-[90%] flex flex-col gap-y-6 px-[1rem]">
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal px-1">” &nbsp;緩慢走入四立方 看見居家幸福模樣 &nbsp;&nbsp;”</h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">這個三層樓的透天厝，主要的設計想法，是在挑戰郊區傳統街屋的形式。原始的概念是創造一個「生活的光箱」，使居住者在室內就可以享受到晨昏的變化。為了實現這個概念，在屋頂上設置了大型的玻璃天窗，如此，光線就可以大量的進入室內，使得二樓的起居室及三樓在白天都充滿了光線。另一方面，屋內的燈光可溢出室外，隱約的照亮社區，於是，這個房子在晚上便可扮演起社區的燈塔與標地物的角色。它不僅僅是私人住宅，也因為它的簡單，吸引了這個社區與外來者所有的關注。</span>
          </div>
          <div className="md:hidden w-full mx-auto aspect-w-16 aspect-h-9 pt-12">
          <YouTube
              videoId="ikd3_3dsHS4?si=91vA7W5p86_q_61r"
              opts={{
                width: '100%', 
                height: '242',
              }}
              onReady={onPlayerReady}
            />
          </div>
          <div className="hidden md:block w-full mx-auto aspect-w-16 aspect-h-9 pt-12">
          <YouTube
              videoId="ikd3_3dsHS4?si=91vA7W5p86_q_61r"
              opts={{
                width: '100%', 
                height: '442',
              }}
              onReady={onPlayerReady}
            />
          </div>
            <div className='flex w-[90%] items-end justify-end gap-x-[0.75rem] pt-[1.5rem] pb-[4rem]'>
            <span className="text-primary text-[1rem] tracking-[0.64px] font-normal font-sans">作品分享</span>   
            <FacebookShareButton  url={currentUrl}>
            <FbSquareIcon className="text-[1.5rem] bg-primary text-white p-[2px]" />   
            </FacebookShareButton>       
            <TwitterShareButton url={currentUrl}>
            <TwitterSquareIcon className="text-[1.5rem] bg-primary text-white p-[2px]"/>
            </TwitterShareButton>
            <ShareIcon className="text-[1.5rem] bg-primary text-white p-[2px] focus:bg-black/80 cursor-pointer" onClick={copyToClipboard}/>
            </div>
            </div>

            
      {/* projects review content */}
      {/* desktop layout */}
      <div className="hidden 3md:flex flex-col w-full min-h-fit items-center 3md:-mt-[5rem] xl:-mt-[6rem] wide:-mt-[7rem] gap-y-16 mb-[7.5rem] wider:mb-[10rem]">
       <div className="w-full flex flex-col 3md:flex-row gap-y-12 justify-center items-center">
        <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className='text-[1.875rem] md:text-[3rem] 3md:text-[2.5rem] xl:text-[3.875rem] font-brandonLight text-shadow'>PROJECTS</span>
            <span className='text-[1.875rem] md:text-[3rem] 3md:text-[2.5rem] xl:text-[3.875rem] font-brandonBld text-shadow'>REVIEW</span>
        </div>
          <div className="flex w-3/4 h-full items-center px-10 gap-x-[2.375rem] wider:gap-x-[12rem] z-20">
           {PROJECTITEM.map((item,index)=>(
            <>
            <Link key={index} href={item.path}>
            <ProjectCard imgSrc={item.imgSrc} title={item.title} />
            </Link>
            </>
            ))}
         {/* <Swiper  slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
       {PROJECTITEM.map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <Link href={item.path}>
            <ProjectCard imgSrc={item.imgSrc} title={item.title} />
            </Link>
            </SwiperSlide>
            </>
            ))}
        </Swiper> */}
        </div>
      </div>
      </div>
      {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-[80vh] items-center gap-y-16 mb-[6rem]">
       <div className="w-full flex flex-col h-[40vh] items-center pt-10 bg-[#ECECEC]">
        <div className="w-1/4 h-1/2 flex flex-col items-center text-primary ">
            <span className='text-[1.875rem] md:text-[3rem] font-brandonLight'>PROJECTS</span>
            <span className='text-[1.875rem] md:text-[3rem] font-brandonBld'>REVIEW</span>
        </div>
      </div>
        <div className="lg:hidden w-[120vh] -mt-[10rem] xs:-mt-[18rem] md:-mt-[13rem] flex h-full items-center px-10 ">
         <Swiper  slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
       {PROJECTMOBILEITEM.map((item,index)=>(
            <>
            <SwiperSlide key={index}>
            <Link href={item.path}>
            <ProjectCard imgSrc={item.imgSrc} title={item.title} />
            </Link>
            </SwiperSlide>
            </>
            ))}
        </Swiper>
        </div>
      </div>
     
     
    </section>
  );
}

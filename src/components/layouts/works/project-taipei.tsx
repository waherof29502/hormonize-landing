'use client';
import React, { useState, useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { FbSquareIcon, ShareIcon, TwitterSquareIcon } from '@/public/svg';
import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { PROJECTITEM, PROJECTMOBILEITEM } from '@/src/constants';
import ProjectCard from '../../project-card';
import useScreenSize from '@/src/hooks/useScreenSize';
import Link from 'next/link';
import { TPPROJECTDETAIL } from '@/src/constants';
import { useInView } from 'react-intersection-observer';
import EmblaCarousel from '../../embla-carousel';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
export const PROJECRIMG01 = [
  { id: 1, src: '/images/project-detail/work-taipei/1-1.jpg' },
  { id: 2, src: '/images/project-detail/work-taipei/1-2.jpg' },
  { id: 3, src: '/images/project-detail/work-taipei/1-3.jpg' },
  { id: 4, src: '/images/project-detail/work-taipei/1-4.jpg' },
  { id: 5, src: '/images/project-detail/work-taipei/1-5.jpg' },
  { id: 6, src: '/images/project-detail/work-taipei/1-6.jpg' },
  { id: 7, src: '/images/project-detail/work-taipei/1-7.jpg' },
  { id: 8, src: '/images/project-detail/work-taipei/1-8.jpg' },
  { id: 9, src: '/images/project-detail/work-taipei/1-9.jpg' },
  { id: 10, src: '/images/project-detail/work-taipei/1-10.jpg' },
  { id: 11, src: '/images/project-detail/work-taipei/1-11.jpg' },
  { id: 12, src: '/images/project-detail/work-taipei/1-12.jpg' },
  { id: 13, src: '/images/project-detail/work-taipei/1-13.jpg' },
  { id: 14, src: '/images/project-detail/work-taipei/1-14.jpg' },
  { id: 15, src: '/images/project-detail/work-taipei/1-15.jpg' },
  { id: 16, src: '/images/project-detail/work-taipei/1-16.jpg' }
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
      setThreshold(0.28);
    } else if (screenSize.width <= 1680) {
      setThreshold(0.36);
    } else {
      setThreshold(0.38);
    }
  }, [screenSize]);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

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
  };

  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen">
        <div className="relative flex flex-col w-full min-h-fit">
          <div className="w-full h-[90%] flex justify-center items-center">
            {/* left content */}
            <div ref={ref} className={`w-1/4 h-full flex flex-col bg-[rgb(209,209,209)] border-r-[2px] border-primary`}>
              <div
                className={`3md:scale-50 xl:scale-75 wide:scale-100 ${
                  inView
                    ? 'fixed mt-[8rem] 3md:mt-[2rem] xl:mt-[4rem] 3xl:mt-[8rem] wide:mt-[4rem] wider:mt-[14rem] pb-[6rem] 3md:-ml-[3.25rem] xl:-ml-[1.25rem] 2xl:ml-[1rem] 3xl:ml-[2.5rem] wide:ml-[4rem] wider:ml-[8rem] z-20'
                    : 'flex h-full items-end 3md:mb-0 3xl:mb-[6rem] wider:mb-[15rem] 3md:-ml-[1.25rem] 2xl:ml-[1rem] 3xl:ml-[3.75rem] wide:ml-[4rem] wider:ml-[10rem]'
                }`}
              >
                {TPPROJECTDETAIL.map((project, index) => (
                  <div key={index} className="flex flex-col gap-y-2 py-10 wide:py-[10rem]">
                    <div className="flex gap-x-2 w-full h-[6.25rem] my-[6rem] items-center justify-center">
                      {project.iconImgSrc.map((img, index) => (
                        <Image
                          key={index}
                          src={img}
                          alt={project.title}
                          width={250}
                          height={100}
                          className="aspect-auto"
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2 ml-6 whitespace-pre">
                      <h2 className="text-primary text-[42px] font-sans py-5">{project.title}</h2>
                      {Object.entries(project.details).map(([key, value], index) => (
                        <div className="flex flex-row gap-x-5" key={index}>
                          <span className="text-primary text-[1.25rem] font-normal font-sans">{key}</span>
                          <span className="text-primary text-[1.25rem] font-light font-sans tracking-[0.8px]">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* right content */}
            {/* TODO:通知設計專案圖片尺寸統一 */}
            <div className="w-3/4 h-full flex flex-col relative mt-[15vh]">
              <EmblaCarousel slides={PROJECRIMG01} />
              {/* desktop project detail */}
              <div className="mx-auto w-[90%] flex flex-col gap-y-4 pt-1 pb-[6rem]">
                <h2 className="text-primary md:text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">概念</h2>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  隨著網路世代的興起，人與人之間的互動與連結，早已不再侷限於固定的面對面形式、時間或地點。傳統的集體工作形式，已逐漸被彈性且多元的線上和雲端功能所取代。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  針對個人而言，過往的工作形式，透過移動，從家到工作場所，是一種「點到點」的過程。現今的網路環境，工作地點可以是任何場所，甚至是在移動的過程中，就可以進行的。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  工作空間的進化，已由過去的由高至低的，以管理階層為主的規劃方式，漸漸的以水平化的管理模式為主，以大多數的員工為優先，由下而上的翻轉，以「人性化」為核心概念，顛覆了過往的封閉且千篇一律的方式，趨向於一個「舒適且減壓」的工作環境，謀取員工最大福利並創造最佳產能，於是，「第三空間」的概念油然而生。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  第三空間，於形式上，帶出企業體的核心價值與產品特色，提供一個有別於傳統視角或既定刻版的印象，用以詮釋該企業體獨特的面向。本案企圖以「在咖啡廳內工作」的氛圍來傳達第三空間的概念。例如，利用大地色系來創造溫度，採用木質的面材來提高親和感，利用點光源及間接照明來降低冷色系的高科技感等。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  第三空間的營造，可以適度的釋放壓力，轉換注意力與情緒，亦可以提高工作及溝通的效能，具有滿足社會心理性的效益。於工作空間之中，運用第三空間的設計與規劃，成為客製化的核心概念，使工作空間可以呈現多元且人性化的面向。
                  <br />
                  <br />
                </span>
                <h2 className="text-primary md:text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">設計與規劃</h2>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  本案位於內湖科學園區，規劃面積為165平方公尺的室內單元。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  於平面規劃上，長向矩型的辦公空間，由入口開始，依據功能上的需求，分為前後兩部份。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  前半部為對外開放區，包括網路控制及展示中心及入口接待區。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  後半部為後場辦公區，不對外開放，包括內部會議室及開放式工作區。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  這四個主要的空間，以側邊的走道來連結，以保持空間的最大使用，亦將走道過渡空間作最簡捷的動線安排。走道中央，以玻璃門作門禁控管，以保持後場辦公區的私密性。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  就工作空間的辨識度而言，工作空間除了滿足機能上的需求之外，它亦必須外顯公司組織的本質與特色，也就是企業體的核心價值，透過實體空間這個媒介，傳達該組織的身份與特質（Identity）。
                </span>
                <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
                  於是，透過特定工作場所的空間營造，體現企業的訴求形象，以取得外界的認知，以及內部成員的認同，則成為辦公空間規劃設計的重點。
                </span>
                <div className="w-full mx-auto aspect-w-16 aspect-h-9 pt-5 3xl:pt-10">
                  <div className="flex w-full items-end justify-end gap-x-[0.75rem]  pb-[6rem] pr-1">
                    <span className="text-primary text-[1rem] tracking-[0.64px] font-normal font-sans">作品分享</span>
                    <FacebookShareButton url={currentUrl}>
                      <FbSquareIcon className="text-[1.5rem] bg-primary text-white" />
                    </FacebookShareButton>
                    <TwitterShareButton url={currentUrl}>
                      <TwitterSquareIcon className="text-[1.5rem] bg-primary text-white" />
                    </TwitterShareButton>
                    <ShareIcon
                      className="text-[1.5rem] bg-primary text-white focus:bg-black/80 cursor-pointer"
                      onClick={copyToClipboard}
                    />
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
        <EmblaCarousel slides={PROJECRIMG01} />
        <div className="flex flex-col w-full pb-16 pt-16">
          {TPPROJECTDETAIL.map((project, index) => (
            <div key={index} className="flex flex-col gap-y-10 mx-auto font-sans">
              <div className="flex gap-x-2 w-full h-[3.75rem] md:w-full md:h-[4.75rem] justify-center items-center">
                {project.iconImgSrc.map((img, index) => (
                  <Image key={index} src={img} alt={project.title} width={200} height={100} className="aspect-auto" />
                ))}
              </div>
              <div className="flex flex-col gap-y-2">
                <h2 className="text-primary text-[1.5rem] font-sans pt-1 pb-5">{project.title}</h2>
                {Object.entries(project.details).map(([key, value], index) => (
                  <div className="flex flex-row gap-x-5" key={index}>
                    <span className="text-primary text-[1.125rem] md:text-[1.5rem] font-normal font-sans">{key}</span>
                    <span className="text-primary text-[1.125rem] md:text-[1.5rem] font-light font-sans tracking-[0.8px]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* mobile project detail */}
        <div className="mx-auto w-[90%] flex flex-col gap-y-6 px-[1rem]">
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal px-1">概念</h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            隨著網路世代的興起，人與人之間的互動與連結，早已不再侷限於固定的面對面形式、時間或地點。傳統的集體工作形式，已逐漸被彈性且多元的線上和雲端功能所取代。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            針對個人而言，過往的工作形式，透過移動，從家到工作場所，是一種「點到點」的過程。現今的網路環境，工作地點可以是任何場所，甚至是在移動的過程中，就可以進行的。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            工作空間的進化，已由過去的由高至低的，以管理階層為主的規劃方式，漸漸的以水平化的管理模式為主，以大多數的員工為優先，由下而上的翻轉，以「人性化」為核心概念，顛覆了過往的封閉且千篇一律的方式，趨向於一個「舒適且減壓」的工作環境，謀取員工最大福利並創造最佳產能，於是，「第三空間」的概念油然而生。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            第三空間，於形式上，帶出企業體的核心價值與產品特色，提供一個有別於傳統視角或既定刻版的印象，用以詮釋該企業體獨特的面向。本案企圖以「在咖啡廳內工作」的氛圍來傳達第三空間的概念。例如，利用大地色系來創造溫度，採用木質的面材來提高親和感，利用點光源及間接照明來降低冷色系的高科技感等。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            第三空間的營造，可以適度的釋放壓力，轉換注意力與情緒，亦可以提高工作及溝通的效能，具有滿足社會心理性的效益。於工作空間之中，運用第三空間的設計與規劃，成為客製化的核心概念，使工作空間可以呈現多元且人性化的面向。
            <br />
            <br />
          </span>
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal px-1">設計與規劃</h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            本案位於內湖科學園區，規劃面積為165平方公尺的室內單元。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            於平面規劃上，長向矩型的辦公空間，由入口開始，依據功能上的需求，分為前後兩部份。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            前半部為對外開放區，包括網路控制及展示中心及入口接待區。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            後半部為後場辦公區，不對外開放，包括內部會議室及開放式工作區。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            這四個主要的空間，以側邊的走道來連結，以保持空間的最大使用，亦將走道過渡空間作最簡捷的動線安排。走道中央，以玻璃門作門禁控管，以保持後場辦公區的私密性。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            就工作空間的辨識度而言，工作空間除了滿足機能上的需求之外，它亦必須外顯公司組織的本質與特色，也就是企業體的核心價值，透過實體空間這個媒介，傳達該組織的身份與特質（Identity）。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
            於是，透過特定工作場所的空間營造，體現企業的訴求形象，以取得外界的認知，以及內部成員的認同，則成為辦公空間規劃設計的重點。
            <br />
            <br />
          </span>
        </div>
        {/* <div className="md:hidden w-full mx-auto aspect-w-16 aspect-h-9 pt-12">
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
          </div> */}
        <div className="flex w-[90%] items-end justify-end gap-x-[0.75rem] pt-[1.5rem] pb-[4rem]">
          <span className="text-primary text-[1rem] tracking-[0.64px] font-normal font-sans">作品分享</span>
          <FacebookShareButton url={currentUrl}>
            <FbSquareIcon className="text-[1.5rem] bg-primary text-white p-[2px]" />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterSquareIcon className="text-[1.5rem] bg-primary text-white p-[2px]" />
          </TwitterShareButton>
          <ShareIcon
            className="text-[1.5rem] bg-primary text-white p-[2px] focus:bg-black/80 cursor-pointer"
            onClick={copyToClipboard}
          />
        </div>
      </div>

      {/* projects review content */}
      {/* desktop layout */}
      <div className="hidden 3md:flex flex-col w-full min-h-fit items-center 3md:-mt-[5rem] xl:-mt-[6rem] wide:-mt-[7rem] gap-y-16 mb-[7.5rem] wider:mb-[10rem]">
        <div className="w-full flex flex-col 3md:flex-row gap-y-12 justify-center items-center">
          <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className="text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow">
              PROJECTS
            </span>
            <span className="text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow">
              REVIEW
            </span>
          </div>
          <div className="flex w-3/4 h-full items-center px-10 gap-x-[2.375rem] wider:gap-x-[12rem] z-20">
            {PROJECTITEM.map((item, index) => (
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
            <span className="text-[1.875rem] md:text-[2.75rem] font-brandonLight">PROJECTS</span>
            <span className="text-[1.875rem] md:text-[2.75rem] font-brandonBld">REVIEW</span>
          </div>
        </div>
        <div className="lg:hidden w-[120vh] md:w-[190vh] -mt-[10rem] xs:-mt-[18rem] sm:-mt-[11rem] md:-mt-[8rem] flex h-full items-center px-10">
          <Swiper slidesPerView={3} initialSlide={1} centeredSlides={true} spaceBetween={spaceBetween()}>
            {PROJECTMOBILEITEM.map((item, index) => (
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

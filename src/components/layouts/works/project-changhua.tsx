"use client"
import React,{useState,useEffect}from 'react';
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
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
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
      setThreshold(0.18);
    } else if (screenSize.width <= 1440) {
      setThreshold(0.20);
    }else if (screenSize.width <= 1680) {
      setThreshold(0.25);
    } else {
      setThreshold(0.25);
    }
  }, [screenSize]);


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
            <div className="w-3/4 h-full flex flex-col mt-[9vh] 3md:mt-[24vh] 2lg:mt-[24vh] 2xl:mt-[21.25vh] 3xl:mt-[23vh] wide:mt-[23vh]">
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
          </div>
          {/* desktop project detail */}
          <div className="mx-auto w-[90%] flex flex-col gap-y-4 pt-1 pb-[6rem]">
          <h2 className="text-primary md:text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">概念</h2>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">『所謂的住宅，起源於人類最根本的慾望，是呈現人類夢想的地方。真的富裕，並不是單純的便利與舒適，而是，就算在有限的空間之中，也能創造豐富。』---安藤忠雄</span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          建築空間，介於都市與室內之間，作為一個生活的容器，作為一個行為的載體，它承載了宏觀與微觀的生活空間的層次。建築位於一個城鎮或都市之中，因為該區域的特色與文化，它表現出獨特的空間形式；也因為居住者的慾望，產生了個人化的空間性質與組合方式，甚至是立面表情。所以，對於都市而言，建築必須與環境對話，以回應「人與都市」的關係，同時，亦必須滿足個人對生活空間的執念與需求，以達到「人與環境」相容共存的場所精神，藉此創造多樣與豐富。</span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          本案的透天厝，位於彰化市的一個平靜的小鎮，一連串街屋的最邊間。概念來自於：<br/>
          1. 突破傳統街屋的形式 <br/>
          2. 將自然元素導入室內 <br/>
          3. 置入都市空間 <br/>
          </span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          透過現代簡約的設計，來強調本案的強烈的存在感，是本設計主要的訴求。主題「四立方」（House 4x4x4），代表本案的「四個主要的家庭成」、「四個水平與垂直相連的主要空間」，以及，以「四米為模矩」的分割建築量體的操作手法。空間的調性源自於屋主的鮮明個性，藉此而發展其空間佈局與建築外觀，以呈現「理性於外，感性於內」的內斂性格。</span><br/>
          <h2 className="text-primary md:text-[1rem] 3xl:text-[1.5rem] font-sans font-medium">背景與訴求</h2>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          屋主在國外經商多年，退休回到了家鄉，希望將舊社區中的一棟自宅的舊房子，改建成一幢三層樓的建築物，不僅要生活機能充沛，節能性高效，充滿陽光和樂趣。準確的結構和佈局使四口之家可以共享庭院，客廳，餐廳和廚房等公共區域。</span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          從這個安靜的住所望出去，給人一種與世隔絕和孤立的感覺，從外注視這棟小白屋，又十分的與眾不同。退休，就像是走下竸技場至隱居之地，擁抱「侘寂」世界，所營造的空間，是經得起時間考驗的簡約美，有意識的放慢腳步，代表著簡單、安靜的生活方式，開始品嚐生活中的不同階段。</span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          它像是一個城市突擊隊般的，帶給這個寧靜且保守，以傳統製造業為主的老舊社區，一陣騷動與波瀾，成為一個建築的話題：它不僅代表一種新的可能，也代表了另一種不同的生活方式，更是一種回應都市、與環境產生互動的生活載體。</span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          在小巷弄裡擁有一間低調的生活空間，既獨特又私密，又不失現代便利性。居住者可以在室內，透過挑高的天窗，白天欣賞白雲和陽光，在夜晚觀看月亮和星星，與天地完美和諧地生活，此小宇宙帶來極大的和平與舒適。</span><br/><br/>
          <h2 className="text-primary md:text-[1.25rem] 3xl:text-[1.5rem] font-sans font-medium">設計與規劃</h2>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          使用簡單的幾何形式和比例創造空間，滿足每個家庭成員的不同需求。例如，在一樓的起居室中，他的終生收藏可以自由展示。二樓寬闊的開放式客廳連結陽台，進一步擴展了視野，無論是從外部還是從內部觀看，都可以在空間上找到樂趣。
          </span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          三樓中心的空間寬敞且開放，甚至可作無人機的垂直升降。為了充分利用三樓的看台，設計了一個可以水平轉動四分之一圓的平台與窗台相連。
          </span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          而為了降低溫室效應所帶來的室內熱度，在天窗的側牆，提供了電動的通氣窗，讓室內可以呼吸及循環，減少空調的使用，節能減碳，貫徹回歸自然的生活方式，小住宅也能夠有永續環保的意識與作法。
          </span>
          <span className="text-[#3E3E3E] md:text-[1rem] 3xl:text-[1.25rem] font-sans font-light leading-[2.5rem]">
          獨特的純白色外觀，藉由光與影的作用，讓這棟建築像是一個「充滿光線的盒子」，在古老的社區中，房子屹立，就像一座燈塔，可以俯瞰這個的社區。退休生活，在這裡，一切都可以是原始、自然、簡單、真實的美好。為一成不變的舊社區與生活方式，增添一份設計意趣與生活體驗，成為街坊鄰居與外來訪客駐足與打卡的景點之一。
          </span>
          <div className="w-full mx-auto aspect-w-16 aspect-h-9 pt-[3.25rem]">
          {/* <YouTube
              videoId="ikd3_3dsHS4?si=91vA7W5p86_q_61r"
              opts={{
                width: '100%', 
                height: '690',
              }}
              onReady={onPlayerReady}
            /> */}
             {/* <RwdYoutube
            src="https://www.youtube.com/embed/ikd3_3dsHS4?si=fOyGYuOeKDBk7Xm8"
            /> */}
            <LiteYouTubeEmbed id="ikd3_3dsHS4" title=""/>
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
              <div key={index} className='flex flex-col gap-y-10 mx-auto font-sans justify-center'>
                <div className="flex gap-x-2 -ml-[2rem] w-[3.75rem] h-[3.75rem] md:w-[4.75rem] md:h-[4.75rem]">
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
          {/* mobile project detail */}
          <div className="mx-auto w-[90%] flex flex-col gap-y-6 px-[1rem]">
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal px-1">概念</h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">『所謂的住宅，起源於人類最根本的慾望，是呈現人類夢想的地方。真的富裕，並不是單純的便利與舒適，而是，就算在有限的空間之中，也能創造豐富。』---安藤忠雄</span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          建築空間，介於都市與室內之間，作為一個生活的容器，作為一個行為的載體，它承載了宏觀與微觀的生活空間的層次。建築位於一個城鎮或都市之中，因為該區域的特色與文化，它表現出獨特的空間形式；也因為居住者的慾望，產生了個人化的空間性質與組合方式，甚至是立面表情。所以，對於都市而言，建築必須與環境對話，以回應「人與都市」的關係，同時，亦必須滿足個人對生活空間的執念與需求，以達到「人與環境」相容共存的場所精神，藉此創造多樣與豐富。</span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          本案的透天厝，位於彰化市的一個平靜的小鎮，一連串街屋的最邊間。概念來自於：<br/>
          1. 突破傳統街屋的形式 <br/>
          2. 將自然元素導入室內 <br/>
          3. 置入都市空間 <br/>
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          透過現代簡約的設計，來強調本案的強烈的存在感，是本設計主要的訴求。主題「四立方」（House 4x4x4），代表本案的「四個主要的家庭成」、「四個水平與垂直相連的主要空間」，以及，以「四米為模矩」的分割建築量體的操作手法。空間的調性源自於屋主的鮮明個性，藉此而發展其空間佈局與建築外觀，以呈現「理性於外，感性於內」的內斂性格。</span>
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal px-1">背景與訴求</h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          屋主在國外經商多年，退休回到了家鄉，希望將舊社區中的一棟自宅的舊房子，改建成一幢三層樓的建築物，不僅要生活機能充沛，節能性高效，充滿陽光和樂趣。準確的結構和佈局使四口之家可以共享庭院，客廳，餐廳和廚房等公共區域。</span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          從這個安靜的住所望出去，給人一種與世隔絕和孤立的感覺，從外注視這棟小白屋，又十分的與眾不同。退休，就像是走下竸技場至隱居之地，擁抱「侘寂」世界，所營造的空間，是經得起時間考驗的簡約美，有意識的放慢腳步，代表著簡單、安靜的生活方式，開始品嚐生活中的不同階段。</span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          它像是一個城市突擊隊般的，帶給這個寧靜且保守，以傳統製造業為主的老舊社區，一陣騷動與波瀾，成為一個建築的話題：它不僅代表一種新的可能，也代表了另一種不同的生活方式，更是一種回應都市、與環境產生互動的生活載體。</span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          在小巷弄裡擁有一間低調的生活空間，既獨特又私密，又不失現代便利性。居住者可以在室內，透過挑高的天窗，白天欣賞白雲和陽光，在夜晚觀看月亮和星星，與天地完美和諧地生活，此小宇宙帶來極大的和平與舒適。</span>
          <h2 className="text-primary text-[1.25rem] md:text-[1.5rem] font-sans font-normal px-1">設計與規劃</h2>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">使用簡單的幾何形式和比例創造空間，滿足每個家庭成員的不同需求。例如，在一樓的起居室中，他的終生收藏可以自由展示。二樓寬闊的開放式客廳連結陽台，進一步擴展了視野，無論是從外部還是從內部觀看，都可以在空間上找到樂趣。</span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          三樓中心的空間寬敞且開放，甚至可作無人機的垂直升降。為了充分利用三樓的看台，設計了一個可以水平轉動四分之一圓的平台與窗台相連。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          而為了降低溫室效應所帶來的室內熱度，在天窗的側牆，提供了電動的通氣窗，讓室內可以呼吸及循環，減少空調的使用，節能減碳，貫徹回歸自然的生活方式，小住宅也能夠有永續環保的意識與作法。
          </span>
          <span className="text-[#3E3E3E] text-[1rem] md:text-[1.25rem]font-sans font-[350] tracking-[0.8px] leading-[2.25rem] text-shadow">
          獨特的純白色外觀，藉由光與影的作用，讓這棟建築像是一個「充滿光線的盒子」，在古老的社區中，房子屹立，就像一座燈塔，可以俯瞰這個的社區。退休生活，在這裡，一切都可以是原始、自然、簡單、真實的美好。為一成不變的舊社區與生活方式，增添一份設計意趣與生活體驗，成為街坊鄰居與外來訪客駐足與打卡的景點之一。
          </span>


          </div>
          <div className=" w-full mx-auto aspect-w-16 aspect-h-9 pt-12">
             {/* <RwdYoutube
            src="https://www.youtube.com/embed/ikd3_3dsHS4?si=fOyGYuOeKDBk7Xm8"
            /> */}
          <LiteYouTubeEmbed id="ikd3_3dsHS4" title=""/>
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
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>PROJECTS</span>
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>REVIEW</span>
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
        <div className="w-1/4 h-1/2 flex flex-col items-center text-primary">
            <span className='text-[1.875rem] md:text-[2.75rem] font-brandonLight'>PROJECTS</span>
            <span className='text-[1.875rem] md:text-[2.75rem] font-brandonBld'>REVIEW</span>
        </div>
      </div>
        <div className="lg:hidden w-[120vh] md:w-[190vh] -mt-[10rem] xs:-mt-[18rem] sm:-mt-[11rem] md:-mt-[8rem] flex h-full items-center px-10 ">
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

"use client"
import React,{useState}from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { FbSquareIcon, IgSquareIcon, ShareIcon,TwitterSquareIcon } from '@/public/svg'
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ScrollCard from '../../scroll-card';
import Carousel from '../../carousel';
import {FacebookShareButton, TwitterShareButton} from 'react-share'

export const PROJECRIMG01 = [
  { id: 1, src: '/images/project-detail/work01/1-1.jpg' },
  { id: 2, src: '/images/project-detail/work01/1-2.jpg' },
  { id: 3, src: '/images/project-detail/work01/1-3.jpg' },
  { id: 4, src: '/images/project-detail/work01/1-4.jpg' },
  { id: 5, src: '/images/project-detail/work01/1-5.jpg' },
  { id: 6, src: '/images/project-detail/work01/1-6.jpg' },
  { id: 7, src: '/images/project-detail/work01/1-7.jpg' },
  { id: 8, src: '/images/project-detail/work01/1-8.jpg' }
];

const PROJECTDETAIL =[
  {
  title:'四立方‧彰化',
  iconImgSrc:['/images/project-detail/1-1.png','/images/project-detail/1-2.png','/images/project-detail/1-3.png'],
  imgSrc:['/images/project-detail/work01/1-1.jpg','/images/project-detail/work01/1-2.jpg','/images/project-detail/work01/1-3.jpg','/images/project-detail/work01/1-4.jpg'],
  details: {
      '類型': '辦公空間',
      '坪數': 120,
      '風格': '現代風格',
      '屋況': '良好',
      '格局': '3房2廳1衛',
  }}
]

export default function Project() {
  const [curr, setCurr] = useState(0);
  const [openLightBox, setOpenLightBox] = React.useState(false);
  const toggleLightBoxOpen = (state: boolean) => () => setOpenLightBox(state);
  const updateIndex = ({ index: current }: { index: number }) => setCurr(current);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen mt-[14vh]">
        <div className="relative flex flex-col w-full h-[300vh]">
          <div className="w-full h-[90%] flex justify-center items-center">
            {/* left content */}
            <div className="w-1/4 h-full flex flex-col bg-[#D1D1D1] border-r-[2px] border-primary">
              {PROJECTDETAIL.map((project, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 w-[100px] h-[100px] my-20">
                 {project.iconImgSrc.map((img, index) => (
                  <Image key={index} src={img} alt={project.title} width={100} height={100}/>
                  ))}
                  </div>
              <h2 className="text-primary text-[42px] font-sans py-4">{project.title}</h2>
              {Object.entries(project.details).map(([key, value],index) => (
              <div className='flex flex-row gap-x-5' key={index}>
              <span className="text-primary text-[1.25rem] font-normal font-sans">
              {key}
              </span>
              <span className="text-primary text-[1.25rem] font-light font-sans tracking-[0.8px]">{value}</span>
              </div>
               ))}
            </div>
            ))}
            </div>
            {/* right content */}
            <div className="w-3/4 h-full flex flex-col">
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
              className="object-contain xl:bg-black  aspect-square w-full bg-center md:h-[860px] 3md:h-[1120px] 3xl:h-[1560px] wider:h-[1920px]"
            />
          ))}
        </Carousel>
        <div className="mx-auto w-[90%] py-[4rem]">
          <div className="flex overflow-x-auto gap-x-2 no-scrollbar w-auto max-w-none">
            {PROJECRIMG01.map((item,index) => (
              <ScrollCard key={item.id} dataIndex={index} src={item.src} setCurr={setCurr}/>
            ))}
          </div>
          </div>
          <div className="mx-auto w-[90%] flex flex-col gap-y-10">
          <h2 className="text-primary text-[1.5rem] font-sans font-medium">”緩慢走入四立方 看見居家幸福模樣 &nbsp;&nbsp;”</h2>
          <span className="text-[#3E3E3E] text-[1.25rem] font-sans font-light">這個三層樓的透天厝，主要的設計想法，是在挑戰郊區傳統街屋的形式。原始的概念是創造一個「生活的光箱」，使居住者在室內就可以享受到晨昏的變化。為了實現這個概念，在屋頂上設置了大型的玻璃天窗，如此，光線就可以大量的進入室內，使得二樓的起居室及三樓在白天都充滿了光線。另一方面，屋內的燈光可溢出室外，隱約的照亮社區，於是，這個房子在晚上便可扮演起社區的燈塔與標地物的角色。它不僅僅是私人住宅，也因為它的簡單，吸引了這個社區與外來者所有的關注。</span>
          <div className="w-full mx-auto aspect-w-16 aspect-h-9">
          <YouTube
              videoId="ikd3_3dsHS4?si=91vA7W5p86_q_61r"
              opts={{
                width: '100%', 
                height: '690',
              }}
              onReady={onPlayerReady}
            />
            <div className='flex '>
            <span className="text-primary text-[1rem] tracking-[0.64px] font-normal font-sans">作品分享</span>
            <FacebookShareButton  url={'http://cddev.creer-design.com:3000/JimBeam/harmonize-landing'}>
            <FbSquareIcon className="text-[1.5rem] bg-primary text-white" />   
            </FacebookShareButton>       
            <IgSquareIcon className="text-[1.5rem] bg-primary text-white"/>
            <TwitterShareButton url={'http://cddev.creer-design.com:3000/JimBeam/harmonize-landing'}>
            <TwitterSquareIcon className="text-[1.5rem] bg-primary text-white"/>
            </TwitterShareButton>
            <ShareIcon className="text-[1.5rem] bg-primary text-white"/>
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
       <div className="3md:hidden flex flex-col w-full min-h-fit mt-[14vh]">
          <div className="w-full h-full flex justify-center items-center py-10">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className='text-primary text-[30px] md:text-[3rem] font-brandonLight'>PROJECT</span>
              <span className='text-primary text-[30px] md:text-[3rem] font-brandonBld'>REVIEW</span>
            </div>
          </div>
        <div className="w-full h-[60vh] bg-mobileProjectHero bg-cover bg-no-repeat" />     
      </div>
    </section>
  );
}

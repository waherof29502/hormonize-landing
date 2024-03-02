'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { useDotButton } from './embla-carousel-thumb';
import ScrollCard from './scroll-card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
type PropType = {
  slides: {
    src: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3000 })]);
  const [emblaRefThumbnail, emblaApiThumbnail] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative w-full aspect-[16/9] h-full">
                <Image src={slide.src} fill alt="bg-img" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* desktop thumb */}
      <div className="hidden lg:flex mx-auto w-[90%] py-[4rem]">
        <Swiper slidesPerView={7.5} loop onSlideChange={(swiper) => onDotButtonClick(swiper.activeIndex)}>
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <ScrollCard key={index} index={index} src={item.src} setCurr={() => onDotButtonClick(index)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* mobile thumb */}
      <div className="lg:hidden mx-auto w-[100%] py-[1rem]">
        <div className="flex overflow-x-auto gap-x-2 no-scrollbar w-auto max-w-none">
          {slides.map((item, index) => (
            <ScrollCard key={index} index={index} src={item.src} setCurr={() => onDotButtonClick(index)} />
          ))}
        </div>
      </div>
      {/* <div className="mx-auto w-[90%] py-[4rem]">
        <div className="embla">
        <div className="embla__viewport" ref={emblaRefThumbnail}>
        <div className="embla__container items-center justify-center gap-x-3">
          {slides.map((item, index) => (
            <>
          <div className="relative w-[120px] h-full aspect-square" key={index} onClick={()=> onDotButtonClick(index)}>
          <Image src={item.src} alt='img' fill className="object-cover" />
          </div>
          <ScrollCard key={index} index={index} src={item.src} setCurr={()=>onDotButtonClick(index)}/>
            </>
          ))}
           </div>
          </div>
        </div>   
        </div> */}
    </section>
  );
};

export default EmblaCarousel;

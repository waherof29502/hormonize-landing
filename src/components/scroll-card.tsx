
'use client';
import React, {  useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Image from 'next/image';

interface ServiceProps {
  dataIndex: number;
  src: string;
  setCurr: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollCard = ({ dataIndex, src,setCurr }: ServiceProps) => {
  const TOTAL_CAROUSEL_COUNT = dataIndex;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  const scroll = (node: HTMLElement, left: number) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / dataIndex));

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * dataIndex);
      setActiveItem(index);
    }
  };

  // Snap back to the beginning of the scroll when the window is resized
  // Avoids a bug where content is covered up if coming from a smaller screen
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        scroll(carouselRef.current, 0);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={carouselRef} onScroll={handleScroll}>
      <div
        className={`${
          dataIndex === TOTAL_CAROUSEL_COUNT - 1 ? 'mr-[1px]' : 'mr-[0.5px]'
        } cursor-pointer`}
        onClick={(e) => handleClick(e, dataIndex)}
      >
        <div className="relative overflow-hidden">
         <div className="bg-cover bg-center w-[161px] h-[109px]" style={{ backgroundImage: `url(${src})` }} onClick={() => setCurr(dataIndex)}/>
          {/* <Image src={src} alt='img' width={161} height={109} className="w-full object-contain aspect-square " /> */}
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;

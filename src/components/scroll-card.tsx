'use client';
import React, { useState, useRef, useEffect } from 'react';
import type { RefObject } from 'react';
import Image from 'next/image';

interface ServiceProps {
  index: number;
  src: string;
  setCurr: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollCard = ({ index, src, setCurr }: ServiceProps) => {
  const TOTAL_CAROUSEL_COUNT = index;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);

  const scroll = (node: HTMLElement, left: number) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / index));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const dataIndex = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * index);
      setActiveItem(dataIndex);
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
        className={`${index === TOTAL_CAROUSEL_COUNT - 1 ? 'mr-[1px]' : 'mr-[0.5px]'} cursor-pointer`}
        onClick={(e) => handleClick(e, index)}
      >
        <div className="relative w-[80px] h-full 3md:w-[120px] 3md:h-full aspect-square" onClick={() => setCurr(index)}>
          {/* <div className="bg-cover bg-center w-[80px] h-full 3md:w-[120px] 3md:h-full aspect-square" style={{ backgroundImage: `url(${src})` }} onClick={() => setCurr(index)}/> */}
          <Image src={src} alt="img" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;

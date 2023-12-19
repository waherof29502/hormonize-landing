'use client';
import React, { ReactElement } from 'react';
import Button from './button'

import Image from 'next/image';

interface StoryCardProps {
  imgSrc: string;
  title: string;
  link:string

}
const StoryCard = ({ imgSrc, title,link }: StoryCardProps) => {

  return (
      <div className="flex flex-col gap-y-2 ">
            <div className="w-full object-contain overflow-hidden">
            <Image
              src={imgSrc}
              alt={title}
              width={445}
              height={490}
              className='aspect-[1/1]'
            />
            </div>
            <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 ease-in duration-200 group">
            <div className="absolute bg-primary/70 inset-0 h-[45%] mt-auto opacity-0 group-hover:opacity-100 ease-in duration-200">
                <div className="flex flex-col h-full justify-between p-6 wide:p-10">
                <span className="text-[16px] wide:text-[24px]">{title}</span>
                <Button containerStyles="border-white border-[1px] ml-auto px-3 py-1 text-[16px] wide:text-[24px] font-brandonMed" path={link}>learn more</Button>
                </div>
            </div>
            </div>
            
             
      </div> 
  );
};

export default StoryCard;

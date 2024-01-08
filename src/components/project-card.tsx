'use client';
import React, { ReactElement } from 'react';

import Image from 'next/image';

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  icon?: ReactElement;
  tag?: string;
}
const ProjectCard = ({ imgSrc, title, tag, icon }: ProjectCardProps) => {

  return (
      <div className="flex flex-col gap-y-2">
            <div className="w-full wider:w-full object-contain overflow-hidden rounded-[15px] 3md:rounded-[30px] wide:rounded-[50px]">
            <Image
              src={imgSrc}
              alt={title}
              width={445}
              height={267}
              className="hover:scale-110 duration-500 ease-linear aspect-auto" 
            />
            </div>
             <p className="mt-6 font-sans text-[1.25rem] 3md:text-[1.5rem] text-primary font-medium tracking-[0.8px] lg:tracking-[0.96px]">
                {title}
              </p>
              <div className="flex gap-x-2 items-center pt-1">
                <span className="text-[21px] 3md:text-[1.5rem]">{icon}</span>
              <span className="font-sans text-[#464646] font-syne text-[16px] 3md:text-[20px] tracking-[0.64px] 3md:tracking-[0.42px] font-light">{tag}</span>
              </div>
      </div> 
  );
};

export default ProjectCard;

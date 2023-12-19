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
      <div className="flex flex-col gap-y-2 ">
            <div className="w-full object-contain overflow-hidden rounded-[40px]">
            <Image
              src={imgSrc}
              alt={title}
              width={445}
              height={267}
              className="hover:scale-110 duration-500 ease-linear" 
            />
            </div>
             <p className="mt-6 text-[12px] 3md:text-[24px] text-primary font-medium tracking-[0.96px]">
                {title}
              </p>
              <div className="flex gap-x-2 items-center">
                <span className="text-[18px]">{icon}</span>
              <span className="text-[#464646] font-syne text-[20px] tracking-[0.42px]">{tag}</span>
              </div>
      </div> 
  );
};

export default ProjectCard;

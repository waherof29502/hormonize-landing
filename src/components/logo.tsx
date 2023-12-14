import React from 'react';
import Link from 'next/link';
import {LogoWhite } from '@/public/svg/index';
import { usePathname } from 'next/navigation';

export default function Logo({header}:any) {
  const pathName = usePathname()
  return <Link href="/">
    <div className="hidden 3md:flex justify-center items-center">
        <LogoWhite className={`text-[80px] md:ml-2 mb-1 ${!header && pathName==="/" ?'text-white' :"text-primary"}`}/>
        <div className={`flex flex-col group overflow-hidden h-[58px] mt-auto ${!header && pathName==="/" ?'text-white' :"text-primary"}`}>
        <span className="group-hover:-translate-y-16 ease-linear duration-300 font-brandonMed text-[28px] tracking-[1.12px] leading-[30px]">HARM<span className="text-secondary font-brandonBld font-bold">O</span>NIZE<br/>DESIGN</span>
        <span className="  font-sans group-hover:-translate-y-[52px] ease-linear duration-300 text-[28px] tracking-[2.24px]">寬堂空間設計</span>
        </div>
    </div>
     <div className="3md:hidden flex justify-center items-center">
        <LogoWhite className={`text-[40px] md:ml-2 mb-1 ${!header && pathName==="/" ?'text-white' :"text-primary"}`}/>
        <div className={`flex flex-col group overflow-hidden h-[29px] mt-auto ${!header && pathName==="/" ?'text-white' :"text-primary"}`}>
        <span className="group-hover:-translate-y-8 ease-linear duration-300 font-brandonMed text-[14px] tracking-[1.12px] leading-[15px]">HARM<span className="text-secondary font-brandonBld font-bold">O</span>NIZE<br/>DESIGN</span>
        <span className="  font-sans group-hover:-translate-y-[26px] ease-linear duration-300 text-[14px] tracking-[2.24px]">寬堂空間設計</span>
        </div>
    </div>
    </Link>;
}

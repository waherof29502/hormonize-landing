import React from 'react';
import Link from 'next/link';
import Button from './button';
import { FbCircleIcon, IgCircleIcon } from '@/public/svg';
const FOOTERITEMS = [
  { path: '#123', name: '隱私權政策' },
  { path: '#123', name: '法顧資訊' },
  { path: '#123', name: 'Cookies 政策' }
] as const;
export default function Footer() {
  return (
    <footer>
      <div className="relative bg-cover bg-mobileFooter 3md:bg-footer bg-center 3md:bg-right w-full min-h-[90vh] 3md:min-h-[58vh]">
        {/* desktop contact us */}
        <div className="hidden 3md:flex flex-col min-h-[58vh] md:justify-center items-center 3md:items-start 3md:w-[45%] 2lg:w-[36%] wide:w-1/3 lg:pl-2 xl:pl-0 3md:pr-[100px] xl:pr-[180px] ml-auto gap-y-[30px] lg:gap-y-[15px] ">
          <h2 className="text-[1.875rem] 3xl:text-[3.875rem] text-primary font-brandonLight">
            CONTACT <span className="font-brandonBld">US</span>
          </h2>
          <span className="text-primary text-[1.25rem] 3xl:text-[1.5rem] wider:text-[2.125rem] pb-4">
            了解如何用設計為你的生活開拓嶄新視野歡迎與我們聯繫。
          </span>
          <Button
            containerStyles="ml-auto w-[50%] md:w-[30%] 3md:w-[50%] py-2 lg:py-4 border-primary border-[1px] hover:bg-primary group"
            path="/contact-us"
          >
            <span className="text-primary text-[1rem] 3xl:text-[1.5rem] font-brandonMed group-hover:text-white">leave a message</span>
          </Button>
        </div>
        {/* mobile contact us*/}
        <div className="3md:hidden flex flex-col min-h-[60vh] md:justify-center items-center ml-auto gap-y-[30px] py-10 px-10">
          <h2 className="text-[1.875rem] sm:text-[2.75rem] text-primary font-brandonLight">
            CONTACT <span className="font-brandonBld">US</span>
          </h2>
          <span className="text-primary font-medium 3md:font-normal text-[1.25rem] pb-4">
            了解如何用設計為你的生活開拓嶄新視野歡迎與我們聯繫。
          </span>
          <Button
            containerStyles="ml-auto w-[45%] md:w-[30%] 3md:w-[50%] py-2 lg:py-4 border-primary border-[1px] text-primary hover:text-white hover:bg-primary"
            path="/contact-us"
          >
            <span className=" text-[1.125rem] 3xl:text-[1.5rem] font-brandonMed ">leave a message</span>
          </Button>
        </div>
      </div>
      <div className="md:w-[78%] w-[85%] 3xl:w-[85%] min-h-max mx-auto pt-[3rem] pb-8 3md:pb-[5.5rem]">
        {/* desktop footer */}
        <div className="hidden 3md:flex items-center justify-between py-10">
          {/* Logo */}
          <div className="flex flex-col text-primary gap-y-3">
            <span className="text-[2rem] tracking-[1.28px] leading-[1.875rem] font-brandonMed">HARMONIZE DESIGN</span>
            <span className="text-[1.875rem] tracking-[1.2px] text-primary font-normal">寬堂空間設計</span>
          </div>
          {/* Service Nav as */}
          <div className="flex flex-col items-end gap-y-[0.75rem]">
            {FOOTERITEMS.map((item, index) => (
              <Link href={item.path} key={index}>
                <span className="text-primary text-[1.25rem]">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Bottom area */}
        <div className="hidden 3md:flex justify-between items-center pt-2">
          {/* Social as */}
          <div className="flex">
            <Link
              href="https://www.instagram.com/build_harmony/"
              className="flex justify-center items-center text-primary hover:text-[#515151]"
              aria-label="IG"
            >
              <IgCircleIcon className="text-[2.5rem]" />
            </Link>
            <Link
              href="https://www.facebook.com/savvyhd"
              className="flex justify-center items-center ml-2 text-primary hover:text-[#515151]"
              aria-label="Fb"
            >
              <FbCircleIcon className="text-[2.5rem]" />
            </Link>
          </div>
          {/* Copyrights note */}
          <div className="text-[1rem] text-primary leading-normal font-brandonReg">
            &copy; HARMONIZE DESIGN 2023.All Rights Reserved.
            <Link href="https://creer-design.com/" target="_blank">
              Web Design By créer.
            </Link>
          </div>
        </div>
        {/* mobile footer */}
        <div className="3md:hidden flex flex-col justify-between py-4 gap-y-20">
          {/* Logo */}
          <div className="flex flex-col text-primary gap-y-2">
            <span className="text-[1.5rem] tracking-[1.2px] leading-[30px] font-brandonMed">HARMONIZE DESIGN</span>
            <span className="text-[1.5rem] tracking-[0.96px] text-primary font-normal">寬堂空間設計</span>
            <div className="flex pt-5">
              <Link
                href="https://www.instagram.com/build_harmony/"
                className="flex justify-center items-center text-primary hover:text-[#515151]"
                aria-label="IG"
              >
                <IgCircleIcon className="text-[2.5rem]" />
              </Link>
              <Link
                href="https://www.facebook.com/savvyhd"
                className="flex justify-center items-center ml-2 text-primary hover:text-[#515151]"
                aria-label="Fb"
              >
                <FbCircleIcon className="text-[2.5rem]" />
              </Link>
            </div>
          </div>
          {/* Service Nav as */}
          <div className="flex flex-col items-start gap-y-[0.75rem]">
            {FOOTERITEMS.map((item, index) => (
              <Link href={item.path} key={index}>
                <span className="text-primary text-[1.25rem]">{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-[1.125rem] text-primary leading-normal font-brandonLight">
            &copy; HARMONIZE DESIGN 2023.
            <br />
            All Rights Reserved.
            <Link href="https://creer-design.com/" target="_blank">
              Web Design By créer.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

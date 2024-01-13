'use client';
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@/src/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { Menu, LogoIcon } from '@/public/svg/index';
import { motion, easeInOut } from 'framer-motion';
import useScreenSize from '../hooks/useScreenSize';

import Nav from './nav';
export default function DesktopNav({ header }: { header: boolean }) {
  const pathname = usePathname();
  const screenSize = useScreenSize();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span
          className={`text-[1.5rem] 3xl:text-[2rem] tracking-[1.28px] pr-5 font-brandonMed ${
            pathname === '/' && !header ? 'text-white' : 'text-primary'
          }`}
        >
          MENU
        </span>
      </SheetTrigger>

      <SheetContent>
        <div className="flex flex-col lg:min-h-[88vh] 2xl:min-h-[90vh] wide:min-h-[92vh] wider:min-h-[94vh]">
          <motion.div
            initial={{ x: -35, y: -25, rotate: 0 }}
            animate={{ y: -25, rotate: -90 }}
            transition={{ motion: easeInOut, delay: 1, duration: 0.2 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="ml-auto -mr-8"
          >
            <LogoIcon width="34" height="35" className="text-[3.125rem] text-primary" />
          </motion.div>
          <div className="absolute top-10 z-10 w-[3.75rem] h-10 right-0 bg-white"></div>
          <motion.div
            initial={{ x: 1000, y: -36 }}
            animate={{ x: 0, y: -36 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative w-full h-[1.8px] bg-primary "
          ></motion.div>
          <motion.div
            initial={{ y: -1, opacity: 0 }}
            animate={{ y: -4, opacity: 1 }}
            transition={{ delay: 2, duration: 0.1 }}
            className="absolute w-full h-[10px] bg-white"
          ></motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: screenSize.height - 160, opacity: 1 }}
            transition={{ delay: 2, duration: 0.1 }}
            className="relative w-full h-[2px] bg-primary transform transition-transform group-hover:ease-linear duration-800"
          />
          <Nav
            containerStyles="lg:py-10 xl:py-20 flex flex-col justify-center items-start gap-y-8"
            linkStyles="lg:text-[1.5rem] 3xl:text-[2rem] wider:text-[3rem] text-primary font-brandonReg"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 2.1, duration: 0.2 }}
            className="mt-auto text-primary font-brandonMed text-[1.25rem] tracking-[1.12px] leading-[30px]"
          >
            <div className="mt-3"></div>
            HARM<span className="text-secondary font-brandonBld font-bold">O</span>NIZEDESIGN
          </motion.span>
        </div>
      </SheetContent>
    </Sheet>
  );
}

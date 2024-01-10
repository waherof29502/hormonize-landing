'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger,SheetClose } from '@/src/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { Menu, LogoIcon } from '@/public/svg/index';
import { motion, easeInOut } from 'framer-motion';
import useScreenSize from '../hooks/useScreenSize';
import Nav from './nav';
import useScrollProcess from '../hooks/useScrollProcess';

export default function MobileNav({ header }: { header: boolean }) {
  const pathname = usePathname();
  const screenSize = useScreenSize();
  const completions = useScrollProcess();
  return (
    <Sheet>
      <SheetTrigger asChild >
        <Menu className={`text-[38px] ${pathname === '/' && !header ? 'text-white' : 'text-primary'}`} />
      </SheetTrigger>

      <SheetContent>
        <div className={`flex flex-col ${completions === 0 ?'min-h-[78vh]':'min-h-[90vh]'}`}>
          <motion.div
            initial={{ x: -35, y: -25, rotate: 0 }}
            animate={{ y: -25, rotate: -90 }}
            transition={{ motion: easeInOut, delay: 1, duration: 0.2 }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="ml-auto -mr-8"
          >
            <LogoIcon width="34" height="35" className="text-[3.125rem] text-primary" />
          </motion.div>
          <div className="absolute top-10 z-10 w-[60px] h-10 right-0 bg-white"></div>
          <motion.div
            initial={{ x: 1000, y: -36 }}
            animate={{ x: 0, y: -36 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative w-full h-[1.8px] bg-primary "
          ></motion.div>
          <motion.div
            initial={{ y: -1, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.4 }}
            className="absolute w-full h-[6px] bg-white"
          ></motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: screenSize.height - 160, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.3 }}
            className="relative w-full h-[2px] bg-primary transform transition-transform group-hover:ease-linear duration-800"
          >
             <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 3, duration: 0 }}
            className="mt-auto text-primary font-brandonMed text-[1.25rem] tracking-[1.12px] leading-[30px]"
          >
            <div className="mt-3"></div>
            HARM<span className="text-secondary font-brandonBld font-bold">O</span>NIZEDESIGN
          </motion.span>
          </motion.div>
          <Nav
            containerStyles="flex flex-col justify-center items-start gap-y-8"
            linkStyles="text-[1.5rem] lg:text-[1.625rem] 3xl:text-[2rem] text-primary font-brandonReg"
          />
         
        </div>
      </SheetContent>
    </Sheet>
  );
}

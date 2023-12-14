'use client';
import React from 'react';
import { motion } from 'framer-motion';
import useScrollProcess from '../hooks/useScrollProcess';
import { TopIcon,TopSmallIcon } from '@/public/svg';
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 }
};

export default function Template({ children }: { children: React.ReactNode }) {
  const completions = useScrollProcess();
  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <button
        onClick={scrollToTop}
        className="fixed z-50 -right-8 3md:right-3 bottom-5 transition-all duration-700 "
      >
        <TopIcon className="hidden 3md:block text-[150px] text-primary hover:text-secondary"/>
        <TopSmallIcon className="3md:hidden text-[150px] text-primary hover:text-secondary"/>

      </button>
    </>
  );
}

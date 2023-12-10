'use client'
import React from 'react'
import {motion} from 'framer-motion'
import useScrollProcess from '../hooks/useScrollProcess'

const variants ={
    hidden:{opacity:0},
    enter:{opacity:1},
}

export default function Template({children}:{ children: React.ReactNode }) {
    const completions = useScrollProcess()
    const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <motion.main 
    variants={variants}
    initial='hidden'
    animate='enter'
    transition={{type:'linear', delay:0.2,duration:0.4}}
    >{children}</motion.main>
    <button
        onClick={scrollToTop}
        className="fixed z-50 bg-primary w-[100px] h-[20px] right-3 bottom-3 transition-all duration-700 text-white"
      >Scroll to Top</button>
    <span style={{transform: `translateY(${completions-100}%)`}} className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-200"></span>
    </>
  )
}

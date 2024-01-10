'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import Nav from './nav';
import MobileNav from './mobile-nav';
import DesktopNav from './desktop-nav';
export default function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  const scrollHandler = () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 600 ? setHeader(true) : setHeader(false);
    });
  };
  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });
  return (
    <header
      className={`fixed w-full pt-4 pb-2 3xl:py-6 z-30 transition-all ${pathname === '/' && !header ? 'bg-transparent' : 'bg-white'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo header={header} />
          <div className="hidden lg:flex items-center gap-x-6 hover:cursor-pointer">
            <DesktopNav header={header} />
            {/* <Nav containerStyles='hidden lg:flex gap-x-8 items-center' linkStyles="relative hover:text-primary transition-all" underLinkStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/> */}
          </div>
          <div className="lg:hidden hover:cursor-pointer">
            <MobileNav header={header} />
          </div>
        </div>
      </div>
    </header>
  );
}

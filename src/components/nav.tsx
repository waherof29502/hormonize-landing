import React from 'react';
import Link from 'next/link';
import { SubtractIcon } from '@/public/svg';
import { SheetClose } from '@/src/components/ui/sheet';
import {LINKS} from '@/src/constants/index'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Nav({
  containerStyles,
  linkStyles,
  underLinkStyles,
  onClick
}: {
  containerStyles: string;
  linkStyles: string;
  underLinkStyles?: string;
  onClick?: () => void;
}) {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link, index) => (
        <Link href={link.path} key={index} className={`${linkStyles}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="flex justify-center items-center group gap-x-2"
          >
            <SubtractIcon
              className={`text-[1rem] lg:text-[1.25rem] 3xl:text-[1.5rem] opacity-0 group-hover:opacity-100 ${
                path === link.path ? 'opacity-100' : ''
              }`}
            />
            <SheetClose className='focus:outline-none focus:ring-0 transition-opacity'>
            <span className='text-[1.5rem] 3md:text-[1.5rem] 3xl:text-[2rem] whitespace-pre'>{link.name}</span>
            </SheetClose>
          </motion.div>
        </Link>
      ))}
    </nav>
  );
}

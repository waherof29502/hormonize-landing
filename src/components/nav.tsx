import React from 'react';
import Link from 'next/link';
import { SubtractIcon } from '@/public/svg';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
const LINKS = [
  { path: '/about-us', name: 'ABOUT US' },
  { path: '/projects', name: 'PROJECTS REVIEW' },
  { path: '/services', name: 'PROCESS & CHARGES' },
  { path: '/news', name: 'BLOG & FORUM' },
  { path: '/contact-us', name: 'CONTACT US' }
] as const;

export default function Nav({
  containerStyles,
  linkStyles,
  underLinkStyles
}: {
  containerStyles: string;
  linkStyles: string;
  underLinkStyles?: string;
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
              className={`text-[19px] lg:text-[24px] opacity-0 group-hover:opacity-100 ${
                path === link.path ? 'opacity-100' : ''
              }`}
            />
            <span>{link.name}</span>
          </motion.div>
        </Link>
      ))}
    </nav>
  );
}

import React from 'react'
import Link from 'next/link';
export default function Button({containerStyles,path,children}:{containerStyles:string,path:string,children: React.ReactNode}) {
  return (
    <button className={`${containerStyles}`}>
        <Link href={path}>{children}</Link>
    </button>
  )
}


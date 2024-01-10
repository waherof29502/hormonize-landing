export const metadata = {
  title: '404網頁錯誤',
  description: 'OOPS!頁面發生錯誤!!'
};

import Link from 'next/link';
import { ErrorIcon,OopsIcon } from '@/public/svg';
import Button from '@/src/components/button'
export default function NotFound() {
  return (
    <>
        <div className="flex justify-center items-center bg-cover bg-center min-h-screen bg-hero">
          <div className="absolute flex flex-col items-center">
             <ErrorIcon className="text-[5rem] 3xl:text-[8rem] "/>
            <span className='text-[3.5rem] md:text-[4rem] 3xl:text-[6.25rem] font-normal font-brandonBld -mt-2 3xl:-mt-4'>OOPS</span>
              <div className="hidden md:flex items-center justify-center gap-x-6">
              <span className='text-[1.5rem] font-normal'>404 頁面發生錯誤!</span>
              <Button containerStyles='font-brandonMed ml-auto border-[1px] border-white px-5 py-2 text-[1rem] 3xl:text-[1.25rem] 3xl:text-[1.5rem] hover:text-primary hover:bg-white' path="/">返回首頁</Button>
              </div>
              {/* mobile layout */}
              <div className="md:hidden flex flex-col items-center justify-center gap-y-6 mt-10">
              <span className='text-[1.25rem] font-normal'>404 頁面發生錯誤!</span>
              <Button containerStyles='font-brandonMed  border-[1px] border-white px-5 py-2 text-[1rem] 3xl:text-[1.25rem] 3xl:text-[1.5rem] hover:text-primary hover:bg-white' path="/">返回首頁</Button>
              </div>
          </div>
        </div>
    </>
  );
}

export const metadata = {
  title: '404網頁錯誤',
  description: 'OOPS!頁面發生錯誤!!'
};

import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col flex-1 justify-between items-center min-h-fit mt-[220px] md:mt-[300px] mb-[100px]">
        <div>
          <h1 className="text-black font-sansCjk mt-[100px] text-[22px] tracking-[3.3px] font-semibold">
            OOPS!還沒開始切
          </h1>
          <button className="bg-primary text-white mt-[30px]  tracking-[2.08px]  w-full rounded-lg h-[58px]">
            <Link href="/" className="text-[16px] font-semibold font-sansCjk">
              返回首頁
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

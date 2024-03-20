import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { DateIcon, CateIcon, TagIcon, SearchIcon, CateItemIcon } from '@/public/svg';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

async function searchInput(formData: any) {
    "use server";
    console.log(formData.get("searchInput") as string)

}
const BlogSidebar = () => {

    return (
        <aside className="w-[40%] h-full flex items-center justify-center">
            <div className="w-[70%] h-full flex flex-col gap-y-[4rem]">
                <div className="flex flex-col gap-y-5">
                    <div className="w-fit">
                        <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                            搜尋
                        </span>
                        <div className="h-[1px] bg-primary w-full mt-2 " />
                    </div>
                    {/* <form className="flex items-center justify-center border-[1px] border-[#D1D1D1] " onSubmit={handleSearchClick}>
                <input type="search" id="searchInput" value={searchTerm} onChange={handleChange} placeholder='請輸入關鍵字....' className='w-full p-4 text-primary focus:outline-none' />
                <button className='px-4'  onClick={handleSearchClick}>
                <SearchIcon className="text-[19px] text-[#3E3E3E]"/>
                </button>
                </form> */}
                    <form className="flex items-center justify-center " action={searchInput}>
                        <Input
                            id="searchInput"
                            name="searchInput"
                            placeholder="請輸入關鍵字...."
                            className="w-[90%] p-4 mx-2 text-primary focus:outline-none"
                        />
                        <Button className="p-4" variant="outline" type="submit">
                            <SearchIcon className="text-[19px] text-[#3E3E3E] " />
                        </Button>
                    </form>
                </div>
                {/* cate content */}
                {/* 動態layout */}
                <div className="flex flex-col gap-y-5">
                    <div className="w-fit">
                        <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                            文章分類
                        </span>
                        <div className="h-[1px] bg-primary w-full mt-2 " />
                    </div>
                    {/* {CateList?.List.map((item) => (
                        <>
                            <div className="flex flex-col w-full gap-y-2">
                                <div
                                    className="flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292] "
                                >
                                    {item.CategoryName && <CateItemIcon className="text-[19px] text-[#3E3E3E]" />}
                                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px] hover:text-[#77A849]">
                                        {item.CategoryName}
                                    </span>
                                </div>
                            </div>
                        </>
                    ))} */}
                </div>
                {/* 靜態layout */}
                <div className="flex flex-col gap-y-5">
                    <div className='w-fit'>
                        <span className='text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1'>文章分類</span>
                        <div className="h-[1px] bg-primary w-full mt-2 " />
                    </div>
                    <div className='flex flex-col w-full gap-y-2'>
                        <div className='flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292]'>
                            <CateItemIcon className="text-[19px] text-[#3E3E3E]" />
                            <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                        </div>
                        <div className='flex items-center gap-x-2 pb-1 border-b border-dashed border-[#3E3E3E]'>
                            <CateItemIcon className="text-[19px] text-[#3E3E3E]" />
                            <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                        </div>
                    </div>
                </div>
                {/* 最新文章 content */}
                <div className="flex flex-col gap-y-5">
                    <div className="w-fit">
                        <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                            最新文章
                        </span>
                        <div className="h-[1px] bg-primary w-full mt-2 " />
                    </div>
                    {/* first */}
                    {/* {LatestArticleList?.List.map((item) => (
                        <>
                            <div className="flex items-center pb-4 border-b border-dashed border-[#D1D1D1]">
                                <div className="w-[80%]">
                                    <div className="flex flex-col w-full gap-y-2">
                                        <Link href={`/blog/${item.BlogID}`}>
                                            <span
                                                className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px] cursor-pointer hover:text-[#77A849]"
                                            >
                                                {item.Title}
                                            </span>
                                        </Link>
                                        <div className="flex flex-wrap items-center gap-x-2">
                                            {item.PublishDate.length > 0 && <DateIcon className="text-[24px] text-[#3E3E3E]" />}
                                            <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">
                                                {item.PublishDate}
                                            </span>
                                            <span
                                                className={`ml-2 mt-[2px] text-[0.75rem] xl:text-[1rem] 3xl:text-[1.125rem] rounded-full px-2`}
                                                style={{ backgroundColor: `${item.CategoryColor}` }}
                                            >
                                                {item.CategoryName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[20%]">
                                    <Image src={item.Image} width={60} height={40} alt={item.ImageAlt} className="object-cover" />
                                </div>
                            </div>
                        </>
                    ))} */}
                </div>

                {/* 熱門文章 content */}
                <div className="flex flex-col gap-y-5">
                    <div className="w-fit">
                        <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                            熱門文章
                        </span>
                        <div className="h-[1px] bg-primary w-full mt-2 " />
                    </div>
                    {/* 動態layout */}

                    {/* 靜態layout */}
                    <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                        <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                        <div className='flex items-center gap-x-2 '>
                            <CateIcon className="text-[24px] text-[#3E3E3E]" />
                            <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                            <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                            <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 熱門標籤 */}
                <div className="flex flex-col gap-y-5">
                    <div className="w-fit">
                        <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                            熱門標籤
                        </span>
                        <div className="h-[1px] bg-primary w-full mt-2" />
                    </div>
                    {/* first */}
                    {/* <div className="flex flex-wrap gap-x-4 gap-y-4 ">
                        {HashtagList?.List.map((item) => (
                            <>
                                <div className="group" >
                                    <div className="flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]  group-hover:border-[#77A849]">
                                        <span className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350] group-hover:text-[#77A849]">{`# ${item}`}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div> */}
                    <div className='flex w-full'>
                        <div className='flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]'>
                            <span className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'># 展示空間</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default BlogSidebar
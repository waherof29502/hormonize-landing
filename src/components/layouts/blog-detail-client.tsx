'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../button';
import ChargeImg01 from '@/public/images/service/2-2.png';
import Link from 'next/link';
import fallbackImage from '@/public/images/project/1-1.png'

import {
    useSingleArticle,
    usePrevArticle,
    useNextArticle,
    useRelatedArticle
} from '@/src/hooks/useSwr';
import { PortableText } from '@portabletext/react'
import {
    DateIcon,
    CateIcon,
    TagIcon,
    SearchIcon,
    CateItemIcon
} from '@/public/svg';
// 首頁圖片及內容
export const HEROITEM = [
    { imgSrc: '/images/home/hero/1-1.png' },
    { imgSrc: '/images/home/hero/1-2.png' },
    { imgSrc: '/images/home/hero/1-3.png' },
    { imgSrc: '/images/home/hero/1-4.jpg' },
    { imgSrc: '/images/home/hero/1-5.png' },
    { imgSrc: '/images/home/hero/1-6.png' },
    { imgSrc: '/images/home/hero/1-7.png' }
] as const;
type BlogDetailProps = {

    _id: string;
    name: string;
    description: string;
    images: string[]; // Replace with the actual type for images
    releaseDate: string;
    content: any,
    slug: string;
    tags: {
        name: string;
    }[];
    categories: {
        name: string;
    }[];
};
const BlogDetailClient = ({ slug }: { slug: string }) => {
    const { data: SingleArticle } = useSingleArticle(slug)
    const { data: PrevArticle } = usePrevArticle(slug)
    const { data: NextArticle } = useNextArticle(slug)
    const [imageSrc, setImageSrc] = useState(SingleArticle?.BlogImage);
    const fallbackImageSrc = fallbackImage.src;
    const { data: RelatedArticle } = useRelatedArticle("室內設計")

    return (
        <section className="relative overflow-hidden mt-[10rem]">
            {/* project detail*/}
            {/* desktop layout */}
            <div className="hidden 3md:flex flex-col w-full">
                {/* 第一區塊 */}
                <div className="flex w-full min-h-screen ">
                    <div className="w-full flex justify-center items-center pb-[7rem]">
                        {/* 左邊文字區塊 */}
                        <div className="w-[80%] h-full flex flex-col gap-y-20 items-center">
                            {/* 靜態layout */}
                            <div className="w-[90%]">
                                <div className="w-full min-h-fit">
                                    <div className="w-full min-h-fit py-2">
                                        <div className="flex flex-col gap-y-2 p-5">
                                            <h2 className="text-primary text-[2rem] tracking-[0.56px] font-medium">{SingleArticle?.Title}</h2>
                                            <div className="flex flex-wrap items-center gap-x-4">
                                                <div className="flex items-center gap-x-1">
                                                    {SingleArticle?.CategoryName !== null && <TagIcon className='text-[#929292] text-[1.625rem]' />}
                                                    <Link href="/">
                                                        <p
                                                            className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350] hover:text-[#77A849]"
                                                        >
                                                            {SingleArticle?.CategoryName}
                                                            {/* {SingleArticle.map((category, index) => (
                                                                <span key={index}> {index > 0 && ", "} {category.name}</span>
                                                            ))} */}
                                                        </p>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center gap-x-1">
                                                    <DateIcon className='text-[#929292] text-[1.625rem]' />

                                                    <Link href="/">
                                                        <p
                                                            className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350] hover:text-[#77A849]"
                                                        >
                                                            {SingleArticle?.Date}
                                                        </p>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center gap-x-1">
                                                    {SingleArticle?.HashtagList.length !== 0 && <CateIcon className='text-[#929292] text-[1.625rem]' />}
                                                    <Link href="/">
                                                        <p
                                                            className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350] hover:text-[#77A849]"
                                                        >
                                                            {SingleArticle?.HashtagList.map((tag: any, index: any) => (
                                                                <span key={index}> {index > 0 && ", "} {tag.name}</span>
                                                            ))}
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="w-full h-[50vh] mt-10 mb-5">
                                                <Image src={imageSrc} onError={() => setImageSrc(fallbackImageSrc)} width={1010.93} height={540} alt='' className='w-full h-full object-cover' />
                                            </div>
                                            <p className="mt-2 text-[#3E3E3E] text-[1.25rem] tracking-[1px] leading-[29px] font-sans font-[350] prose prose-[#77A849] prose-xl prose-li:marker:text-[#77A849]">
                                                {/* <PortableText value={SingleArticle?.Content} /> */}
                                                {SingleArticle?.Content}
                                            </p>
                                            {/* <!-- 分頁區塊 --> */}
                                            <div className="flex flex-col gap-y-20 mt-16">
                                                <div className="h-[1px] bg-[#EEEEEE] w-full"></div>
                                                <div className="flex gap-x-2 justify-between">
                                                    <Link href={`/blog-forum/${PrevArticle?.BlogID}`}>
                                                        <div className="flex items-center gap-x-2 group">
                                                            <p
                                                                className="text-[#3E3E3E] text-[1rem] tracking-[1px] leading-[29px] font-sans font-[350] group-hover:text-[#77A849]"
                                                            >
                                                                {PrevArticle?.Title}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <Link href={`/blog/${NextArticle?.BlogID}`}>
                                                        <div className="flex items-center gap-x-2 group">
                                                            <p
                                                                className="text-[#3E3E3E] text-[1rem] tracking-[1px] leading-[29px] font-sans font-[350] group-hover:text-[#77A849]"
                                                            >
                                                                {NextArticle?.Title}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="h-[1px] bg-[#EEEEEE] w-full"></div>
                                            </div>
                                            {/* <!-- 文章下半段相關文章 --> */}
                                            <div className="flex flex-col w-full items-center justify-center mt-10 gap-y-8">
                                                <div className="w-fit">
                                                    <span
                                                        className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1"
                                                    >相關文章</span>

                                                    <div className="h-[1px] bg-[#000000] w-full mt-2"></div>
                                                </div>
                                                {/* <!-- 第一篇示意文章 --> */}
                                                <div className="flex flex-wrap w-full min-h-fit">
                                                    {RelatedArticle?.List?.slice(0, 1).map((item: any) =>
                                                        <div className="lg:w-full xl:w-1/2 h-fit px-5" key={item.BlogID}>
                                                            <div className="flex items-center pb-4">
                                                                <div className="w-[80%]">
                                                                    <div className="flex flex-col w-full gap-y-2">
                                                                        <Link href={`/blog-forum/${item.BlogID}`}>
                                                                            <span
                                                                                className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px] cursor-pointer hover:text-[#77A849]"
                                                                            >{item.Title}</span>

                                                                        </Link>
                                                                        <div className="flex items-center gap-x-2">
                                                                            <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]"
                                                                            >{item.PublishDate}</span>

                                                                            <span
                                                                                className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 text-white bg-[#77A849]`}
                                                                            >{item.CategoryName}</span>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-[20%]">
                                                                    <Image
                                                                        src={item.Image}
                                                                        width={60}
                                                                        height={40}
                                                                        alt={item.ImageAlt}
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* project detail*/}
            {/* mobile layout */}
            <div className="3md:hidden flex flex-col w-full min-h-screen">
                <div className="w-full h-full flex flex-col justify-center  gap-y-[2rem]  px-8 py-14">
                    <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
                        <div className="w-full h-[50vh]">
                            <Image src={ChargeImg01} alt="image.charge" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full min-h-fit py-2">
                            <div className="flex flex-col gap-y-2 p-5">
                                <h2 className="text-primary text-[1.25rem] leading-[38px] font-normal text-shadow">
                                    個人工作室V.S住家
                                </h2>
                                <div className="flex flex-wrap items-center gap-x-4">
                                    <div className="flex items-center gap-x-1">
                                        <TagIcon className="text-[#929292] text-[1.625rem]" />
                                        <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                                            室內設計,房間裝修,台北市
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <DateIcon className="text-[#929292] text-[1.625rem]" />
                                        <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">2020/8/21</p>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <CateIcon className="text-[#929292] text-[1.625rem]" />
                                        <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">室內設計</p>
                                    </div>
                                </div>
                                <p className="mt-2 text-[#3E3E3E] text-[1rem] tracking-[0.8px] leading-[38px] font-sans font-[350]">
                                    住宅的主人，是專業的大提琴以及鋼琴演奏者，對於自然有著一樣的愛好，因此，本設計思考的重點在於如何將主人的音樂性與生活態度轉譯成空間，並且以簡潔的空間形式，突顯本身就具備優美造型的鋼琴以及大提琴之存在，成為與主人生活互伴的另外兩個主角。
                                </p>
                                <Button
                                    containerStyles="wide:w-1/3 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary"
                                    path="/"
                                >
                                    learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default BlogDetailClient;
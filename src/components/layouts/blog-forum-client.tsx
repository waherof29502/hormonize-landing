'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CustomButton from '../button';
import Link from 'next/link';
import ChargeImg01 from '@/public/images/service/2-2.png';
import { DateIcon, CateIcon, TagIcon, SearchIcon, CateItemIcon } from '@/public/svg';
import {
  useListArticle,
  useListCate,
  useListLatestArticle,
  useListHotArticle,
  useListHashtag
} from '@/src/hooks/useSwr';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import useDebounce from '@/src/hooks/useDebounce';

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

export default function BlogForumClient() {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState(0);
  const [hashtag, setHashtag] = useState('');
  const [contentId, setContentId] = useState<null | number>(null);
  const [page, setPage] = useState(1);
  const inputRef = useRef<HTMLInputElement | null>(null)
  const debouncedSearch = useDebounce(search, 500)
  const handleSubmit = () => {
    const value = inputRef.current?.value;
    if (value !== undefined) {
      setSearchTerm(value)
    }
  }
  // const PAGE_NUM=3
  const { data: ArticleList, isValidating } = useListArticle(page.toString(), categories, hashtag, debouncedSearch);
  const { data: CateList } = useListCate();
  const { data: LatestArticleList } = useListLatestArticle();
  const { data: HotArticleList } = useListHotArticle();
  const { data: HashtagList } = useListHashtag();
  const shortenText = (text: string, maxLength: number) => {
    if (text?.length <= maxLength) {
      return text;
    }

    return text?.substring(0, maxLength - 3) + '...';
  };

  useEffect(() => {
    if (isValidating && ArticleList) {
      setSearch('');
      setCategories(0);
      setHashtag('');
    }
  }, [isValidating, ArticleList]);
  return (
    <section className="relative overflow-hidden">
      {/* hero desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[96vh] mt-[14vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[80%] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center">
              <span className="text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow">
                BLOG &
              </span>
              <span className="-mt-4 text-primary text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow">
                FORUM
              </span>
            </div>
            <div className="w-3/4 h-full bg-blogHero bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </div>
      {/* hero mobile layout */}
      <div className="3md:hidden flex flex-col w-full min-h-[90vh] mt-[14vh]">
        <div className="w-full h-full flex justify-center items-center py-10">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <span className="text-primary text-[1.875rem] sm:text-[3rem] font-brandonLight text-shadow">BLOG &</span>
            <span className="text-primary text-[1.875rem] sm:text-[3rem] font-brandonBld text-shadow">FORUM</span>
          </div>
        </div>
        <div className="w-full h-[58vh] bg-blogHero bg-cover bg-no-repeat" />
      </div>

      {/* project detail*/}
      {/* desktop layout */}
      <div className="hidden 3md:flex flex-col w-full -mt-20">
        {/* 第一區塊 */}
        <div className="flex w-full min-h-screen ">
          <div className="w-full flex justify-center items-center pb-[7rem]">
            {/* 左邊文字區塊 */}
            <article className="w-[60%] h-full flex flex-col gap-y-20 items-center">
              {/* 動態layout */}
              {ArticleList?.List.map((item) => (
                <div key={item.BlogID} className="w-[80%]">
                  <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
                    <div className="w-full h-[50vh]">
                      <Image
                        src={item.Image}
                        width={1010.93}
                        height={540}
                        alt={item.ImageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full min-h-fit py-2">
                      <div className="flex flex-col gap-y-2 p-5">
                        <h2 className="text-primary text-[1.75rem] tracking-[0.56px] font-medium">{item.Title}</h2>
                        <div className="flex flex-wrap items-center gap-x-4">
                          <div className="flex items-center gap-x-1">
                            {item.CategoryName.length > 0 && <TagIcon className="text-[#929292] text-[1.625rem]" />}
                            <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                              {item.CategoryName}
                            </p>
                          </div>
                          <div className="flex items-center gap-x-1">
                            {item.PublishDate.length > 0 && <DateIcon className="text-[#929292] text-[1.625rem]" />}
                            <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                              {item.PublishDate}
                            </p>
                          </div>
                          <div className="flex items-center gap-x-1">
                            {item.HashTags.length > 0 && <CateIcon className="text-[#929292] text-[1.625rem]" />}
                            <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                              {item.HashTags}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-[#3E3E3E] text-[1.25rem] tracking-[1px] leading-[29px] font-sans font-[350]">
                          {shortenText(item.Content, 20)}
                        </p>
                        <CustomButton
                          containerStyles="wide:w-1/5 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary"
                          path={`/blog-forum/${item.BlogID}`}
                        >
                          learn more
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 靜態layout */}
              {/* <div className="w-[80%] ">
              <div className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
              <div className="w-full h-[50vh]">
              <Image src={ChargeImg01} alt="image.charge" className='w-full h-full object-cover'/>
              </div>
              <div className="w-full min-h-fit py-2">
                <div className='flex flex-col gap-y-2 p-5'>
                  <h2 className='text-primary text-[1.75rem] tracking-[0.56px] font-medium'>個人工作室V.S住家</h2>
                  <div className='flex flex-wrap items-center gap-x-4'>
                    <div className='flex items-center gap-x-1'>
                    <TagIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計,房間裝修,台北市</p>
                    </div>
                     <div className='flex items-center gap-x-1'>
                    <DateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>2020/8/21</p>
                    </div>
                     <div className='flex items-center gap-x-1'>
                    <CateIcon className='text-[#929292] text-[1.625rem]'/>
                    <p className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'>室內設計</p>
                    </div>
                  </div>
                  <p className='mt-2  text-[#3E3E3E] text-[1.25rem] tracking-[1px] leading-[29px] font-sans font-[350]'>住宅的主人，是專業的大提琴以及鋼琴演奏者，對於自然有著一樣的愛好，因此，本設計思考的重點在於如何將主人的音樂性與生活態度轉譯成空間，並且以簡潔的空間形式，突顯本身就具備優美造型的鋼琴以及大提琴之存在，成為與主人生活互伴的另外兩個主角。</p>
                  <Button containerStyles='wide:w-1/3 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary' path="/">learn more</Button>
                </div>
              </div>
              </div>
            </div> */}
            </article>

            {/* 右邊文字區塊 */}
            {/* <aside className="w-[40%] h-full flex items-center justify-center">
              <BlogSidebarClient />
            </aside> */}
            <aside className="w-[40%] h-full flex items-center justify-center">
              <div className="w-[70%] h-full flex flex-col gap-y-[4rem]">
                <div className="flex flex-col gap-y-5">
                  <div className="w-fit">
                    <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                      搜尋
                    </span>
                    <div className="h-[1px] bg-primary w-full mt-2 " />
                  </div>
                  {/* v1 search bar */}
                  {/* <div className="flex items-center justify-center ">
                    <Input
                      id="searchInput"
                      name="searchInput"
                      ref={inputRef}
                      placeholder="請輸入關鍵字...."
                      className="w-[90%] p-4 mx-2 text-primary focus:outline-none"
                    />
                    <Button className="p-4" variant="outline" onClick={handleSubmit}>
                      <SearchIcon className="text-[19px] text-[#3E3E3E] " />
                    </Button>
                  </div> */}
                  <div className="flex items-center justify-center relative">
                    <SearchIcon className="text-[16px] text-[#3E3E3E] absolute top-3 left-5 " />
                    <Input
                      type="search"
                      placeholder="請輸入關鍵字...."
                      className="w-full pl-10 mx-2 text-primary focus:outline-none"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  {/* <form className="flex items-center justify-center " >
                    <Input
                      type="search"
                      id="searchInput"
                      placeholder="請輸入關鍵字...."
                      className="w-[90%] p-4 mx-2 text-primary focus:outline-none"
                    />
                    <Button className="p-4" variant="outline" type="submit">
                      <SearchIcon className="text-[19px] text-[#3E3E3E] " />
                    </Button>
                  </form> */}
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
                  {CateList?.List.map((item) => (
                    <>
                      <div className="flex flex-col w-full gap-y-2">
                        <div
                          className="flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292] "
                          onClick={() => setCategories(item.CategoryID)}
                        >
                          {item.CategoryName && <CateItemIcon className="text-[19px] text-[#3E3E3E]" />}
                          <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px] hover:text-[#77A849]">
                            {item.CategoryName}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                {/* 靜態layout */}
                {/* <div className="flex flex-col gap-y-5">
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
            </div>*/}
                {/* 最新文章 content */}
                <div className="flex flex-col gap-y-5">
                  <div className="w-fit">
                    <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                      最新文章
                    </span>
                    <div className="h-[1px] bg-primary w-full mt-2 " />
                  </div>
                  {/* first */}
                  {LatestArticleList?.List.map((item) => (
                    <>
                      <div className="flex items-center pb-4 border-b border-dashed border-[#D1D1D1]">
                        <div className="w-[80%]">
                          <div className="flex flex-col w-full gap-y-2">
                            <Link href={`/blog-forum/${item.BlogID}`}>
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
                  ))}
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
                  <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                    {
                      HotArticleList?.List.map((item) => (
                        <>
                          <Link href={`/blog/${item.BlogID}`}>
                            <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">{item.Title}</span>
                            <div className='flex items-center gap-x-2 '>
                              <CateIcon className="text-[24px] text-[#3E3E3E]" />
                              <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">{item.PublishDate}</span>
                              <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>{item.CategoryName}</span>
                              <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('${item.Image}')` }}>
                              </div>
                            </div>
                          </Link>
                        </>
                      ))
                    }

                  </div >
                </div>
                {/* 靜態layout */}
                {/* <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                    <div className='flex items-center gap-x-2 '>
                      <CateIcon className="text-[24px] text-[#3E3E3E]" />
                      <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                      <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                      <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* 熱門標籤 */}
                <div className="flex flex-col gap-y-5">
                  <div className="w-fit">
                    <span className="text-primary text-[1.375rem] tracking-[6.16px] leading-[29px] font-sans font-medium px-1">
                      熱門標籤
                    </span>
                    <div className="h-[1px] bg-primary w-full mt-2" />
                  </div>
                  {/* first */}
                  <div className="flex flex-wrap gap-x-4 gap-y-4 " >
                    {HashtagList?.List.map((item) => (
                      <>
                        <div className="group" onClick={() => setHashtag(item)} >
                          <div className="flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]  group-hover:border-[#77A849]">
                            <span className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350] group-hover:text-[#77A849]">{`# ${item}`}</span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  {/* <div className='flex w-full'>
                        <div className='flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]'>
                            <span className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'># 展示空間</span>
                        </div>
                    </div> */}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div >
      {/* project detail*/}
      {/* mobile layout */}
      <div className="3md:hidden flex flex-col w-full min-h-screen">
        <div className="w-full h-full flex flex-col justify-center  gap-y-[2rem]  px-8 py-14">
          {ArticleList?.List.map((item) => (
            <>
              <div key={item.BlogID} className="w-full border-solid border-[1px] border-[#D1D1D1] min-h-fit">
                <div className="w-full h-[50vh]">
                  <Image
                    src={item.Image}
                    width={1010.93}
                    height={540}
                    alt="image.charge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full min-h-fit py-2">
                  <div className="flex flex-col gap-y-2 p-5">
                    <h2 className="text-primary text-[1.25rem] leading-[38px] font-normal text-shadow">{item.Title}</h2>
                    <div className="flex flex-wrap items-center gap-x-4">
                      <div className="flex items-center gap-x-1">
                        {item.CategoryName.length > 0 && <TagIcon className="text-[#929292] text-[1.625rem]" />}
                        <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                          {item.CategoryName}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        {item.PublishDate.length > 0 && <DateIcon className="text-[#929292] text-[1.625rem]" />}
                        <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                          {item.PublishDate}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        {item.HashTags.length > 0 && <CateIcon className="text-[#929292] text-[1.625rem]" />}
                        <p className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]">
                          {item.HashTags}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[#3E3E3E] text-[1rem] tracking-[0.8px] leading-[38px] font-sans font-[350]">
                      {shortenText(item.Content, 80)}
                    </p>
                    <CustomButton
                      containerStyles="wide:w-1/3 font-brandonMed mt-2 ml-auto border-[1px] border-primary px-5 py-2 text-[1.5rem] text-primary hover:text-white hover:bg-primary"
                      path={`/blog/${item.BlogID}`}
                    >
                      learn more
                    </CustomButton>
                  </div>
                </div>
              </div>
            </>
          ))}

          {/* 搜尋區塊 */}
          <div className="flex flex-col gap-y-5 pt-6">
            <div className="w-fit">
              <span className="text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1">
                搜尋
              </span>
              <div className="h-[1px] bg-primary w-full mt-1 " />
            </div>
            <div className="flex items-center justify-center relative">
              <SearchIcon className="text-[16px] text-[#3E3E3E] absolute top-3 left-5 " />
              <Input
                type="search"
                placeholder="請輸入關鍵字...."
                className="w-full pl-10 mx-2 text-primary focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* cate content */}
          <div className="flex flex-col gap-y-5">
            <div className="w-fit">
              <span className="text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1">
                文章分類
              </span>
              <div className="h-[1px] bg-primary w-full mt-2 " />
            </div>
            {/* 動態資料 */}
            {CateList?.List.map((item) => (
              <>
                <div className="flex flex-col w-full gap-y-2">
                  <div
                    className="flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292]"
                    onClick={() => setCategories(item.CategoryID)}
                  >
                    {item.CategoryName && <CateItemIcon className="text-[19px] text-[#3E3E3E]" />}
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">
                      {item.CategoryName}
                    </span>
                  </div>
                </div>
              </>
            ))}
            {/* 靜態資料 */}
            {/* <div className='flex flex-col w-full gap-y-2'>
                  <div className='flex items-center gap-x-2 pb-2 border-b border-dashed border-[#929292]' onClick={() => console.log('Clicked on "了解室內設計"')}>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                  </div>
                  <div className='flex items-center gap-x-2 pb-1 border-b border-dashed border-[#3E3E3E]'>
                    <CateItemIcon className="text-[19px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">了解室內設計</span>
                  </div>
                </div>*/}
          </div>
          {/* 最新文章 content */}
          <div className="flex flex-col gap-y-5">
            <div className="w-fit">
              <span className="text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1">
                最新文章
              </span>
              <div className="h-[1px] bg-primary w-full mt-2 " />
            </div>
            {/* 動態頁面 */}
            {LatestArticleList?.List.map((item) => (
              <>
                <div className="flex items-center pb-4 border-b border-dashed border-[#D1D1D1]">
                  <div className="w-[80%]">
                    <div className="flex flex-col w-full gap-y-2">
                      <Link href={`/blog/${item.BlogID}`}>
                        <span
                          className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]"
                          onClick={() => setContentId(item.BlogID)}
                        >
                          {item.Title}
                        </span>
                      </Link>
                      <div className="flex items-center gap-x-2">
                        {item.PublishDate.length > 0 && <DateIcon className="text-[24px] text-[#3E3E3E]" />}
                        <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">
                          {item.PublishDate}
                        </span>
                        <span
                          className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2`}
                          style={{ backgroundColor: `${item.CategoryColor}` }}
                        >
                          {item.CategoryName}
                        </span>
                        {/* <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <Image src={item.Image} width={60} height={40} alt={item.ImageAlt} className="object-cover" />
                  </div>
                </div>
              </>
            ))}
            {/* 靜態頁面 */}
            {/* <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#77A849]`}>室內設計</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div> */}
            {/* second */}
            {/* <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#242424]`}>心得短文</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>   */}
          </div>

          {/* 熱門文章 content */}
          <div className="flex flex-col gap-y-5">
            <div className="w-fit">
              <span className="text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1">
                熱門文章
              </span>
              <div className="h-[1px] bg-primary w-full mt-2 " />
            </div>
            {/* 動態內容 */}
            {HotArticleList?.List.map((item) => (
              <>
                <div className="flex items-center pb-4 border-b border-dashed border-[#D1D1D1]">
                  <div className="w-[80%]">
                    <div className="flex flex-col w-full gap-y-2">
                      <Link href={`/blog/${item.BlogID}`}>
                        <span
                          className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]"
                          onClick={() => setContentId(item.BlogID)}
                        >
                          {item.Title}
                        </span>
                      </Link>
                      <div className="flex items-center gap-x-2">
                        {item.PublishDate.length > 0 && <DateIcon className="text-[24px] text-[#3E3E3E]" />}
                        <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">
                          {item.PublishDate}
                        </span>
                        <span
                          className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2`}
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
            ))}

            {/* 靜態內容 */}
            {/* <div className='flex flex-col w-full gap-y-2 pb-4 border-b border-dashed border-[#D1D1D1]'>
                  <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">個人工作室V.S住家</span>
                  <div className='flex items-center gap-x-2 '>
                    <CateIcon className="text-[24px] text-[#3E3E3E]"/>
                    <span className="text-[1.125rem] text-[#3E3E3E] font-sans font-[350] leading-[37px]">2020.08.21</span>
                    <span className={`ml-2 text-[1rem] 3xl:text-[1.125rem] rounded-full px-2 bg-[#242424]`}>心得短文</span>
                    <div className='ml-auto w-[60px] h-[40px] bg-cover' style={{ backgroundImage: `url('/images/home/hero/1-1.png')` }}>
                    </div>
                  </div>
                </div>   */}
          </div>

          {/* 熱門標籤 */}
          <div className="flex flex-col gap-y-5">
            <div className="w-fit">
              <span className="text-primary text-[1.25rem] tracking-[5.6px] leading-[29px] font-sans font-medium px-1">
                熱門標籤
              </span>
              <div className="h-[1px] bg-primary w-full mt-2 " />
            </div>
            {/* 動態檔案 */}
            <div className="flex flex-wrap gap-x-4 gap-y-4 ">
              {HashtagList?.List.map((item) => (
                <>
                  <div className="group" onClick={() => setHashtag(`${item}`)}>
                    <div className="flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] group-hover:border-[#D1D1D1]">
                      <span className="text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350] group-hover:text-[#77A849]">{`# ${item}`}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
            {/* 靜態檔案 */}
            {/* <div className='flex w-full'>
                  <div className='flex w-fit px-[14px] py-[15px] items-center gap-x-2  border-[1px] border-[#D1D1D1]'>
                    <span className='text-[1rem] text-[#3E3E3E] tracking-[0.48px] font-sans font-[350]'># 展示空間</span>
                </div>
                </div>   */}
          </div>
        </div>
      </div>
    </section >
  );
}

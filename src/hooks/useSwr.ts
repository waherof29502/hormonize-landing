import { Search } from 'lucide-react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { client, Error } from '@/src/lib/utils';

//部落格資料區塊
// https://cddev.creer-design.com/harmonize/api
// GET blog/BlogList

interface IListArticle {
  TotalPage: number;
  List: {
    Title: string;
    BlogID: number;
    Image: string;
    ImageAlt: string;
    HashTags: string[];
    PublishDate: string;
    CategoryID: number;
    CategoryName: string;
    Content: string;
  }[];
}
export function useListArticle(Page: string, Cate: number, Hashtag: string, Search: string) {
  return useSWR<IListArticle, Error, [string, string, number, string, string]>(
    ['/blog/BlogList', Page, Cate, Hashtag, Search],
    async ([url]) => {
      const res = await client.get(url, {
        params: {
          Page: Page,
          Cate: Cate,
          Hashtag: Hashtag,
          Search: Search
        }
      });
      return res.data;
    }
  );
}
// export function useSingleParkingSpaceStatus(id?: IParkingSpaceStatus['id'] | string) {
//   return useSWR<IParkingSpaceStatus, Error, string | null>(id ? `/api/parking-space/${id}` : null, async (url) => {
//     const res = await client.get(url);
//     return res.data.data;
//   });
// }

export function useSingleArticle(id?: string) {
  return useSWR<any, Error, string | null>(id ? `/blog/BlogData?ID=${id}` : null, async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

export function usePrevArticle(id?: string) {
  return useSWR<any, Error, string | null>(id ? `/blog/BlogPrev?ID=${id}` : null, async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}
export function useNextArticle(id?: string) {
  return useSWR<any, Error, string | null>(id ? `/blog/BlogNext?ID=${id}` : null, async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

export function useRelatedArticle(tag?: string) {
  return useSWR<any, Error, string | null>(tag ? `/blog/BlogRelated?Hashtag=${tag}` : null, async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}
// https://cddev.creer-design.com/harmonize/api
// GET blog/BlogCategory

interface IListCate {
  List: {
    CategoryID: number;
    CategoryName: string;
  }[];
}
export function useListCate() {
  return useSWR<IListCate, Error, string>('/blog/BlogCategory', async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

// https://cddev.creer-design.com/harmonize/api
// GET blog/BlogLatest
interface IListLatestArticle {
  List: {
    BlogID: number;
    Image: string;
    ImageAlt: string;
    Title: string;
    PublishDate: string;
    CategoryID: number;
    CategoryName: string;
    CategoryColor: string;
  }[];
}
export function useListLatestArticle() {
  return useSWR<IListLatestArticle, Error, string>('/blog/BlogLatest', async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

// https://cddev.creer-design.com/harmonize/api
// GET blog/BlogHot
interface IListHotArticle {
  List: {
    BlogID: number;
    Image: string;
    ImageAlt: string;
    Title: string;
    PublishDate: string;
    CategoryID: number;
    CategoryName: string;
    CategoryColor: string;
  }[];
}
export function useListHotArticle() {
  return useSWR<IListHotArticle, Error, string>('/blog/BlogHot', async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

// https://cddev.creer-design.com/harmonize/api
// GET blog/BlogHashtag
interface IListHashTag {
  List: string[];
}
export function useListHashtag() {
  return useSWR<IListHashTag, Error, string>('/blog/BlogHashtag', async (url) => {
    const res = await client.get(url);
    return res.data;
  });
}

//部落格計點
// https://cddev.creer-design.com/harmonize/api
// POST blog/BlogRead

// 聯絡我們表單資料區塊
// https://cddev.creer-design.com/harmonize/api
// POST contact/ContactUs
interface IContactFormSubmit {
  ContactName: string;
  ContactPhone: string;
  LineID: string;
  Email: string;
  ConsultItem: string;
  Message: number;
}
export function useContactFormSubmit() {
  return useSWRMutation<IContactFormSubmit, Error, string, any>(`/contact/ContactUs`, async (url, { arg }) => {
    const res = await client.patch(url, arg);
    return res.data;
  });
}

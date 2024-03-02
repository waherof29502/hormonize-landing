import { BoxIcon } from '@/public/svg/index';
import React from 'react';

// 導覽及連結
export const LINKS = [
  { path: '/about-us', name: 'ABOUT US' },
  { path: '/projects', name: 'PROJECTS REVIEW' },
  { path: '/process-charges', name: 'PROCESS & CHARGES' },
  { path: '/blog-forum', name: 'BLOG & FORUM' },
  { path: '/contact-us', name: 'CONTACT US' }
] as const;

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
export const PROJECTITEM = [
  {
    imgSrc: '/images/home/1-1.png',
    imgProjectSrc: '/images/project/1-1.png',
    title: '共居 x 共鳴‧竹北',
    icon: React.createElement(BoxIcon),
    tag: '辦公空間',
    category: ['residential'],
    path: '/project-hsinchu',
    projectTag: '住宅空間'
  },
  {
    imgSrc: '/images/home/1-2.png',
    imgProjectSrc: '/images/project/1-2.png',
    title: '四立方‧彰化',
    icon: React.createElement(BoxIcon),
    tag: '住宅空間',
    category: ['single', 'building'],
    path: '/project-changhua',
    projectTag: '獨棟建築'
  },
  {
    imgSrc: '/images/home/1-3.png',
    imgProjectSrc: '/images/project/1-3.png',
    title: '雲之端‧台北內湖',
    icon: React.createElement(BoxIcon),
    tag: '辦公空間',
    category: ['commercial', 'space'],
    path: '/project-taipei',
    projectTag: '商業空間'
  }
] as const;

export const PROJECTMOBILEITEM = [
  {
    imgSrc: '/images/home/1-2.png',
    title: '四立方‧彰化',
    icon: React.createElement(BoxIcon),
    tag: '辦公空間',
    path: '/project-changhua'
  },
  {
    imgSrc: '/images/home/1-1.png',
    title: '共居 x 共鳴‧竹北',
    icon: React.createElement(BoxIcon),
    tag: '辦公空間',
    path: '/project-hsinchu'
  },
  {
    imgSrc: '/images/home/1-3.png',
    title: '雲之端‧台北內湖',
    icon: React.createElement(BoxIcon),
    tag: '辦公空間',
    path: '/project-taipei'
  }
] as const;

export const DESIGNSTORY = [
  { imgSrc: '/images/home/2-1.png', title: '共居 x 共鳴‧竹北', link: '#1' },
  { imgSrc: '/images/home/2-2.png', title: '四立方‧彰化', link: '#1' },
  { imgSrc: '/images/home/2-3.png', title: '雲之端‧台北內湖', link: '#1' },
  { imgSrc: '/images/home/2-1.png', title: '雲之端‧台北內湖', link: '#1' },
  { imgSrc: '/images/home/2-1.png', title: '雲之端‧台北內湖', link: '#1' }
] as const;

export const DESIGNMOBILESTORY = [
  { imgSrc: '/images/home/2-2.png', title: '四立方‧彰化', link: '#1' },
  { imgSrc: '/images/home/2-1.png', title: '共居 x 共鳴‧竹北', link: '#1' },
  { imgSrc: '/images/home/2-3.png', title: '雲之端‧台北內湖', link: '#1' },
  { imgSrc: '/images/home/2-1.png', title: '雲之端‧台北內湖', link: '#1' },
  { imgSrc: '/images/home/2-1.png', title: '雲之端‧台北內湖', link: '#1' }
] as const;

// project detail
export const CHPROJECTDETAIL = [
  {
    title: '四立方‧彰化',
    iconImgSrc: ['/images/project-detail/1-3.png', '/images/project-detail/1-2.png', '/images/project-detail/1-1.png'],
    imgSrc: [
      '/images/project-detail/work01/1-1.jpg',
      '/images/project-detail/work01/1-2.jpg',
      '/images/project-detail/work01/1-3.jpg',
      '/images/project-detail/work01/1-4.jpg'
    ],
    details: {
      類型: '透天厝',
      坪數: '60坪',
      風格: '簡約',
      屋況: '3年',
      格局: '三房三廳'
    }
  }
];
export const HCPROJECTDETAIL = [
  {
    title: '共居 x 共鳴‧竹北',
    iconImgSrc: ['/images/project-detail/3-1.png'],
    imgSrc: [
      '/images/project-detail/work01/1-1.jpg',
      '/images/project-detail/work01/1-2.jpg',
      '/images/project-detail/work01/1-3.jpg',
      '/images/project-detail/work01/1-4.jpg'
    ],
    details: {
      類型: '住宅及工作室',
      坪數: '30坪',
      風格: '簡約、自然',
      屋況: '5年',
      格局: '二房二廳一工作室'
    }
  }
];

export const TPPROJECTDETAIL = [
  {
    title: '雲之端‧台北內湖',
    iconImgSrc: ['/images/project-detail/2-1.png'],
    imgSrc: [
      '/images/project-detail/work01/1-1.jpg',
      '/images/project-detail/work01/1-2.jpg',
      '/images/project-detail/work01/1-3.jpg',
      '/images/project-detail/work01/1-4.jpg'
    ],
    details: {
      類型: '辦公室',
      坪數: '50坪',
      風格: '科技、自然',
      屋況: '15年',
      格局: '開放辦公區'
    }
  }
];

// footer
export const FOOTERITEMS = [
  { path: '/privacy-policy', name: '隱私權政策' },
  { path: '/cookie-policy', name: 'Cookies 政策' }
] as const;

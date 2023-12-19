import { BoxIcon } from '@/public/svg/index';
import React from 'react';

export const HEROITEM = [
{imgSrc:'/images/hero-image.png'},
{imgSrc:'/images/hero-image.png'},
{imgSrc:'/images/hero-image.png'}

] as const;
// export const HEROITEM = [
// '/images/home/1-1.png','/images/home/1-2.png'
// ] as const;

export const PROJECTITEM = [
  { imgSrc: '/images/home/1-1.png', title: '共居 x 共鳴‧竹北', icon: React.createElement(BoxIcon), tag: '辦公空間' },
  { imgSrc: '/images/home/1-2.png', title: '四立方‧彰化', icon: React.createElement(BoxIcon), tag: '辦公空間' },
  { imgSrc: '/images/home/1-3.png', title: '雲之端‧台北內湖', icon: React.createElement(BoxIcon), tag: '辦公空間' }
] as const;


export const DESIGNSTORY = [
  { imgSrc: '/images/home/2-1.png', title: '共居 x 共鳴‧竹北', link:'#1' },
  { imgSrc: '/images/home/2-2.png', title: '四立方‧彰化', link:'#1' },
  { imgSrc: '/images/home/2-3.png', title: '雲之端‧台北內湖', link:'#1' },
  { imgSrc: '/images/home/2-1.png', title: '雲之端‧台北內湖', link:'#1' },
  { imgSrc: '/images/home/2-1.png', title: '雲之端‧台北內湖', link:'#1' }


] as const;
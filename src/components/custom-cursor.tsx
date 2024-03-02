'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a');
    const cursorText = document.querySelector('.cursor-text') as HTMLElement | null;
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };
    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      if (link.classList.contains('view')) {
        gsap.to(cursor, { scale: 4 });
        if (cursorText) cursorText.style.display = 'block';
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };
    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      if (cursorText) cursorText.style.display = 'none';
    };
    document.addEventListener('mousemove', onMouseMove);
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });
  });
  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">View</span>
    </div>
  );
};

export default CustomCursor;

import React from 'react';

interface RwdYoutubeProps {
  src: string;
}
export default function RwdYoutube({ src }:RwdYoutubeProps) {
    return (
        <div className="relative w-full h-0 pb-[56.25%]">
            <iframe frameBorder="0" src={src} allowFullScreen={true} className="absolute top-0 left-0 w-full h-full"/>
        </div>
    )
}
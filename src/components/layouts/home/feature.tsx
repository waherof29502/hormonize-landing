import React from 'react'

export default function Feature() {
  return (
     <section className="relative">
      <div className="flex w-full min-h-screen bg-feature bg-cover bg-no-repeat">
       <div className="w-full flex justify-center items-center">
        <div className="w-1/4 h-full flex justify-center items-center text-white border-solid border-r-[2px] border-primary">
            <span>DESIGN</span>
            <span>DNA</span>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center px-[115px] gap-y-[37px]">
            <h2 className="text-white text-[30px] tracking-[1.8px] leading-[48px] font-medium">設計空間是須要專注的。</h2>
            <span className="text-white text-[20px] leading-[40px] font-normal">我們專注的第一件事，是希望客戶於我們所呈現的作品之中，可以感受到什麼？是愉悅、是驚喜、是自我連繫。然後開始構思與打造設計意圖。不斷的回到初衷，只為了一個最好的定案。為了接近完美，為了豐富生活面貌，我們甚至必須重新開始，直到能感動並提升客戶的生活層次後，我們才會為這樣的作品背書。</span>
        </div>
        <div className="w-1/4 h-full"/>
      </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Service() {
  return (
     <section className="relative">
         <div className="flex w-full min-h-screen">
        <div className="flex flex-col">
      <div className="w-full h-3/4 flex justify-center items-center">
        <div className="w-1/4 h-full flex justify-center items-center bg-[#D1D1D1] border-r-[2px] border-primary">
            <span>ABOUT</span>
            <span>US</span>
        </div>
        <div className="w-1/2 h-full flex flex-col bg-white justify-center px-[100px] gap-y-[37px]">
            <h2 className="text-primary text-[30px] tracking-[1.8px] leading-[48px]">朱慶煌<span className="text-primary text-[24px] pl-2">主持設計師</span></h2>
            <span className="text-[#3E3E3E] text-[20px] leading-[40px]">我們認為的獨特性：室內空間必須是一個好的生活容器，是自我的投射。而對於一個住宅內，所有空間相互之間的關係，應如同建築師路易斯‧康（Louis Kahn）所闡述的：住宅平面是數個房間所形成的社區 (A plan is a society of rooms)。 在規劃時，我們不採用任何置入性的風格；極力地將室內空間打開，提高通透度；引入適合的自然光，並營造均質的光線；強調簡單的線條，以降低視覺上的雜亂度；運用表面材料質感及紋路的變化，提高視覺的豐富感。如此，物件與空間的形體能更加顯著，並呈現安靜、簡單及低承載的空間組合，使各個生活機能之間，能更緊密的連結。 針對不同的室內設計，必須一開始就選擇與其風格相互搭配的傢俱及燈飾，同時須考慮其置放的位置，使他們如同藝術品般的被陳列出來，而成為空間的一部份。最後，必須有適度的裝飾，以提高住宅的親切感。</span>
            <button className="text-primary ml-auto bg-blue-500 w-[120px] mr-4">123</button>
        </div>
        <div className="w-1/4 h-full bg-service bg-cover bg-no-repeat"></div>
      </div>
      <div className="w-full h-1/4 relative -mt-[0.4px] bg-[#D1D1D1]">
        <div className="absolute inset-0 bg-primary clip-path-polygon " />
        <div className="absolute inset-0 clip-small-polygon bg-[#929292] border-solid border-t-[2px] border-primary" />
      </div>
      </div>
      </div>
    </section>
  )
}

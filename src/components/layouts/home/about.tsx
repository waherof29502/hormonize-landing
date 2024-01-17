import React from 'react';
import Button from '../../button';
export default function About() {
  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-[90vh]">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/4 h-full flex justify-center items-center text-primary border-solid border-r-[2px] border-primary gap-x-2">
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>ABOUT</span>
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>US</span>
          </div>
          <div className="w-1/2 h-full flex flex-col bg-white justify-center px-[50px] 3xl:px-[90px] gap-y-[16px] 3xl:gap-y-[37px]">
            <h2 className="font-sans text-primary text-[20px] 3xl:text-[30px] tracking-[1.8px] 3xl:leading-[48px] font-medium">
              延續建築的殼，針對不同的客戶，我們將客製並展現其各自的獨特性。
            </h2>
            <span className="font-sans text-[#3E3E3E] text-[0.875rem] 3xl:text-[1.25rem] leading-[1.875rem] 3xl:leading-[2.25rem] font-normal">
              我們認為的獨特性：室內空間必須是一個好的生活容器，是自我的投射。而對於一個住宅內，所有空間相互之間的關係，應如同建築師路易斯‧康（Louis
              Kahn）所闡述的：住宅平面是數個房間所形成的社區 (A plan is a society of rooms)。<br/>
              在規劃時，我們不採用任何置入性的風格；極力地將室內空間打開，提高通透度；引入適合的自然光，並營造均質的光線；強調簡單的線條，以降低視覺上的雜亂度；運用表面材料質感及紋路的變化，提高視覺的豐富感。如此，物件與空間的形體能更加顯著，並呈現安靜、簡單及低承載的空間組合，使各個生活機能之間，能更緊密的連結。<br/>
              針對不同的室內設計，必須一開始就選擇與其風格相互搭配的傢俱及燈飾，同時須考慮其置放的位置，使他們如同藝術品般的被陳列出來，而成為空間的一部份。最後，必須有適度的裝飾，以提高住宅的親切感。
            </span>
            <Button containerStyles='font-brandonMed ml-auto border-[1px] border-primary bg-white px-5 py-2 text-primary text-[1.25rem] 3xl:text-[1.5rem] hover:text-white hover:bg-primary' path="/about-us">learn more</Button>

          </div>
          <div className="w-1/4 h-full bg-about bg-cover bg-no-repeat"></div>
        </div>
      </div>
      {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-fit pb-[60px]">
        <div className="flex flex-col gap-y-12 w-full justify-center items-center">
          <div className="w-full h-[45vh] bg-center bg-mobileAbout bg-cover bg-no-repeat" />
          <div className="w-full h-1/4 flex justify-center items-center text-primary border-solid border-r-[2px] border-primary gap-x-2">
            <span className='text-[1.875rem] md:text-[2.75rem]  font-brandonLight text-shadow'>ABOUT</span>
            <span className='text-[1.875rem] md:text-[2.75rem]  font-brandonBld text-shadow'>US</span>
          </div>
          <div className="w-full h-1/2 flex flex-col bg-white justify-center px-[40px] gap-y-[20px]">
            <h2 className="font-sans text-primary text-[20px] leading-[38px] font-medium">
              延續建築的殼，針對不同的客戶，我們將客製
              並展現其各自的獨特性。
            </h2>
            <span className="font-sans text-[#3E3E3E] text-[1rem] leading-[2.25rem] font-normal">
              我們認為的獨特性：室內空間必須是一個好的生活容器，是自我的投射。而對於一個住宅內，所有空間相互之間的關係，應如同建築師路易斯‧康（Louis
              Kahn）所闡述的：住宅平面是數個房間所形成的社區 (A plan is a society of rooms)。<br/>
              在規劃時，我們不採用任何置入性的風格；極力地將室內空間打開，提高通透度；引入適合的自然光，並營造均質的光線；強調簡單的線條，以降低視覺上的雜亂度；運用表面材料質感及紋路的變化，提高視覺的豐富感。如此，物件與空間的形體能更加顯著，並呈現安靜、簡單及低承載的空間組合，使各個生活機能之間，能更緊密的連結。<br/>
              針對不同的室內設計，必須一開始就選擇與其風格相互搭配的傢俱及燈飾，同時須考慮其置放的位置，使他們如同藝術品般的被陳列出來，而成為空間的一部份。最後，必須有適度的裝飾，以提高住宅的親切感。
            </span>
            <Button containerStyles='font-brandonMed ml-auto border-[1px] border-primary bg-white text-[18px] px-5 py-2 text-primary hover:text-white hover:bg-primary' path="/about-us">learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
export default function Service() {
  return (
    <section className="relative overflow-hidden">
      {/* desktop layout */}
      <div className="hidden lg:flex w-full min-h-screen">
        <div className="flex flex-col">
          <div className="w-full h-3/4 flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col justify-center items-center bg-[#D1D1D1] border-r-[2px] border-primary">
              <span className='text-[30px] 3md:text-[2.5rem] xl:text-[62px] font-brandonLight'>SERVICE</span>
              <span className='text-[30px] 3md:text-[2.5rem] xl:text-[62px] font-brandonBld'>VALUE</span>
            </div>
            <div className="w-1/2 h-full flex flex-col bg-white justify-center px-[50px] 3xl:px-[90px] gap-y-[16px] 3xl:gap-y-[37px]">
              <h2 className="text-primary text-[24px] 3xl:text-[30px] tracking-[1.8px] leading-[48px] font-medium">
                朱慶煌<span className="text-primary text-[16px] 3xl:text-[24px] pl-2">主持設計師</span>
              </h2>
              <span className="text-[#3E3E3E] text-[14px] 3xl:text-[20px] leading-[30px] 3xl:leading-[40px]">
                我們認為室內設計的重點，在於思考「生活」或「工作」的意義，透過如此的自我探究，使我們回到設計的原點，因為，生活空間或工作空間，必須反應出人類的最根本慾望。藉由設計手法，呈現每一個居住者或使用者的夢想，而不是無意義的樣式的複製而已。<br/>
                對於我們的客戶來說，居住或工作空間，必須是健康、舒適且充滿活力的，散發居住者個性的，同時，必須達到合理預算的。所以，針對不同的需求，我們著重在創造出一個客製化的居住或工作環境，包括了適切且宜人的規劃，展現品味的風格設計，健康的材料選擇，環保與節能兼顧的品項採用，新穎與便利的設備推薦，以及，符合市場行情的建構費用。<br/>
                如此的專業執行，才是唯一重要的事，亦是消費者認同的服務價值。
              </span>
            </div>
            <div className="w-1/4 h-full bg-service bg-cover bg-no-repeat"></div>
          </div>
          <div className="w-full h-1/4 relative -mt-[0.4px] bg-[#D1D1D1]">
            <div className="absolute inset-0 bg-primary clip-path-polygon " />
            <div className="absolute inset-0 clip-small-polygon bg-[#929292] border-solid border-t-[2px] border-primary" />
          </div>
        </div>
      </div>
      {/* mobile layout */}
       <div className="lg:hidden flex flex-col w-full min-h-fit pb-20">
        <div className="flex flex-col gap-y-12 w-full justify-center items-center">
          <div className="w-full h-[45vh] bg-center bg-mobileService bg-cover bg-no-repeat" />
          <div className="w-full h-1/4 flex flex-col justify-center items-center text-primary border-solid border-r-[2px] border-primary gap-x-2">
            <span className='text-[30px] md:text-[3rem] font-brandonLight'>SERVICE</span>
            <span className='text-[30px] md:text-[3rem] font-brandonBld'>VALUE</span>
          </div>
          <div className="w-full h-1/2 flex flex-col bg-white justify-center px-[40px] gap-y-[24px]">
              <h2 className="text-primary text-[26px] tracking-[1.8px] leading-[48px] font-medium">
                朱慶煌<span className="text-primary text-[1.25rem] pl-2">主持設計師</span>
              </h2>
              <span className="text-[#3E3E3E] text-[1rem] leading-[40px]">
                我們認為室內設計的重點，在於思考「生活」或「工作」的意義，透過如此的自我探究，使我們回到設計的原點，因為，生活空間或工作空間，必須反應出人類的最根本慾望。藉由設計手法，呈現每一個居住者或使用者的夢想，而不是無意義的樣式的複製而已。<br/>
              </span>
              <span className="text-[#3E3E3E] text-[1rem] leading-[40px]">
                對於我們的客戶來說，居住或工作空間，必須是健康、舒適且充滿活力的，散發居住者個性的，同時，必須達到合理預算的。所以，針對不同的需求，我們著重在創造出一個客製化的居住或工作環境，包括了適切且宜人的規劃，展現品味的風格設計，健康的材料選擇，環保與節能兼顧的品項採用，新穎與便利的設備推薦，以及，符合市場行情的建構費用。<br/>
              </span>
              <span className="text-[#3E3E3E] text-[1rem] leading-[40px]">
                如此的專業執行，才是唯一重要的事，亦是消費者認同的服務價值。
              </span>
         </div>
         <div className="w-full h-[45vh] bg-[#ECECEC]" />
        </div>
      </div>
    </section>
  );
}

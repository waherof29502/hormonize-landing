import {MailIcon,PhoneIcon,TaxIcon,LocationIcon,ThanksIcon,MobileThanksIcon} from '@/public/svg/index'
import ContactForm from '@/src/components/contact-form';
import MobileContactForm from '@/src/components/mobile-contact-form';

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden">
     {/* desktop layout */}
      <div className="hidden 3md:flex w-full min-h-screen mt-[13vh]">
        <div className="flex flex-col w-full">
          <div className="w-full h-[120vh] flex justify-center items-center">
            <div className="w-1/4 h-full flex flex-col items-center bg-contact bg-cover bg-no-repeat border-r-[2px] border-[#A7A7A7] gap-x-2  xl:px-8 wide:px-[4rem]">
            <div className="flex justify-center gap-x-4 mt-[4rem] 3xl:mt-[8rem] scale-75 xl:scale-90 wide:scale-100">
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonLight text-shadow'>CONTACT</span>
            <span className='text-[1.875rem] md:text-[2.75rem] 3xl:text-[3.875rem] font-brandonBld text-shadow'>US</span>
            </div>
            <span className='md:text-[1.25rem] 3xl:text-[1.5rem] font-normal mt-[2rem] 3xl:mt-[4rem] scale-75 xl:scale-90 wide:scale-100'>了解如何用設計為你的生活開拓嶄新視野，歡迎與我們聯繫</span>
            <div className="flex flex-col gap-y-[1.5rem] my-[8rem] 3xl:my-[16rem] scale-75 xl:scale-90 wide:scale-100">
            <div className='flex items-center gap-x-[2rem]'>
                <PhoneIcon className='text-[1.25rem] 3xl:text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>+886 2-2739-3216</span>
            </div>
            <div className='flex items-center gap-x-[2rem]'>
                <TaxIcon className='text-[1.25rem] 3xl:text-[1.5rem] text-white'/>
                <span className='text-[1rem] 3xl:text-[1.25rem] font-[420] font-brandonMed'>+886 2-2739-3219</span>
            </div>
            <div className='flex items-center gap-x-[2rem]'>
                <MailIcon className='text-[1.25rem] 3xl:text-[1.5rem] text-white'/>
                <span className='text-[1rem] 3xl:text-[1.25rem] font-[420] font-brandonMed'>ching@harmonizedesign.com</span>
            </div>
             <div className='flex items-center gap-x-[2rem]'>
                <LocationIcon className='text-[1.25rem] 3xl:text-[1.5rem] text-white'/>
                <span className='text-[0.75rem] 3xl:text-[1rem] font-normal'>110 台北市信義區基隆路二段189號12樓</span>
            </div>
            </div>
            </div>
            <div className="w-3/4 h-[120vh] flex items-center justify-center">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
      {/* mobile layout */}
       <div className="3md:hidden flex flex-col w-full min-h-screen mt-[8vh]">
          <div className="w-full flex flex-col px-[2rem] h-[95vh] bg-contact bg-cover bg-no-repeat items-center" >
            <div className="flex justify-center gap-x-4 mt-[3rem]">
            <span className='text-[1.875rem] font-brandonLight text-shadow'>CONTACT</span>
            <span className='text-[1.875rem] font-brandonBld text-shadow'>US</span>
            </div>
            <span className='text-[1.25rem] font-normal mt-[3rem]'>了解如何用設計為你的生活開拓嶄新視野，歡迎與我們聯繫</span>
            <div className="flex flex-col gap-y-[1.5rem] mt-[6rem]">
            <div className='flex items-center gap-x-[2rem]'>
                <PhoneIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>+886 2-2739-3216</span>
            </div>
            <div className='flex items-center gap-x-[2rem]'>
                <TaxIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>+886 2-2739-3219</span>
            </div>
            <div className='flex items-center gap-x-[2rem]'>
                <MailIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-[420] font-brandonMed'>ching@harmonizedesign.com</span>
            </div>
             <div className='flex gap-x-[2rem]'>
                <LocationIcon className='text-[1.5rem] text-white'/>
                <span className='text-[1.25rem] font-normal'>110 台北市信義區基隆路二段189號12樓</span>
            </div>
            </div>
            </div>
            {/* form */}
            <div className="w-full flex flex-col mt-16 px-[2rem] min-h-screen" >
                <MobileContactForm/>
            </div>

      </div>
    </section>
  );
}

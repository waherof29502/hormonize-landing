export const metadata = {
  title: '寬堂設計 ｜首頁',
  description: '123'
};
import Hero from '@/src/components/layouts/home/hero';
import About from '@/src/components/layouts/home/about';
import Feature from '@/src/components/layouts/home/feature';
import Service from '@/src/components/layouts/home/service';


export default function Home() {
  return (
    <>
      <Hero/>
      {/* <About/>
      <Feature/>
      <Service/> */}
    </>
  );
}

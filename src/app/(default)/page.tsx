export const metadata = {
  title: '寬堂設計 | 首頁',
  description: '住宅空間 | 辦公空間 '
};
import Hero from '@/src/components/layouts/home/hero';
import About from '@/src/components/layouts/home/about';
import Feature from '@/src/components/layouts/home/feature';
import Service from '@/src/components/layouts/home/service';
import Project from '@/src/components/layouts/home/project';
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <Service />
      <Project />
    </>
  );
}

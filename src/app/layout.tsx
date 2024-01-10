import '../styles/style.css';
import { Noto_Sans_TC } from 'next/font/google';
import localFonts from 'next/font/local';
import { cn } from '@/src/lib/utils';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';
const brandonThin = localFonts({
  src: '../../public/fonts/Brandon_thin.otf',
  display: 'swap',
  variable: '--font-brandon-thin'
});
const brandonLight = localFonts({
  src: '../../public/fonts/Brandon_light.otf',
  display: 'swap',
  variable: '--font-brandon-light'
});
const brandonMed = localFonts({
  src: '../../public/fonts/Brandon_med.otf',
  display: 'swap',
  variable: '--font-brandon-med'
});
const brandonReg = localFonts({
  src: '../../public/fonts/Brandon_reg.otf',
  display: 'swap',
  variable: '--font-brandon-reg'
});
const brandonBld = localFonts({
  src: '../../public/fonts/Brandon_bld.otf',
  display: 'swap',
  variable: '--font-brandon-bld'
});

const sans = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans-TW">
      <body className={cn('antialiased bg-white text-white tracking-tight',sans.variable ,brandonMed.variable,brandonReg.variable,brandonBld.variable,brandonThin.variable,brandonLight.variable)}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}

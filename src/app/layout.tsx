import '../styles/style.css';
import { Syne} from 'next/font/google';
import { cn } from '@/src/lib/utils';


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans-TW">
      <body
        className={cn('font-serif antialiased bg-white text-white tracking-tight', syne.variable)}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}

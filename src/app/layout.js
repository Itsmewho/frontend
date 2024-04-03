/** @format */

import localfonttwo from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const sans = localfonttwo({
  src: '/font/Zwister.woff2',
  display: 'swap',
});

export const metadata = {
  title: 'Joanne',
  description: 'hello world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* --- No sreenReaders XD --- */}
      <body>
        <Header aria-hidden='true'></Header>
        <main className={sans.className}>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

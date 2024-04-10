/** @format */

import localfonttwo from 'next/font/local';
import './globals.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Cookie from '@/app/components/Cookie';
import clsx from 'clsx';

const sans = localfonttwo({
  src: '/font/Zwitser-Reg.woff2',
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
        <Header></Header>
        <main className={clsx('main', sans.className)}>{children}</main>
        <Cookie></Cookie>
        <Footer></Footer>
      </body>
    </html>
  );
}

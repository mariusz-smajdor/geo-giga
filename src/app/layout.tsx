import { ReactNode } from 'react';
import { type Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GeoGIGA',
  description: 'Geographic games',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}

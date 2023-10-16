import { ReactNode } from 'react';
import { type Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import '@/styles/globals.css';

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
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

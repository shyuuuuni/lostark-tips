import './global.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const notoSansKr = Noto_Sans_KR({ subsets: [] });

export const metadata: Metadata = {
  title: '상급 재련 시뮬레이터',
  description: '상급 재련 시뮬레이터',
  icons: {
    icon: 'favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

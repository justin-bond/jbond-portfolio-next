import { Inter, Raleway, Roboto_Mono, Share_Tech_Mono } from 'next/font/google';

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-raleway',
  display: 'swap'
});

export const share_tech_mono = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
  weight: ['400'],
  display: 'swap'
});

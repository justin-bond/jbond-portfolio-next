import { useEffect } from 'react';
import { AppProps } from 'next/app';
import classNames from 'classnames';
import gsap from 'gsap';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../scss/main.scss';

const nsBase = 'layout';
const ns = `${nsBase}-default`;

export default function MyApp({ Component, pageProps }: AppProps) {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  let layout = null as any;

  useEffect(() => {
    gsap.to(layout, { duration: 1, opacity: 1 });
  }, [layout]);

  return (
    <div
      className={rootClassnames}
      ref={(node) => {
        layout = node;
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

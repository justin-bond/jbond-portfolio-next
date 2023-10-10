import { useEffect, useRef } from 'react';
import { AppProps } from 'next/app';
import classNames from 'classnames';
import gsap from 'gsap';

import { raleway, share_tech_mono } from '@/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Transition from '@/components/Transition';

import GTMScript from '@/components/scripts/GTMScript/GTMScript';

import '@/scss/main.scss';

const nsBase = 'layout';
const ns = `${nsBase}-default`;

export default function MyApp({ Component, pageProps }: AppProps) {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  const layoutRef = useRef(null);

  useEffect(() => {
    gsap.to(layoutRef.current, { duration: 1, opacity: 1 });
  }, [layoutRef]);

  return (
    <div className={rootClassnames} ref={layoutRef}>
      <style jsx global>
        {`
          :root {
            --font-raleway: ${raleway.style.fontFamily};
            --font-share-tech-mono: ${share_tech_mono.style.fontFamily};
          }
        `}
      </style>
      <GTMScript />
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
      <div
        id={'overlay'}
        style={{
          position: 'fixed',
          zIndex: 9999,
          top: 0,
          left: 0,
          backgroundColor: '#191919',
          width: '100vw',
          height: '100vh',
          transform: 'translateX(-100%)'
        }}
      />
    </div>
  );
}

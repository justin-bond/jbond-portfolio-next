import React, { useEffect } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import { renderContentfulRichText } from '@/utils/renderContentfulRichText';

const nsBase = 'component';
const ns = `${nsBase}-home-intro`;

const HomeIntro = ({ title, bullets }: { title: string; bullets: any }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  let homeIntroText = null as any;

  useEffect(() => {
    gsap.from(homeIntroText, { duration: 1, opacity: 0, x: 100, delay: 0.5 });
    gsap.from(`.${ns}__bullet`, {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 1,
      stagger: 0.5
    });
  }, [homeIntroText]);

  return (
    <div className={rootClassnames}>
      <h1
        className={`${ns}__text`}
        ref={(node) => {
          homeIntroText = node;
        }}
      >
        {title}
      </h1>
      <div className={`${ns}__description`}>
        {renderContentfulRichText(bullets)}
      </div>
    </div>
  );
};

export default HomeIntro;

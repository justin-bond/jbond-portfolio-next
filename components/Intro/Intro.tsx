import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import { renderContentfulRichText } from '../../utils/renderContentfulRichText';

const nsBase = 'component';
const ns = `${nsBase}-home-intro`;

const HomeIntro = ({ title, bullets }: { title: string; bullets?: any }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const titleRef = useRef(null);

  useEffect(() => {
    const descriptionBullets = document.querySelectorAll(
      `.${ns}__description li`
    );

    gsap.from(titleRef?.current, {
      duration: 1,
      opacity: 0,
      x: 100,
      delay: 0.5
    });

    if (descriptionBullets.length > 0) {
      gsap.from(descriptionBullets, {
        duration: 1,
        opacity: 0,
        y: 100,
        delay: 1,
        stagger: 0.5
      });
    }
  }, []);

  return (
    <div className={rootClassnames}>
      <h1 className={`${ns}__text`} ref={titleRef}>
        {title}
      </h1>
      {bullets && (
        <div className={`${ns}__description`}>
          {renderContentfulRichText(bullets)}
        </div>
      )}
    </div>
  );
};

export default HomeIntro;

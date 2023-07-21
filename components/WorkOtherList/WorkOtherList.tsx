import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Waypoint } from 'react-waypoint';
import gsap from 'gsap';
import SmartLink from '../SmartLink';
import { WorkListProps } from '../WorkFeaturedList/WorkFeaturedList';

const nsBase = 'component';
const ns = `${nsBase}-home-other-work`;

const WorkList = ({ work }: WorkListProps) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });
  // console.log(work);

  const homeOtherWorkBullets = [] as HTMLElement[];
  const bullet = '//';
  const [staggered, setStaggered] = useState(false);

  const handleReveal = () => {
    if (!staggered) {
      gsap.from(homeOtherWorkBullets, {
        duration: 1,
        opacity: 0,
        x: 75,
        stagger: 0.2
      });
      setStaggered(true);
    }
  };

  const setScrollableAncestor = () => {
    if (typeof document !== `undefined`) {
      return window;
    }
    return null;
  };

  const renderFeaturedWork = ({
    title,
    handle
  }: {
    title: string;
    handle: string;
  }) => {
    return (
      <li
        key={title}
        ref={(node) => {
          if (node) homeOtherWorkBullets.push(node);
        }}
      >
        <SmartLink
          href={`/work/${handle}`}
          direction="right"
          className={'code-color-blue'}
        >
          {title}
        </SmartLink>
      </li>
    );
  };

  return (
    <Waypoint
      scrollableAncestor={setScrollableAncestor()}
      onEnter={handleReveal}
      bottomOffset={'100px'}
    >
      <div className={rootClassnames}>
        <div className={`${ns}__text`}>
          <span>{bullet}</span>
          {` Other Work`}
        </div>
        <ul className={`${ns}__items`}>
          {work.map((_work: any) => {
            return renderFeaturedWork(_work.fields);
          })}
        </ul>
      </div>
    </Waypoint>
  );
};

export default WorkList;

import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Waypoint } from 'react-waypoint';
import gsap from 'gsap';

interface WorkListProps {
  work: [];
}

const nsBase = 'component';
const ns = `${nsBase}-home-other-work`;

const WorkList = ({ work }: WorkListProps) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });
  // console.log(work);

  const homeOtherWorkBullets = [] as any[];
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
          homeOtherWorkBullets.push(node);
        }}
      >
        <Link href={`/work/${handle}`} className={'code-color-blue'}>
          {title}
        </Link>
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

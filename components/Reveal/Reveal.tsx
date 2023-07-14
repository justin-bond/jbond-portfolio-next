import React, { useState } from 'react';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

interface RevealProps {
  children: JSX.Element;
  bottomOffset?: string;
}

const nsBase = 'component';
const ns = `${nsBase}-reveal`;

const Reveal = ({ children, bottomOffset = '100px' }: RevealProps) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const [revealState, setRevealState] = useState(false);

  const handleReveal = () => {
    setRevealState(!revealState);
  };

  const setScrollableAncestor = () => {
    if (typeof document !== `undefined`) {
      return window;
    }
    return null;
  };

  return (
    <Waypoint
      scrollableAncestor={setScrollableAncestor()}
      onEnter={handleReveal}
      onLeave={handleReveal}
      bottomOffset={bottomOffset}
    >
      <div className={rootClassnames} data-reveal={revealState}>
        {children}
      </div>
    </Waypoint>
  );
};

export default Reveal;

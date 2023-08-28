import { useEffect } from 'react';
import classNames from 'classnames';

import Container from '@/components/Container';
import { spaceInvaders } from '@/lib/spaceInvaders';

const nsBase = 'page';
const ns = `${nsBase}-404`;

const Error404 = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true
  });

  useEffect(() => {
    if (window.innerWidth > 1024) {
      spaceInvaders();
    }
  }, []);

  return (
    <div className={rootClassnames}>
      <Container>
        <h1>404</h1>
        <div className={`${ns}__invaders`}>
          <h4
            dangerouslySetInnerHTML={{
              __html: `Space Invadors destroyed this page! Take revenge on them! <br /><br />Use <span class='label'>Space</span> to shoot and <span class='label'>←</span> <span class='label'>→</span> to move!`
            }} // eslint-disable-line
          />
          <canvas id={`space-invaders`} />
          <button id={`restart`}>Restart</button>
        </div>
      </Container>
    </div>
  );
};

export default Error404;

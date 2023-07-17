import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../Container';
import Nav from '../Nav';

const nsBase = 'component';
const ns = `${nsBase}-header`;

const Header = () => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  return (
    <header className={rootClassnames}>
      <Container>
        <Link href={'/'}>
          <Image
            src="/jb-logo.svg"
            className={`${ns}__logo`}
            alt={'logo'}
            width={80}
            height={80}
          />
        </Link>
      </Container>
      <Nav />
    </header>
  );
};

export default Header;

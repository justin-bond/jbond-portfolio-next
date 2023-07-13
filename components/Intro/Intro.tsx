import React, { useEffect } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

  const Bold = ({ children }: { children: string }) => (
    <span className="bold">{children}</span>
  );

  const Text = ({ children }: { children: string }) => children;

  const UL = ({ children }: { children: string }) => (
    <ul className={`${ns}__bullets`}>{children}</ul>
  );
  const ListItem = ({ children }: { children: string }) => (
    <li className={`${ns}__bullet`}>{children}</li>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => <UL>{children}</UL>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <ListItem>{children}</ListItem>
      )
    }
  };

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
      {documentToReactComponents(bullets, options)}
    </div>
  );
};

export default HomeIntro;

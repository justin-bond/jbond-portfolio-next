import classNames from 'classnames';
import Link from 'next/link';
import Reveal from '../Reveal';
import SmartLink from '../SmartLink';

interface WorkListProps {
  work: [];
}

const nsBase = 'component';
const ns = `${nsBase}-home-featured-work`;

const WorkList = ({ work }: WorkListProps) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const renderFeaturedWork = ({
    title,
    handle,
    mainImage,
    logo
  }: {
    title: string;
    handle: string;
    mainImage: any;
    logo: any;
  }) => {
    const sectionStyle = {
      opacity: 0,
      backgroundImage: `url(${mainImage?.fields.file.url}`
    };
    return (
      <Reveal key={handle}>
        <div className={`${ns}__item ${ns}__item-${handle}`}>
          <SmartLink href={`/work/${handle}`} direction="right">
            <>
              {' '}
              <div className={`${ns}__item--logo`}>
                <img src={logo?.fields.file.url} alt={title} />
              </div>
              <div className={`${ns}__item--hover`} style={sectionStyle}>
                <span>{title}</span>
              </div>
            </>
          </SmartLink>
        </div>
      </Reveal>
    );
  };

  return (
    <div id={'featured-work'} className={rootClassnames}>
      <h1 className={`${ns}__text`}>Featured Work</h1>
      <div className={`${ns}__items`}>
        {work.map((_work: any) => {
          return renderFeaturedWork(_work.fields);
        })}
      </div>
    </div>
  );
};

export default WorkList;

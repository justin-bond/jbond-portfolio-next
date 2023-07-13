import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

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
      backgroundImage: `url(${mainImage?.fields.file.url}`
    };
    return (
      <div className={`${ns}__item ${ns}__item-${handle}`} key={handle}>
        <Link href={`/work/${handle}`}>
          {' '}
          <div className={`${ns}__item--logo`}>
            <img src={logo?.fields.file.url} alt={title} />
          </div>
          <div className={`${ns}__item--hover`} style={sectionStyle}>
            {title}
          </div>
        </Link>
      </div>
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

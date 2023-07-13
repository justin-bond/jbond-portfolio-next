import classNames from 'classnames';

interface WorkListProps {
  work: [];
}

const nsBase = 'component';
const ns = `${nsBase}-home-featured-work`;

const WorkList = ({ work }: WorkListProps) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });
  // console.log(work);

  const renderFeaturedWork = ({
    title,
    mainImage
  }: {
    title: string;
    mainImage: any;
  }) => {
    return <div key={title}>{title}</div>;
  };

  return (
    <div id={'featured-work'} className={rootClassnames}>
      <h1 className={`${ns}__text`}>Other Work</h1>
      <div className={`${ns}__items`}>
        {work.map((_work: any) => {
          return renderFeaturedWork(_work.fields);
        })}
      </div>
    </div>
  );
};

export default WorkList;

import React, { useState } from 'react';
import classNames from 'classnames';
import parseVideo from '@/utils/parseVideo';

interface WorkHeroProps {
  slug: string;
  image: string;
  video?: string;
}

const nsBase = 'component';
const ns = `${nsBase}-work-hero`;

const WorkHero = ({ slug, image, video }: WorkHeroProps) => {
  const rootClassnames = classNames({
    [`${ns}`]: true
  });

  const [workHeroState, setWorkHeroState] = useState({
    videoVisible: false
  });

  const hideShowVideo = () => {
    setWorkHeroState((prevState) => {
      return { ...prevState, videoVisible: !workHeroState.videoVisible };
    });
  };

  const renderWorkHeroImage = () => {
    return <img src={image} alt={slug} />;
  };

  const renderWorkHeroVideo = (videoUrl: string) => {
    if (workHeroState.videoVisible) {
      return (
        <div className={`${ns}__video`}>
          <div className={`${ns}__video-container video-aspect`}>
            {parseVideo(videoUrl)}
            <button
              className={`${ns}__video-link close`}
              type={'button'}
              onClick={hideShowVideo}
            >
              Exit Video
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={`${ns}__video image`}>
        {renderWorkHeroImage()}
        <div className={`${ns}__video-container`}>
          <div className={`${ns}__video-content`}>
            <div className={`${ns}__video-title`}>Showcase Video</div>
            <button
              className={`${ns}__video-link open`}
              type={'button'}
              onClick={hideShowVideo}
            >
              Click to Play
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderWorkHero = () => {
    if (video) {
      return renderWorkHeroVideo(video);
    }

    return <div className={`${ns}__image`}>{renderWorkHeroImage()}</div>;
  };

  return <div className={rootClassnames}>{renderWorkHero()}</div>;
};

export default WorkHero;

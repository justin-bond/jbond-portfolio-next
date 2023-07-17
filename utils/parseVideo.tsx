import React from 'react';

const parseVideo = (url: string) => {
  const pattern =
    /^.*(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([^#&?]*).*/;
  const matches = url.match(pattern);
  if (!matches) return false;
  const videoId = matches[4]; // Video ID is in array[4]
  let iframeUrl;

  if (url.indexOf('youtu') !== -1) {
    iframeUrl = `//www.youtube.com/embed/${videoId}?showinfo=false&controls=0&wmode=transparent`;
  } else if (url.indexOf('vimeo') !== -1) {
    iframeUrl = `//player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
  } else {
    return false;
  }

  return (
    <iframe
      title={'video'}
      width={'640'}
      height={'390'}
      src={iframeUrl}
      frameBorder={'0'}
      allowFullScreen
    />
  );
};

export default parseVideo;

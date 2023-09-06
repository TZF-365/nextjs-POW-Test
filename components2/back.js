// components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <iframe
        src="https://www.youtube.com/embed/X-XZx1o_w-A?autoplay=1&loop=1&controls=0&mute=0&rel=0"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;

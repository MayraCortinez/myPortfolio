import React from 'react';

const VideoComponent = ({ url }) => {
  return (
    <div className="video-container">
      <iframe
        src={url}
        width="30%"
        height="340"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

export default VideoComponent;

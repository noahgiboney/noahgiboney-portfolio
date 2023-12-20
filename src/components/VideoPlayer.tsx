import React from 'react';
import PropTypes from 'prop-types';

interface VideoProps{
    src: string
}

const VideoPlayer: React.FC<VideoProps> = ({ src }) => {
  return (
    <video width="320" height="240" controls>
      <source src={src} type="video/mp4" />
      Unable to load the video
    </video>
  );
};

export default VideoPlayer;
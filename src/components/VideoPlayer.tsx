import React from 'react';
import PropTypes from 'prop-types';
import style from '@/styles/videoPlayer.module.css'

interface VideoProps{
    src: string
}

const VideoPlayer: React.FC<VideoProps> = ({ src }) => {
  return (
    <div className={style.videoContainer}>
      <video controls>
         <source src={src} type="video/mp4" />
         Unable to load the video
       </video>
    </div>
  );
};

export default VideoPlayer;
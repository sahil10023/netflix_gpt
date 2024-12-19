import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
  const traillerVideo = useSelector((store) => store.movies?.traillerVideo);
  useTrailerVideo(movieId);
  return (
    <div className='w-screen'><iframe
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${traillerVideo?.key}?&autoplay=1&mute=1`}
      title="YouTube video player">
    </iframe>
    </div>
  )
}


export default VideoBackground;
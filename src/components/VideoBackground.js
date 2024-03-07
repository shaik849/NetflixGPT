import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTailor from '../hooks/useMovietailor'


const VideoBackground = ( movieId ) => {

  useMovieTailor(movieId)

  const tailorVideo = useSelector(store => store?.movies?.tailorVideo)

 

  return (
    <div>
      <iframe className='w-full aspect-video'
        src={"https://www.youtube.com/embed/e1k1PC0TtmE?si="+tailorVideo+"?&autoplay=1&mute=1"}
        title="YouTube video player" frameBorder="0" allowAutoplay="true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

      </iframe>
    </div>
  )
}

export default VideoBackground
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold text-white '>{title}</h1>
        <p className='text-lg py-6 w-1/4 text-white'>{overview}</p>
        <div>
            <button className='bg-white text-black font-bold px-10 py-4  rounded-lg hover:opacity-80'>Play</button>
            <button className='bg-gray-500 text-white font-bold px-10 py-4 bg-opacity-50 rounded-lg mx-2'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle
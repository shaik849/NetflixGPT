import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[15%] px-10 md:px-24 absolute bg-gradient-to-r from-black w-full aspect-video'>
        <h1 className='text-2xl md:text-6xl font-bold text-white '>{title}</h1>
        <p className='hidden md:inline-block text-lg py-10 w-1/3 text-white'>{overview}</p>
        <div className='my-5 md:my-0'>
            <button className='bg-white text-black font-bold px-3 py-1 md:px-10 md:py-4  rounded-lg hover:opacity-80'>Play</button>
            <button className='bg-gray-500 text-white font-bold px-3 py-1 md:px-10 md:py-4 bg-opacity-50 rounded-lg mx-2'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle
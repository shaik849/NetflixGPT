import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearchComp = () => {
  return (
    <div className=''>
        <div className='fixed -z-10'>
        <img className='h-screen object-cover md:h-full'
          src={BG_URL}
          alt="Netflix" 
        />
        </div>
        <div className=''>
          <GptSearchBar />
        <GptMovieSuggestion />
        </div>
    </div>
  )
}

export default GptSearchComp
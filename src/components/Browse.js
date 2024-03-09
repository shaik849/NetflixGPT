import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
import { useSelector } from 'react-redux';
import GptSearchComp from './GptSearchComp';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  useTrendingMovies()


  return (
    <div>
      <Header />
      {showGptSearch ?
       <>
      <GptSearchComp />
      </>
      :  
      <>
       <MainContainer />
      <SecondaryContainer /> 
      </>
      }
    </div>
  )
}

export default Browse
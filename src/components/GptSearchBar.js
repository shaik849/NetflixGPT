import React, { useRef } from 'react'
import language from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openAi from '../utils/openAi'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language)
    const searchText = useRef(null);
    const dispatch = useDispatch();
   
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
    
        return json.results;
      };

    const handleGptSearchClick = async () =>{
     const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query "+searchText.current.value+ ". Only give me names of 5 movies, comma separated like the example result give a head. Example Result : Gadar, Sholey, Don, Golmal, Koi milgaya"
     //make an api call
     const gptResult = await openAi.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      if (!gptResult.choices) {
        return (<h1>Movies not found</h1>)
      }
      const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults }))
    } 
  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
        <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg '>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-lg' placeholder={language[languageKey].gptSearchPlaceholder}></input>
            <button className='py-2 px-4 bg-red-700 m-4 col-span-3 text-white rounded-lg'
            onClick={handleGptSearchClick}
            >{language[languageKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
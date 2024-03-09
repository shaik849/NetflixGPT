import React from 'react'
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language)
  return (
    <div className='p-[20%]'>
        <form className='bg-black grid grid-cols-12 rounded-lg '>
            <input type="text w-" className='p-4 m-4 col-span-10 rounded-lg' placeholder={language[languageKey].gptSearchPlaceholder}></input>
            <button className='py-2 px-4 bg-red-700 m-4 col-span-2 text-white rounded-lg'>{language[languageKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
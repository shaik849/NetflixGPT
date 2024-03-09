import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
   const movies = useSelector(store => store.movies.addNowPlayingMovies)

    const getNewPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
     const jsonData = await data.json()
    dispatch(addNowPlayingMovies(jsonData.results))
    }
  
    useEffect(() => {
     !movies && getNewPlayingMovies()
    }, [])
}

export default useNowPlayingMovies
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
 

    const getNewPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
     const jsonData = await data.json()
    dispatch(addNowPlayingMovies(jsonData.results))
    }
  
    useEffect(() => {
      getNewPlayingMovies()
    }, [])
}

export default useNowPlayingMovies
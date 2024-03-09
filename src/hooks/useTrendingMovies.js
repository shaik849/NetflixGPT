import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTrendingMovies = (movi) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS)
        const jsonData = await data.json()
       dispatch(addTrendingMovies(jsonData.results))
    }
  
    useEffect(() => {
      getMovieVideos()
    }, [])
}

export default useTrendingMovies
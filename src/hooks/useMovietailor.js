import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTailor = ({movieId}) =>{
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const json = await data.json()
      const filterData = json.results.filter(video => video.type === "Trailer")
      const tailer = filterData.length === 0 ? json.results[0] : filterData[0]
      dispatch(addTailerVideo(tailer?.key))
    }
  
    useEffect(() => {
      getMovieVideos()
    }, [])
}

export default useMovieTailor
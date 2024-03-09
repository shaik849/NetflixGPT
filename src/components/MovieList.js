import MovieCard from "./MovieCard";
import '.././App.css'

const MovieList = ({ title, movies }) => {
    return(
    <div className='p-6 px-12 scroll_bar'>
    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
    <div className='flex overflow-x-auto'>
      <div className='flex space-x-2'>
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
      </div>
    </div>
  </div>
);
};
export default MovieList;
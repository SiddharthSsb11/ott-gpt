import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-3 text-white font-semibold font-serif">
        {title}
      </h1>
      <div className="horizontallist no-scrollbar pb-4">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

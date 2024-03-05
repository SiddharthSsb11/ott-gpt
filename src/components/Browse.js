import { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  console.log("--broewsee");
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

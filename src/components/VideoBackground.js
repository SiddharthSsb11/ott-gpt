import { useSelector } from "react-redux";
import useMovieVideoById from "../hooks/useMovieVideoById";

const VideoBackground = ({ movieId }) => {
  useMovieVideoById(movieId);

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  if (!trailerVideo) return;
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

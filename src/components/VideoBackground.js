import { useSelector } from "react-redux";
import useMovieVideoById from "../hooks/useMovieVideoById";

const VideoBackground = ({ movieId }) => {
  useMovieVideoById(movieId);

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  return (
    <div>
      <iframe
        width="560"
        height="400"
        keysrc={"https://www.youtube.com/embed/vH-XSMFLGwk?" + trailerVideo.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

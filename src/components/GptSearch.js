import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import "./Login.css";

const GPTSearch = () => {
  return (
    <div className="back">
      <div className="self-start pt-36 w-full">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};
export default GPTSearch;

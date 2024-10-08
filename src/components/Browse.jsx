import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.GPT.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <div className="h-[85vh] w-full">
            <MainContainer />
          </div>
          <div>
            <SecondaryContainer />
          </div>
        </>
      )}

      {/*       
        MainContainer
            - VideoBackground
            - Video Title
        SecondaryConatiner
            - MovieList * n
            - cards * n    
       */}
    </div>
  );
};

export default Browse;

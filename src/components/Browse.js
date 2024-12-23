import { useSelector } from 'react-redux';
import useAiringTodayMovies from '../hooks/useAiringTodayMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';


const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useAiringTodayMovies();
  useUpcomingMovies();
  return (<>
    <Header />
    {showGptSearch ? (<GPTSearch />) : (
      <>
        <MainContainer />
        <SecondryContainer />
      </>
    )}
  </>
  )
}

export default Browse
import useAiringTodayMovies from '../hooks/useAiringTodayMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useAiringTodayMovies();
  useUpcomingMovies();
  return (<>
    <Header />
    <MainContainer />
    <SecondryContainer />
  </>
  )
}

export default Browse
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecooundryContainer from './SecooundryContainer';


const Browse = () => {
  useNowPlayingMovies();
  return (<>
    <Header/>
    <MainContainer/>
    <SecooundryContainer/>
  </>
  )
}

export default Browse
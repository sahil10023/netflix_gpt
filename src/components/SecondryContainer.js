import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies = useSelector(store => store.movies);
  return movies.nowPlayingMovies && (
    <div className=' bg-black text-white '>
      <div className='mt-0 md:-mt-80 relative z-10'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Airing Today"} movies={movies?.airingTodayMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondryContainer
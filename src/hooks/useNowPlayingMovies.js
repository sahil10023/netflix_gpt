import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
        // store data in state or Redux store for further use.
    }

    useEffect(() => {
        const data = nowPlayingMovies ? null : getNowPlayingMovies();
        // cleanup function to prevent memory leak
        return () => data;
    }, []);

}


export default useNowPlayingMovies;
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const getPopularMovies = async () => {
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        dispatch(addPopularMovies(data.results));
        // store data in state or Redux store for further use.
    }

    useEffect(() => {
        const data = popularMovies ? null : getPopularMovies();
        // cleanup function to prevent memory leak
        return () => data;
    }, []);

}


export default usePopularMovies;
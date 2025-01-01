import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice'


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const getTopRatedMovies = async () => {
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
        // store data in state or Redux store for further use.
    }

    useEffect(() => {
        const data = !topRatedMovies && getTopRatedMovies();
        // cleanup function to prevent memory leak
        return () => data;
    }, []);

}


export default useTopRatedMovies;
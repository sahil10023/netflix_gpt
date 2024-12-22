import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies, addTopRatedMovies } from '../utils/movieSlice'


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const getTopRatedMovies = async () => {
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
        // store data in state or Redux store for further use.
    }

    useEffect(() => {
        const data = getTopRatedMovies()
        // cleanup function to prevent memory leak
        return () => data;
    }, []);

}


export default useTopRatedMovies;
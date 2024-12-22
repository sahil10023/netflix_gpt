import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const getUpcomingMovies = async () => {
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        dispatch(addUpcomingMovies(data.results));
    }

    useEffect(() => {
        const data = getUpcomingMovies();
        return () => data;
    }, []);

}


export default useUpcomingMovies;
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {     addAiringTodayMovies } from '../utils/movieSlice'


const useAiringTodayMovies = () => {
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
    const getAiringTodayMovies = async () => {
        const response = await fetch(url, API_OPTIONS)
        const data = await response.json();
        dispatch(addAiringTodayMovies(data.results));
        console.log(data);
    }

    useEffect(() => {
        const data = getAiringTodayMovies();
        // cleanup function to prevent memory leak
        return () => data;
    }, []);

}


export default useAiringTodayMovies;
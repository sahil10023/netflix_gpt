import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
    const { gptMovieResult, gptMovieNames } = useSelector(store => store.gpt);
    return gptMovieResult && (
        <div className='p-4 mt-8 bg-black text-white bg-opacity-90'>
            {gptMovieNames?.map((movie, index) => <MovieList key={movie} title={movie} movies={gptMovieResult[index]} />)}
        </div>
    )
}

export default GPTMovieSuggestions
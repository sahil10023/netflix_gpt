import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    const scrollContainerRef = useRef(null);

    return (
        <div className='px-2 md:px-6'>
            <h1 className='text-lg md:text-3xl py-2 md:py-4'>{title}</h1>
            <div className='flex overflow-x-scroll overflow-hidden hide-scrollbar' onWheel={(event) => {
                event.stopPropagation(); // Stop event propagation to parent elements
            }} ref={scrollContainerRef}>
                <div className='flex'>
                    {movies?.map((movie) => movie.poster_path && <MovieCard key={movie.id} posterPath={movie.poster_path} />)}

                </div>
            </div>
        </div>
    )
}

export default MovieList
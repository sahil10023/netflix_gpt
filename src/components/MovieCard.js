import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    return (
        <div className='w-32 py-5 px-2'>
            <img alt={"moviecard"} src={IMG_CDN + posterPath}/>
        </div>
    )
}

export default MovieCard
import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video  pt-[20%] px-12 absolute  text-white bg-gradient-to-r from-black'>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold'>{title}</h1>
            <p className='py-4 text-sm sm:text-base lg:text-lg w-11/12 sm:w-1/2'>{overview}</p>
            <div className=''>
                <button className='bg-white text-black px-8 py-2 mr-2 sm:px-3 sm:py-1 rounded-md hover:bg-opacity-75 transition-all'> Play</button>
                <button className='bg-gray-500 text-white px-8 py-2 border-black rounded-md bg-opacity-50 hover:bg-opacity-35 '>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle
import React from 'react'

const VideoTitle = ({ title, overview }) => {
    const truncateText = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };
    return (
        <div className='w-full aspect-video pt-[12%] px-12 absolute  text-white bg-gradient-to-r from-black'>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:block py-4 text-sm sm:text-base lg:text-lg w-3/12 '>{truncateText(overview, 236)}</p>
            <div className='my-4 md:my-0'>
                <button className='bg-white text-black px-3 py-1 mr-2 sm:px-8 sm:py-2 rounded-md hover:bg-opacity-75 transition-all'> Play</button>
                <button className='bg-gray-500 text-white px-3 py-1 mr-2 sm:px-8 sm:py-2 border-black rounded-md bg-opacity-50 hover:bg-opacity-35 '>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle
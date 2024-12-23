import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const currentLanguage = useSelector(store => store.config.lang)
    return (
        <div className='pt-[10%] flex justify-center '>
            <form className=' bg-black w-1/3 grid grid-cols-12 rounded-md'>
                <input type='text' className='m-4 p-4 col-span-9' placeholder={lang[currentLanguage].gptSearchPlaceHolder} />
                <button type='submit' className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'>{lang[currentLanguage].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar
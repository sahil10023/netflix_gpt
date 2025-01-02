import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, COHERE_API_KEY } from '../utils/constants';
import { addGptMovieResult, setUserApiKey } from '../utils/gptSlice';

const GPTSearchBar = () => {
    const currentLanguage = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const [isHaveKey, setIsHaveKey] = useState(false);
    const userApiKey = useSelector((store) => store.gpt.userApiKey);
    const searctMovieTMDB = async (movie) => {
        const url = "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1";
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        return json.results;
    };
    const handelUseMyKey = () => {
        setIsHaveKey(!isHaveKey);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isHaveKey) {
            dispatch(setUserApiKey(searchText.current.value));
            searchText.current.value = null;
            setIsHaveKey(!isHaveKey);
            return;
        }
        const cohereApiKey = COHERE_API_KEY(userApiKey);
        const query = "Act as a Movie Recommendation System and Suggest Movie Result For Query " + searchText.current.value + ". only give me result of 5 movies only in comma separated format like the example result given ahead. Example Result : Gadar,Sholey,Don,Golmaal,Koi Mil Gya";

        try {
            const response = await fetch("https://api.cohere.ai/v1/generate", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${cohereApiKey}`, // Replace with Cohere's API key
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "command-xlarge-nightly", // Use Cohere's available models
                    prompt: query,
                    max_tokens: 50, // Adjust token count based on expected response length
                    temperature: 0.8, // Set creativity level
                }),
            });

            if (!response.ok) {
                console.error(`Error: ${response.status} ${response.statusText}`);
                const errorData = await response.json(); // Fetch the error message from the response
                console.error("Error details:", errorData);
                return;
            }

            const result = await response.json();
            const resultText = result.generations[0]?.text?.trim();
            const movieList = resultText ? resultText.split(",").map(movie => movie.trim()) : [];

            //for all five movies i will fetch data from TMDB api
            const promiseArray = movieList?.map((movie) => searctMovieTMDB(movie));

            const tmdbResult = await Promise.all(promiseArray);
            dispatch(addGptMovieResult({ movieNames: movieList, movieResults: tmdbResult }));

        } catch (error) {
            console.error("Error fetching from Cohere:", error);
        }
    };


    return (
        <div className='pt-[36%] md:pt-[10%] flex justify-center'>
            <form className='bg-black w-full md:w-[50%] grid grid-cols-12 rounded-md' onSubmit={handleSubmit}>
                <input
                    ref={searchText}
                    type='text'
                    className='m-4 p-4 col-span-7'
                    placeholder={isHaveKey ? "Enter Your Key Here" : lang[currentLanguage].gptSearchPlaceHolder}
                />
                <button
                    type='submit'
                    className='py-2 px-4  my-4  col-span-2 bg-red-700 text-white rounded-lg'
                >
                    {isHaveKey ? "Send Key" : lang[currentLanguage].search}
                </button>
                <button type='button' className='py-2 px-4 m-4  col-span-3 bg-red-700 text-white rounded-lg' onClick={handelUseMyKey}>Use {isHaveKey ? lang[currentLanguage].search : "My Key"}</button>
            </form>
        </div>
    );
};

// i have to add language constants for send, use, enter your key, my key

export default GPTSearchBar;
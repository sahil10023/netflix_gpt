import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { Netflix_BG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img
        src={Netflix_BG}
        alt="Netflix Background"
        className="h-full w-full object-cover -z-10 absolute"
      />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch
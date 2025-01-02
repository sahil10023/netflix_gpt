export const AVATAR_URL = "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";

export const Netflix_LOGO = "./netflixGPT-removebg.png";

export const Netflix_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_large.jpg"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
  }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const COHERE_API_KEY = (userApiKey) =>
  userApiKey ? userApiKey : process.env.REACT_APP_COHERE_API_KEY;


export const SUPPORTED_LANGUAGES = [
  { identifier: "eng", name: "English" },
  { identifier: "hin", name: "Hindi" },
  { identifier: "spa", name: "Spanish" },
  { identifier: "ger", name: "German" },
  { identifier: "fra", name: "French" },
  { identifier: "jap", name: "Japanese" },
  { identifier: "max", name: "Maxicon" }
];
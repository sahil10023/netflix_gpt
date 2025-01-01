import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTraillerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const traillerVideo = useSelector(store => store.movies.traillerVideo)
    const getMovieTrailler = async (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
        dispatch(addTraillerVideo(trailer));
    }

    useEffect(() => {
        !traillerVideo && getMovieTrailler(movieId);
    }, []);
}

export default useTrailerVideo;
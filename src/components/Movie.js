import React from "react"
import { useParams } from "react-router-dom";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import Grid from './Grid'
import Spin from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";

//Hook
import useMovieFetch from "../Hooks/useMovieFetch";
//Image
import NoImage from '../images/no_image.jpg'



const Movie = () => {
    const {movieId} = useParams();

    const {state: movie, loading, error} = useMovieFetch(movieId)
    console.log(movie)
    
    if(loading) return <Spin/>
    if(error) return <div>Something isn't right...</div>

    return (

        
        <>
        <BreadCrumb movieTitle={movie.original_title}/>
        <MovieInfo movie = {movie}></MovieInfo>
        </>
    );
}
 
export default Movie;
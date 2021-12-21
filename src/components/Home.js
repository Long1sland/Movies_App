import React, { useState, useEffect} from "react";


//Config
import API from "../API"

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid/index"
import Thumb from "./Thubnails";
import Spin from "./Spinner";
import SearchBar from "./SearchBar";

//Hook
import useHomeFetch from "../Hooks/useHomeFetch";

//Image
import noImage from "../images/no_image.jpg"


const Home = () => {

    const {state, loading, error, searchTerm, setSearchTerm} = useHomeFetch()

    return (

        <>
        {state.results[0] && !searchTerm ? 
        <HeroImage

        image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title = {state.results[0].original_title}
        text = {state.results[0].overview}
        /> : null}

        <SearchBar setSearchTerm = {setSearchTerm}/>
        <Grid header = {searchTerm? "Results" : "Popular Movies"}>
            {state.results.map( movie => {

             return <Thumb
                key = {movie.id}
                clickable
                image = {
                    movie.poster_path? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImage
                }
                movieId = {movie.id}
                />}
                
            
                
            )}
        </Grid>
        <Spin/>
        {error? alert("Somethings not right. Try checking your internet connection and try again.") : null}
        </>
    );
}
 
export default Home;
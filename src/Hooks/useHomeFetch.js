import { useState, useEffect, useCallback } from "react";
import _ from 'lodash';
import { chunk } from "lodash";

import API from "../API";

import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}


const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [loadMore, setLoadMore] =useState(false)
    const [page, setPage] = useState(1)


    const fetchMovies = async (page, searchTerm) => {

        try{

            setLoading(true)
            setError(false)
            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies, 
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

            console.log(movies)

            
        }

        catch (error) {

            
            setError(true)

        }
        
        setLoading(false)
    }

// to delay 
    const debounce = useCallback(
        _.debounce(() => setPage(page + 1), 500,)
        
    )


    window.onscroll = () => {

        if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
            
               debounce();
            
        }
        
    }

      
    
    useEffect(() => {

        if(!searchTerm) {
            const sessionStorage = isPersistedState("homeState")

            if(sessionStorage){

                if(sessionStorage.page < page){
                    
                    console.log("Grabbing from API")
                    fetchMovies( page, searchTerm)
                    return;

                }

                else{
                    
                    console.log("Grabbing from sessionStroage")
                    setState(sessionStorage)
                    return;
                }
            }

            else {
                console.log("grabbing from API")
                fetchMovies(page, searchTerm)
                return;
            }
        }

        fetchMovies(page, searchTerm)
        return;

        
    
        
        
    }, [searchTerm, page]) 
    
    useEffect(() => {
        if(!searchTerm){
            sessionStorage.setItem("homeState", JSON.stringify(state))
        }
    }, [state, searchTerm])

    
console.log(state)
    return { state, loading, error, searchTerm, setSearchTerm, setLoadMore };
}
 
export default useHomeFetch;
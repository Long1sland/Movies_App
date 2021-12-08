import { useState, useEffect, useRef } from "react";

import API from "../API"

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


    const fetchMovies = async (page, searchTerm) => {

        try{

            setLoading(true)
            setError(false)
            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies, 
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

            
        }

        catch (error) {

            
            setError(true)

        }
        
        setLoading(false)
    }

setInterval(() => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        setLoadMore(true)
    }
}, 1000)

    useEffect(() => {
        if(!loadMore){return}

        fetchMovies(state.page + 1)
        
        setLoadMore(false)
    }, [loadMore])
    
    useEffect(() => {

        fetchMovies( 1, searchTerm)
        
        
    }, [searchTerm])

console.log(state)
    return { state, loading, error, searchTerm, setSearchTerm };
}
 
export default useHomeFetch;
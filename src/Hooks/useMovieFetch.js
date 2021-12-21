import { useState, useEffect } from "react";
import API from '../API'


const useMovieFetch = (movieId) => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {

        try{
            setLoading(true)
            setError(false)
           
            const fetchMovie = async () => {
                 
                const movie = await API.fetchMovie(movieId)
                const credits = await API.fetchCredits(movieId)
                // Get directors
                const directors = credits.crew.filter(
                    member => member.job == 'Director'
                )

                setState({
                    ...movie, actors: credits.cast, directors: directors
                })
                setLoading(false)

               
            }
            fetchMovie();
        }

        catch{
            setError(true);
        }

    }, [movieId])
    return {state, loading, error}
}
 
export default useMovieFetch;
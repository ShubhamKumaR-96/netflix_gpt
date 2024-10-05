import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies=async()=>{
    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
       const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
       const json=await data.json();
       dispatch(addUpcomingMovies(json.results));
    } 
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;
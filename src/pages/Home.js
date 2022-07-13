import { useEffect, useState } from "react";
import axios  from "axios";
import MovieCard from "../components/moviecard";
import { useDispatch,useSelector} from "react-redux";
import { MovieTh } from "../store/action/MovieT";
function Home(){
    const thunkMovies = useSelector((state)=>state.MovieReducer.list);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(MovieTh())
        
    }, [])
    return(
    <div className="container-fluid  row row-col-1 row-cols-md-3 g-4 bg-dark">
       
            {
                thunkMovies.map((movie) =>{
                return <div className="col-md-3 mb-5" key={movie.id}>
                        <MovieCard Movie={movie} />
                    </div>
                    
                })
            }
        
    </div>
    )
}

export default Home;


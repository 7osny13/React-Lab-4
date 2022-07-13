import {Link} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios  from "axios";
import "../components/MovieCard.css";
import { ChangeCounter} from "../store/action/action";
import { useDispatch, useSelector } from "react-redux"
import { moviecontext } from "../context/moviecontext";
function NewRelase(){
    const count =useSelector((state) => state.favoritereducer.count)
    const arr= useSelector((state) => state.favoritereducer.arr)  
    const [Movies, setMovies] = useState([])
    var mymovies = []
    const {moviesContext,setmoviesContext}=useContext(moviecontext)
    useEffect( () => {
        axios.get("https://api.themoviedb.org/3/movie/popular?", {
            params: {
                api_key: "aa6fc65fcedb7431af3ac2fbe6484cd0",
            },
        })
        .then((res) => {
            setMovies(res.data.results)
        })
        .catch((err) => console.log(err))
    }, [])
    for (var i of arr){
            for (var movie of Movies ){
                if (movie.id === i){
                    mymovies.push(movie)
                }
            }
    }
    const dispatch=useDispatch()
    const handleFav=(e,id)=>{    
            dispatch(ChangeCounter(count-1,arr.splice(arr.indexOf(id),1)))
            for (var movie of mymovies){
                if (movie.id === id){
                    mymovies.splice(mymovies.indexOf(movie),1)
                }
            }
    }
    return(
        <>
        <h1>{moviesContext}</h1>
        <div className="bg-black container-fluid p-5">
            <div className="row">
                { mymovies.map((movie) =>{
                    return (
                        <div className="container-fluid  row row-col-1 row-cols-md-3 g-4 bg-dark" style={{width:"18rem"}}>
                            <div className="card-header">
                                <span onClick={(e) => handleFav(e,movie.id)} style={{color:`gold`}}>
                                <span><i className="fa-solid fa-star me-2 " ></i>
                                Remove from favorite </span>
                                </span>
                            </div>
                            <Link to={`/Movies_details/${movie.id}`} >
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top"/>
                            </Link>
                            <div className="card-body">
                                <center>
                                    <h5 className="card-title">{movie.title}</h5>
                                    {/* <p className="card-text"> {movie.vote_average}</p> */}
                                </center>
                            </div>
                        </div>
                    )
                })}
            </div> 
    </div>
        </>
    )
    }

export default NewRelase;
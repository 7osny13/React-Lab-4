import {Link} from "react-router-dom";
import "./MovieCard.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ChangeCounter} from "../store/action/action";


function MovieCard({Movie: {id, poster_path, title, vote_average}}){
    const count =useSelector((state) => state.favoritereducer.count)
    const arr= useSelector((state) => state.favoritereducer.arr)
    const dispatch=useDispatch()
    const [showStar1, setshowStar1] =useState(true)
    const [showStar2, setshowStar2] =useState(false)
    const handleFav=(e)=>{ 
        if (arr.includes(id) === true){
            dispatch(ChangeCounter(count-1,arr.splice(arr.indexOf(id),1)))
            setshowStar1(true)
            setshowStar2(false)
            return true
        }
        else{
            if (arr.includes(id) === false){
                dispatch(ChangeCounter(count+1,arr.push(id)))
                setshowStar1(false)
                setshowStar2(true)
            }
            else{
                dispatch(ChangeCounter(count-1,arr.splice(arr.indexOf(id),1)))
                setshowStar1(true)
                setshowStar2(false)
            }
        }
    }
    return(<>
        <div className="card  bg-dark w-25 " style={{width:"18rem"}} >

            {/* <div className="card-header"> */}
                <span onClick={(e) => handleFav(e,{id})} style={{color:"white"}}>
                { showStar1 && (arr.includes(id) === false) ? <span><i className="fa-solid fa-star me-2 "></i>
                ADD to favorite</span>: <span  style={{color:`gold`}}>
                { (arr.includes(id) === true) && showStar1 ? <span><i className="fa-solid fa-star me-2 " ></i>
                Remove from favorite </span> : null}
                </span> }
                </span>
                <span onClick={(e) => handleFav(e)} style={{color:`gold`}}>
                { showStar2  ? <span><i className="fa-solid fa-star me-2 " ></i>
                Remove from favorite </span> : null}
                </span>
            {/* </div> */}
            <Link to={`/Movies_details/${id}`} >
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top"/>
            </Link>
            <div className="card-body">
                <center>
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text"> {vote_average}</p> */}
                </center>
            </div>
        </div>
    </>
    )
}

export default MovieCard; 
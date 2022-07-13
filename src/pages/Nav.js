import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import { moviecontext } from "../context/moviecontext";
import { useContext, useEffect, useState } from "react";
function Nav(){
    const count=useSelector((state) => state.favoritereducer.count)
    const {moviesContext,setmoviesContext}=useContext(moviecontext)
    return(<>
        <nav className="navbar navbar-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/NewRelase">Favorites</Link>
                    </li>
                   

                    <li className="nav-item">
                    <i className="fa-solid fa-star mx-3 fs-4" style={{color:"gold"}}>{count}</i>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>
        
    </>
        )
    }

export default Nav;
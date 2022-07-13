import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movies_details(){
    const Movieparams = useParams()
    console.log(Movieparams.id);
    const [details, setDetails] = useState({});
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Movieparams.id}`, {
            params: {
                api_key: "aa6fc65fcedb7431af3ac2fbe6484cd0",
            },
        })
        .then((res)=> setDetails(res.data))
        .catch((err)=> console.log(err))

    }, [])
    return(<>
        <section className="Movie_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about_Image">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                            className="img-fluid"
                        />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-3">
                        <h1> Name : {details.title}</h1>
                        <h3>Rating : {details.vote_average}</h3>
                        <p>
                        overview : {details.overview}
                        </p>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Aliquam, odit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
        )
    }

export default Movies_details;
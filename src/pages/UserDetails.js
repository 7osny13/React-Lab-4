import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails(){

    const userparams = useParams()
    console.log(userparams.id);

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${userparams.id}`)
        .then((res)=> setDetails(res.data))
        .catch((err)=> console.log(err))

    }, [])




    return (
        <>
        <h1> User Details </h1>
        <h3>  {details.username}  </h3>
        </>

    )
}

export default UserDetails;
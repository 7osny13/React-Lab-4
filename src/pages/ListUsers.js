import axios  from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
function ListUsers(){
    // https://fakestoreapi.com/users
    // didmount --> useEffect --> Life Cycle Method --> function
    const [users, setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect( () => {
        axios.get("https://fakestoreapi.com/users")
        .then(
            (res)=> {
            setUsers(res.data);
            setIsLoading(false)
        })
        .catch((err)=> console.log(err))
    }, [])

    return(
        <>
            <h1> Users List </h1>
            <div className="container row my-5" >
                {isLoading? (<Loader/>) :   
                    (
                        <div className="row">
                            {
                                users.map((user)=> (
                                    <div className="col-md-4" key={user.id}>
                                         <UserCard user={user} />
                                    </div>
                                ))

                            }  

                        </div>
                    )
                    
                
                }


{/* users.map((user) => {
                        // return <li> {user.name.firstname} </li>
                        return <div className="col-md-4" key={user.id}> 
                                    <UserCard user={user} />
                                </div> 
                    )
                    }) */}
          
             
           
            </div>
        </>
    )
}

export default ListUsers;
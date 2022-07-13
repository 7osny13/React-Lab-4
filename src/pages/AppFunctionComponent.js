
import {useState, useEffect} from "react";
import UserData from "../components/UserData";
import { useParams } from "react-router-dom";
import ChangeLanguage from "../components/ChangeLang";


function AppFunctionComponent(props){
// get set 
        console.log("AppFunctionComponent",props);
        const param = useParams();
        console.log(param.id)

        const [email, setEmail] = useState("test@gmail.com");

        const [userData, setUserData] = 
        useState({
                name: "ahmed",
                age: 14,
                position: "developer",
                isAdmin: false
            })
          
        const changeUserData = (myName) => {
            setUserData({
                ...userData,
                name: myName 
                // position == null age == null
            })
            
        }

        // component did mount
        useEffect(() => {
            console.log("hello UseEffect did mount")
        }, [])

        // component did update 
        useEffect(() => {
            console.log("hello UseEffect did update UserData ")
        }, [userData])

        const changeEmail = (email) => {
            setEmail(email)
        }

        useEffect(() => {
            console.log("email changed")
        }, [email, userData])

        // Component Will unmount
        useEffect(() => {
            return () => {
                console.log("Will Unmount")
            }
        }, [])


    
        return(<>

                <ChangeLanguage />
            
                <h1> Hello Function</h1>

                Email: <i> {email} </i>

                <h1 className="text-danger"> {userData.name} </h1>

                <h1 className="text-info"> {userData.position} </h1>

                <h1 className="text-dark"> {userData.age} </h1>


                <button className="btn btn-warning" onClick={()=>changeUserData("test name")}>  
                    Change Data 
                </button> 


{/*  condition ? "" : ""  ternary Operator*/ }
            {userData.isAdmin?  (<button className="btn btn-info" onClick={()=>changeEmail("Hello@react.com")}>  
                                        Change Email
                                    </button> ) : 
                                    (<h1 className="text-danger">Permission Denied</h1>)
            }


            {/* conditinal rendreing -->  && */}

            {userData.isAdmin && (<button className="btn btn-info" onClick={()=>changeEmail("Hello@react.com")}>  
                                        Change Email
                                    </button> ) }
           







                

               



            </>
    )
}


export default AppFunctionComponent;
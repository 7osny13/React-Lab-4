import { useState } from "react";
import {useHistory, useLocation} from "react-router-dom";

function AddUser(props){
        console.log("addUser", props)

        const history = useHistory();

        console.log("history hooks", history)

        const location = useLocation();

        console.log("location hooks", location)



        const [userData, setUserData] = useState({
            name: "",
            position: "",
            type: ""
        })


        const [errors, setErrors] = useState({
            nameErr: "",
            positionErr: ""
        })


        const changeData =(e) => {
                console.log(e.target.value)
            if(e.target.name === "username"){
                setUserData({
                    ...userData,
                    name: e.target.value
                })
                setErrors({
                    ...errors,
                    nameErr: 
                    e.target.value.length === 0 ? 
                    "this field is required" : 
                    e.target.value.length < 3 ? 
                    "Min Length is 3 charchaters"
                    : null
                })

            }else{
                setUserData({
                    ...userData,
                    position: e.target.value
                })
                setErrors({
                    ...errors,
                    positionErr: 
                    e.target.value.length === 0 &&
                    "this field is required" 
                })
            }

        }

     const  submitData = (e) => {
             e.preventDefault();
            //  history.push("/class"); 
            props.history.push("/class") // class components

     }




    return(
        <>
            <h1> Add User Form</h1>
                <form onSubmit={(e)=> submitData(e)}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" 
                        className=
                        {`form-control ${errors.nameErr? "border-danger": ""}`}  

                        name="username"
                        value={userData.name}
                        placeholder="please enter your name"
                        onChange={(e)=> changeData(e)}/>

                    <input type="email" 
                        className="form-control"
                        />

                        <p className="text-danger">  {errors.nameErr}  </p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Position</label>
                        <input type="text" value={userData.position} className="form-control" 
                        name="position"
                        onChange={(e)=> changeData(e)}/>
                        <p className="text-danger">  {errors.positionErr}  </p>

                    </div>
            
                    <button type="submit" 
                    disabled = {errors.positionErr || errors.nameErr }
                    className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddUser;
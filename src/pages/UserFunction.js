function UserFunction (props){
    console.log("from function component", props)

    return (
        <h1> I am function Component:  {props.funTestName} {props.funTestAge} </h1>
    )

}

export default UserFunction;
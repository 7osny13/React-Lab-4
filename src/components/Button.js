
import React  from "react";
// import "./button.css";
class Button extends React.Component {

    constructor(props){
        super();
    }


    render(){
        return <button className="btn btn-info my-5 p-10">{this.props.btnTitle}</button> 
    }
}

export default Button;
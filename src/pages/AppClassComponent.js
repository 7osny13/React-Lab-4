import React from "react";
import UserData from "../components/UserData";
// import Button from "./Button";
import UserFunction from "./UserFunction";
import 'bootstrap/dist/css/bootstrap.min.css';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";

import {changeLang} from "../store/actions/lang";

class AppClassComponent extends React.Component {

    constructor(){
        console.log("I am Constructor")
        super()
        this.state = {
            name: "ali",
            age: 10,
            position: "frontEnd Developer"
        }
    }
    componentDidMount(){
        console.log("I am did mount")
    }

    componentDidUpdate(){
        // change doc 
        console.log("I am Update")
    }

    componentWillUnmount(){
        // move link to other 
    }

    chnageData = () => {
            // this.state.name = "ahmed"
            this.setState({
                name: "Ahmed",
                age: 80
            })
    }


    render(){
        console.log("I am Render")
        console.log(this.props, "Props From CLASS")
        return <>
                <h1>{this.props.lang}</h1>

                <div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>

                <Alert  variant={"danger"}>
                    This is a  alert—check it out!
                </Alert>

                <Button variant="primary">Primary</Button>

                <p>  User Details </p>
                {/* <Button btnTitle="Login" />
                <Button btnTitle="SignUp" />
                <Button btnTitle="Hello" /> */}


                <UserData  testname= {this.state.name} testage={this.state.age}/>


                Function:
                <UserFunction funTestName={this.state.name} 
                funTestAge={this.state.age} />

                <button className="btn btn-danger" onClick={()=>this.chnageData()}> Change Name  </button> 


                <button className="btn btn-danger" onClick={()=>this.props.changeLang(this.props.lang ==="ar" ? "en" : "ar")}> Change Lang from CLASS  </button> 



                </>
    }

}

const mapStateToProps = (state) => {
    console.log(state, "State From CLASS")
    return {
        lang: state.langCompine.lang
    }
}



export default connect(mapStateToProps, 
    {changeLang})(AppClassComponent);
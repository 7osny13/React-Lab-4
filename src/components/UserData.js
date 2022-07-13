import React from "react";
import Button from "./Button";

class UserData extends React.Component {

    constructor(props){
        super()
        // console.log(props)
    }

    render(){
        return <> 
                   Name:  <p style={{color:'red', backgroundColor: 'green'}}>
                        {this.props.testname}
                    </p>

                    Age:  <p style={{color:'red', backgroundColor: 'green'}}>
                        {this.props.testage}
                    </p>

                    <Button btnTitle="Hello From User Data" />
              </>
    }

}

export default UserData; 
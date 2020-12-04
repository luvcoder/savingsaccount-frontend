import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         super(props);

    //         this.state = { Fullname : "Luv Agarwal",
    //                        Email: "Enter your email ID",
    //                        phone: "9876543210", 
    //                        message: "Hi"
    //     }

    //     }
    // }

    render(){
        return(
            <div>
                <form>
                    <label> Fullname </label><br/>
                    <input type = "text" value={this.state.Fullname} /><br/>

                    <label> Email </label><br/>
                    <input type = "email" value= {this.state.Email} /><br/>

                    <label> Mobile </label><br/>
                    <input type = "number" value= {this.state.phone} /><br/>

                    <label> Message </label><br/>
                    <textarea value={this.state.message} /><br/>

                    <input type= "submit" value="Send" />


                </form>
            </div>
        )
    }
}
export default Form;
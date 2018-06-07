import React from 'react';
import { Button,FormControl } from 'react-bootstrap';


class Form extends React.Component{
    render(){
        return(

            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City ..."/>
                <input type="text" name="country" placeholder="Country ..."/>
                <button> Get Weather ...</button>

            </form>
        );
    }
};


export default Form;
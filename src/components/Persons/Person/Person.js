import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render(){
        console.log("Rendering Person.js");
        return <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange = {this.props.changed} value={this.props.name}/>
    </div>
    }
}


/*const person = (props) => {
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}/>
        </div>
    );
};*/

export default Person;
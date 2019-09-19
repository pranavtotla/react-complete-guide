import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
    const assignedClasses = [];
    let buttonClass = '';
    if(props.showPersons){
        buttonClass = classes.Red;
    }
    
    if(props.persons.length < 3){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length < 2){
        assignedClasses.push(classes.bold);
    }
    return (
        <div className = {classes.Cockpit}>
        <h1>Hi, I'm a react app.</h1>
        <p className={assignedClasses.join(' ')}>This works too!</p>
        <button className={buttonClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
        );
};
    
    
    export default cockpit;
import React from 'react';

const person = () => {
    return(
        <p>I'm a person. I'm {Math.floor(Math.random() * 30)} years old.</p>
    );
};

export default person;
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>This works too!</p>
        <Person name="Pranav" age="23" />
        <Person name="Abc" age="24">Hobbies: cooking</Person>
        <Person name="Xyz" age="25"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

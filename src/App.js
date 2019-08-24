import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abc', age: 23},
      { name: 'Lmn', age: 24},
      { name: 'Zyx', age: 25}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23},
        { name: 'Lmn', age: 24},
        { name: 'Zyx', age: 26}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>This works too!</p>
        <button onClick={() => this.switchNameHandler('withoutBind')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'withBind')}>Hobbies: cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;

/*
const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Abc', age: 23},
      { name: 'Lmn', age: 24},
      { name: 'Zyx', age: 25}
    ]
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'AbcIjk', age: 23},
        { name: 'Lmn', age: 24},
        { name: 'Zyx', age: 26}
      ]
    })
  };

 
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>This works too!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>Hobbies: cooking</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    
}
*/
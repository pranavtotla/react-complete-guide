  import React, { Component } from 'react';
  import './App.css';
  import Person from './Person/Person';

  class App extends Component {
    state = {
      persons: [
        { name: 'Abc', age: 23},
        { name: 'Lmn', age: 24},
        { name: 'Zyx', age: 25}
      ],
      showPersons: false
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

    nameChangeHandler = (event) => {
      this.setState({
        persons: [
          { name: 'Abc', age: 23},
          { name: event.target.value, age: 24},
          { name: 'Zyx', age: 26}
        ]
      })
    }

    togglePersonHandler = () => {
      console.log('Inside')
      const toShow = this.state.showPersons;
      console.log('to show',toShow)
      this.setState({showPersons: !toShow});
    }


    render() {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }


      return (
        <div className="App">
          <h1>Hi, I'm a react app.</h1>
          <p>This works too!</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {this.state.showPersons?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'withBind')} changed={this.nameChangeHandler}>Hobbies: cooking</Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div> : null
          }
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
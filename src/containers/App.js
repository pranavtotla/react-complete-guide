  import React, { Component } from 'react';
  import classes from './App.css';
  import Persons from '../components/Persons/Persons';
  import Cockpit from '../components/Cockpit/Cockpit';
  
  class App extends Component {
    state = {
      persons: [
        { id: '123', name: 'Abc', age: 23},
        { id: '321', name: 'Lmn', age: 24},
        { id: '213', name: 'Zyx', age: 25}
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
    
    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(person => {
        return person.id === id;
      });
      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      
      this.setState({
        persons: persons
      })
    }
    
    togglePersonHandler = () => {
      const toShow = this.state.showPersons;
      this.setState({showPersons: !toShow});
    }
    
    deletePersonHandler = index => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState({persons: persons});
    }
    
    
    render() {
      let persons = null;
      
      if(this.state.showPersons){
        persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} /> 
      }
      
      
      return (
        <div className={classes.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}
        />
        {persons}
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
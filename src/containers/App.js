import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'one', name: "Sergio", age: 35 },
      { id: 'two', name: "Marise", age: 26 }
    ],
    showPersons: false
  }



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.userId === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})

  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
    }




    return (
        <div className={classes.App}>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            togglePersons={ this.togglePersonsHandler}
          />
          { persons }
        </div>
    );
  }
}

export default App;

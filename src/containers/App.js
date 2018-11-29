import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  state = {
    persons: [
      { id: 'one', name: "Sergio", age: 35 },
      { id: 'two', name: "Marise", age: 26 }
    ],
    showPersons: false,
    toggleCounter: 0
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
    this.setState( (prevState, props) =>  { 
      return {
        showPersons: !doesShow,
        toggleCounter: prevState.toggleCounter + 1
      }
    });
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
        <Aux>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            togglePersons={ this.togglePersonsHandler}
          />
          { persons }
        </Aux>
    );
  }
}

export default withClass(App, classes.App);

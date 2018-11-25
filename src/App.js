import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'one', name: "Sergio", age: 35 },
      { id: 'two', name: "Marise", age: 26 }
    ],
    showPersons: false
  }



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = ( 
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            change={(event) => this.nameChangeHandler(event, person.id)}
            name={person.name}
            age={person.age} 
            key={person.id}
            />
          })}
        </div>
      )
      style.backgroundColor = 'red';
    }

    let assignedClasses = [];
    if(this.state.persons.length < 2) {
      assignedClasses.push( classes.red )
    }
    if (this.state.persons.length < 1) {
      assignedClasses.push( classes.bold )
    }


    return (
        <div className={classes.App}>
          <h1>This is my first React App</h1>
          <p className={assignedClasses.join(" ")} >This is really working!</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
        </div>
    );
  }
}

export default App;

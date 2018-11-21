import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sergio", age: 35 },
      { name: "Marise", age: 26 }
    ],
    showPersons: false
  }


  switchNameHanlder = newName => {
    this.setState({
      persons: [
        { name: newName, age: 35},
        { name: 'Maria', age: 19}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35},
        { name: event.target.value, age: 26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is my first React App</h1>
        <p>This is really working!</p>
        <button 
        className='Home-Button'
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { 
          this.showPersons === true ? 
            <div>
              <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              change={this.nameChangeHandler}  />
              <Person
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              change={this.nameChangeHandler} >My hobbie is Yoga! </Person>  
            </div> : null
        }   
      </div>
    );
  }
}

export default App;

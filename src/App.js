import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sergio", age: 35 },
      { name: "Marise", age: 26 }
    ]
  }

  switchNameHanlder = (newName) => {
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
        { name: 'Salves', age: 35},
        { name: event.target.value , age: 26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is my first React App</h1>
        <p>This is really working!</p>
        <button 
        className='Home-Button'
        onClick={() => this.switchNameHanlder('Salves')}>Switch names</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         click={this.switchNameHanlder.bind(this, 'Andre!')} />
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         change={this.nameChangeHandler}  >My hobbie is Yoga! </Person>
      </div>
    );
  }
}

export default App;

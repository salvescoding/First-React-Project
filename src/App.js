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
        { name: "Salves", age: 35},
        { name: "Maria", age: 19}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is my first React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHanlder}>Switch names</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         click={this.switchNameHanlder} />
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}>My hobbie is Yoga! </Person>
      </div>
    );
  }
}

export default App;

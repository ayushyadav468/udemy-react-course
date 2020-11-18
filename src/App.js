import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Ayush', age: 21 },
      { name: 'Aryaman', age: 18 },
      { name: 'Kavita', age: 42 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am from App.js file</h1>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        ></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          <li>I am younger than Ayush</li>
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;

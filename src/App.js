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
    showPerson: false,
  };

  showPersonHandler = () =>
    this.setState({
      showPerson: !this.state.showPerson,
    });

  switchNameHandler = (newName) =>
    this.setState({
      person: [
        { name: newName, age: 21 },
        { name: 'Aryaman', age: 18 },
        { name: 'Kavita', age: 42 },
      ],
    });

  nameChangeHandler = (event) =>
    this.setState({
      person: [
        { name: 'Ayush', age: 21 },
        { name: event.target.value, age: 18 },
        { name: 'Kavita', age: 42 },
      ],
    });

  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am from App.js file</h1>
        <button onClick={this.showPersonHandler}>Switch Button</button>
        {person}
      </div>
    );
  }
}

export default App;

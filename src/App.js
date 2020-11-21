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

  nameChangeHandler = (event) =>
    this.setState({
      person: [
        { name: 'Ayush', age: 21 },
        { name: event.target.value, age: 18 },
        { name: 'Kavita', age: 42 },
      ],
    });

  deletePersonHandler = (newIndex) => {
    const person = [...this.state.person];
    person.splice(newIndex, 1);
    this.setState({ person: person });
  };

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am from App.js file</h1>
        <button className="btn" onClick={this.showPersonHandler}>
          Switch Button
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

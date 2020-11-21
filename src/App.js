import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Example1', age: 21 },
      { id: '2', name: 'Example2', age: 23 },
      { id: '3', name: 'Example3', age: 25 },
    ],
    showPerson: true,
  };

  // Toggle the view of Person. By default it's true
  showPersonHandler = () =>
    this.setState({
      showPerson: !this.state.showPerson,
    });

  // Delete a person
  deletePersonHandler = (newIndex) => {
    const person = [...this.state.persons];
    person.splice(newIndex, 1);
    this.setState({ persons: person });
  };

  // Changes the name of Person
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const personToBeUpdated = { ...this.state.persons[personIndex] };
    personToBeUpdated.name = event.target.value;

    const updatedPerson = [...this.state.persons];
    updatedPerson[personIndex] = personToBeUpdated;

    this.setState({ persons: updatedPerson });
  };

  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
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
        {person}
      </div>
    );
  }
}

export default App;

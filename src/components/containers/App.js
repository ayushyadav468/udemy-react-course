import React, { Component } from 'react';
import './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

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
          {/* render list of person */}
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          click={this.showPersonHandler}
        />
        {person}
      </div>
    );
  }
}

export default App;

import React from 'react';

const Cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };
  if (props.showPerson) {
    style.backgroundColor = 'red';
    style.color = 'black';
  }
  const firstClass = [];
  if (props.persons.length <= 2) {
    firstClass.push('red');
  }
  if (props.persons.length <= 1) {
    firstClass.push('bold');
  }

  return (
    <div>
      <h1>Hi, I am from App.js file</h1>
      <p className={firstClass.join(' ')}>This is really working</p>
      <button className="btn" onClick={props.click} style={style}>
        Switch Button
      </button>
    </div>
  );
};

export default Cockpit;

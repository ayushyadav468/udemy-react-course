import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div>
      <p>
        My name is {props.name}. I am {props.age} old.
      </p>
      <ul>{props.children}</ul>
    </div>
  );
};

export default person;

import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        My name is {props.name}. I am {props.age} old.
      </p>
      <ul>{props.children}</ul>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;

import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        My name is {props.name}. I am {props.age} old.
      </p>
      <ul>{props.children}</ul>
      <input type="text" placeholder={props.name} onChange={props.change} />
    </div>
  );
};

export default Person;

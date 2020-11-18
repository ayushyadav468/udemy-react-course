import React from 'react';

const person = () => {
  return (
    <p>
      I am a Person and I am {Math.floor(Math.random() * (25 - 20) + 20)} old
    </p>
  );
};

export default person;

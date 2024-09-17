import React from 'react';

const Button = ({ onClick, editable }) => {
  // Check if the button is disabled
  if (editable) {
    return <button>Edit</button>;
  }

  // If not disabled, return the button with the onClick event
  return <button onClick={onClick}>Click me!</button>;
};

export default Button;

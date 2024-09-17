import React from 'react';

const Lists = ({ person }) => {
  if (!person || person.length === 0) {
    return <div>No data</div>;
  }

  return (
    <div role="list">
      {' '}
      {/* Use role="list" to indicate a list container */}
      {person.map((person) => (
        <div key={person.id} role="listitem">
          {' '}
          {/* Use role="listitem" for each item */}
          {person.name}
        </div>
      ))}
    </div>
  );
};

export default Lists;

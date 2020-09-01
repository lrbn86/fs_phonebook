import React from 'react';

const NumbersList = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    </>
  );
}

export default NumbersList;

import React, { useState } from 'react';
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import NumbersList from './components/NumbersList';

const App = ({ personsArray }) => {

  const [persons, setPersons] = useState(personsArray);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  return (
    <>
      <h2>Phonebook</h2>
      <SearchFilter personsArray={personsArray} persons={persons} setPersons={setPersons} />
      <PersonForm personsArray={personsArray} persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <NumbersList persons={persons} />
    </>
  );
}

export default App;

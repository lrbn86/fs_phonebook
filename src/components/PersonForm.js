import React from 'react';

const PersonForm = ({ personsArray, persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`The name '${newName}' already exists!`);
      return;
    }
    if (newName === '') {
      alert('Name cannot be blank!')
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    // TODO: Holy shit. I spent eons trying to solve this problem.
    // The problem was that I wanted to keep an original copy of 'persons'
    // However, setPersons would literally erase other elements after filter.
    // it does not keep the original copy.
    // An approach was to use the personsArray.
    // We would filter out the personsArray instead of 'persons'
    // Originally, I was going for setPersons(personsArray.concat(newPerson))
    // but that duplicated added persons. fuck
    // So after some eons, I realize I could just keep that separately like so:
    // Note: To prevent duplicate values, do setPersons first and then push
    // If we pushed first, the personForm would render and push, causing a duplicate element
    // to splip in.
    setPersons(persons.concat(newPerson));
    personsArray.push(newPerson);
    setNewName('');
    setNewNumber('');
  }

  const handleName = (event) => {
    setNewName(event.target.value);
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }
  return (
    <>
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default PersonForm;

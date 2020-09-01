import React from 'react';

const SearchFilter = ({ personsArray, persons, setPersons }) => {

  const handleFilter = (event) => {
    const word = (event.target.value).toLowerCase();
    const filter = personsArray.filter(person => person.name.toLowerCase().includes(word));
    setPersons(filter);
  }


  return (
    <>
      filter shown with <input onChange={handleFilter} />
    </>
  );
}

export default SearchFilter;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const personsArray = [
  { name: 'Arto Hellas', number: '123898102389018203' },
  { name: 'Ada Lovelace', number: '10239091203901023' },
  { name: 'Dan Abramov', number: '123918293819203801' },
  { name: 'brandon', number: '12938918238901238' }
]
//const personsArray = [];
ReactDOM.render(

  <React.StrictMode>
    <App personsArray={personsArray} />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  
  function removeItem(id) {
    var peopleLeft = people.filter(person => person.id !== id);
    setPeople(peopleLeft);
  }

  const [people, setPeople] = React.useState(data);

  return (
  <>
    <h1>useState array example</h1>
    {people.map(({id, name}) => {
      return  (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => {removeItem(id)}}>
            remove
          </button>
        </div>
      )
    })}
    <button className="btn" onClick={() => setPeople([])}>
      clear items
    </button>
  </>
  );
};

export default UseStateArray;

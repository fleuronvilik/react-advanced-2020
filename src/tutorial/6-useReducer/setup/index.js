import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault()
    if (name) {
      setPeople([...people, {
        id: new Date().getTime().toString(),
        name: name
      }])
      setName('');
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
    }
  }

  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={name}
            aria-label="name"
            onChange={e => setName(e.target.value)}
            name="name"
          />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map(p => {
        return (
          // <div key={p.id} className="item">
            <h4 key={p.id}>{p.name}</h4>
          // </div>
        )
      })}
    </>
  );
};

export default Index;

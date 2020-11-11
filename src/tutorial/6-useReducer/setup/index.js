import React, { useState, useReducer } from 'react';
import Modal from './Modal';

import { reducer } from './reducer';

const defaultState = {
  people: [],
  modalOpened: false,
  modalContent: ""
}

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = e => {
    e.preventDefault()
    if (name) {
      const newItem = {id: `${Date.now()}`,name}
      dispatch({ type: "ADD_ITEM", payload: newItem})
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }

  const closeModal = () => {
    if (state.modalContent.indexOf("ed") !== - 1) {
      dispatch({ type: "CLOSE_MODAL" })
    }
  } 

  return (
    <>
      {state.modalOpened
        && <Modal modalContent={state.modalContent} close={closeModal}/>}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            aria-label="name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map(p => {
        return (
          <div key={p.id} className="item">
            <h4 key={p.id}>{p.name}</h4>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", removeOne: p })}>
              remove
            </button>
          </div>
        )
      })}
    </>
  );
};

export default Index;

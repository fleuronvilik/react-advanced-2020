import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

const reducer = (state, action) => { // reducer function
  if (action.type === "TESTING") {
    return {
      ...state,
      people: data,
      modalOpened: true,
      modalContent: "hello world"
    }
  }
  throw new Error("no matching action type")
};

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
      dispatch({ type: "TESTING"})
    } else {
      dispatch({ type: "RANDOM" }) // not handled by reducer, expect error to be thrown
    }
  }

  return (
    <>
      {state.modalOpened && <Modal modalContent={state.modalContent}/>}
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
      {state.people.map(p => {
        return <h4 key={p.id}>{p.name}</h4>
      })}
    </>
  );
};

export default Index;

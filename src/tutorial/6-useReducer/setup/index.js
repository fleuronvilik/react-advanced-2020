import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

const reducer = (state, action) => { // reducer function
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      modalOpened: true,
      modalContent: "item added"
    }
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      modalOpened: true,
      modalContent: "please enter value"
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
      const newItem = {id: `${Date.now()}`,name}
      dispatch({ type: "ADD_ITEM", payload: newItem})
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }

  return (
    <>
      {state.modalOpened && <Modal modalContent={state.modalContent}/>}
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
        return <h4 key={p.id}>{p.name}</h4>
      })}
    </>
  );
};

export default Index;

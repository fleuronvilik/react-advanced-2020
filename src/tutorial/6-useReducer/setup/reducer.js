export const reducer = (state, action) => { // reducer function
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
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modalOpened: false
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const peopleLeft = state.people.filter(p => p.id !== action.removeOne.id)
    return {
      ...state,
      people: peopleLeft,
      modalOpened: true,
      modalContent: `${action.removeOne.name} removed`
    }
  }
  throw new Error("no matching action type")
};
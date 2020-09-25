//OBj that reps initial state
const INITIAL_STATE = {
  currentUser: null

}
const userReducer = (state = INITIAL_STATE, action) => {
  // Depending on the action type, the switch checks if the case is == Set C u
  // or else, return the state
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return{
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;
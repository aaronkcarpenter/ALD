import CartActionTypes from './cart.types';

//Hiding cart when site is first visited
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

//Cart is either hidden or unhidden
const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // spreading all the items plus any additional values added at the end
        cartItems: [...state.cartItems, action.payload]
      }
      default:
        return state;
  }
}

export default cartReducer;
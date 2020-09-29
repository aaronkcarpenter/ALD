import CartActionTypes from './cart.types'

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
  // Payload is optional and we aren't using in this case in our reducer switch case
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export default toggleCartHidden;
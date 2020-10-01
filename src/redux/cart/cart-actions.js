import CartActionTypes from './cart-types';

// toggleCartHidden does not need a payload
// it's only use is to toggle a boolean value that reveals the content of the user's cart
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
import React from 'react';
import './cart-dropdown.scss';

// components
import CustomButton from '../custom-button/custom-button';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;

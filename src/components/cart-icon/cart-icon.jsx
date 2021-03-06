import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

// redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// App doesn't need any state from the reducer, therefore the first argument of connect() is null because that's where mapStateToProps would go if App needed state
export default connect(null, mapDispatchToProps)(CartIcon);

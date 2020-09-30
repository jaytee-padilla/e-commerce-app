import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.scss';

// components/assets
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { auth } from '../../firebase/firebase';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// state = rootReducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser, // aka rootReducer.user.currentUser
  hidden: state.cart.hidden, // aka rootReducer.cart.hidden
});

export default connect(mapStateToProps)(Header);

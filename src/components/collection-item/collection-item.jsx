import React from 'react';
import { connect } from 'react-redux';
import './collection-item.scss';

// components/redux
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart-actions';

function CollectionItem({ item, addItem }) {
  // destructure
  const { name, imgURL, price } = item;

  return (
    <div className="collection-item">
      <div className="image-container">
        <div className="image" style={{ backgroundImage: `url(${imgURL})` }} />
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

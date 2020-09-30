import React from 'react';
import './collection-item.scss';

// components
import CustomButton from '../custom-button/custom-button';


function CollectionItem({id, name, imgURL, price}) {
  return (
    <div className='collection-item'>
      <div className='image-container'>
        <div
          className='image'
          style={{backgroundImage: `url(${imgURL})`}}
        />
      </div>

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomButton inverted>Add To Cart</CustomButton>
    </div>
  )
}

export default CollectionItem;

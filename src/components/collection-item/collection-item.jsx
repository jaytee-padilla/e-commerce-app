import React from 'react';
import './collection-item.scss';


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
    </div>
  )
}

export default CollectionItem;

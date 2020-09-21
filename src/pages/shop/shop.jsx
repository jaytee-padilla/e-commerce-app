import React, { Component } from 'react';
import SHOP_DATA from './shopData';

// components
import CollectionPreview from '../../components/collection-preview/collection-preview';

export class ShopPage extends Component {
  constructor(props) {
    super();
  
    this.state = {
      collections: SHOP_DATA
    }
  }
  

  render() {
    // destructure
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;

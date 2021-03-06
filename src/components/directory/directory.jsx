import React, { Component } from 'react';
import './directory.scss';

// components
import MenuItem from '../menu-item/menu-item';

export class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'new arrivals',
          imgURL: 'https://atlasskateboarding.com/wordpress/wp-content/uploads/2017/01/AtlasTee0919GlenFoxNewsV2.jpg',
          linkURL: 'new-arrivals'
        },
        {
          id: 2,
          title: 'skateboarding',
          imgURL: 'https://cdn.shopify.com/s/files/1/1728/9265/products/IndyLightsTitanium0720Silver_1024x1024.jpg?v=1594250303',
          linkURL: 'skateboarding'
        },
        {
          id: 3,
          title: 'footwear',
          imgURL: 'https://atlasskateboarding.com/wordpress/wp-content/uploads/2017/01/NikeAdversary0720WhiteBlackNews.jpg',
          linkURL: 'footwear'
        },
        {
          id: 4,
          title: 'clothing',
          imgURL: 'https://cdn.shopify.com/s/files/1/1728/9265/products/Hoodie0620LogoMaroon_1024x1024.jpg?v=1593116400',
          linkURL: 'clothing',
          size: 'large'
        },
        {
          id: 5,
          title: 'accessories',
          imgURL: 'https://cdn.shopify.com/s/files/1/1728/9265/products/Thrasher0420JuneIssue_1024x1024.jpg?v=1587750683',
          linkURL: 'accessories',
          size: 'large'
        },
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;

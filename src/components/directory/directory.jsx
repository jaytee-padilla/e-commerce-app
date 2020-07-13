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
          imgURL: 'https://atlasskateboarding.com/wordpress/wp-content/uploads/2017/01/AtlasTee0919GlenFoxNewsV2.jpg'
        },
        {
          id: 2,
          title: 'skateboarding',
          imgURL: 'https://atlasskateboarding.com/wordpress/wp-content/uploads/2017/01/AtlasTruckThunderOrangeSingle.jpg'
        },
        {
          id: 3,
          title: 'footwear',
          imgURL: 'https://atlasskateboarding.com/wordpress/wp-content/uploads/2017/01/NikeAdversary0720WhiteBlackNews.jpg'
        },
        {
          id: 4,
          title: 'clothing',
          imgURL: 'https://cdn.shopify.com/s/files/1/1728/9265/products/Hoodie0620LogoMaroon_1024x1024.jpg?v=1593116400',
          size: 'large'
        },
        {
          id: 5,
          title: 'accessories',
          imgURL: 'https://cdn.shopify.com/s/files/1/1728/9265/products/Thrasher0420JuneIssue_1024x1024.jpg?v=1587750683',
          size: 'large'
        },
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(section => (
          <MenuItem key={section.id} title={section.title} imgURL={section.imgURL} size={section.size} />
        ))}
      </div>
    )
  }
}

export default Directory;

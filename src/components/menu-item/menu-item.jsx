import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, imgURL, size, history, linkURL, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkURL}`)}>
      <div style={{backgroundImage: `url(${imgURL})`}} className={`${size} background-img`} />

      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        {/* <span className='subtitle'>SHOP NOW</span> */}
      </div>
    </div>
  )
}

export default withRouter(MenuItem);

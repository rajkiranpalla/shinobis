import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img className='display-image'
      alt='shinobi'
      src={props.shinobi.image_url}
    />
    <h2> {props.shinobi.name} </h2>
    <p> {props.shinobi.clan} </p>
  </div>
);

//180*180
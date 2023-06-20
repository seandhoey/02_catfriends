import React from 'react';
import './card.css'

// cats: id, name, username, email

// Yet another way of making react functions/classes
const Card = (props) => {
  return (
    <div className='roboCard'>
      {/* Turn the src URL into a JS expression with {} */}
      <img src={'https://robohash.org/' + props.cat.username + '.png?set=set4&size=200x200'} alt={'Cat ' + props.cat.id} />
      <div>
        <h2>{props.cat.name}</h2>
        <p>{props.cat.email}</p>
      </div>
    </div>
  );
}

export default Card;
import React from 'react';
import Card from './Card.js'

const CardList = (props) => {
  // Reminder: Map is a foreach, which returns a value on each loop into a new array.
  // We return a list of Card components, each 
  const cardComponent = props.cats.map((cat, i) => {
    return <Card key={i} cat={cat} />
  });

  return (
    // Using Tachyons classes instead of a .css file
    <div className='flex flex-wrap justify-center'>
      {/* Could put the Fcode directly in here as well */}
      {cardComponent}
    </div>
  );
}

export default CardList;
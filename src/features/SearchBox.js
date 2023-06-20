import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='pa2'>
      {/* Every time a onChange event is detected, pass the event
      into the function defined (App.searchChange())*/}
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search Cats'
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;
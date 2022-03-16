import React, { useState } from 'react';

const SearchBar = (props) => {
  const [search_value, setSearchValue] = useState('');

  function onChangeHandler(event) {
    setSearchValue(event.target.value);
    props.search_term(event.target.value);
  }
  return (
    <div className="search-bar">
      <input type="text" value={search_value} onChange={onChangeHandler} />
    </div>
  );
};

export default SearchBar;

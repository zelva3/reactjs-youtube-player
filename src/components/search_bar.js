import React, { useState } from 'react';

const SearchBar = () => {
  const [search_value, setSearchValue] = useState('');

  function onChangeHandler(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div>
      <input type="text" value={search_value} onChange={onChangeHandler} />
    </div>
  );
};

export default SearchBar;

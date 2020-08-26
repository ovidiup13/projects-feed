import React from 'react';

type SearchBoxProps = { onSearchChanged: (term: string) => void };

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({ onSearchChanged }) => {
  return (
    <input
      type='search'
      placeholder='Search...'
      onChange={(event) => onSearchChanged(event.target.value)}
    />
  );
};

export default SearchBox;

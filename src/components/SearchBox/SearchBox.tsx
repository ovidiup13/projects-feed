import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from './icon-search-grey_1.svg';
import { ReactComponent as CloseIcon } from './icon-close-grey_1.svg';

import styles from './SearchBox.module.css';

type SearchBoxProps = { onSearchChanged: (term: string) => void };

const EMPTY_VALUE = '';

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({ onSearchChanged }) => {
  const [searchTerm, setSearchTerm] = useState(EMPTY_VALUE);

  const handleTermChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChanged(value);
  };

  const handleInputClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSearchChanged(EMPTY_VALUE);
    setSearchTerm(EMPTY_VALUE);
  };

  return (
    <form role='search'>
      <div className={styles.box}>
        <input
          type='search'
          className={styles.search}
          placeholder='search...'
          value={searchTerm}
          onChange={handleTermChanged}
        />
        <button
          className={styles.button}
          onClick={handleInputClear}
          // Prevents the button from taking focus.
          onMouseDown={(e) => e.preventDefault()}
        >
          {Boolean(searchTerm) ? <CloseIcon /> : <SearchIcon />}
        </button>
      </div>
    </form>
  );
};

export default SearchBox;

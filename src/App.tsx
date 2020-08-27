import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import { FilteredFeed, DefaultFeed } from './components/Feed/Feed';
import { useProjects } from './projects';

import styles from './App.module.css';

const App: React.FunctionComponent = () => {
  const projects = useProjects();
  const [searchTerm, setSearchTerm] = useState('');

  const feed = Boolean(searchTerm) ? (
    <FilteredFeed term={searchTerm} />
  ) : (
    <DefaultFeed projects={projects} />
  );

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <SearchBox onSearchChanged={setSearchTerm} />
      </header>

      <main>{feed}</main>

      <footer></footer>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import { FilteredFeed, DefaultFeed } from './components/Feed/Feed';
import { useProjects } from './projects';

import './App.css';

const App: React.FunctionComponent = () => {
  const projects = useProjects();
  const [searchTerm, setSearchTerm] = useState('');

  const feed = Boolean(searchTerm) ? (
    <FilteredFeed term={searchTerm} />
  ) : (
    <DefaultFeed projects={projects} />
  );

  return (
    <div className='App'>
      <header>
        <SearchBox onSearchChanged={setSearchTerm} />
      </header>

      <main>{feed}</main>

      <footer></footer>
    </div>
  );
};

export default App;

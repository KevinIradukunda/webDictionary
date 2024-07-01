import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import ToggleSwitch from './components/ToggleSwitch';
import FontSelector from './components/FontSelector';
import { Result } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [font, setFont] = useState<'serif' | 'sans-serif' | 'monospace'>('sans-serif');
  const [searchResults, setSearchResults] = useState<Result[] | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme} ${font}`}>
      <Container>
        <div className="header">
          <FontSelector setFont={setFont} />
          <ToggleSwitch isOn={theme === 'dark'} handleToggle={toggleTheme} />
        </div>
        <SearchInput setSearchResults={setSearchResults} />
        {searchResults && <SearchResults results={searchResults} />}
      </Container>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Result } from '../types';
import '../styles.css';

type SearchInputProps = {
  setSearchResults: (results: Result[]) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [showSearchField, setShowSearchField] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) {
      setError('Input field cannot be left blank');
      return;
    }
    setError('');
    try {
      const response = await axios.get<Result[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
      setSearchResults(response.data);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div className="search-container d-flex align-items-center justify-content-between">
      {showSearchField ? (
        <Form onSubmit={handleSearch} className="search-form d-flex align-items-center">
          <InputGroup className="flex-grow-1 search-input-group">
            <FormControl
              type="text"
              placeholder="Keyboard"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <Button variant="link" className="search-icon" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
              </svg>
            </Button>
          </InputGroup>
        </Form>
      ) : (
        <>
          <h6 className="search-word">Keyboard</h6>
          <Button variant="link" className="search-icon" onClick={() => setShowSearchField(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
            </svg>
          </Button>
        </>
      )}
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </div>
  );
};

export default SearchInput;

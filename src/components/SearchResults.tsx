import React from 'react';
import AudioPlayer from './AudioPlayer';
import { Result } from '../types';
import '../styles.css';

const SearchResults: React.FC<{ results: Result[] }> = ({ results }) => {
  return (
    <div className="results">
      {results.map((result, index) => (
        <div key={index} className="result-card">
          <div className="result-header d-flex justify-content-between align-items-center">
            <div>
              <div className="word-title">{result.word}</div>
              <div className="phonetic">{result.phonetic}</div>
            </div>
            {result.phonetics[0]?.audio && (
              <AudioPlayer audio={result.phonetics[0].audio} />
            )}
          </div>
          {result.meanings.map((meaning, idx) => (
            <div key={idx} className="meaning">
              <div className="part-of-speech">{meaning.partOfSpeech}</div>
              <div className="divider"></div>
              {meaning.definitions.map((definition, defIdx) => (
                <p key={defIdx}>{definition.definition}</p>
              ))}
              {meaning.synonyms.length > 0 && (
                <p>
                  <strong>Synonyms: </strong>
                  <span className="synonyms">
                    {meaning.synonyms.join(', ')}
                  </span>
                </p>
              )}
            </div>
          ))}
          <div className="source-link">
            Source
            <a href={`https://en.wiktionary.org/wiki/${result.word}`} target="_blank" rel="noopener noreferrer">
              {`https://en.wiktionary.org/wiki/${result.word}`}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

export interface Definition {
    definition: string;
    example?: string;
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
  }
  
  export interface Phonetic {
    text: string;
    audio?: string;
  }
  
  export interface Result {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
  }
  
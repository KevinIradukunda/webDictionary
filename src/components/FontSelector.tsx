import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../styles.css';

type FontSelectorProps = {
  setFont: (font: 'serif' | 'sans-serif' | 'monospace') => void;
};

const FontSelector: React.FC<FontSelectorProps> = ({ setFont }) => {
  const [selectedFont, setSelectedFont] = useState<'serif' | 'sans-serif' | 'monospace'>('sans-serif');

  const handleSelect = (eventKey: string | null) => {
    if (eventKey === 'serif' || eventKey === 'sans-serif' || eventKey === 'monospace') {
      setSelectedFont(eventKey);
      setFont(eventKey);
    }
  };

  return (
    <Dropdown onSelect={handleSelect} className="font-selector">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown-toggle-custom">
        {selectedFont.charAt(0).toUpperCase() + selectedFont.slice(1)}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-custom">
        <Dropdown.Item as="button" eventKey="sans-serif" className={selectedFont === 'sans-serif' ? 'selected' : ''}>
          Sans Serif
        </Dropdown.Item>
        <Dropdown.Item as="button" eventKey="serif" className={selectedFont === 'serif' ? 'selected' : ''}>
          Serif
        </Dropdown.Item>
        <Dropdown.Item as="button" eventKey="monospace" className={selectedFont === 'monospace' ? 'selected' : ''}>
          Mono
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FontSelector;

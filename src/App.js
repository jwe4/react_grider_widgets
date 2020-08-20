import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: '1. What is React?',
    content: '1. React is a front end javascript framework',
  },
  {
    title: '2. What is React?',
    content: '2. React is a front end javascript framework',
  },
  {
    title: '3. What is React?',
    content: '3. React is a front end javascript framework',
  },
];

const options = [
  { label: 'The color Red', value: 'red' },
  { label: 'The color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

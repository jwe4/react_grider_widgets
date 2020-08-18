import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};

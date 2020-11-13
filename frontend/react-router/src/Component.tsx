import React from 'react';

import logo from './logo.svg';
import { LinkList } from './LinkList';

export const Component: React.FC = () => {
  console.log('/component rendering');

  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <LinkList/>
  </header>;
};

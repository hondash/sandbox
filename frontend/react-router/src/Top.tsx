import React from 'react';

import logo from './logo.svg';
import { LinkList } from './LinkList';

export const Top: React.FC = () => {
  console.log('/ rendering');

  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <LinkList/>
  </header>;
};

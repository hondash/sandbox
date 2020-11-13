import React from 'react';

import logo from './logo.svg';
import { LinkList } from './LinkList';

export const RenderWithNamed: React.FC = () => {
  console.log('/render/named rendering');

  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <LinkList/>
  </header>;
};

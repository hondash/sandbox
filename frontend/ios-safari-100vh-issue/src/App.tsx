import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { FlexPage } from './pages/flex/FlexPage';
import { GridPage } from './pages/grid/GridPage';
import { TopPage } from './pages/top/TopPage';

export const App = () => {
  return (
    <Switch>
      <Route path="/flex">
        <FlexPage />
      </Route>
      <Route path="/grid">
        <GridPage />
      </Route>
      <Route path="*">
        <TopPage />
      </Route>
    </Switch>
  );
}

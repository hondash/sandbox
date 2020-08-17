import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import { FlexPage } from './pages/flex/FlexPage';
// import { GridPage } from './pages/grid/GridPage';
import { TopPage } from './pages/top/TopPage';

export const App = () => {
  return (
    <StyledApp>
      <Switch>
        <Route path="/flex">
          <FlexPage />
        </Route>
        {/*<Route path="/grid">*/}
        {/*  <GridPage />*/}
        {/*</Route>*/}
        <Route path="*">
          <TopPage />
        </Route>
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  /* Avoid Chrome to see Safari hack */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
  text-align: center;
  display: flex;
  flex-direction: column;
`

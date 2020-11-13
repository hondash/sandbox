import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { Component } from './Component';
import { RenderWithNameless } from './RenderWithNameless';
import { RenderWithNamed } from './RenderWithNamed';
import { Top } from './Top';

const render = () => <RenderWithNamed />;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route exact path="/component" component={Component} />
        <Route exact path="/render/nameless" render={() => <RenderWithNameless />} />
        <Route exact path="/render/named" render={render} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

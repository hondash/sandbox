import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contents } from './components/Contents';
import styled from 'styled-components';

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Contents />
      <Footer />
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

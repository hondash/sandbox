import * as React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { Contents } from './Contents';
import { Footer } from './Footer';

export const GridPage = () => {
  return (
    <StyledApp>
      <Header />
      <Contents />
      <Footer />
    </StyledApp>
  )
};

const StyledApp = styled.div`
  min-height: 100vh;
  /* Avoid Chrome to see Safari hack */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
  text-align: center;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`

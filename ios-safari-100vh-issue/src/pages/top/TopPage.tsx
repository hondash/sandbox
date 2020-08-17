import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TopPage = () => {
  return (
    <StyledTopPage>
      <StyledLinkWrapper>
        <Link to="/flex">flex</Link>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Link to="/grid">grid</Link>
      </StyledLinkWrapper>
    </StyledTopPage>
  );
};

const StyledTopPage = styled.div`
  min-height: 100vh;
  /* Avoid Chrome to see Safari hack */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

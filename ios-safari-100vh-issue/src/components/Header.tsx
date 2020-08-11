import * as React from "react";
import styled from 'styled-components';

export const Header = () => {
  return (
    <StyledHeader>
      <span>Header</span>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  flex-shrink: 0;
  z-index: 100;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  flex-basis: 100px;
  height: 100px;
  color: whitesmoke;
  background-color: darkred;
`;

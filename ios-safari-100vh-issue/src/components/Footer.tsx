import * as React from "react";
import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterMenu>
        <StyledMenu>Home</StyledMenu>
        <StyledMenu>AAA</StyledMenu>
        <StyledMenu>BBB</StyledMenu>
        <StyledMenu>CCC</StyledMenu>
      </StyledFooterMenu>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  flex-shrink: 0;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0; 
  color: whitesmoke;
  background-color: darkred;
`;

const StyledFooterMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  display: flex;
  justify-content: space-around;
  height: 100px;
`;

const StyledMenu = styled.li`
  flex-grow: 1;
`;

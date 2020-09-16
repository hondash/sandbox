import * as React from "react";
import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>ここから</div>
      <div>ここまで</div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  flex-shrink: 0;
  position: sticky;
  bottom: 0; 
  flex-basis: 100px;
  color: whitesmoke;
  background-color: darkred;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

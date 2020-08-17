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
  grid-row: 3 / 3;
  position: sticky;
  bottom: 0; 
  color: whitesmoke;
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

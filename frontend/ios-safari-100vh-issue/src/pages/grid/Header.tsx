import * as React from "react";
import styled from 'styled-components';

export const Header = () => {
  return (
    <StyledHeader>
      <div>ここから</div>
      <div>ここまで</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  grid-row: 1 / 1;
  z-index: 100;
  position: sticky;
  top: 0;
  color: whitesmoke;
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

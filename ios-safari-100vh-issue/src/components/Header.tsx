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
  flex-shrink: 0;
  z-index: 100;
  position: sticky;
  top: 0;
  flex-basis: 100px;
  height: 100px;
  color: whitesmoke;
  background-color: darkred;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

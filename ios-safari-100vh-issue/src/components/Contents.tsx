import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

export const Contents = () => {
  const [showLongMessage, setShowLongMessage] = React.useState(false);

  const handleClick = () => {
    setShowLongMessage(!showLongMessage);
  };

  return (
    <StyledContents>
      <img src={logo} className="App-logo" alt="logo" />
      <button type="button" onClick={handleClick}>toggle</button>
      {showLongMessage ? (
        <div>
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa</span>
          <br />
          <span>aaaaa(last)</span>
        </div>
      ) : <div>click above button</div>}
    </StyledContents>
  )
};

const StyledContents = styled.div`
  flex: 1;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

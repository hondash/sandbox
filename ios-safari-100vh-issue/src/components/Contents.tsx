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
      <StyledActualContents>
      <div>ここから</div>
      <img src={logo} className="App-logo" alt="logo" />
      <button type="button" onClick={handleClick}>
        {showLongMessage ? 'テキストを隠す' : 'テキストを表示する'}
      </button>
      {showLongMessage ? (
        <div>
          <span>あいうえお</span>
          <br />
          <span>かきくけこ</span>
          <br />
          <span>さしすせそ</span>
          <br />
          <span>たちつてと</span>
          <br />
          <span>なにぬねの</span>
          <br />
          <span>はひふへほ</span>
          <br />
          <span>まみむめも</span>
          <br />
          <span>やゆよ</span>
          <br />
          <span>らりるれろ</span>
          <br />
          <span>わをん</span>
          <br />
          <span>アイウエオ</span>
          <br />
          <span>カキクケコ</span>
          <br />
          <span>サシスセソ</span>
          <br />
          <span>タチツテト</span>
          <br />
          <span>ナニヌネノ</span>
          <br />
          <span>ハヒフヘホ</span>
          <br />
          <span>マミムメモ</span>
          <br />
          <span>ヤユヨ</span>
          <br />
          <span>ラリルレロ</span>
          <br />
          <span>ワヲン</span>
        </div>
      ) : null}
      <br />
      <StyledMessage>
        <StyledGray>■</StyledGray>
        の領域が中央にあればOK
      </StyledMessage>
      <div>ここまで</div>
      </StyledActualContents>
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

const StyledActualContents = styled.div`
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMessage = styled.span`
  background-color: whitesmoke;
  color: black;
  padding: 8px;
`;

const StyledGray = styled.span`
  color: darkgray;
`;

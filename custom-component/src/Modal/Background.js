import React from "react";
import styled from "styled-components";
export default function Background({ modalHandler }) {
  return (
    <>
      <BackDrop onClick={modalHandler} />
      <ContentWrap>
        <Content>
          <button onClick={modalHandler}>Modal 끄기</button>
          <span>안녕하세요. Modal입니다 !!</span>
        </Content>
      </ContentWrap>
    </>
  );
}

const BackDrop = styled.div`
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.33;
`;

const Content = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  color: #0984e3;
  font-weight: bold;
  font-size: 32px;
  position: fixed;
  z-index: 10;
  overflow: hidden;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

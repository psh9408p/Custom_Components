import React from "react";
import styled from "styled-components";
export default function ModalContent({ modalHandler }) {
  return (
    <Content>
      <div>
        <Button onClick={modalHandler}>닫기</Button>
      </div>
      <span>안녕하세요. Modal입니다 !!</span>
    </Content>
  );
}

const Content = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0984e3;

  width: 500px;
  height: 500px;
  font-weight: bold;
  font-size: 32px;
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  top: 0;
  right: 0;
  padding: 12px;
  margin: 12px;
  outline: none;
  border: none;
  position: fixed;
  background: tomato;
  color: white;
  border-radius: 15px;
  cursor: pointer;
`;

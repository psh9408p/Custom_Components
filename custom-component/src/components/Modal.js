import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import Background from "../Modal/Background";
export default function Modal() {
  const [overlay, setOverlay] = useState(false);
  const modalHandler = () => {
    setOverlay(!overlay);
  };
  return (
    <div>
      <h1>Modal</h1>
      <ModalBtn onClick={modalHandler}>Modal ON</ModalBtn>
      {overlay && (
        <>
          {ReactDom.createPortal(
            <Background modalHandler={modalHandler} />,
            document.getElementById("backdrop-root")
          )}
        </>
      )}
      <h2>Modal Component</h2>
    </div>
  );
}

const ModalBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 0;
  cursor: pointer;
  border-radius: 15px;
  color: white;

  background-color: ${(props) => (props.toggle ? "red" : "dodgerblue")};
  transition: 0.5s;
`;

import React from "react";
import styled from "styled-components";
export default function Background({ modalHandler }) {
  return (
    <>
      <BackDrop onClick={modalHandler} />
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

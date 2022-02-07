import React, { useState } from "react";
import styled from "styled-components";
export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div>
      <h1>Toggle</h1>
      <div>
        <div>
          <ToggleBtn toggle={toggle} onClick={toggleHandler}>
            {toggle ? "OFF" : "ON"}
          </ToggleBtn>
          <h2>{toggle ? "Toggle Switch OFF" : "Toggle Switch ON"}</h2>
        </div>
      </div>
    </div>
  );
}

const ToggleBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 0;
  cursor: pointer;
  border-radius: 15px;
  color: white;

  background-color: ${(props) => (props.toggle ? "red" : "dodgerblue")};
  transition: 0.5s;
`;

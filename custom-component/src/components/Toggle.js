import React, { useState } from "react";
import styled from "styled-components";
export default function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <h1>Toggle</h1>
      <Input
        type="checkbox"
        id="switch-input"
        className="switch-checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <Label
        isChecked={isChecked}
        className="switch-label"
        htmlFor="switch-input"
      >
        <Switch className="switch" />
      </Label>
      <h2>Toggle Component</h2>
    </div>
  );
}

const Input = styled.input`
  display: none;
  & {
    :checked + .switch-label .switch {
      transform: translateX(30px);
    }
  }
`;

const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  width: 60px;
  height: 26px;
  border-radius: 50px;
  background-color: ${(props) => (props.isChecked ? "dodgerblue" : "grey")};
  animation: 0.2s linear forwards;
`;

const Switch = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 3px;
  left: 5px;
  transition: transform 0.2s linear;
  background-color: white;
  z-index: 3000;
`;

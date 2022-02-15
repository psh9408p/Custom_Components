import React, { useState } from "react";

export default function ClickToEdit() {
  const [nameValue, setNameValue] = useState("김코딩");
  const [ageValue, setAgeValue] = useState("20");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(nameValue);
  const [age, setAge] = useState(ageValue);

  const nameEdit = (e) => {
    setNameValue(e.target.value);
  };
  const ageEdit = (e) => {
    setAgeValue(e.target.value);
  };

  const nameBlur = () => {
    setName(nameValue);
  };

  const ageBlur = () => {
    setAge(ageValue);
  };

  return (
    <div>
      <h1>Click To Edit</h1>
      <form>
        {" "}
        <div
          onDoubleClick={() => {
            setVisible(!visible);
          }}
        >
          <span>이름</span>
          {visible ? (
            <input
              type="text"
              value={nameValue}
              onBlur={nameBlur}
              onChange={nameEdit}
              autoFocus
            />
          ) : (
            <span> {nameValue}</span>
          )}
        </div>
        <div
          onDoubleClick={() => {
            setVisible(!visible);
          }}
        >
          <span>나이</span>
          {visible ? (
            <input
              type="text"
              value={ageValue}
              onChange={ageEdit}
              onBlur={ageBlur}
            />
          ) : (
            <span> {ageValue}</span>
          )}
        </div>
        <p>{`이름  ${name}  나이  ${age}`}</p>
      </form>
    </div>
  );
}

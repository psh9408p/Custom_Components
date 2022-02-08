import React, { useState } from "react";
import styled from "styled-components";
export default function Tag() {
  const [value, setValue] = useState("");

  const addTagName = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h1>Tag</h1>
      <TagWrap>
        <Span>태그입력</Span>
        <Input placeholder="tag" type="text" onChange={addTagName} />
      </TagWrap>
    </div>
  );
}

const TagWrap = styled.div`
  display: flex;
  margin: 0 15px;
  margin-bottom: 15px;
`;

const Span = styled.span`
  border: 1px solid black;
`;
const Input = styled.input`
  outline: none;
  border: 0;
`;

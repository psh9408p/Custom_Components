import React, { useState } from "react";
import styled from "styled-components";
export default function Tag() {
  const [tagArray, setTagArray] = useState([]);
  const addTagName = (e) => {
    if (e.key === "Enter" && e.target.value.length >= 1) {
      const tagText = e.target.value;
      setTagArray((prevState) => [...prevState, tagText]);
      e.target.value = "";
    }
  };

  const removeTag = (idx) => {
    const tags = [...tagArray];
    tags.splice(idx, 1);
    setTagArray(tags);
  };

  return (
    <div>
      <h1>Tag</h1>
      <TagWrap>
        {tagArray.map((v, i) => (
          <SpanWrap key={i}>
            {v}
            <Button onClick={() => removeTag(i)}>X</Button>
          </SpanWrap>
        ))}
        <Input
          placeholder="Press enter to add tags"
          type="text"
          onKeyPress={addTagName}
        />
      </TagWrap>
      <h2>Tag Component</h2>
    </div>
  );
}

const TagWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
  flex-wrap: wrap;
`;

const SpanWrap = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-bottom: 5px;
  background: dodgerblue;
  color: white;
  padding: 8px;
`;

const Input = styled.input`
  outline: none;
  border: 0;
`;

const Button = styled.button`
  border-radius: 50%;
  margin-left: 15px;
  border: 0;
  font-size: 2px;
  cursor: pointer;
`;

import React, { useState } from "react";
import styled from "styled-components";

export default function AutoComplete() {
  const data = [
    { name: "건슬링어" },
    { name: "버서커" },
    { name: "버화가" },
    { name: "인파이터" },
    { name: "블레이드" },
    { name: "건퍼" },
    { name: "서머너" },
    { name: "소서리스" },
    { name: "워로드" },
  ];

  const [dataList, setDataList] = useState(data);
  return (
    <Wrapper>
      <h1>AutoComplete</h1>
      <Label for="lostark-choice">lostark-choice</Label>
      <Input list="lostark-list" id="lostark-choice" name="lostark-choice" />
      <datalist id="lostark-list">
        {dataList.map((v) => (
          <option value={v.name} />
        ))}
      </datalist>
      <h2>AutoComplete Component</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  margin: 0 auto;
`;

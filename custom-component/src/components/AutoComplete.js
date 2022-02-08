import React, { useState } from "react";
import styled from "styled-components";

export default function AutoComplete() {
  const data = [
    { name: "건슬링어", id: 1 },
    { name: "버서커", id: 2 },
    { name: "버화가", id: 3 },
    { name: "인파이터", id: 4 },
    { name: "블레이드", id: 5 },
    { name: "건퍼", id: 6 },
    { name: "서머너", id: 7 },
    { name: "소서리스", id: 8 },
    { name: "워로드", id: 9 },
  ];

  const [dataList, setDataList] = useState(data);
  return (
    <Wrapper>
      <h1>AutoComplete</h1>
      <Label htmlfor="lostark-choice">lostark-choice</Label>
      <Input list="lostark-list" id="lostark-choice" name="lostark-choice" />
      <datalist id="lostark-list">
        {dataList.map((v) => (
          <option value={v.name} key={v.id} />
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
  /* max-width: 390px; */
`;

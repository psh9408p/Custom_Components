import React, { useState } from "react";
import styled from "styled-components";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("Tab1");
  return (
    <div>
      <h1>Tab</h1>
      <TabList>
        <TabMenu
          className={activeTab === "Tab1" ? "active" : ""}
          onClick={() => setActiveTab("Tab1")}
        >
          Tab1
        </TabMenu>
        <TabMenu
          className={activeTab === "Tab2" ? "active" : ""}
          onClick={() => setActiveTab("Tab2")}
        >
          Tab2
        </TabMenu>
        <TabMenu
          className={activeTab === "Tab3" ? "active" : ""}
          onClick={() => setActiveTab("Tab3")}
        >
          Tab3
        </TabMenu>
      </TabList>

      <div>
        {activeTab === "Tab1" && <div>Tab One 입니다 !!</div>}
        {activeTab === "Tab2" && <div>Tab Two 입니다 !!</div>}
        {activeTab === "Tab3" && <div>Tab Three 입니다 !!</div>}
      </div>
      <h2>Tab Component</h2>
    </div>
  );
}

const TabList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  width: 400px;
  background: gray;
  padding: 0;
`;

const TabMenu = styled.li`
  padding: 10px;
  color: white;
  cursor: pointer;
  font-size: 22px;
  width: 100%;
  align-items: flex-start;
  transition: 0.5s;
  &.active {
    background: dodgerblue;
    transition: 0.5s;
  }
  &:hover {
    background: dodgerblue;
  }
`;

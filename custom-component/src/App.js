import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import styled from "styled-components";
import AutoComplete from "./components/AutoComplete";
function App() {
  return (
    <AppWrap className="App">
      <ComponentWrap>
        <Toggle />
      </ComponentWrap>
      <ComponentWrap>
        <Modal />
      </ComponentWrap>
      <ComponentWrap>
        <Tab />
      </ComponentWrap>
      <ComponentWrap>
        <AutoComplete />
      </ComponentWrap>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ComponentWrap = styled.div`
  margin: 30px;
  border: 1px solid black;
`;

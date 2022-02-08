import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Tag from "./components/Tag";
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
      <ComponentWrap>
        <Tag />
      </ComponentWrap>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 50px 20px; */
  }
`;

const ComponentWrap = styled.div`
  margin: 30px;
  border: 1px solid gray;
  border-radius: 12px;
  padding: 20px;
`;

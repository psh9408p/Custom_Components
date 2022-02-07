import Toggle from "./components/Toggle";
import Modal from "./components/Modal";
import styled from "styled-components";
function App() {
  return (
    <AppWrap className="App">
      <ComponentWrap>
        <Toggle />
      </ComponentWrap>
      <ComponentWrap>
        <Modal />
      </ComponentWrap>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  display: flex;
`;

const ComponentWrap = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

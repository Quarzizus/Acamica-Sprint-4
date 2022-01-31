import styled from "styled-components";

const ConfirmationModalComponent = styled.section`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DeleteCard = styled.div`
  background-color: red;
  width: 350px;
  height: 350px;
  & header {
    display: flex;
    background-color: #150714;
    justify-content: end;
    height: 10%;
    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 24px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  & section {
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #250c23;
    color: white;
    padding: 0 20px;
    h2 {
      font-family: "Fira Code", monospace;
      text-align: center;
    }
  }
  & footer {
    height: 15%;
    button {
      width: 50%;
      height: 100%;
      border: none;
      background-color: #60265b;
      font-family: "Press Start 2P", cursive;
      color: black;
      cursor: pointer;
    }
    button.ButtonDelete {
      background-color: #f50d5a;
    }
  }
`;

export { ConfirmationModalComponent, DeleteCard };

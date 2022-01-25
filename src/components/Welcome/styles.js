import styled from "styled-components";

const WelcomeComponent = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  color: white;
  width: 70%;
  h2 {
    font-family: "Press Start 2P", cursive;
    line-height: 50px;
    font-size: 1.5em;
    span {
      color: #f50d5a;
    }
  }
  p {
    font-family: "Fira Code", monospace;
    line-height: 30px;
    font-size: 1.2rem;
  }
  button {
    background-color: #00da76;
    font-family: "Press Start 2P", cursive;
    border: none;
    color: white;
    font-size: 1em;
    height: 67px;
    cursor: pointer;
  }

  section {
    background-color: red;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 58px;
  }
`;

export { WelcomeComponent };

import styled, { css } from "styled-components";

const WelcomeComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 30px;
  color: white;
  width: 75%;
  height: 350px;
  h2 {
    font-family: "Press Start 2P", cursive;
    line-height: 50px;
    font-size: 1.5em;
    span {
      ${({ color }) => css`
        color: ${color};
      `}
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 58px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1/2;
    h2 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.5em;
    }
  }
`;

export { WelcomeComponent };

import styled from "styled-components";

const HeroComponent = styled.section`
  grid-column: 2/3;
  font-size: 30px;
  width: 80%;
  min-height: 250px;
  max-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-family: "Press Start 2P", cursive;
    color: white;
    line-height: 50px;
    font-size: 1.5em;
  }
  p {
    font-family: "Fira Code", monospace;
    color: white;
    line-height: 30px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 670px) {
    grid-column: 1/2;
    h1 {
      font-size: 0.8em;
    }
    p {
      font-size: 0.5em;
    }
  }
`;

const ButtonSignInGoogle = styled.button`
  background-color: yellow;
  border: none;
  display: flex;
  height: 58px;
  cursor: pointer;
  picture {
    background-color: white;
    height: 100%;
    width: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  div {
    background-color: #4285f4;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
  }
`;

export { HeroComponent, ButtonSignInGoogle };

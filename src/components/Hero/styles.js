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
  @media screen and (max-width: 720px) {
    grid-column: 1/2;
    h1 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.6em;
    }
  }
`;

export { HeroComponent };

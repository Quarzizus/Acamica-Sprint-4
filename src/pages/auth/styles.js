import styled from "styled-components";

const AuthPage = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #2e132c;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 822px) {
    grid-template-columns: 1fr;
  }
`;

const LogoComponent = styled.picture`
  grid-column: 1/2;
  width: 80%;
  display: flex;
  justify-content: center;
  min-width: 350px;
  img {
    width: 90%;
  }
`;

export { AuthPage, LogoComponent };

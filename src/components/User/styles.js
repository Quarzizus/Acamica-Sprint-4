import styled, { css } from "styled-components";

const UserComponent = styled.section`
  height: 280px;
  width: 100%;
  background-color: #150714;
  .User_container {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    picture {
      ${({ color }) => css`
        background-color: ${color};
      `}
      height: 135px;
      width: 135px;
      border-radius: 50%;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 7px;
      img {
        height: 125px;
        width: 125px;
        border-radius: 50%;
      }
    }
  }
`;

const FooterUser = styled.footer`
  width: 100%;
  height: 20%;
  button {
    width: 50%;
    height: 100%;
    border: none;
    font-family: "Press Start 2P", cursive;
  }
  /* & button:nth-child(1) {
    background-color: #60265b;
  }
  & button:nth-child(2) {
    color: #60265b;
    background-color: transparent;
  } */
  button.Active {
    background-color: #60265b;
  }
  button.NoActive {
    background-color: transparent;
    color: #60265b;
  }
`;

export { UserComponent, FooterUser };

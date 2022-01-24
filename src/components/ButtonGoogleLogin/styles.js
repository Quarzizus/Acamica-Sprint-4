import styled from "styled-components";

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

export { ButtonSignInGoogle };

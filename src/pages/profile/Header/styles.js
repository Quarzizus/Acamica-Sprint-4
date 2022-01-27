import styled from "styled-components";

const HeaderProfileComponent = styled.header`
  height: 65px;
  width: 100%;
  background-color: #250c23;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .HeaderProfile_container {
    display: flex;
    align-items: center;
    img {
      cursor: pointer;
    }
    p {
      font-family: "Press Start 2P", cursive;
      font-size: 0.9rem;
      margin-left: 25px;
      color: white;
      font-weight: bold;
      letter-spacing: 3px;
    }
  }
`;

const ButtonLogout = styled.button`
  background-color: #f50d5a;
  border: none;
  font-family: "Press Start 2P", cursive;
  height: 65%;
  width: 135px;
  letter-spacing: 4px;
  font-weight: bold;
  cursor: pointer;
`;

export { HeaderProfileComponent, ButtonLogout };

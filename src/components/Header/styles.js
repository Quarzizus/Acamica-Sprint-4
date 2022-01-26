import styled from "styled-components";

const HeaderComponent = styled.header`
  background-color: #250c23;
  height: 65px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  .Perfil {
    justify-self: start;
    grid-column: 1/2;
    margin-left: 15px;
    border-radius: 50%;
    background-color: orange;
    display: flex;
    align-items: center;
    padding: 2px;

    img {
      border-radius: 50%;
      width: 45px;
    }
  }
  .LogoSmall {
    justify-self: center;
    margin-top: -4px;
    grid-column: 2/3;
  }
  .Title {
    justify-self: end;
    grid-column: 3/4;
    margin-right: 15px;
  }
`;

export { HeaderComponent };

import styled, { css } from "styled-components";

const UserNameComponent = styled.article`
  ${({ color }) => css`
    background-color: ${color};
  `}
  display: grid;
  padding-right: 7px;
  height: 25px;
  .UserNameText {
    font-size: 0.8rem;
    margin-left: 10px;
    height: 16px;
    display: flex;
    align-items: center;
    font-family: "Press Start 2P", cursive;
    color: #2e132c;
    text-transform: uppercase;
    margin-top: 5px;
  }
  div {
    background-color: #2e132c;
    width: 4px;
    height: 4px;
    align-self: end;
  }
  &.User {
    height: 35px;

    .UserNameText {
      font-size: 1rem;
      margin-top: 10px;
    }
  }
`;

export { UserNameComponent };

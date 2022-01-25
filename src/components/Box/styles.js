import styled from "styled-components";

const BoxComponent = styled.article`
  width: 58px;
  height: 100%;
  background-color: blue;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid white;
  }
`;

export { BoxComponent };

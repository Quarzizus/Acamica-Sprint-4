import styled, { css } from "styled-components";

const BoxComponent = styled.article`
  ${(props) => {
    return css`
      background-color: ${props.bagColor};
    `;
  }}
  width: 58px;
  height: 100%;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid white;
  }
`;

export { BoxComponent };

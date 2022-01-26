import styled, { css } from "styled-components";

const BoxComponent = styled.article`
  ${(props) => {
    return css`
      background-color: ${props.bagColor};
    `;
  }}
  ${({ select }) =>
    select == true
      ? css`
          border: 3px solid white;
        `
      : css`
          border: 3px solid transparent;
        `}


  width: 58px;
  height: 100%;

  &:hover {
    border: 3px solid white;
  }
`;

export { BoxComponent };

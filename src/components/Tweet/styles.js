import styled, { css } from "styled-components";

const TweetComponent = styled.article`
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: 40px 1fr 50px;
  gap: 15px;
  border-bottom: 1px solid #f50d5a;
  padding: 0 15px;
  picture {
    grid-row: 1/-1;
    grid-column: 1/2;
    border-radius: 50%;
    width: 55px;
    img {
      border-radius: 50%;
      width: 60px;
    }
  }
`;

const HeaderTweet = styled.header`
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Container_header {
    display: flex;
    .Header_date {
      margin-left: 10px;
      font-family: "Fira Code", monospace;
      color: white;
      font-size: 1rem;
    }
  }
  img {
    cursor: pointer;
  }
`;

const TweetContent = styled.p`
  font-family: "Fira Code", monospace;
  color: white;
  width: 90%;
`;

const TweetFooter = styled.footer`
  display: flex;
  align-items: center;
  img {
    width: 25px;
  }
  p {
    margin-left: 10px;
    font-family: "Fira Code", monospace;
    ${({ isFavorite }) =>
      isFavorite
        ? css`
            color: #f50d5a;
          `
        : css`
            color: white;
          `}
  }
`;

export { TweetComponent, HeaderTweet, TweetContent, TweetFooter };

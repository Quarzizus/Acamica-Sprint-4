import styled from "styled-components";

const TweetAreaComponent = styled.section`
  background-color: #150714;
  height: 220px;
  padding: 15px;
  display: grid;
  grid-template-columns: 55px 1fr;
  grid-template-rows: 1fr 20px 35px;
  gap: 10px;

  picture {
    grid-column: 1/2;
    grid-row: 1/-1;
    border-radius: 50%;

    img {
      width: 60px;
      border-radius: 50%;
    }
  }
  .Container_tweet-area {
    background-color: #2f112d;
    textarea {
      background-color: transparent;
      width: 100%;
      resize: none;
      height: 100%;
      padding: 20px;
      font-family: "Fira Code", monospace;
      font-size: 1rem;
      color: white;
      border: none;
      margin-bottom: -4px;
    }
    div {
      height: 2px;
      width: 0;

      background-color: red;
    }
  }
  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    color: #914d8b;
  }
`;

const TweekInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Fira Code", monospace;
  .Tweet_characteres {
    color: white;
  }
  .Tweet_maxlength {
    color: #f50d5a;
  }
`;

const ButtonPost = styled.button`
  background-color: #00da76;
  color: black;
  border: none;
  font-family: "Press Start 2P", cursive;
  justify-self: end;
  width: 100px;
  cursor: pointer;
`;

export { TweetAreaComponent, TweekInfo, ButtonPost };

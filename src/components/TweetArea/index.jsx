import { TweetAreaComponent, TweekInfo, ButtonPost } from "./styles";
import Perfil from "../../images/perfil.png";
import { useState } from "react";

const TweetArea = () => {
  const [tweetContent, setTweetContent] = useState("");

  return (
    <TweetAreaComponent tweetContentLength={tweetContent.length}>
      <picture>
        <img src={Perfil} alt="" />
      </picture>
      <div className="Container_tweet-area">
        <textarea
          placeholder="Whats happening"
          maxLength={200}
          onChange={(e) => {
            setTweetContent(e.target.value);
          }}
        ></textarea>
        <div
          style={{
            width: `${tweetContent.length / 2}%`,
          }}
        ></div>
      </div>
      <TweekInfo>
        <p className="Tweet_characteres">{tweetContent.length}</p>
        <p className="Tweet_maxlength">200 max.</p>
      </TweekInfo>
      <ButtonPost>POST</ButtonPost>
    </TweetAreaComponent>
  );
};

export { TweetArea };

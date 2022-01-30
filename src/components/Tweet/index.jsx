import {
  HeaderTweet,
  TweetComponent,
  TweetContent,
  TweetFooter,
} from "./styles";
import Perfil from "../../images/perfil.png";
import Delete from "../../images/delete.svg";
import { UserName } from "../UserName";
import Favorite from "../../images/favorite.svg";
import FavoriteSet from "../../images/favorite-set.svg";
import { useState } from "react";

const Tweet = ({
  content,
  date,
  followers,
  id,
  likes,
  parentPhoto,
  color,
  username,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const isFavoriteIcon = isFavorite ? FavoriteSet : Favorite;

  return (
    <TweetComponent>
      <picture>
        <img src={parentPhoto ? parentPhoto : Perfil} alt="" />
      </picture>
      <HeaderTweet>
        <div className="Container_header">
          <UserName color={color} username={username} />
          <p className="Header_date"> - {date}.</p>
        </div>
        <img src={Delete} alt="" />
      </HeaderTweet>
      <TweetContent>{content}</TweetContent>
      <TweetFooter isFavorite={isFavorite}>
        <img
          src={isFavoriteIcon}
          alt=""
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        />
        <p>{likes}</p>
      </TweetFooter>
    </TweetComponent>
  );
};

export { Tweet };

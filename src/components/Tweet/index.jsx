import {
  HeaderTweet,
  TweetComponent,
  TweetContent,
  TweetFooter,
} from "./styles";
import Favorite from "../../images/favorite.svg";
import FavoriteSet from "../../images/favorite-set.svg";
import Perfil from "../../images/perfil.png";
import Delete from "../../images/delete.svg";
import { UserName } from "../UserName";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Tweet = ({
  content,
  date,
  followers,
  likes,
  parentPhoto,
  parentId,
  color,
  username,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    state: {
      userData: { uid },
    },
  } = useContext(AppContext);
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
        {console.log(uid, parentId)}
        {uid === parentId && <img src={Delete} alt="" />}
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

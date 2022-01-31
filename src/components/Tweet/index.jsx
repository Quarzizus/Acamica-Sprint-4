import {
  HeaderTweet,
  TweetComponent,
  TweetContent,
  TweetFooter,
  DeleteButton,
  LikeButton,
} from "./styles";
import Favorite from "../../images/favorite.svg";
import FavoriteSet from "../../images/favorite-set.svg";
import Perfil from "../../images/perfil.png";
import Delete from "../../images/delete.svg";
import { UserName } from "../UserName";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { handleToogleLike } from "../../controllers/handleToogleLike";

const Tweet = ({
  content,
  date,
  followers,
  parentPhoto,
  parentId,
  color,
  username,
  id,
}) => {
  const {
    state: {
      userData: { uid },
    },
    dispatch,
  } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(() => {
    return followers.some((follower) => follower === uid);
  });
  const isFavoriteIcon = isFavorite ? FavoriteSet : Favorite;

  const handleOpenModal = (tweetId) => {
    dispatch({ type: "SET_TWEET_FOR_DELETE", payload: tweetId });
    dispatch({ type: "SET_OPEN", payload: true });
  };

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
        {uid === parentId && (
          <DeleteButton onClick={() => handleOpenModal(id)}>
            <img src={Delete} alt="" />
          </DeleteButton>
        )}
      </HeaderTweet>
      <TweetContent>{content}</TweetContent>
      <TweetFooter isFavorite={isFavorite}>
        <LikeButton
          onClick={() => {
            handleToogleLike(id, uid, followers);
            setIsFavorite(!isFavorite);
          }}
        >
          <img src={isFavoriteIcon} alt="" />
        </LikeButton>
        <p>{followers.length}</p>
      </TweetFooter>
    </TweetComponent>
  );
};

export { Tweet };

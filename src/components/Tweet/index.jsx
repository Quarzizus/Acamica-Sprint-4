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
import { doc, getFirestore, updateDoc } from "firebase/firestore";

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
  } = useContext(AppContext);
  const db = getFirestore();
  const [isFavorite, setIsFavorite] = useState(() => {
    return followers.some((follower) => follower === uid);
  });
  const isFavoriteIcon = isFavorite ? FavoriteSet : Favorite;

  const handleToogleLike = async () => {
    const reference = doc(db, "tweets", id);
    const isMyFavorite = followers.some((follower) => follower === uid);
    if (isMyFavorite) {
      const [uid, ...rest] = followers;
      await updateDoc(reference, {
        followers: [...rest],
      });
    } else {
      await updateDoc(reference, {
        followers: [...followers, uid],
      });
    }
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
          <DeleteButton>
            <img src={Delete} alt="" />
          </DeleteButton>
        )}
      </HeaderTweet>
      <TweetContent>{content}</TweetContent>
      <TweetFooter isFavorite={isFavorite}>
        <LikeButton
          onClick={() => {
            handleToogleLike();
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

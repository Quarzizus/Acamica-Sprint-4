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

const Tweet = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const isFavoriteIcon = isFavorite ? FavoriteSet : Favorite;

  return (
    <TweetComponent>
      <picture>
        <img src={Perfil} alt="" />
      </picture>
      <HeaderTweet>
        <div className="Container_header">
          <UserName />
          <p className="Header_date"> - 17 jun.</p>
        </div>
        <img src={Delete} alt="" />
      </HeaderTweet>
      <TweetContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea,
        iusto velit repudiandae explicabo inventore quibusdam voluptatum in
        itaque iste laboriosam repellat molestias consequatur debitis, ex
        voluptatibus, nulla deserunt iure?
      </TweetContent>
      <TweetFooter isFavorite={isFavorite}>
        <img
          src={isFavoriteIcon}
          alt=""
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        />
        <p>100</p>
      </TweetFooter>
    </TweetComponent>
  );
};

export { Tweet };

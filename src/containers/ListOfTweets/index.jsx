import { useContext, useEffect } from "react";
import { Tweet } from "../../components/Tweet";
import { AppContext } from "../../context/AppContext";
import { ListOfPhotoTweetsContainer } from "./styles";

const ListOfPhotoTweets = () => {
  const {
    state: {
      tweets,
      loading,
      userData: { uid },
    },
    getTweetsWithSuscription,
    getUserData,
  } = useContext(AppContext);

  useEffect(() => {
    getTweetsWithSuscription();
    getUserData(uid);
  }, [uid]);

  return (
    <ListOfPhotoTweetsContainer>
      {loading && <h2>Loading...</h2>}
      {!tweets.length && !loading && <h1>No hay</h1>}
      {tweets.length &&
        !loading &&
        tweets.map((tweet) => {
          return <Tweet key={tweet.id} {...tweet} />;
        })}
    </ListOfPhotoTweetsContainer>
  );
};

export { ListOfPhotoTweets };

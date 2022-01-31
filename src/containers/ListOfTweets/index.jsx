import { useContext, useEffect } from "react";
import { IsEmpty } from "../../components/IsEmpty";
import { IsLoading } from "../../components/IsLoading";
import { Tweet } from "../../components/Tweet";
import { AppContext } from "../../context/AppContext";
import { ListOfPhotoTweetsContainer } from "./styles";

const ListOfPhotoTweets = ({ tweets }) => {
  const {
    state: {
      loading,
      userData: { uid },
    },
    getTweetsWithSuscription,
  } = useContext(AppContext);

  useEffect(() => {
    getTweetsWithSuscription();
  }, []);

  return (
    <ListOfPhotoTweetsContainer>
      {loading && <IsLoading message="Loading" />}
      {!tweets.length && !loading && <IsEmpty message="Empty" />}
      {tweets.length > 0 &&
        !loading &&
        tweets.map((tweet) => {
          return <Tweet key={tweet.id} {...tweet} />;
        })}
    </ListOfPhotoTweetsContainer>
  );
};

export { ListOfPhotoTweets };

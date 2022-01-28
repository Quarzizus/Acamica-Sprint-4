import { useContext } from "react";
import { Header } from "../../components/Header";
import { TweetArea } from "../../components/TweetArea";
import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { AppContext } from "../../context/AppContext";
import { HomePage } from "./styles";

const Home = () => {
  const {
    state: {
      userData: { username, photo },
    },
  } = useContext(AppContext);

  return (
    <HomePage>
      <Header photo={photo} username={username} />
      <TweetArea photo={photo} />
      <ListOfPhotoTweets />
    </HomePage>
  );
};

export { Home };

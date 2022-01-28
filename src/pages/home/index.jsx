import { useContext } from "react";
import { Header } from "../../components/Header";
import { TweetArea } from "../../components/TweetArea";
import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { AppContext } from "../../context/AppContext";
import { HomePage } from "./styles";

const Home = () => {
  const {
    state: {
      userData: { email, name, color, uid },
    },
  } = useContext(AppContext);

  return (
    <HomePage>
      <Header />
      <TweetArea />
      <ListOfPhotoTweets />
    </HomePage>
  );
};

export { Home };

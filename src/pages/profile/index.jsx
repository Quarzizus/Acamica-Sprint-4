import { useContext } from "react";
import { User } from "../../components/User";
import { ListOfPhotoTweets } from "../../containers/ListOfTweets";
import { AppContext } from "../../context/AppContext";
import { HomePage } from "../home/styles";
import { HeaderProfile } from "./Header";

const Profile = () => {
  const {
    state: {
      userData: { photo, color, username },
    },
  } = useContext(AppContext);
  return (
    <HomePage>
      <HeaderProfile username={username} />
      <User photo={photo} color={color} username={username} />
      <ListOfPhotoTweets />
    </HomePage>
  );
};

export { Profile };
